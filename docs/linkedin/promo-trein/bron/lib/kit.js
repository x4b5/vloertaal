// Vloertaal promo 3D — shared kit: palette, easing, keyframe tracks, flat materials,
// SVG cut-out cards (the app's own figures), and a deterministic renderer with
// sub-frame accumulation (motion blur + temporal AA). Every shot imports this.
import * as THREE from 'three';
import { makeAO } from './ao.js';

const QS = new URLSearchParams(location.search);
export const W = 1080, H = Number(QS.get('h') ?? 1350);
/** v5 quality: ?dpr=1.5 renders at 1.5× (downscaled after, for clean edges); ?q=hi = soft shadows (the film's grade is applied in v5/assemble5.py; ?grade=1 previews it here). */
export const DPR = Number(QS.get('dpr') ?? 1), HIQ = QS.get('q') === 'hi';
if (H !== 1350) { const st = document.createElement('style'); st.textContent = `#stage, #gl { height: ${H}px !important; }`; document.head.appendChild(st); const c = document.getElementById('gl'); if (c) c.height = H; }

// src/pictures/kit.tsx PAL + house colours
export const PAL = {
  ink: '#2f2a28', white: '#ffffff', paper: '#f4f7f9', paperShade: '#dfe6ec', mist: '#cfd8de', line: '#9aa5ab', steel: '#8a96a0',
  slate: '#3c4a56', slateDark: '#26313a', yellow: '#ffc414', yellowShade: '#e0a800', yellowLight: '#ffd94d', yellowShine: '#fff3b0',
  orange: '#ff7a00', orangeShade: '#d96500', green: '#3fa34d', greenShade: '#2f7d3a', leaf: '#7ac70c', leafShade: '#58a700',
  ok: '#137a55', purple: '#8e44c9', clay: '#e0703f', clayShade: '#c0552a', card: '#e0a86b', cardShade: '#c98a4b', cardDark: '#a86d3a',
  wood: '#b47a45', brown: '#6b3f22', floor: '#e7e3dc', kraft: '#ebd6b5', label: '#fffdf8', inkUI: '#1e2226', water: '#7cc6e8',
};
export const MEADOW = ['#a9cf6e', '#98c460', '#b6d77f', '#8dbb57', '#a2ca68', '#bcdc8a'];

// ---------- maths ----------
export const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
export const seg = (t, a, b) => clamp((t - a) / (b - a));
export const lerp = (a, b, x) => a + (b - a) * x;
export const smooth = (x) => x * x * (3 - 2 * x);
export const inOut = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
export const inOutSine = (x) => -(Math.cos(Math.PI * x) - 1) / 2;
export function rng(seed = 7) { let s = seed; return () => ((s = (s * 16807) % 2147483647) / 2147483647); }

/**
 * Keyframe track: keys [[t, [a, b, c…]], …] → C1 cubic Hermite (non-uniform Catmull-Rom tangents,
 * zero tangents at both ends, or `tan0`/`tan1` given) — cinematic in/out, no kinks at keys.
 */
export function track(keys, { tan0, tan1 } = {}) {
  const n = keys.length, dim = keys[0][1].length;
  const T = keys.map((k) => k[0]), V = keys.map((k) => k[1]);
  const M = V.map((v, i) => {
    if (i === 0) return tan0 ?? v.map(() => 0);
    if (i === n - 1) return tan1 ?? v.map(() => 0);
    return v.map((_, d) => (V[i + 1][d] - V[i - 1][d]) / (T[i + 1] - T[i - 1]));
  });
  return (t) => {
    if (t <= T[0]) return V[0].slice();
    if (t >= T[n - 1]) return V[n - 1].slice();
    let i = 0; while (t > T[i + 1]) i++;
    const h = T[i + 1] - T[i], s = (t - T[i]) / h, s2 = s * s, s3 = s2 * s;
    const h00 = 2 * s3 - 3 * s2 + 1, h10 = s3 - 2 * s2 + s, h01 = -2 * s3 + 3 * s2, h11 = s3 - s2;
    return Array.from({ length: dim }, (_, d) => h00 * V[i][d] + h10 * h * M[i][d] + h01 * V[i + 1][d] + h11 * h * M[i + 1][d]);
  };
}

// ---------- flat house-style materials (cached by colour) ----------
const matCache = new Map();
export function flat(color, opts = {}) {
  const key = color + JSON.stringify(opts);
  if (!matCache.has(key)) matCache.set(key, new THREE.MeshLambertMaterial({ color, flatShading: true, ...opts }));
  return matCache.get(key);
}
export const vcMat = (opts = {}) => new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true, ...opts });

