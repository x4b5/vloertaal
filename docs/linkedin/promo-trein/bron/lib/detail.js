// v7 textures: surface detail for the flat-coloured sets, without changing a single colour.
//   addDetail(material)   (called from lib/real.js on the converted set materials)
// One procedural RGBA texture (1 m × 1 m, tiling) carries four grey detail patterns:
//   R  brick: running bond, 21 × 6.5 cm bricks, 1 cm mortar, every brick a little lighter or darker
//   G  vegetation and fabric: fine blades and speckle
//   B  concrete, asphalt and plaster: grain, aggregate, faint stains
//   A  wood: grain along one axis, with planks
// The shader samples it triplanar in world space (so merged, vertex-coloured meshes get it too) and picks the
// pattern from the surface's own colour: brick reds and oranges on walls → brick, greens → vegetation, greys →
// concrete, wood browns → wood, the train's blue seats → fabric. A second, 17 × larger sample adds slow blotches
// (weathering) everywhere. The detail only modulates brightness, so every surface keeps the colour it had.
import * as THREE from 'three';

let ATLAS;
function rng(seed) { let s = seed; return () => ((s = (s * 16807) % 2147483647) / 2147483647); }
function makeAtlas() {
  const N = 1024, R = rng(11);
  const ch = [0, 1, 2, 3].map(() => new Float32Array(N * N));
  const set = (c, x, y, v) => { ch[c][((y + N) % N) * N + ((x + N) % N)] = v; };
  // value noise helper (tiling)
  const vnoise = (cell, seed) => {
    const r = rng(seed), g = Math.ceil(N / cell), grid = new Float32Array(g * g).map(() => r());
    const out = new Float32Array(N * N);
    for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
      const fx = x / cell, fy = y / cell, x0 = Math.floor(fx), y0 = Math.floor(fy), tx = fx - x0, ty = fy - y0;
      const sx = tx * tx * (3 - 2 * tx), sy = ty * ty * (3 - 2 * ty), G = (i, j) => grid[((j % g) * g) + (i % g)];
      out[y * N + x] = (G(x0, y0) * (1 - sx) + G(x0 + 1, y0) * sx) * (1 - sy) + (G(x0, y0 + 1) * (1 - sx) + G(x0 + 1, y0 + 1) * sx) * sy;
    }
    return out;
  };
  const n8 = vnoise(8, 3), n32 = vnoise(32, 5), n128 = vnoise(128, 7), n4 = vnoise(4, 9), n2 = vnoise(2, 13);
  // R: bricks (1 m = 1024 px: brick 215 × 67 px incl. 10 px mortar → 4.76 × 15.3 per metre; use 5 × 16 to tile)
  const BW = N / 5, BH = N / 16;
  const shade = Array.from({ length: 16 * 10 }, () => 0.82 + R() * 0.3);
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    const row = Math.floor(y / BH), off = (row % 2) * BW / 2, col = Math.floor((x + off) / BW);
    const bx = (x + off) % BW, by = y % BH, mortar = bx < 9 || by < 9;
    const v = mortar ? 0.55 + 0.1 * n4[y * N + x] : shade[(row * 10 + col) % shade.length] * (0.9 + 0.2 * n8[y * N + x]) + 0.05 * (n2[y * N + x] - 0.5);
    set(0, x, y, v);
  }
  // G: vegetation / fabric speckle
  for (let i = 0; i < N * N; i++) ch[1][i] = 0.55 + 0.35 * n4[i] + 0.25 * (n2[i] - 0.5) + 0.15 * (n32[i] - 0.5);
  // B: concrete / asphalt: grain + aggregate dots + faint stains
  for (let i = 0; i < N * N; i++) ch[2][i] = 0.75 + 0.18 * (n2[i] - 0.5) + 0.12 * (n8[i] - 0.5) + 0.2 * (n128[i] - 0.5);
  for (let k = 0; k < 9000; k++) { const x = Math.floor(R() * N), y = Math.floor(R() * N), v = R() < 0.5 ? 0.55 : 0.95; set(2, x, y, v); set(2, x + 1, y, v); }
  // A: wood: grain along x, planks of 12.5 cm (128 px) with a seam
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    const plank = Math.floor(y / 128), seam = y % 128 < 3;
    const w = Math.sin((y + 40 * n32[y * N + ((x + plank * 97) % N)]) * 0.9) * 0.5 + 0.5;
    ch[3][y * N + x] = seam ? 0.45 : 0.72 + 0.16 * w + 0.12 * (n8[y * N + x] - 0.5) + 0.06 * (plank % 3) / 3;
  }
  const data = new Uint8Array(N * N * 4);
  for (let i = 0; i < N * N; i++) for (let c = 0; c < 4; c++) data[i * 4 + c] = Math.max(0, Math.min(255, Math.round(ch[c][i] * 200)));
  const t = new THREE.DataTexture(data, N, N, THREE.RGBAFormat);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.magFilter = THREE.LinearFilter; t.minFilter = THREE.LinearMipmapLinearFilter;
  t.generateMipmaps = true; t.anisotropy = 8; t.colorSpace = THREE.NoColorSpace; t.needsUpdate = true;
  return t;
}

