// Vloertaal promo 3D — the cast as real low-poly 3D figures (no cut-out cards).
// Built from the app's own drawing system (src/components/Characters.tsx): the oval head with
// straight jaw lines to a narrow chin (sampled from the same path maths), slim body with straight
// shoulders, flat fills with one crisp shade (toon shading: a 2-step gradient, light top-left),
// small solid eyes, closed mouth. The face features (eyes, brows, nose line, mouth) are the app's
// SVG, rasterised and projected as a decal on the front of the 3D head, so the identity reads
// instantly. Torso prints (zip, badge, stripes) are a decal from the app's torso too.
//
//   const c = await buildCharacter('amina', { renderer });  scene.add(c.root);
//   c.update(t)                    idle: breathing, subtle head tilt, blink (deterministic in t)
//   c.pose = { lean, headPitch, headYaw, headRoll }      base pose (radians) the idle adds onto
//   c.armIK('L'|'R', wristWorld, poleWorld, wristWorldQuat?)   two-bone IK, elbow toward the pole
//   c.legIK('L'|'R', ankleWorld, poleWorld, footYaw?)
//   c.rig: root › hips › spine › neck › head ; spine › shoulderL/R › elbow › wrist › hand(thumb)
//          hips › hipL/R › knee › ankle
// Bones point down their joint group's −Y; the character faces +Z, her left is +X.
import * as THREE from 'three';
import { DecalGeometry } from 'three/addons/geometries/DecalGeometry.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries, mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { loadText, parseFigure } from './kit.js';

const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const lerp = (a, b, x) => a + (b - a) * x;
const smooth = (x) => x * x * (3 - 2 * x);

export const HS = 0.0052;   // metres per app svg unit for heads (face 50 u → 0.26 m: a little larger than life)

/** Characters.tsx FACE: [half width, top, chin] of the face oval (svg units). */
export const FACE = { bram: [20, 31, 85], amina: [18.6, 34, 84.4], henk: [19.6, 29.5, 86], jada: [18.8, 32.4, 84.6] };

/** Colours: exact fills from Characters.tsx; legs/shoes (not drawn in the app) in quiet work-wear tones. */
export const LOOK3D = {
  amina: { skin: '#b97a52', shade: '#9c6141', top: '#3fa34d', sleeve: '#2f8f3e', cuff: '#23722f', pants: '#2f3a47', shoe: '#262a2f',
    scarf: '#8e44c9', scarfShade: '#6f2fa6', cap: '#b07ae6', blink: 5.1, torsoHalfSvg: 25, ears: false, neck: false },
  jada: { skin: '#8d5536', shade: '#6e3f25', top: '#ffc929', sleeve: '#ffc929', cuff: '#e0a800', pants: '#1592db', shoe: '#2b2f33',
    hair: '#2e201a', hairLight: '#5a4236', collar: '#e0a800', blink: 3.8, torsoHalfSvg: 25.5, ears: true, neck: true, bareForearm: true },
  henk: { skin: '#f0b791', shade: '#d9946c', top: '#244a7d', sleeve: '#244a7d', cuff: '#183660', pants: '#1d3a63', shoe: '#22262a',
    hair: '#c4cad0', hairShade: '#aab1b8', collar: '#f4f7f9', blink: 4.7, torsoHalfSvg: 29.5, ears: true, neck: true },
  bram: { skin: '#f7c49b', shade: '#e2a376', top: '#ff7a00', sleeve: '#1a86d8', cuff: '#126bb0', pants: '#3c4a56', shoe: '#2b2f33',
    hat: '#ffc414', hatShade: '#e0a800', collar: '#1a86d8', blink: 4.2, torsoHalfSvg: 28, ears: true, neck: true },
};
/** Extra face paint from Characters.tsx `front` layers that sit flat on the skin. */
const FACE_PAINT = {
  bram: '<path d="M40 46H43.8V54.4L40.2 53.4Z" fill="#6b3f22"/><path d="M80 46H76.2V54.4L79.8 53.4Z" fill="#6b3f22"/>',
  henk: '',
  jada: '<path d="M41.2 52C41.4 40 49.4 32 60 32C70.6 32 78.6 40 78.8 52C76.4 47.4 73 44.6 68.6 43.6A3 3 0 0 0 63.4 42.4A3 3 0 0 0 57.4 42.6A3 3 0 0 0 51.8 43.4C47.4 44.4 43.8 47.2 41.2 52Z" fill="#2e201a"/>',
  amina: '',
};

/** Prints on the back of the torso (the app only draws the front): vest stripes, jacket stripe, dungarees. */
const BACK_PRINT = {
  bram: '<rect x="20" y="118" width="80" height="5" fill="#eef5f7"/><path d="M44.5 94V118M75.5 94V118" stroke="#eef5f7" stroke-width="4"/>',
  henk: '<rect x="20" y="118" width="80" height="5" fill="#ffd400"/>',
  jada: '<path d="M42 113H78V196H42Z" fill="#1592db"/><path d="M45 99.5L53 113.5M75 99.5L67 113.5" stroke="#1592db" stroke-width="3.2" stroke-linecap="butt"/>',
};

// ---------------- toon materials: flat fill + one crisp shade ----------------
let GRAD;
export function toonGradient() {
  if (!GRAD) {
    const n = 64, d = new Uint8Array(n * 4);
    for (let i = 0; i < n; i++) { const dot = ((i + 0.5) / n) * 2 - 1; const v = dot < 0.1 ? 70 : 255; d.set([v, v, v, 255], i * 4); }
    GRAD = new THREE.DataTexture(d, n, 1, THREE.RGBAFormat);
    GRAD.minFilter = GRAD.magFilter = THREE.NearestFilter; GRAD.generateMipmaps = false; GRAD.needsUpdate = true;
  }
  return GRAD;
}
const toonCache = new Map();
export function toon(color, opts = {}) {
  const key = color + JSON.stringify(opts);
  if (!toonCache.has(key)) toonCache.set(key, new THREE.MeshToonMaterial({ color, gradientMap: toonGradient(), ...opts }));
  return toonCache.get(key);
}

// ---------------- geometry helpers ----------------
/** Rings of points (each a closed loop, or open with `open`) → indexed surface; optional poles. */
function ringsGeometry(rings, { top, bottom, open = false } = {}) {
  const N = rings[0].length, pos = [], idx = [];
  const push = (v) => { pos.push(v.x, v.y, v.z); return pos.length / 3 - 1; };
  const T = top ? push(top) : -1;
  const R = rings.map((r) => r.map(push));
  const M = open ? N - 1 : N;
  if (top) for (let j = 0; j < M; j++) idx.push(T, R[0][j], R[0][(j + 1) % N]);
  for (let i = 0; i < R.length - 1; i++) for (let j = 0; j < M; j++) {
    const a = R[i][j], b = R[i][(j + 1) % N], c = R[i + 1][j], d = R[i + 1][(j + 1) % N];
    idx.push(a, c, b, b, c, d);
  }
  if (bottom) { const B = push(bottom); const L = R[R.length - 1]; for (let j = 0; j < M; j++) idx.push(L[j], B, L[(j + 1) % N]); }
  let g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx);
  g = mergeVertices(g, 1e-5); g.computeVertexNormals();
  return g;
}
/** Superellipse ring: half-width hx, front/back depth zF (>0) / zB (<0), exponent e (<1 = boxier). */
function sring(n, y, hx, zF, zB, e = 1, eB = e, zc = 0, phase = 0) {
  const out = [];
  for (let j = 0; j < n; j++) {
    const p = (j / n) * Math.PI * 2 + phase, s = Math.sin(p), c = Math.cos(p);
    const ee = c >= 0 ? e : eB;
    out.push(new THREE.Vector3(hx * Math.sign(s) * Math.pow(Math.abs(s), ee), y, zc + (c >= 0 ? zF : zB) * Math.sign(c) * Math.pow(Math.abs(c), ee)));
  }
  return out;
}
function flatGeo(geo) { const g = geo.index ? geo.toNonIndexed() : geo; g.computeVertexNormals(); return g; }
/** A limb segment along −Y from 0 to −len, radii r0 → r1, closed by low-poly spheres at the joints. */
function limbGeo(len, r0, r1, seg = 9) {
  const c = new THREE.CylinderGeometry(r1, r0, len, seg, 1, true); c.translate(0, -len / 2, 0);
  return c;
}
const ball = (r, w = 9, h = 7) => new THREE.SphereGeometry(r, w, h);
function mesh(geo, mat, { cast = true, receive = true } = {}) { const m = new THREE.Mesh(geo, mat); m.castShadow = cast; m.receiveShadow = receive; return m; }