/** Merge-friendly helper: a coloured, transformed copy of a geometry (non-indexed, vertex colours). */
export function painted(geo, color, matrix) {
  const g = geo.index ? geo.toNonIndexed() : geo.clone();
  if (matrix) g.applyMatrix4(matrix);
  const c = new THREE.Color(color), n = g.attributes.position.count, a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { a[i * 3] = c.r; a[i * 3 + 1] = c.g; a[i * 3 + 2] = c.b; }
  g.setAttribute('color', new THREE.BufferAttribute(a, 3));
  for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'color'].includes(k)) g.deleteAttribute(k);
  return g;
}
export const M4 = (x = 0, y = 0, z = 0, ry = 0, sx = 1, sy = 1, sz = 1, rx = 0, rz = 0) =>
  new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz, 'YXZ')), new THREE.Vector3(sx, sy, sz));

// ---------- the app's figures as cut-out cards ----------
const CHAR_CSS = `<style>.ch-j,.ch-arm,.ch-fore,.ch-hand,.ch-fig,.ch-head,.ch-pulse,.ch-look{transform-box:view-box}.ch-eyes{transform-box:fill-box;transform-origin:center}*{animation:none!important;transition:none!important}</style>`;
export async function loadText(url) { const r = await fetch(url); return r.text(); }
/** Parse an extracted figure (chars/<who>-<mood>.svg.html) into a live, editable <svg> element. */
export function parseFigure(html) {
  const doc = new DOMParser().parseFromString(html.replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" '), 'image/svg+xml');
  const s = document.importNode(doc.documentElement, true);
  s.insertAdjacentHTML('afterbegin', CHAR_CSS);
  return s;
}
/** The prop slot in a held hand (Characters.tsx Arm). */
export const propSlots = (s) => [...s.querySelectorAll('g[transform="translate(5.5 0) scale(.86)"]')];

/** Rasterise an svg element's viewBox sub-rect [x,y,w,h] at `ppu` px per unit; optional white paper edge. */
export async function rasterSVG(svgEl, rect, ppu, { edge = 0, edgeColor = '#fffdf8' } = {}) {
  const [x, y, w, h] = rect;
  const pad = Math.ceil(edge * ppu) + 2;
  const s = svgEl.cloneNode(true);
  s.setAttribute('viewBox', `${x} ${y} ${w} ${h}`);
  s.setAttribute('width', Math.round(w * ppu)); s.setAttribute('height', Math.round(h * ppu));
  s.removeAttribute('class');
  const url = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(new XMLSerializer().serializeToString(s));
  const img = new Image(); img.src = url; await img.decode();
  const cw = Math.round(w * ppu) + pad * 2, ch = Math.round(h * ppu) + pad * 2;
  const c = document.createElement('canvas'); c.width = cw; c.height = ch;
  const g = c.getContext('2d');
  if (edge > 0) {
    const sil = document.createElement('canvas'); sil.width = cw; sil.height = ch;
    const sg = sil.getContext('2d'); sg.drawImage(img, pad, pad); sg.globalCompositeOperation = 'source-in'; sg.fillStyle = edgeColor; sg.fillRect(0, 0, cw, ch);
    const r = edge * ppu;
    for (let a = 0; a < 24; a++) g.drawImage(sil, Math.cos((a / 24) * Math.PI * 2) * r, Math.sin((a / 24) * Math.PI * 2) * r);
    g.drawImage(sil, 0, 0);
  }
  g.drawImage(img, pad, pad);
  return { canvas: c, padUnits: pad / ppu, rect: [x - pad / ppu, y - pad / ppu, w + 2 * pad / ppu, h + 2 * pad / ppu] };
}
/** A blurred dark silhouette of a raster (for the cut-out's soft shadow on the set behind it). */
export function shadowOf(canvas, blurPx, alpha = 0.35) {
  const p = blurPx * 2;
  const c = document.createElement('canvas'); c.width = canvas.width + p * 2; c.height = canvas.height + p * 2;
  const g = c.getContext('2d'); g.filter = `blur(${blurPx}px)`; g.globalAlpha = alpha; g.drawImage(canvas, p, p);
  g.filter = 'none'; g.globalCompositeOperation = 'source-in'; g.globalAlpha = 1; g.fillStyle = '#1e2226'; g.fillRect(0, 0, c.width, c.height);
  return { canvas: c, pad: p };
}
export function canvasTex(canvas, renderer) {
  const t = new THREE.CanvasTexture(canvas);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = renderer.capabilities.getMaxAnisotropy();
  t.generateMipmaps = true; t.minFilter = THREE.LinearMipmapLinearFilter;
  return t;
}
/** A card mesh: raster canvas → plane, `unitsPerMeter` maps svg units to metres; origin at svg point (ox, oy). */
export function cardMesh(r, renderer, unitToM, { ox = 0, oy = 0, basic = true, alphaTest = 0.02, depthWrite = true } = {}) {
  const [x, y, w, h] = r.rect;
  const geo = new THREE.PlaneGeometry(w * unitToM, h * unitToM);
  geo.translate((x + w / 2 - ox) * unitToM, -(y + h / 2 - oy) * unitToM, 0);
  const mat = new THREE.MeshBasicMaterial({ map: canvasTex(r.canvas, renderer), transparent: true, alphaTest, depthWrite, toneMapped: false });
  return new THREE.Mesh(geo, mat);
}

export async function loadTex(url, renderer) {
  const t = await new THREE.TextureLoader().loadAsync(url);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = renderer.capabilities.getMaxAnisotropy();
  t.minFilter = THREE.LinearMipmapLinearFilter; t.generateMipmaps = true;
  return t;
}

// ---------- renderer with sub-frame accumulation ----------
export function makeRenderer(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, preserveDrawingBuffer: true, logarithmicDepthBuffer: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(DPR); renderer.setSize(W, H, false);
  renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.toneMapping = THREE.NoToneMapping;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = HIQ ? THREE.PCFSoftShadowMap : THREE.PCFShadowMap;
  const opt = { type: THREE.HalfFloatType, colorSpace: THREE.LinearSRGBColorSpace };
  const RW = Math.round(W * DPR), RH = Math.round(H * DPR);
  const rtScene = new THREE.WebGLRenderTarget(RW, RH, { ...opt, samples: 4 });
  const rtAcc = new THREE.WebGLRenderTarget(RW, RH, opt);
  const quadCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const quadGeo = new THREE.PlaneGeometry(2, 2);
  const accMat = new THREE.ShaderMaterial({
    uniforms: { tex: { value: null }, w: { value: 1 } }, transparent: true, depthTest: false, depthWrite: false,
    blending: THREE.CustomBlending, blendEquation: THREE.AddEquation, blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor,
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }',
    fragmentShader: 'uniform sampler2D tex; uniform float w; varying vec2 vUv; void main(){ gl_FragColor = texture2D(tex, vUv) * w; }',
  });
  // output pass: the glass crossing = one soft diagonal specular sweep (≤35 %), a short refraction
  // ripple with a little blur, and a slight dolly push (zoom); never a white flash.
  const outMat = new THREE.ShaderMaterial({
    uniforms: { tex: { value: rtAcc.texture }, sweep: { value: -9 }, sweepAmt: { value: 0 }, ripple: { value: 0 }, zoom: { value: 1 }, texel: { value: new THREE.Vector2(1 / RW, 1 / RH) }, grade: { value: QS.get("grade") === "1" ? 1 : 0 }, seed: { value: 0 }, mixTex: { value: null }, mixAmt: { value: 0 }, aoTex: { value: null }, aoAmt: { value: 0 } },
    depthTest: false, depthWrite: false,
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }',
    fragmentShader: `uniform sampler2D tex; uniform sampler2D mixTex; uniform sampler2D aoTex; uniform float sweep, sweepAmt, ripple, zoom, grade, seed, mixAmt, aoAmt; uniform vec2 texel; varying vec2 vUv;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233)) + seed) * 43758.5453); }
      void main(){
        vec2 uv = (vUv - 0.5) / zoom + 0.5;
        // refraction ripple: diagonal waves bending the image, plus a small blur
        float w = (uv.x * 0.8 + (1.0 - uv.y) * 0.6);
        uv += ripple * vec2(0.006, 0.0035) * sin(w * 38.0 - ripple * 6.0);
        vec4 c = texture2D(tex, uv);
        if (aoAmt > 0.0) c.rgb *= mix(1.0, texture2D(aoTex, uv).r, aoAmt);   // v7 contact shadow (lib/ao.js)
        if (ripple > 0.001) {
          vec2 o = texel * 3.0 * ripple;
          c = (c * 2.0 + texture2D(tex, uv + vec2(o.x, 0.)) + texture2D(tex, uv - vec2(o.x, 0.)) + texture2D(tex, uv + vec2(0., o.y)) + texture2D(tex, uv - vec2(0., o.y))) / 6.0;
        }
        float d = w - sweep;
        float e = exp(-pow(d / 0.11, 2.0)) + 0.5 * exp(-pow((d + 0.25) / 0.035, 2.0));
        c.rgb = mix(c.rgb, vec3(1.0, 0.99, 0.96), clamp(e * sweepAmt, 0.0, 0.35));
        if (mixAmt > 0.0) c.rgb = mix(c.rgb, texture2D(mixTex, vUv).rgb, mixAmt);
        if (grade > 0.0) {
          // v5 grade (linear light): a touch of contrast and warmth, a soft vignette, fine grain (hides banding)
          vec3 g = c.rgb;
          float l = dot(g, vec3(0.2126, 0.7152, 0.0722));
          g = mix(vec3(l), g, 1.06);
          g = g * vec3(1.015, 1.0, 0.985);
          vec2 q = vUv - 0.5; q.x *= 0.85;
          g *= mix(1.0, 0.86, smoothstep(0.32, 0.78, length(q)));
          g += (hash(vUv * 1024.0) - 0.5) * 0.012;
          c.rgb = mix(c.rgb, max(g, 0.0), grade);
        }
        gl_FragColor = vec4(c.rgb, 1.0);
        #include <colorspace_fragment>
      }`,
  });
  const accScene = new THREE.Scene(); accScene.add(new THREE.Mesh(quadGeo, accMat));
  const outScene = new THREE.Scene(); outScene.add(new THREE.Mesh(quadGeo, outMat));
  /** Render `n` sub-frames (prepare(i, n) poses the world for each) averaged into the canvas. */
  let ao = null;
  /** `ao` (0–1): contact shadow (lib/ao.js), drawn once per frame from the middle sub-frame's pose. */
  function frame(scene, camera, n, prepare, { sweep = -9, sweepAmt = 0, ripple = 0, zoom = 1, seed = 0, mixTex = null, mixAmt = 0, ao: aoAmt = 0 } = {}) {
    if (aoAmt > 0 && !ao) ao = makeAO(renderer, Math.round(RW / 2), Math.round(RH / 2));
    // autoClear off: each sub-frame is added onto the accumulation target
    renderer.autoClear = false; renderer.setClearColor(0x000000, 0);
    renderer.setRenderTarget(rtAcc); renderer.clear();
    for (let i = 0; i < n; i++) {
      prepare(i, n);
      renderer.setRenderTarget(rtScene); renderer.clear(); renderer.render(scene, camera);
      if (aoAmt > 0 && i === (n >> 1)) ao.render(scene, camera);
      accMat.uniforms.tex.value = rtScene.texture; accMat.uniforms.w.value = 1 / n;
      renderer.setRenderTarget(rtAcc); renderer.render(accScene, quadCam);
    }
    outMat.uniforms.aoTex.value = ao ? ao.texture : null; outMat.uniforms.aoAmt.value = ao ? aoAmt : 0;
    outMat.uniforms.seed.value = seed; outMat.uniforms.mixTex.value = mixTex; outMat.uniforms.mixAmt.value = mixTex ? mixAmt : 0;
    Object.assign(outMat.uniforms.sweep, { value: sweep }); outMat.uniforms.sweepAmt.value = sweepAmt; outMat.uniforms.ripple.value = ripple; outMat.uniforms.zoom.value = zoom;
    renderer.setRenderTarget(null); renderer.clear(); renderer.render(outScene, quadCam);
    renderer.autoClear = true;
  }
  return { renderer, frame };
}