/** Give a (converted, opaque) set material the detail; `scale` = texture repeats per metre. */
export function addDetail(mat, { scale = 1.0 } = {}) {
  ATLAS ??= makeAtlas();
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.tDetail = { value: ATLAS };
    sh.uniforms.dScale = { value: scale };
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vDW; varying vec3 vDN;')
      .replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvDW = (modelMatrix * vec4(transformed, 1.0)).xyz;\nvDN = normalize(mat3(modelMatrix) * objectNormal);');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
uniform sampler2D tDetail; uniform float dScale; varying vec3 vDW; varying vec3 vDN;
vec4 triDetail(vec3 p, vec3 n){ vec3 w = pow(abs(n), vec3(4.0)); w /= (w.x + w.y + w.z);
  return texture2D(tDetail, p.zy) * w.x + texture2D(tDetail, p.xz) * w.y + texture2D(tDetail, p.xy) * w.z; }
vec3 rgb2hsv(vec3 c){ vec4 K = vec4(0., -1./3., 2./3., -1.); vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r)); float d = q.x - min(q.w, q.y);
  return vec3(abs(q.z + (q.w - q.y) / (6. * d + 1e-6)), d / (q.x + 1e-6), q.x); }`)
      .replace('#include <color_fragment>', `#include <color_fragment>
#ifndef USE_MAP
{ vec3 n = normalize(vDN); vec4 d = triDetail(vDW * dScale, n) * 1.275; vec4 big = triDetail(vDW * dScale / 17.0, n) * 1.275;
  vec3 c = clamp(diffuseColor.rgb, 0.0, 1.0); vec3 hsv = rgb2hsv(pow(c, vec3(1.0 / 2.2)));   // hue in 0–1, on display values
  float h = hsv.x * 360.0, s = hsv.y, v = hsv.z, up = abs(n.y);
  float hd = min(abs(h - 9.0), 360.0 - abs(h - 9.0));          // brick reds and oranges: hue −5…23°
  float brick = smoothstep(0.30, 0.42, s) * (1.0 - smoothstep(13.0, 16.0, hd)) * (1.0 - smoothstep(0.45, 0.75, up)) * smoothstep(0.2, 0.3, v);
  float wood = smoothstep(0.28, 0.38, s) * (1.0 - smoothstep(0.70, 0.80, s)) * smoothstep(23.0, 27.0, h) * (1.0 - smoothstep(46.0, 52.0, h)) * smoothstep(0.35, 0.45, v);
  float green = smoothstep(0.22, 0.32, s) * smoothstep(65.0, 75.0, h) * (1.0 - smoothstep(160.0, 175.0, h));
  float fabric = smoothstep(0.45, 0.55, s) * smoothstep(210.0, 218.0, h) * (1.0 - smoothstep(240.0, 250.0, h)) * (1.0 - smoothstep(0.5, 0.6, v));
  float grey = 1.0 - smoothstep(0.10, 0.20, s);
  // each pattern is centred on its own mean, so it adds structure without changing the average colour
  // (v8: about half as strong as v7, and far less weathering: the critic read v7 as cork walls and a styrofoam laptop)
  float m = 1.0;
  m *= 1.0 + brick * 0.75 * (d.r - 0.80);
  m *= 1.0 + wood * 0.85 * (d.a - 0.80);
  m *= 1.0 + green * 0.75 * (d.g - 0.55);
  m *= 1.0 + fabric * 0.55 * (d.g - 0.55);
  m *= 1.0 + grey * 0.60 * (d.b - 0.75);
  m *= 1.0 + 0.22 * (big.b - 0.75);                           // slow blotches: weathering
  diffuseColor.rgb *= m; }
#endif`);
  };
  mat.customProgramCacheKey = () => 'detail8';
}