// ---------------- the app's face oval (Characters.tsx oval()) ----------------
const bez3 = (a, b, c, d, t) => { const u = 1 - t; return u * u * u * a + 3 * u * u * t * b + 3 * u * t * t * c + t * t * t * d; };
function faceOutline(half, top, chin) {
  const jaw = chin - 21, cx = half * 0.6, pts = [];
  for (let i = 0; i <= 16; i++) { const t = i / 16; pts.push([bez3(0, half * 0.56, half, half, t), bez3(top, top, top + 6, top + 19, t)]); }
  for (let i = 0; i <= 12; i++) { const t = i / 12; pts.push([bez3(half, half, cx + 2, cx * 0.55, t), bez3(jaw, jaw + 6, chin - 6, chin - 2.2, t)]); }
  for (let i = 1; i <= 5; i++) { const t = i / 10, u = 1 - t; pts.push([u * u * cx * 0.55 - t * t * cx * 0.55, u * u * (chin - 2.2) + 2 * u * t * (chin + 1.2) + t * t * (chin - 2.2)]); }
  return pts;
}
function hwAt(pts, y) {
  if (y <= pts[0][1] || y >= pts[pts.length - 1][1]) return 0;
  for (let i = 0; i < pts.length - 1; i++) {
    const [x0, y0] = pts[i], [x1, y1] = pts[i + 1];
    if (y >= y0 && y <= y1) return y1 === y0 ? Math.max(x0, x1) : lerp(x0, x1, (y - y0) / (y1 - y0));
  }
  return 0;
}
/** Amina's headscarf silhouette (Characters.tsx `back`), right half: half-width at y. */
function scarfOutline() {
  const pts = [];
  for (let i = 0; i <= 16; i++) { const t = i / 16; pts.push([bez3(0, 13.5, 23.5, 23.5, t), bez3(24.5, 24.5, 35, 58, t)]); }
  for (let i = 1; i <= 12; i++) { const t = i / 12; pts.push([bez3(23.5, 23.5, 21.5, 17, t), bez3(58, 74, 87, 96, t)]); }
  return pts;
}

/** Head shape as a function of svg y: half-width W, ring centre zc, front/back depths (svg units). */
function headShape([half, top, chin]) {
  const yT = top - 5.5, yM = top + 17, jaw = chin - 21, Wm = half * 1.06, out = faceOutline(half, top, chin);
  const f = (y) => {
    if (y <= yM) { const k = (yM - y) / (yM - yT); const W = Wm * Math.sqrt(Math.max(0, 1 - k * k)); return { W, zc: -1.5, Df: W * 0.98, Db: W * 1.14 }; }
    if (y <= jaw) return { W: Wm, zc: -1.5, Df: Wm * 0.98, Db: Wm * 1.14 };
    const k = clamp((y - jaw) / (chin - jaw));
    const W = Math.max(hwAt(out, y) * 1.06, 1.2);
    const zF = lerp(Wm * 0.98 - 1.5, half * 0.8, k * k), zB = lerp(-(Wm * 1.14 + 1.5), half * 0.1, Math.pow(k, 0.75));
    return { W, zc: (zF + zB) / 2, Df: (zF - zB) / 2, Db: (zF - zB) / 2 };
  };
  return { f, yT, yM, jaw, Wm, outline: out };
}
const EF = 0.85, EB = 1.0;   // superellipse exponents front/back of the head
function headPoint(S, y, phi) {
  const s = Math.sin(phi), c = Math.cos(phi), e = c >= 0 ? EF : EB;
  return new THREE.Vector3(S.W * Math.sign(s) * Math.pow(Math.abs(s), e), y, S.zc + (c >= 0 ? S.Df : S.Db) * Math.sign(c) * Math.pow(Math.abs(c), e));
}
/** Front surface z of the head at (x, y). */
function headFrontZ(S, x) { const s = clamp(Math.abs(x) / S.W, 0, 1); const c = Math.sqrt(Math.max(0, 1 - Math.pow(s, 2 / EF))); return S.zc + S.Df * Math.pow(c, EF); }