/**
 * Accumulation depth of field (v5): sub-frame i of n moves the camera on a small lens disk (Vogel
 * spiral) and re-aims it at the same focus point, so whatever sits at `focusDist` stays sharp and the
 * rest blurs as through a real lens. Call after the camera is posed, inside a frame's prepare.
 */
export function lensJitter(camera, i, n, focusDist, aperture) {
  if (!(aperture > 0) || n < 2) return;
  const r = aperture * Math.sqrt((i + 0.5) / n), a = i * 2.39996323;
  const fwd = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
  const up = new THREE.Vector3(0, 1, 0).applyQuaternion(camera.quaternion);
  const right = new THREE.Vector3(1, 0, 0).applyQuaternion(camera.quaternion);
  const focus = camera.position.clone().addScaledVector(fwd, focusDist);
  camera.position.addScaledVector(right, Math.cos(a) * r).addScaledVector(up, Math.sin(a) * r);
  camera.up.copy(up); camera.lookAt(focus); camera.updateMatrixWorld(true);
}

/** Sky dome: vertical gradient, follows the camera. */
export function skyDome({ top = '#9fcfea', mid = '#cfe6f2', horizon = '#f6e7c8', below = '#e9dcc0' } = {}) {
  const geo = new THREE.SphereGeometry(5000, 32, 24);
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { cTop: { value: new THREE.Color(top) }, cMid: { value: new THREE.Color(mid) }, cHor: { value: new THREE.Color(horizon) }, cBel: { value: new THREE.Color(below) } },
    vertexShader: 'varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.); gl_Position = p.xyww; }',
    fragmentShader: `uniform vec3 cTop, cMid, cHor, cBel; varying vec3 vDir;
      void main(){ float y = vDir.y; vec3 c = y > 0. ? (y < .12 ? mix(cHor, cMid, smoothstep(0., .12, y)) : mix(cMid, cTop, smoothstep(.12, .6, y))) : cBel;
      gl_FragColor = vec4(c, 1.);
      #include <colorspace_fragment>
      }`,
  });
  const m = new THREE.Mesh(geo, mat); m.frustumCulled = false; m.renderOrder = -10;
  return m;
}