// ---------------- rasterising the app's SVG layers ----------------
async function rasterize(svgInner, vb, ppu) {
  const [x, y, w, h] = vb, W = Math.round(w * ppu), H = Math.round(h * ppu);
  const src = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${x} ${y} ${w} ${h}" width="${W}" height="${H}">${svgInner}</svg>`;
  const img = new Image(); img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(src); await img.decode();
  const c = document.createElement('canvas'); c.width = W; c.height = H; c.getContext('2d').drawImage(img, 0, 0);
  return c;
}
function tex(canvas, renderer) {
  const t = new THREE.CanvasTexture(canvas); t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = renderer ? renderer.capabilities.getMaxAnisotropy() : 1; t.generateMipmaps = true; t.minFilter = THREE.LinearMipmapLinearFilter;
  return t;
}
/** Project a decal (front, along −Z) on `target` (built at identity), lift it off the surface. */
function decalOn(targetGeo, center, size, material, lift = 0.0007, dir = 1, minN = 0.12) {
  const tmp = new THREE.Mesh(targetGeo); tmp.updateMatrixWorld(true);
  const g0 = new DecalGeometry(tmp, center, new THREE.Euler(0, dir > 0 ? 0 : Math.PI, 0), size);
  // keep only triangles facing the projector (no paint on the back of the jaw / sides)
  const P0 = g0.attributes.position.array, N0 = g0.attributes.normal.array, U0 = g0.attributes.uv.array, P1 = [], N1 = [], U1 = [];
  for (let t = 0; t < P0.length / 9; t++) {
    if (dir * (N0[t * 9 + 2] + N0[t * 9 + 5] + N0[t * 9 + 8]) / 3 < minN) continue;
    for (let k = 0; k < 9; k++) { P1.push(P0[t * 9 + k]); N1.push(N0[t * 9 + k]); }
    for (let k = 0; k < 6; k++) U1.push(U0[t * 6 + k]);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(P1, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(N1, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(U1, 2));
  const p = g.attributes.position, n = g.attributes.normal;
  for (let i = 0; i < p.count; i++) p.setXYZ(i, p.getX(i) + n.getX(i) * lift, p.getY(i) + n.getY(i) * lift, p.getZ(i) + n.getZ(i) * lift);
  const m = new THREE.Mesh(g, material); m.renderOrder = 2; m.receiveShadow = true;
  return m;
}

// ---------------- IK ----------------
const _m = new THREE.Matrix4(), _q = new THREE.Quaternion();
/** Two-bone IK: `upper` joint (bone along −Y, child `lower` at (0, −L1, 0)), reach targetW with the bend toward poleW. */
export function solveTwoBone(upper, lower, L1, L2, targetW, poleW) {
  const parent = upper.parent; parent.updateWorldMatrix(true, false);
  const inv = _m.copy(parent.matrixWorld).invert();
  const S = upper.position.clone(), T = targetW.clone().applyMatrix4(inv), P = poleW.clone().applyMatrix4(inv);
  const D = T.clone().sub(S); let d = D.length(); const dir = D.normalize();
  d = clamp(d, Math.abs(L1 - L2) + 1e-4, L1 + L2 - 1e-4);
  const A = Math.acos(clamp((L1 * L1 + d * d - L2 * L2) / (2 * L1 * d), -1, 1));
  const beta = Math.PI - Math.acos(clamp((L1 * L1 + L2 * L2 - d * d) / (2 * L1 * L2), -1, 1));
  const pv = P.sub(S); const n = pv.sub(dir.clone().multiplyScalar(pv.dot(dir))).normalize();
  const u = dir.clone().multiplyScalar(Math.cos(A)).addScaledVector(n, Math.sin(A));
  const E = S.clone().addScaledVector(u, L1);
  const f = S.clone().addScaledVector(dir, d).sub(E).normalize();
  const Y = u.clone().negate();
  const sb = Math.sin(beta);
  const Z = sb > 1e-4 ? u.clone().multiplyScalar(Math.cos(beta)).sub(f).divideScalar(sb).normalize() : n.clone().negate();
  const X = new THREE.Vector3().crossVectors(Y, Z).normalize();
  upper.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(X, Y, Z));
  lower.quaternion.setFromAxisAngle(new THREE.Vector3(1, 0, 0), beta);
  upper.updateWorldMatrix(false, true);
}
export function setWorldQuat(obj, qW) {
  obj.parent.updateWorldMatrix(true, false);
  obj.parent.getWorldQuaternion(_q);
  obj.quaternion.copy(_q.invert().multiply(qW));
  obj.updateWorldMatrix(false, true);
}

// ---------------- the figure ----------------
const BODY = {
  hipY: -0.01, hipX: 0.082, thigh: 0.41, shin: 0.43,
  shoulderY: 0.40, shoulderX: 0.12, upper: 0.25, fore: 0.23,
  neckY: 0.492,
};

/**
 * Build a character. `svgUrl` is the app's extracted figure (assets/chars/<who>-idle.svg.html):
 * its face features become the decal on the head, its torso prints the decal on the body.
 */
export async function buildCharacter(who, { renderer, base = '../assets/chars/', ppu = 30 } = {}) {
  const L = LOOK3D[who], F = FACE[who], [half, top, chin] = F;
  const svg = parseFigure(await loadText(`${base}${who}-idle.svg.html`));
  const root = new THREE.Group(); root.name = who;
  const hips = new THREE.Group(); root.add(hips);
  const spine = new THREE.Group(); hips.add(spine);
  const rig = { root, hips, spine };
  const M = (c) => toon(c);

  // ---- torso: slim, straight shoulders, cut flat by the seat; boxy superellipse rings
  const TR = [  // y, half width, front, back
    [-0.075, 0.13, 0.085, 0.09], [-0.05, 0.148, 0.098, 0.10], [0.02, 0.150, 0.102, 0.10], [0.13, 0.134, 0.092, 0.088], [0.25, 0.140, 0.098, 0.088],
    [0.34, 0.150, 0.094, 0.088], [0.395, 0.153, 0.086, 0.084], [0.432, 0.146, 0.074, 0.076], [0.452, 0.118, 0.062, 0.064], [0.466, 0.07, 0.05, 0.052],
  ];
  const NT = 20;
  const torsoGeo = ringsGeometry(TR.slice().reverse().map(([y, hx, zf, zb]) => sring(NT, y, hx, zf, zb, 0.62)), { top: new THREE.Vector3(0, 0.472, 0), bottom: new THREE.Vector3(0, -0.08, 0) });
  const torso = mesh(torsoGeo, M(L.top)); spine.add(torso);
  // torso prints from the app (clipped detail group, minus the shade band), front decal
  const tg = svg.querySelector('g[clip-path^="url(#cht"]');
  if (tg) {
    const g2 = tg.cloneNode(true);
    g2.removeAttribute('clip-path');
    g2.querySelectorAll('[fill="#000"]').forEach((e) => e.remove());
    let inner = g2.innerHTML.replace(/V140/g, 'V196');
    const TS = 0.150 / L.torsoHalfSvg;   // metres per svg unit on the torso
    const vb = [60 - 34, 88, 68, 110];
    const c = await rasterize(inner, vb, 16);
    const decMat = new THREE.MeshToonMaterial({ map: tex(c, renderer), gradientMap: toonGradient(), transparent: true, depthWrite: false });
    const cx = 0, cy = 0.445 - (vb[1] + vb[3] / 2 - 95.5) * TS;
    const d = decalOn(torsoGeo, new THREE.Vector3(cx, cy, 0.06), new THREE.Vector3(vb[2] * TS, vb[3] * TS, 0.12), decMat, 0.0012, 1, who === 'amina' ? 0.12 : 0.4);
    torso.add(d); rig.torsoDecal = d;
    if (BACK_PRINT[who]) {
      const cb = await rasterize(BACK_PRINT[who], vb, 16);
      const bm = new THREE.MeshToonMaterial({ map: tex(cb, renderer), gradientMap: toonGradient(), transparent: true, depthWrite: false });
      torso.add(decalOn(torsoGeo, new THREE.Vector3(cx, cy, -0.06), new THREE.Vector3(vb[2] * TS, vb[3] * TS, 0.12), bm, 0.0012, -1, 0.4));
    }
  }

  // ---- neck + head
  const neck = new THREE.Group(); neck.position.set(0, BODY.neckY, 0); spine.add(neck);
  const head = new THREE.Group(); neck.add(head);
  rig.neck = neck; rig.head = head;
  const S = headShape(F);
  const pivY = chin + 2, pivZ = -half * 0.3;
  const toH = (v) => v.set(v.x * HS, (pivY - v.y) * HS, (v.z - pivZ) * HS);
  const ys = [];
  const yBot = chin - 1.4;
  for (let i = 1; i <= 30; i++) { const u = i / 30, e = u < 0.5 ? 2 * u * u : 1 - 2 * (1 - u) * (1 - u); ys.push(lerp(S.yT, yBot, e * 0.6 + u * 0.4)); }   // denser at crown and chin
  const NH = 44;
  const headRings = ys.map((y) => { const P = S.f(y); return Array.from({ length: NH }, (_, j) => toH(headPoint(P, y, (j / NH) * Math.PI * 2))); });
  const lastS = S.f(yBot);
  const headGeo = ringsGeometry(headRings, { top: toH(new THREE.Vector3(0, S.yT, -1.5)), bottom: toH(new THREE.Vector3(0, chin - 0.1, lastS.zc + lastS.Df * 0.35)) });
  const skin = M(L.skin);
  const headMesh = mesh(headGeo, skin); head.add(headMesh);
  // a small nose wedge (flat facets), along the app's nose line
  const nz = (x, y) => headFrontZ(S.f(y), x);
  const nTop = new THREE.Vector3(0.3, 61.5, nz(0.3, 61.5) - 0.2), nTip = new THREE.Vector3(-0.2, 68.4, nz(0, 68.4) + 2.6);
  const nL = new THREE.Vector3(-2.3, 69.6, nz(2.3, 69.6) - 0.3), nR = new THREE.Vector3(2.0, 69.4, nz(2.0, 69.4) - 0.3);
  [nTop, nTip, nL, nR].forEach(toH);
  const noseGeo = new THREE.BufferGeometry().setFromPoints([nTop, nL, nTip, nTop, nTip, nR, nL, nR, nTip]);
  noseGeo.computeVertexNormals();
  head.add(mesh(noseGeo, skin));
  // face decal: the app's eyes, brows, nose line, mouth (+ face paint); eyes closed for the blink
  const look = svg.querySelector('.ch-look');
  const lookHTML = look ? look.outerHTML : '';
  const fvb = [60 - half - 4, top - 4, 2 * half + 8, chin - top + 8];
  const shiftX = -0.3;   // the app slides the features 1.2 u for its head turn; centre them
  const faceSvg = (closed) => {
    let h = lookHTML;
    if (closed) h = h.replace(/<ellipse([^>]*?)ry="2\.5"/g, '<ellipse$1ry="0.32"');
    return `<g transform="translate(${shiftX} 0)">${FACE_PAINT[who]}${h}</g>`;
  };
  const faceOpen = tex(await rasterize(faceSvg(false), fvb, ppu), renderer);
  const faceShut = tex(await rasterize(faceSvg(true), fvb, ppu), renderer);
  const faceMat = new THREE.MeshToonMaterial({ map: faceOpen, gradientMap: toonGradient(), transparent: true, depthWrite: false });
  const V = (x, y, z) => new THREE.Vector3(x, y, z);
  const both = mergeGeometries([flatGeo(headGeo.clone()), flatGeo(noseGeo.clone())].map((g) => { const h = g.index ? g.toNonIndexed() : g; for (const k of Object.keys(h.attributes)) if (k !== 'position' && k !== 'normal') h.deleteAttribute(k); return h; }));
  const fc = toH(new THREE.Vector3(60 - 60, fvb[1] + fvb[3] / 2, 0)); // centre (x, y) in head space
  const zFront = (S.Wm * 0.98 - 1.5 + 4 - pivZ) * HS;
  const faceDecal = decalOn(both, new THREE.Vector3(0, fc.y, zFront / 2 + 0.002), new THREE.Vector3(fvb[2] * HS, fvb[3] * HS, zFront + 0.004), faceMat, 0.0005);
  head.add(faceDecal);
  rig.faceDecal = faceDecal;

  const NECK_B = 0.055;                 // neck characters: the neck bends from its base, the head sits on top
  if (L.neck) {
    neck.position.y = BODY.neckY - NECK_B; head.position.y = NECK_B;
    // a slim neck leaning forward up into the jaw (its top end stays inside the head), collar round the base
    const a = V(0, -0.045, -0.016), b = V(0, NECK_B + 0.07, 0.028), d = b.clone().sub(a);
    const ng = new THREE.CylinderGeometry(0.039, 0.043, d.length(), 12); ng.translate(0, d.length() / 2, 0);
    const nm = mesh(ng, skin); nm.position.copy(a); nm.quaternion.setFromUnitVectors(V(0, 1, 0), d.normalize()); neck.add(nm);
    const col = new THREE.TorusGeometry(0.05, 0.011, 6, 20); col.rotateX(Math.PI / 2); col.scale(1.05, 1, 0.92);
    const cm = mesh(col, M(L.collar || L.top)); cm.position.set(0, BODY.neckY - 0.03, -0.006); spine.add(cm);
  }
  if (L.ears) for (const sx of [-1, 1]) {
    const eg = ball(1, 8, 6); eg.scale(2.2 * HS, 4.6 * HS, 3.4 * HS);
    const e = mesh(eg, skin); const P = S.f(65); e.position.copy(toH(new THREE.Vector3(sx * (P.W - 0.4), 65, -2.5))); head.add(e);
  }

  // ---- per-character head wear
  if (who === 'amina') buildScarf({ S, F, toH, head, spine, L, M, rig });
  if (who === 'henk') buildHenk({ S, F, toH, head, L, M });
  if (who === 'jada') buildJada({ S, F, toH, head, L, M });
  if (who === 'bram') buildBram({ S, F, toH, head, L, M });

  // ---- arms: shoulder › elbow › wrist › hand (mitten + thumb)
  const sleeve = M(L.sleeve), cuff = M(L.cuff);
  for (const side of ['L', 'R']) {
    const sx = side === 'L' ? 1 : -1;
    const sh = new THREE.Group(); sh.position.set(sx * BODY.shoulderX, BODY.shoulderY, -0.004); spine.add(sh);
    sh.add(mesh(ball(0.044), sleeve));
    if (L.bareForearm) {
      sh.add(mesh(limbGeo(BODY.upper * 0.55, 0.05, 0.046), sleeve));
      const ua = mesh(limbGeo(BODY.upper * 0.47, 0.034, 0.032), skin); ua.position.y = -BODY.upper * 0.53; sh.add(ua);
      const hem = mesh(limbGeo(0.025, 0.05, 0.05), cuff); hem.position.y = -BODY.upper * 0.53; sh.add(hem);
    } else sh.add(mesh(limbGeo(BODY.upper, 0.044, 0.039), sleeve));
    const el = new THREE.Group(); el.position.y = -BODY.upper; sh.add(el);
    const foreMat = L.bareForearm ? skin : sleeve;
    el.add(mesh(ball(L.bareForearm ? 0.033 : 0.039), foreMat));
    el.add(mesh(limbGeo(BODY.fore - 0.02, L.bareForearm ? 0.032 : 0.038, L.bareForearm ? 0.027 : 0.034), foreMat));
    if (!L.bareForearm) { const cf = mesh(limbGeo(0.04, 0.037, 0.037), cuff); cf.position.y = -(BODY.fore - 0.045); el.add(cf); }
    const wr = new THREE.Group(); wr.position.y = -BODY.fore; el.add(wr);
    wr.add(mesh(ball(0.026, 8, 6), skin));
    const hand = buildMitten(sx, skin); wr.add(hand);
    const open = buildOpenHand(sx, skin, new THREE.MeshBasicMaterial({ color: L.shade, toneMapped: false })); open.visible = false; wr.add(open);
    rig['open' + side] = open;
    rig['shoulder' + side] = sh; rig['elbow' + side] = el; rig['wrist' + side] = wr; rig['hand' + side] = hand; rig['thumb' + side] = hand.userData.thumb;
  }
  // ---- legs: hip › knee › ankle › foot
  const pants = M(L.pants), shoe = M(L.shoe);
  for (const side of ['L', 'R']) {
    const sx = side === 'L' ? 1 : -1;
    const hp = new THREE.Group(); hp.position.set(sx * BODY.hipX, BODY.hipY, 0); hips.add(hp);
    hp.add(mesh(ball(0.068), pants));
    hp.add(mesh(limbGeo(BODY.thigh, 0.068, 0.054), pants));
    const kn = new THREE.Group(); kn.position.y = -BODY.thigh; hp.add(kn);
    kn.add(mesh(ball(0.054), pants));
    kn.add(mesh(limbGeo(BODY.shin, 0.052, 0.043), pants));
    const an = new THREE.Group(); an.position.y = -BODY.shin; kn.add(an);
    const fg = new RoundedBoxGeometry(0.092, 0.075, 0.23, 2, 0.026); fg.translate(0, -0.035, 0.06);
    an.add(mesh(fg, shoe));
    rig['hip' + side] = hp; rig['knee' + side] = kn; rig['ankle' + side] = an;
  }

  root.traverse((o) => { if (o.isMesh && o.material && o.material.transparent) o.castShadow = false; });

  // ---- idle + pose
  const ch = {
    who, root, rig, look: L,
    pose: { lean: 0, headPitch: 0, headYaw: 0, headRoll: 0, blinkOffset: 0.7 },
    base: { neckY: BODY.neckY, shY: BODY.shoulderY },
    eyesClosed: false,
    update(t) {
      const p = this.pose, br = Math.sin((t / 4.0) * Math.PI * 2);           // the app's 4 s breath
      spine.rotation.x = p.lean;
      torso.scale.set(1 + 0.004 * br, 1 + 0.004 * br, 1 + 0.012 * br);
      neck.position.y = (L.neck ? BODY.neckY - 0.055 : BODY.neckY) + 0.0025 * br;
      const nk = L.neck ? 0.5 : 0; neck.rotation.x = nk * p.headPitch;
      rig.shoulderL.position.y = rig.shoulderR.position.y = BODY.shoulderY + 0.003 * br;
      head.rotation.set(p.headPitch * (1 - nk) + 0.014 * Math.sin((t / 5.3) * Math.PI * 2 + 0.6), p.headYaw + 0.012 * Math.sin((t / 7.1) * Math.PI * 2),
        p.headRoll + 0.028 * Math.sin((t / 6.2) * Math.PI * 2 + 1.1), 'YXZ');
      // blink: 0.08 scale for ~1/8 of 0.2 s in the app; here the eyes are shut for 0.1 s each period
      const ph = (((t + p.blinkOffset) % L.blink) + L.blink) % L.blink;
      const shut = ph < 0.1;
      if (shut !== this.eyesClosed) { this.eyesClosed = shut; faceMat.map = shut ? faceShut : faceOpen; faceMat.needsUpdate = true; }
      root.updateMatrixWorld(true);
    },
    /** Swap the mitten for the open hand (palm forward wave) on one side. */
    setOpenHand(side, on) { rig['open' + side].visible = on; rig['hand' + side].visible = !on; },
    armIK(side, wristW, poleW, wristQ) {
      solveTwoBone(rig['shoulder' + side], rig['elbow' + side], BODY.upper, BODY.fore, wristW, poleW);
      if (wristQ) setWorldQuat(rig['wrist' + side], wristQ);
    },
    legIK(side, ankleW, poleW, footQ) {
      solveTwoBone(rig['hip' + side], rig['knee' + side], BODY.thigh, BODY.shin, ankleW, poleW);
      if (footQ) setWorldQuat(rig['ankle' + side], footQ);
    },
  };
  return ch;
}

/**
 * Open hand (the app's wave pose): flat palm + a fingers block (fingers together, finger lines on the
 * palm side), thumb out to the side in the palm plane. Same frame as the mitten: fingers along −Y,
 * palm facing +Z, thumb on the sx side.
 */
function buildOpenHand(sx, skin, shade) {
  const g = new THREE.Group();
  const pg = new RoundedBoxGeometry(0.064, 0.064, 0.024, 2, 0.01); pg.translate(0, -0.036, 0); g.add(mesh(pg, skin));
  const fg = new RoundedBoxGeometry(0.058, 0.06, 0.018, 2, 0.0085); fg.translate(0, -0.092, -0.001); g.add(mesh(fg, skin));
  for (const x of [-0.0145, 0, 0.0145]) {           // finger lines (palm side)
    const l = new THREE.Mesh(new THREE.BoxGeometry(0.0022, 0.04, 0.002), shade); l.position.set(x, -0.1, 0.0083); g.add(l);
  }
  const crease = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.0022, 0.002), shade); crease.position.set(-sx * 0.006, -0.05, 0.0122); crease.rotation.z = sx * 0.35; g.add(crease);
  const th = new THREE.Group(); th.position.set(sx * 0.03, -0.024, 0.002); th.rotation.z = sx * 0.95; g.add(th);
  const tg = new THREE.CapsuleGeometry(0.0115, 0.03, 3, 8); tg.translate(0, -0.022, 0); th.add(mesh(tg, skin));
  return g;
}

/** Mitten hand: palm block along −Y from the wrist, palm facing +Z; thumb on the ±X side (sx). */
function buildMitten(sx, skin) {
  const hand = new THREE.Group();
  const pg = new RoundedBoxGeometry(0.058, 0.078, 0.028, 2, 0.012); pg.translate(0, -0.044, 0);
  hand.add(mesh(pg, skin));
  const th = new THREE.Group(); th.position.set(sx * 0.026, -0.022, 0.008); hand.add(th);
  const tg = new THREE.CapsuleGeometry(0.0115, 0.026, 3, 8); tg.translate(0, -0.021, 0);
  th.add(mesh(tg, skin));
  th.rotation.set(0.35, 0, sx * 0.55);
  hand.userData.thumb = th;
  return hand;
}

// ---------------- Amina: headscarf (hood on the head + drape on the shoulders) ----------------
function buildScarf({ S, F, toH, head, spine, L, M, rig }) {
  const [half, top, chin] = F;
  const SO = scarfOutline();
  const yS0 = 24.5;
  const rows = [25.6, 27.6, 30.4, 33.6, 37, 41, 45.5, 50, 54.5, 59, 63.5, 68, 72, 75.6, 78.6, 81.2, 83.2, 84.6, 86.4, 89, 92, 95];
  const NB = 26;   // points round the back
  const T = 3.4;   // fabric thickness over the head
  const hoodRings = [], rim = [];
  for (const y of rows) {
    const Hs = S.f(Math.min(y, chin - 1.4));
    const Wh = Math.max(hwAt(SO, y), 2);
    // depths: over the skull = head + T; under the chin the scarf wraps the neck
    let zF, zB;
    if (y <= S.yM) { zF = -1.5 + Wh * 0.98 * 0.98; zB = -1.5 - Wh * 1.12; }
    else if (y <= S.jaw) { zF = Hs.zc + Hs.Df + T; zB = Hs.zc - Hs.Db - T; }
    else {
      const k = clamp((y - S.jaw) / (95 - S.jaw));
      zF = lerp(S.Wm * 0.98 - 1.5 + T, half * 0.62, smooth(k)); zB = lerp(-(S.Wm * 1.14 + 1.5 + T), -half * 0.85, smooth(k));
      if (y < chin) zF = Math.max(zF, Hs.zc + Hs.Df + T);
    }
    const zc = (zF + zB) / 2, Df = (zF - zB) / 2;
    const P = { W: Wh, zc, Df, Db: Df };
    const hw = y > top + 0.3 && y < chin - 0.4 ? hwAt(S.outline, y) : 0;
    let ring;
    if (hw > 0.05) {
      const ex = hw * 0.985;
      const E = (sx) => new THREE.Vector3(sx * ex, y, headFrontZ(S.f(y), ex) + 0.7);
      const s0 = clamp(Math.pow(Math.min(0.995, (ex + 1.6) / Wh), 1 / EF));
      const p0 = Math.asin(s0);
      ring = [E(1)];
      for (let j = 0; j <= NB; j++) ring.push(headPoint(P, y, lerp(p0, Math.PI * 2 - p0, j / NB)));
      ring.push(E(-1));
      if (y < 53.5) rim.push(E(1), E(-1));
    } else {
      const f0 = headPoint(P, y, 0);
      ring = [f0.clone()];
      for (let j = 0; j <= NB; j++) ring.push(headPoint(P, y, lerp(0, Math.PI * 2, j / NB)));
      ring.push(f0.clone());
    }
    hoodRings.push(ring);
  }
  const H0 = S.f(S.yT);
  const hoodGeo = ringsGeometry(hoodRings.map((r) => r.map((v) => toH(v.clone()))), { top: toH(new THREE.Vector3(0, yS0, -1.5)), open: true });
  const scarfMat = toon(L.scarf, { side: THREE.DoubleSide });
  head.add(mesh(hoodGeo, scarfMat));
  // the inner cap edge round the forehead (#b07ae6), a thin band just inside the scarf's rim
  const rimR = rim.filter((_, i) => i % 2 === 0), rimL = rim.filter((_, i) => i % 2 === 1);
  const capPts = [...rimR.reverse(), ...rimL].map((v) => toH(new THREE.Vector3(v.x * 0.97, v.y + 0.4, v.z + 0.3)));
  const capTop = toH(new THREE.Vector3(0, top + 0.6, headFrontZ(S.f(top + 1), 0) + 0.6));
  capPts.splice(capPts.length / 2, 0, capTop);
  const capCurve = new THREE.CatmullRomCurve3(capPts, false, 'centripetal');
  const capGeo = new THREE.TubeGeometry(capCurve, 40, 1.15 * HS, 6, false);
  head.add(mesh(capGeo, toon(L.cap)));

  // drape on the shoulders (spine space): starts round the hood's lowest ring, flares over the shoulders
  head.updateMatrix();
  const last = hoodRings[hoodRings.length - 2].slice(1, -1).map((v) => toH(v.clone()));
  // hood ring → spine space (head at rest under neck)
  const nY = BODY.neckY;
  const ringInSpine = last.map((v) => new THREE.Vector3(v.x, v.y + nY, v.z));
  let minZ = 1e9, maxZ = -1e9, maxX = 0, yAvg = 0;
  for (const v of ringInSpine) { minZ = Math.min(minZ, v.z); maxZ = Math.max(maxZ, v.z); maxX = Math.max(maxX, Math.abs(v.x)); yAvg += v.y / ringInSpine.length; }
  const czc = (minZ + maxZ) / 2;
  const ND = 28;
  const DR = [ // y, half width, front, back, exponent, centre z
    [yAvg + 0.012, maxX * 1.1, (maxZ - czc) * 1.1, (czc - minZ) * 1.1, 0.9, czc],
    [0.454, 0.136, 0.098, 0.086, 0.66, czc * 0.5],
    [0.437, 0.162, 0.106, 0.096, 0.62, 0],
    [0.418, 0.170, 0.108, 0.100, 0.62, 0],
    [0.398, 0.176, 0.110, 0.104, 0.58, 0],
  ];
  const drRings = DR.map(([y, hx, zf, zb, e, zc]) => sring(ND, y, hx, zf, zb, e, e, zc));
  // bottom edge: lower at front and back (a bib over the chest), up at the sides over the arms
  const bot = sring(ND, 0, 0.178, 0.112, 0.106, 0.56).map((v, j) => { const c = Math.cos((j / ND) * Math.PI * 2); v.y = c > 0 ? lerp(0.388, 0.352, Math.pow(c, 1.5)) : lerp(0.388, 0.345, Math.pow(-c, 1.5)); return v; });
  drRings.push(bot);
  const drapeGeo = ringsGeometry(drRings);
  const drape = mesh(drapeGeo, scarfMat); spine.add(drape);
  rig.drape = drape;
}

// ---------------- hair: a cap over the skull whose lower edge follows a hairline ----------------
/**
 * hairline(phi) → svg y of the hair's lower edge at angle phi (0 = front, ±π = back).
 * Columns run from the crown down to the hairline, so the edge is exactly that curve (no jagged cut).
 * T(phi, s) = thickness over the skull (svg units), s = 0 crown … 1 edge. Returns the geometry (head space).
 */
function hairCap(S, toH, hairline, T, { NB = 40, NR = 12, frontGap = 0 } = {}) {
  const cols = [];
  for (let j = 0; j <= NB; j++) {
    const phi = lerp(frontGap, Math.PI * 2 - frontGap, j / NB);
    const pw = phi > Math.PI ? phi - Math.PI * 2 : phi;   // −π … π
    const yE = hairline(pw), col = [];
    for (let i = 1; i <= NR; i++) {
      const s = i / NR, y = lerp(S.yT, yE, Math.pow(s, 0.85));
      const P = S.f(Math.min(y, S.jaw)), t = T(pw, s);
      col.push(headPoint({ W: P.W + t, zc: P.zc, Df: P.Df + t, Db: P.Db + t * 1.05 }, y, phi));
    }
    cols.push(col);
  }
  // rows = transpose (crown → edge), open ring when there is a front gap
  const rows = [];
  for (let i = 0; i < NR; i++) rows.push(cols.map((c) => toH(c[i].clone())));
  const t0 = T(0, 0);
  return ringsGeometry(rows, { top: toH(new THREE.Vector3(0, S.yT - t0, -1.5)), open: true });
}
/** Piecewise-smooth hairline from keys [[|phi|, y], …] (symmetric). */
const hairlineFrom = (keys) => (phi) => {
  const a = Math.abs(phi);
  for (let i = 0; i < keys.length - 1; i++) if (a <= keys[i + 1][0]) { const k = (a - keys[i][0]) / (keys[i + 1][0] - keys[i][0]); return lerp(keys[i][1], keys[i + 1][1], smooth(clamp(k))); }
  return keys[keys.length - 1][1];
};

// ---------------- Henk: short grey hair (receding temples), moustache, glasses — all geometry ----------------
function buildHenk({ S, F, toH, head, L, M }) {
  const [half, top] = F;
  // hairline from the app path: centre 35–37, temples 41.6 (x ±16), side 50.4 (above the ear), nape 73
  const hl = hairlineFrom([[0, top + 6.6], [0.42, top + 9.5], [0.62, top + 12.5], [0.95, top + 20.5], [1.35, top + 26], [2.2, top + 33], [Math.PI, top + 39]]);
  const T = (phi, s) => 2.0 * (1 - 0.85 * Math.pow(s, 2.5));
  const hairMat = toon(L.hair, { side: THREE.DoubleSide });
  head.add(mesh(hairCap(S, toH, hl, T), hairMat));
  // moustache: the app's shape, extruded, sitting on the upper lip
  const ms = new THREE.Shape();
  ms.moveTo(-7.4, -74.8); ms.quadraticCurveTo(-6.4, -71.6, 0, -71.8); ms.quadraticCurveTo(6.4, -71.6, 7.4, -74.8);
  ms.quadraticCurveTo(3.6, -74, 0, -74.4); ms.quadraticCurveTo(-3.6, -74, -7.4, -74.8);
  const mg = new THREE.ExtrudeGeometry(ms, { depth: 1.6, bevelEnabled: true, bevelThickness: 0.5, bevelSize: 0.35, bevelSegments: 1, curveSegments: 6 });
  mg.translate(0, 0, -0.8); mg.scale(HS, HS, HS);   // shape y = −svg y; head frame Y = (pivot − y)·HS
  const mm = mesh(mg, toon('#b8bec5'));
  mm.position.set(0, (F[2] + 2) * HS, (headFrontZ(S.f(73), 0) - 0.2 + half * 0.3) * HS); head.add(mm);
  // glasses: two squarish frames + bridge + temples
  const fr = toon('#2f3b46');
  const P = S.f(60.7);
  const rrect = (p, w, h, r) => { p.moveTo(-w / 2 + r, -h / 2); p.lineTo(w / 2 - r, -h / 2); p.quadraticCurveTo(w / 2, -h / 2, w / 2, -h / 2 + r); p.lineTo(w / 2, h / 2 - r); p.quadraticCurveTo(w / 2, h / 2, w / 2 - r, h / 2); p.lineTo(-w / 2 + r, h / 2); p.quadraticCurveTo(-w / 2, h / 2, -w / 2, h / 2 - r); p.lineTo(-w / 2, -h / 2 + r); p.quadraticCurveTo(-w / 2, -h / 2, -w / 2 + r, -h / 2); return p; };
  for (const sx of [-1, 1]) {
    const cx = sx * 7.6 + 0.3, z = headFrontZ(P, Math.abs(cx)) + 2.4;
    const shp = rrect(new THREE.Shape(), 11.6, 8.6, 2); shp.holes.push(rrect(new THREE.Path(), 8.8, 5.8, 1.1));
    const eg = new THREE.ExtrudeGeometry(shp, { depth: 1.0, bevelEnabled: false, curveSegments: 3 }); eg.scale(HS, HS, HS);
    const m = mesh(eg, fr); m.position.copy(toH(new THREE.Vector3(cx, 60.7, z))); m.rotation.y = sx * 0.16; head.add(m);
    const lens = new THREE.Mesh(new THREE.PlaneGeometry(9 * HS, 6 * HS), new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.14, depthWrite: false }));
    lens.position.copy(m.position); lens.rotation.copy(m.rotation); lens.translateZ(0.5 * HS); head.add(lens);
    // temple arm from the frame's outer edge back to the ear
    // temple arm: frame edge → round the cheekbone (outside the skull) → over the ear
    const tp = [toH(new THREE.Vector3(sx * 13.4, 59.6, z - 0.8)), toH(new THREE.Vector3(sx * (P.W + 1.3), 59.8, 9)), toH(new THREE.Vector3(sx * (P.W + 1.4), 60.0, 1)), toH(new THREE.Vector3(sx * (P.W + 0.9), 61.5, -4))];
    head.add(mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(tp), 16, 0.6 * HS, 4), fr));
  }
  const bg = new THREE.BoxGeometry(4.4 * HS, 1.2 * HS, 1.0 * HS);
  const b = mesh(bg, fr); b.position.copy(toH(new THREE.Vector3(0.3, 59.6, headFrontZ(P, 0) + 2.9))); head.add(b);
}

// ---------------- Jada: curly hair volume from all sides, safety glasses on top, gold hoops ----------------
function buildJada({ S, F, toH, head, L, M }) {
  const [half, top] = F;
  const hair = toon(L.hair), hairSide = toon(L.hair, { side: THREE.DoubleSide });
  // the mass: thick at the crown and the back (volume), thinner where it meets the forehead
  const hl = hairlineFrom([[0, top + 11], [0.45, top + 14], [0.9, top + 22], [1.3, top + 27], [2.1, top + 40], [Math.PI, top + 45]]);
  const T = (phi, s) => { const back = 0.5 - 0.5 * Math.cos(phi); return (4.2 + 3.2 * back) * (1 - 0.35 * Math.pow(s, 2)); };
  const capGeo = hairCap(S, toH, hl, T);
  head.add(mesh(capGeo, hairSide));
  // curls: low-poly balls scattered over the whole cap (crown, sides, back), denser on the outline
  const curl = new THREE.IcosahedronGeometry(1, 0);
  const rnd = (i) => { const x = Math.sin(i * 12.9898 + 4.1) * 43758.5453; return x - Math.floor(x); };
  const lightHair = toon(L.hairLight);
  for (let i = 0; i < 150; i++) {
    const phi = (rnd(i) * 2 - 1) * Math.PI, s = Math.sqrt(rnd(i + 31));
    const y = lerp(S.yT, hl(phi) - 1.2, s);
    const P = S.f(Math.min(y, S.jaw)), t = T(phi, s) - 0.6;
    const v = headPoint({ W: P.W + t, zc: P.zc, Df: P.Df + t, Db: P.Db + t * 1.05 }, y, phi);
    if (Math.abs(phi) < 0.75 && y > top - 2 && y < top + 11) continue;   // keep the glasses clear
    const r = (2.4 + rnd(i + 7) * 1.6) * (Math.cos(phi) > 0.5 && y > top + 6 ? 0.75 : 1);
    const m = mesh(curl, i % 9 === 0 ? lightHair : hair); m.position.copy(toH(v)); m.scale.setScalar(r * HS);
    m.rotation.set(rnd(i + 2) * 6, rnd(i + 3) * 6, 0); head.add(m);
  }
  // safety glasses pushed up on the hair: band round the head + two lenses with frames
  const lens = toon('#8fdcff'), frame = toon('#1d6fa8');
  const yG = top + 4.5, PG = S.f(yG);
  for (const sx of [-1, 1]) {
    const z = headFrontZ(PG, 8.4) + T(0.3, 0.3) + 2.6;
    const fg = new RoundedBoxGeometry(13.6 * HS, 8.4 * HS, 1.4 * HS, 2, 1.8 * HS);
    const f2 = mesh(fg, frame); f2.position.copy(toH(new THREE.Vector3(sx * 8.4, yG, z))); f2.rotation.set(-0.55, sx * 0.28, 0); head.add(f2);
    const lg = new RoundedBoxGeometry(11.4 * HS, 6.4 * HS, 1.2 * HS, 2, 1.4 * HS);
    const m = mesh(lg, lens); m.position.copy(f2.position); m.rotation.copy(f2.rotation); m.translateZ(0.35 * HS); head.add(m);
    const hi = mesh(new THREE.BoxGeometry(3.6 * HS, 0.9 * HS, 0.3 * HS), toon('#ffffff')); hi.position.copy(m.position); hi.rotation.copy(m.rotation); hi.translateZ(0.7 * HS); hi.translateY(1.6 * HS); hi.translateX(-2.6 * HS); head.add(hi);
  }
  const bandPts = [];
  for (let j = 0; j <= 24; j++) { const phi = lerp(-1.25, 1.25, j / 24); const yy = yG - 1.5 + Math.abs(phi) * 1.2; const P = S.f(yy); const t = T(phi, 0.4) + 0.5;
    bandPts.push(toH(headPoint({ W: P.W + t, zc: P.zc, Df: P.Df + t, Db: P.Db + t }, yy, phi))); }
  head.add(mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(bandPts), 30, 0.9 * HS, 5), frame));
  // gold hoops under the ears
  const hoop = new THREE.TorusGeometry(2.4 * HS, 0.75 * HS, 6, 14);
  const P2 = S.f(69);
  for (const sx of [-1, 1]) { const m = mesh(hoop, toon('#ffc414')); m.position.copy(toH(new THREE.Vector3(sx * (P2.W + 0.8), 71.5, -2.4))); m.rotation.y = Math.PI / 2; head.add(m); }
}

// ---------------- Bram: hard hat (dome + brim + ridge + stencil V), short brown hair under it ----------------
function buildBram({ S, F, toH, head, L, M }) {
  const [half, top] = F;
  // short hair: sideburns (paint) + a thin cap whose edge runs under the brim, down the back to the nape
  const hl = hairlineFrom([[0, top + 13], [0.7, top + 16], [1.15, top + 23], [1.6, top + 29], [2.3, top + 36], [Math.PI, top + 40]]);
  head.add(mesh(hairCap(S, toH, hl, (phi, s) => 1.5 * (1 - 0.85 * Math.pow(s, 2.5))), toon('#6b3f22', { side: THREE.DoubleSide })));
  const hat = toon(L.hat), hatShade = toon(L.hatShade);
  const yB = 46;                               // brim line (svg)
  const P = S.f(yB), zc = -2.2, rx = P.W + 2.4, rzF = P.Df + 2.6 - (zc + 1.5), rzB = P.Db + 3.0 + (zc + 1.5), ry = yB - 20.5;
  // dome: half ellipsoid (separate front/back depth), from the brim line up to y 20.5
  const rings = [];
  for (const a of [0.94, 0.84, 0.7, 0.54, 0.36, 0.18, 0.0]) {
    const yy = yB - ry * Math.sin(a * Math.PI / 2), c = Math.cos(a * Math.PI / 2);
    rings.push(sring(32, yy, rx * c, rzF * c, rzB * c, 1, 1, zc));
  }
  const dome = ringsGeometry(rings.map((r) => r.map((v) => toH(v.clone()))), { top: toH(new THREE.Vector3(0, yB - ry, zc)), bottom: toH(new THREE.Vector3(0, yB, zc)) });
  head.add(mesh(dome, hat));
  // brim: a flat ring, wider at the front peak
  const outer = sring(40, 0, rx + 3.4, rzF + 5.5, rzB + 3.2, 1, 1, zc), inner = sring(40, 0, rx - 0.6, rzF - 0.6, rzB - 0.6, 1, 1, zc);
  const shp = new THREE.Shape(outer.map((v) => new THREE.Vector2(v.x, v.z)));
  shp.holes.push(new THREE.Path(inner.map((v) => new THREE.Vector2(v.x, v.z)).reverse()));
  const bg = new THREE.ExtrudeGeometry(shp, { depth: 2.4, bevelEnabled: false, curveSegments: 1 });
  bg.rotateX(Math.PI / 2); bg.scale(HS, HS, HS);                 // shape xz → y = thickness downward
  const brim = mesh(bg, hatShade); const bp = toH(new THREE.Vector3(0, yB - 1.6, 0)); brim.position.set(0, bp.y, F[0] * 0.3 * HS); head.add(brim);
  // the stencil V on the front of the dome, following its slope
  const a0 = 0.42, yV = yB - ry * Math.sin(a0), zV = zc + rzF * Math.cos(a0);
  const grp = new THREE.Group(); grp.position.copy(toH(new THREE.Vector3(0, yV, zV + 0.15)));
  grp.rotation.x = -(Math.PI / 2 - Math.atan2(rzF * Math.cos(a0), ry * Math.sin(a0))) * 0.9; head.add(grp);
  for (const pts of [[[0, 0], [4.6, 0], [6.55, 6.4], [6.55, 12.5], [4.7, 12.5]], [[14, 0], [9.4, 0], [7.45, 6.4], [7.45, 12.5], [9.3, 12.5]]]) {
    const s = new THREE.Shape(); s.moveTo(pts[0][0] - 7, 6.25 - pts[0][1]); for (const p of pts.slice(1)) s.lineTo(p[0] - 7, 6.25 - p[1]); s.closePath();
    const g = new THREE.ExtrudeGeometry(s, { depth: 0.5, bevelEnabled: false }); g.scale(HS * 0.82, HS * 0.82, HS);
    grp.add(mesh(g, toon('#1e2226')));
  }
}

/**
 * Two-handed phone grip. `phone`: origin bottom-centre, screen facing +Z, x to the screen's right.
 * Returns hold(t, { tap }) → solves both arms (call after ch.update): the mittens cradle the lower
 * half from behind, thumbs on the side bezels; `tap` = { u, v, k } moves the right thumb to screen
 * point (u, v) (0..1 from the top-left) by k (0 rest … 1 touching).
 */
export function holdPhone(ch, phone, { pw, ph, depth, grip = 0.3, spread = 0.55 } = {}) {
  const tmpQ = new THREE.Quaternion(), pq = new THREE.Quaternion();
  const sides = { L: -1, R: 1 };   // her left hand holds the screen's left edge
  return (t, { tap } = {}) => {
    phone.updateWorldMatrix(true, false);
    phone.getWorldQuaternion(pq);
    for (const side of ['L', 'R']) {
      const e = sides[side];
      const d = new THREE.Vector3(-e * spread, 0.83, 0).normalize();      // fingers up/in behind the phone
      const Y = d.clone().negate(), Z = new THREE.Vector3(0, 0, 1), X = new THREE.Vector3().crossVectors(Y, Z);
      const q = new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().makeBasis(X, Y, Z));
      const palm = new THREE.Vector3(e * (pw / 2 - 0.014), grip * ph, -depth - 0.019);
      const wristL = palm.clone().addScaledVector(d, -0.044);
      const wW = phone.localToWorld(wristL.clone());
      const sh = ch.rig['shoulder' + side]; sh.parent.updateWorldMatrix(true, false);
      const sW = sh.getWorldPosition(new THREE.Vector3());
      const pole = ch.root.localToWorld(new THREE.Vector3(-e * 0.0 + (side === 'L' ? 0.45 : -0.45), -0.55, -0.25)).sub(ch.root.getWorldPosition(new THREE.Vector3())).add(sW);
      ch.armIK(side, wW, pole, tmpQ.copy(pq).multiply(q));
      // thumb: on the side bezel, or tapping the screen
      const th = ch.rig['thumb' + side];
      let tgt = new THREE.Vector3(e * (pw / 2 + 0.002), grip * ph + 0.04, 0.010);
      if (!th.userData.rest) th.userData.rest = th.position.clone();
      th.position.copy(th.userData.rest); th.scale.set(1, 1, 1);
      th.parent.updateWorldMatrix(true, false);
      let k = 0;
      if (tap && side === (tap.side || 'R') && tap.k > 0) {
        k = smooth(clamp(tap.k));
        const b = pw * 0.07, sw = pw - 2 * b, sh2 = sw * 844 / 390, top = ph - b;
        const onS = new THREE.Vector3(-sw / 2 + tap.u * sw, top - tap.v * sh2, 0.003 + 0.014 * (1 - tap.k));
        tgt = tgt.lerp(onS, k);
        // the thumb comes round the edge to the front: its base slides onto the bezel corner
        const baseW = phone.localToWorld(new THREE.Vector3(e * (pw / 2 - 0.002), top - tap.v * sh2 - 0.03, 0.006));
        const restW = th.parent.localToWorld(th.userData.rest.clone());
        th.position.copy(th.parent.worldToLocal(restW.lerp(baseW, Math.min(1, k * 1.4))));
      }
      th.updateWorldMatrix(false, false);
      const tW = phone.localToWorld(tgt), pW = th.getWorldPosition(new THREE.Vector3());
      const dist = tW.distanceTo(pW);
      const dirW = tW.sub(pW).normalize();
      th.parent.getWorldQuaternion(tmpQ);
      const dirL = dirW.applyQuaternion(tmpQ.invert());
      th.quaternion.setFromUnitVectors(new THREE.Vector3(0, -1, 0), dirL);
      if (k > 0) th.scale.y = lerp(1, clamp(dist / 0.044, 0.6, 1.9), k);
      th.updateWorldMatrix(false, true);
    }
  };
}
