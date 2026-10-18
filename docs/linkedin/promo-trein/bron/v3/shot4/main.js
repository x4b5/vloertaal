// Shot 4 v3 (film 21.0–30.0 s, local 0–9): the end card, as film-v2's, with 3D Bram walking in at 21.0 and
// waving palm-forward in a loop to the last frame (live tail). Shot 4 (v2 notes follow): A clean concrete stage with hazard tape; the camera
// settles from the whip; VLOERTAAL is sprayed on the wall in dark ink through a stencil; Bram slides in and
// waves; three checks pop on the beat (1.5 / 2.0 / 2.5); the vloertaal.nl kraft label rises. Final hold ≥ 3 s.
import * as THREE from 'three';
import { W, H, PAL, clamp, seg, lerp, smooth, inOut, makeRenderer, canvasTex, rng, loadText, parseFigure, rasterSVG, cardMesh } from '../../lib/kit.js';
import { easeOut, backOut, labelCanvas, slabCard, camRig, roundPlane } from '../../lib/figs.js';
import { buildCharacter } from '../../lib/char3d.js';

const P = new URLSearchParams(location.search);
const DURATION = 9.0, FPS = 30, SUB = Number(P.get('sub') ?? 1), SHUTTER = 0.5;
export const SETTLE = 9.0; // v2: live to the last frame (no frozen hold)
const SQ = H < 1200; // the 1:1 render
const canvas = document.getElementById('gl');
const { renderer, frame } = makeRenderer(canvas);
const scene = new THREE.Scene();
scene.background = new THREE.Color('#e7e3dc');
scene.add(new THREE.HemisphereLight('#fbfaf6', '#d8d0c2', 2.55));
const key = new THREE.DirectionalLight('#fff4e2', 1.35);
const KEY_DIR = new THREE.Vector3(-0.3, 0.8, 0.75).normalize();
key.castShadow = true; key.shadow.mapSize.set(2048, 2048); key.shadow.bias = -0.0004; key.shadow.normalBias = 0.02; key.shadow.radius = 6;
key.target.position.set(0, 0.8, -0.6); key.position.copy(key.target.position).addScaledVector(KEY_DIR, 20);
{ const c = key.shadow.camera; c.left = -4; c.right = 4; c.top = 4; c.bottom = -4; c.near = 5; c.far = 40; }
scene.add(key, key.target);
const R = rng(21);
const add = (geo, mat, x, y, z, { ry = 0, rx = 0, rz = 0, cast = true, recv = true, parent = scene } = {}) => {
  const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.rotation.set(rx, ry, rz); m.castShadow = cast; m.receiveShadow = recv; parent.add(m); return m;
};
function concrete(base, rep, seed) {
  const r = rng(seed), c = document.createElement('canvas'); c.width = c.height = 512; const g = c.getContext('2d');
  g.fillStyle = base; g.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 2600; i++) { g.fillStyle = r() < 0.5 ? 'rgba(30,34,38,.05)' : 'rgba(255,255,255,.09)'; const s = 1 + r() * 3; g.fillRect(r() * 512, r() * 512, s, s); }
  for (let i = 0; i < 40; i++) { g.fillStyle = 'rgba(120,110,95,.015)'; g.beginPath(); g.arc(r() * 512, r() * 512, 20 + r() * 60, 0, 7); g.fill(); }
  const t = canvasTex(c, renderer); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(...rep); return t;
}
const WZ = -1.5;
add(new THREE.PlaneGeometry(14, 10), new THREE.MeshLambertMaterial({ map: concrete('#e7e3dc', [5, 4], 3) }), 0, 0, WZ + 5, { rx: -Math.PI / 2, cast: false });
add(new THREE.PlaneGeometry(14, 8), new THREE.MeshLambertMaterial({ map: concrete('#ebe7e0', [5, 3], 4) }), 0, 4, WZ, { cast: false });
// floor seams (saw cuts)
for (const z of [WZ + 1.6, WZ + 3.6]) add(new THREE.PlaneGeometry(14, 0.012), new THREE.MeshBasicMaterial({ color: '#d2ccc1', toneMapped: false }), 0, 0.001, z, { rx: -Math.PI / 2, cast: false });
// hazard tape: along the wall foot (on the floor) and a band high on the wall
function hazardTex(rep) {
  const c = document.createElement('canvas'); c.width = 256; c.height = 64; const g = c.getContext('2d');
  g.fillStyle = '#ffc414'; g.fillRect(0, 0, 256, 64); g.fillStyle = '#1e2226';
  for (let x = -64; x < 320; x += 64) { g.beginPath(); g.moveTo(x, 64); g.lineTo(x + 32, 64); g.lineTo(x + 64 + 32, 0); g.lineTo(x + 64, 0); g.closePath(); g.fill(); }
  const t = canvasTex(c, renderer); t.wrapS = THREE.RepeatWrapping; t.repeat.set(rep, 1); return t;
}
add(new THREE.PlaneGeometry(14, 0.16), new THREE.MeshLambertMaterial({ map: hazardTex(40) }), 0, 0.002, WZ + 0.14, { rx: -Math.PI / 2, cast: false });
add(new THREE.PlaneGeometry(14, 0.16), new THREE.MeshLambertMaterial({ map: hazardTex(40) }), 0, 3.28, WZ + 0.002, { cast: false });
add(new THREE.PlaneGeometry(14, 0.16), new THREE.MeshLambertMaterial({ map: hazardTex(40) }), 0, 0.002, WZ + 4.25, { rx: -Math.PI / 2, cast: false });
// a pallet + boxes at the far left, a cone right (set dressing at the frame edges)
const PX = SQ ? 0.78 : 0;
add(new THREE.BoxGeometry(1.0, 0.13, 0.8), new THREE.MeshLambertMaterial({ color: '#b47a45' }), -2.35 + PX, 0.065, WZ + 0.6);
add(new THREE.BoxGeometry(0.62, 0.48, 0.55), new THREE.MeshLambertMaterial({ color: '#e0a86b' }), -2.45 + PX, 0.37, WZ + 0.6, { ry: 0.1 });
add(new THREE.BoxGeometry(0.42, 0.34, 0.4), new THREE.MeshLambertMaterial({ color: '#c98a4b' }), -2.4 + PX, 0.78, WZ + 0.58, { ry: -0.15 });
{
  const cone = new THREE.Group(); cone.position.set(SQ ? 1.8 : 2.35, 0, WZ + 0.9); scene.add(cone);
  add(new THREE.BoxGeometry(0.42, 0.04, 0.42), new THREE.MeshLambertMaterial({ color: '#1e2226' }), 0, 0.02, 0, { parent: cone });
  add(new THREE.ConeGeometry(0.16, 0.62, 24), new THREE.MeshLambertMaterial({ color: '#ff7a00' }), 0, 0.35, 0, { parent: cone });
  add(new THREE.CylinderGeometry(0.105, 0.125, 0.1, 24), new THREE.MeshLambertMaterial({ color: '#f4f7f9' }), 0, 0.33, 0, { parent: cone });
}

// ---------------- VLOERTAAL stencil spray ----------------
const SW = 2600, SH = 560;
let stencilArt, sprayC, sprayG, sprayTex, sprayMesh;
function buildStencil() {
  const c = document.createElement('canvas'); c.width = SW; c.height = SH; const g = c.getContext('2d');
  const word = 'VLOERTAAL', fs = 380;
  g.font = `900 ${fs * 1.42}px "BSStencil"`; g.textBaseline = 'alphabetic';
  const sp = 40; const widths = [...word].map((ch) => g.measureText(ch).width);
  const total = widths.reduce((a, b) => a + b, 0) + sp * (word.length - 1);
  let x = (SW - total) / 2; const base = SH / 2 + fs * 1.42 * 0.36;
  const glyph = document.createElement('canvas'); glyph.width = SW; glyph.height = SH; const gg = glyph.getContext('2d');
  gg.font = g.font; gg.fillStyle = '#1e2226'; gg.textBaseline = 'alphabetic';
  const cuts = [];
  [...word].forEach((ch, i) => {
    gg.fillText(ch, x, base);
    const w = widths[i], top = base - fs * 0.72, h = fs * 0.72, stem = fs * 0.2;
    if (ch === 'O') cuts.push([x + w / 2 - 9, top - 10, 18, h * 0.3], [x + w / 2 - 9, base - h * 0.25, 18, h * 0.3]);
    if (ch === 'A') cuts.push([x + w / 2 - 9, top - 10, 18, h * 0.22], [x + w * 0.2, base - h * 0.42, w * 0.6, 14]);
    if (ch === 'R') cuts.push([x + stem + 18, top - 10, 16, h * 0.62]);
    if (ch === 'E') cuts.push([x + stem + 20, top - 10, 16, h + 20]);
    if (ch === 'L') cuts.push([x + stem + 20, base - h * 0.35, 16, h * 0.4]);
    if (ch === 'T') cuts.push([x + w * 0.2, top + h * 0.22, w * 0.6, 14]);
    if (ch === 'V') cuts.push([x + w * 0.3, top + h * 0.45, w * 0.4, 14]);
    x += w + sp;
  });
  // v2: the stencil bridges come from the font itself (no extra cut bars)
  // spray look: soft overspray halo + speckle + the crisp stencil paint
  g.save(); g.filter = 'blur(10px)'; g.globalAlpha = 0.22; g.drawImage(glyph, 0, 0); g.restore();
  const r = rng(77);
  g.fillStyle = 'rgba(30,34,38,.5)';
  const data = gg.getImageData(0, 0, SW, SH).data;
  for (let i = 0; i < 26000; i++) {
    const px = Math.floor(r() * SW), py = Math.floor(r() * SH);
    let near = false; for (const [dx, dy] of [[14, 0], [-14, 0], [0, 14], [0, -14], [24, 24], [-24, -24]]) { const q = ((py + dy) * SW + (px + dx)) * 4 + 3; if (data[q] > 128) { near = true; break; } }
    if (near) { const s = 1 + r() * 2.5; g.fillRect(px, py, s, s); }
  }
  g.globalAlpha = 0.94; g.drawImage(glyph, 0, 0); g.globalAlpha = 1;
  // paint texture: slight mottling inside the letters
  g.globalCompositeOperation = 'source-atop';
  for (let i = 0; i < 900; i++) { g.fillStyle = r() < 0.5 ? 'rgba(255,255,255,.05)' : 'rgba(0,0,0,.08)'; g.beginPath(); g.arc(r() * SW, r() * SH, 6 + r() * 26, 0, 7); g.fill(); }
  g.globalCompositeOperation = 'source-over';
  stencilArt = c;
  sprayC = document.createElement('canvas'); sprayC.width = SW; sprayC.height = SH; sprayG = sprayC.getContext('2d');
  sprayTex = canvasTex(sprayC, renderer);
  const wM = 3.0;
  sprayMesh = new THREE.Mesh(new THREE.PlaneGeometry(wM, wM * SH / SW), new THREE.MeshLambertMaterial({ map: sprayTex, transparent: true, depthWrite: false }));
  sprayMesh.position.set(0, 2.78, WZ + 0.004); sprayMesh.receiveShadow = true; scene.add(sprayMesh);
}
const SPRAY0 = 0.25, SPRAY1 = 1.2;
let lastSpray = -1;
function drawSpray(t) {
  const k = clamp((t - SPRAY0) / (SPRAY1 - SPRAY0));
  const q = Math.round(k * 400) / 400; if (q === lastSpray) return; lastSpray = q;
  const g = sprayG; g.clearRect(0, 0, SW, SH);
  if (q <= 0) { sprayTex.needsUpdate = true; return; }
  const x = lerp(240, SW - 200, inOut(q)) + (q >= 1 ? 400 : 0);
  // reveal with a soft, slightly wobbly edge (the can sweeping left → right, in two passes)
  g.drawImage(stencilArt, 0, 0);
  g.globalCompositeOperation = 'destination-in';
  const grad = g.createLinearGradient(x - 160, 0, x + 40, 0); grad.addColorStop(0, 'rgba(0,0,0,1)'); grad.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = grad; g.fillRect(0, 0, SW, SH);
  g.globalCompositeOperation = 'source-over';
  // fresh mist at the nozzle
  if (q < 1) { const r = rng(1 + Math.floor(q * 400)); g.fillStyle = 'rgba(30,34,38,.35)';
    for (let i = 0; i < 500; i++) { const a = r() * 6.28, d = Math.pow(r(), 2) * 150; g.fillRect(x - 40 + Math.cos(a) * d, SH / 2 + Math.sin(a) * d * 1.6, 2, 2); } }
  sprayTex.needsUpdate = true;
}

// ---------------- Bram (3D): walks in from the right, turns to us and waves palm-forward ----------------
const BS = 1.08;                                  // mascot scale
const MARK = { x: SQ ? 0.5 : 0.48, z: 0.3 };
let bram;
async function buildBram() {
  bram = await buildCharacter('bram', { renderer, base: '../../assets/chars/' });
  bram.root.scale.setScalar(BS); scene.add(bram.root);
  bram.pose.blinkOffset = 1.1;
}
const HIP_H = 0.905;                              // pelvis height standing (unscaled)
const WALK1 = 0.95, TURN1 = 1.25;                 // walk-in ends, turn to camera ends
const STRIDE = 0.46;                              // m per step (unscaled)
const V = (x, y, z) => new THREE.Vector3(x, y, z);
const PALM = new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().makeBasis(V(-1, 0, 0), V(0, -1, 0), V(0, 0, 1)));
function poseBram(t) {
  // position: ease from off-frame right to the mark (decelerating steps)
  const k = easeOut(seg(t, 0, WALK1));
  const x = lerp(2.75, MARK.x, k), dist = (2.75 - x) / BS;   // distance walked (unscaled)
  const walking = t < WALK1 + 0.15;
  const ph = (dist / STRIDE) * Math.PI;                       // step phase
  const amp = 1 - smooth(seg(t, WALK1 - 0.25, WALK1 + 0.1));  // the last step settles
  const yaw = lerp(-Math.PI / 2, -0.12, smooth(seg(t, WALK1 - 0.35, TURN1)));
  bram.root.position.set(x, BS * (HIP_H - 0.012 * amp * Math.abs(Math.cos(ph)) + 0.006), MARK.z);
  bram.root.rotation.set(0, yaw, 0);
  bram.pose.lean = 0.04 * amp; bram.pose.headYaw = -yaw * 0.35 * (1 - smooth(seg(t, WALK1 - 0.3, TURN1))) ; bram.pose.headPitch = -0.04; bram.pose.headRoll = 0.05 * smooth(seg(t, TURN1, TURN1 + 0.4));
  bram.update(t);
  bram.root.updateMatrixWorld(true);
  const R = bram.root;
  // legs: feet swing forward/back with lifts while walking, then stand
  for (const s of ['L', 'R']) {
    const sx = s === 'L' ? 1 : -1, p = ph + (s === 'L' ? 0 : Math.PI);
    const fwd = 0.2 * Math.sin(p) * amp, lift = 0.07 * Math.max(0, Math.cos(p)) * amp;
    const ank = R.localToWorld(V(sx * 0.1, -HIP_H + 0.075 + lift, 0.02 + fwd));
    bram.legIK(s, ank, R.localToWorld(V(sx * 0.05, -0.4, 1.5)), new THREE.Quaternion().setFromRotationMatrix(R.matrixWorld));
  }
  // arms: swing while walking; then his left arm (screen right) waves palm-forward, the right rests
  const up = smooth(seg(t, TURN1 - 0.35, TURN1 + 0.1));
  const w = Math.sin((t - TURN1) * Math.PI * 2 * 1.45);        // wave loop (1.45 Hz) to the last frame
  const waveAmp = up * (0.75 + 0.25 * Math.sin((t - TURN1) * 1.3));
  // left arm (screen right): from a walking swing up to the wave — the elbow stays put out to the side and
  // the forearm rocks side to side from it (±15°, 2 waves/s); open hand, palm to the camera, fingers up
  bram.setOpenHand('L', up > 0.5);
  const rock = THREE.MathUtils.degToRad(15) * Math.sin((t - TURN1) * Math.PI * 2 * 2.0) * smooth(seg(t, TURN1, TURN1 + 0.3));
  const elbow = V(0.3, 0.36, 0.1), fa = 0.228;
  const waveL = R.localToWorld(elbow.clone().add(V(-Math.sin(rock) * fa, Math.cos(rock) * fa, 0.02)));
  const swingL = R.localToWorld(V(0.2, 0.15, 0.1 * Math.sin(ph + Math.PI) * amp));
  const qWave = R.getWorldQuaternion(new THREE.Quaternion()).multiply(new THREE.Quaternion().setFromAxisAngle(V(0, 0, 1), rock)).multiply(PALM);
  const qSwing = R.getWorldQuaternion(new THREE.Quaternion()).multiply(new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().makeBasis(V(0, 0, 1), V(0, 1, 0), V(-1, 0, 0))));
  bram.armIK('L', swingL.lerp(waveL, up), R.localToWorld(elbow.clone().add(V(0.25, -0.05, -0.05))), qSwing.slerp(qWave, up));
  // right arm: swings, then rests relaxed at his side
  bram.armIK('R', R.localToWorld(V(-0.22, 0.14 + 0.01 * Math.sin(t * 1.7), 0.1 * Math.sin(ph) * amp + 0.04 * (1 - amp))), R.localToWorld(V(-0.6, 0.2, -0.6)));
}

// ---------------- checks + the kraft label ----------------
let checks = [], kraft;
function buildLabels() {
  for (const txt of ['Gratis', 'Geen account', 'Geen reclame']) {
    const mc = document.createElement('canvas').getContext('2d'); mc.font = '700 108px "Lexend V"';
    const cw = Math.ceil(mc.measureText(txt).width + 300);
    const c = labelCanvas(cw, 230, (g, w, h) => {
      g.fillStyle = '#ffc414'; g.beginPath(); g.arc(118, h / 2, 74, 0, 7); g.fill(); g.lineWidth = 10; g.strokeStyle = PAL.inkUI; g.stroke();
      g.lineWidth = 20; g.lineCap = 'round'; g.lineJoin = 'round'; g.beginPath(); g.moveTo(84, h / 2 + 2); g.lineTo(110, h / 2 + 28); g.lineTo(156, h / 2 - 26); g.stroke();
      g.fillStyle = PAL.inkUI; g.font = '700 108px "Lexend V"'; g.textBaseline = 'middle'; g.fillText(txt, 230, h / 2 + 6);
    }, { bg: '#fffdf8', bw: 12, r: 40 });
    // trim the label to the text
    const m = slabCard(c, renderer, cw / 1180 * 1.42, { depth: 0.02 }); scene.add(m); checks.push(m);
    m.traverse((o) => { o.castShadow = false; o.receiveShadow = false; });
    const { w: mw, h: mh } = m.userData;
    const ds = new THREE.Mesh(roundPlane(mw * 0.985, mh * 0.97, Math.min(mw, mh) * 0.18), new THREE.MeshBasicMaterial({ color: '#1e2226', transparent: true, opacity: 0.16, depthWrite: false, toneMapped: false }));
    ds.position.set(0.014, -0.019, -0.0105); m.add(ds);
  }
  const c = labelCanvas(2200, 580, (g, w, h) => {
    // kraft fibres
    const r = rng(5); for (let i = 0; i < 3000; i++) { g.fillStyle = r() < 0.5 ? 'rgba(120,80,30,.06)' : 'rgba(255,255,255,.08)'; g.fillRect(r() * w, r() * h, 2 + r() * 10, 1.5); }
    g.fillStyle = PAL.inkUI; g.font = '800 250px "Lexend V"'; g.textBaseline = 'alphabetic'; g.textAlign = 'left';
    const a = g.measureText('vloertaal').width, d = g.measureText('.').width, n = g.measureText('nl').width;
    let x = (w - a - d - n) / 2;
    g.fillText('vloertaal', x, 305); g.fillStyle = '#ffc414'; g.fillText('.', x + a, 305); g.fillStyle = PAL.inkUI; g.fillText('nl', x + a + d, 305);
    g.font = '600 92px "Lexend V"'; g.fillStyle = '#3c4a56'; g.textAlign = 'center'; g.fillText('Nederlands voor op de werkvloer', w / 2, 460);
  }, { bg: '#ebd6b5', bw: 14, r: 48 });
  kraft = slabCard(c, renderer, 2.0, { depth: 0.03, side: '#c9a774' }); scene.add(kraft);
  // tape strips on the label corners
  for (const [x, y, r] of [[-0.9, 0.27, 0.6], [0.9, 0.27, -0.6]]) {
    const tp = new THREE.Mesh(new THREE.PlaneGeometry(0.34, 0.09), new THREE.MeshBasicMaterial({ color: '#d4b07c', transparent: true, opacity: 0.85, toneMapped: false }));
    tp.position.set(x, y, 0.017); tp.rotation.z = r; kraft.add(tp);
  }
}
const CHECK_T = [1.1, 1.6, 2.1];
function poseLabels(t) {
  checks.forEach((m, i) => {
    const k = seg(t, CHECK_T[i] - 0.05, CHECK_T[i] + 0.15);
    m.visible = k > 0;
    const s = k < 0.6 ? 1.1 * easeOut(k / 0.6) : 1.1 - 0.1 * smooth((k - 0.6) / 0.4);
    m.scale.setScalar(Math.max(0.001, s));
    m.position.set(-1.4 + m.userData.w / 2, 2.06 - i * 0.42, -1.36 + i * 0.03);
    m.rotation.set(0, 0.1, -0.01 * i);
  });
  const k = seg(t, 2.55, 3.2);
  kraft.visible = k > 0;
  const e = backOut(k, 1.4);
  const bob = Math.max(0, t - 3.2), amp = Math.min(1, bob / 0.8);
  kraft.position.set(0, lerp(-0.25, 0.37, e) + 0.007 * amp * Math.sin(bob * 2.1), 0.6);
  kraft.rotation.set(lerp(-1.1, -0.12, e) + 0.012 * amp * Math.sin(bob * 2.1 + 0.9), 0, 0.006 * amp * Math.sin(bob * 1.3));
}

// ---------------- camera: settles out of the whip, then a slow drift; still from SETTLE ----------------
const camera = new THREE.PerspectiveCamera(38, W / H, 0.01, 100);
const k = (t, pos, tgt, fov, roll = 0) => [t, [...pos, ...tgt, fov, roll]];
const rig = camRig([
  k(0.0, [0.4, 1.95, 4.1], [0.2, 2.5, -1.5], 46, 5),
  k(0.5, [0.12, 1.98, 4.7], [0.0, 1.42, -0.65], 39, 0.4),
  k(2.6, [0.04, 1.95, 4.95], [0.0, 1.27, -0.62], 38, 0),
  k(SETTLE, [0.0, 1.95, 5.1], [0.0, 1.21, -0.6], 38, 0),
], { tan0: [-0.5, 0.1, 1.2, 0, -4.0, 0, -5, -8] });
// v2: 8 sub-frames (at --sub 4) on the whip-settle and on every pop; slow drift elsewhere
function subAt(t) {           // v3: 8 on the settle + walk-in, 6 on every pop, 3 on the live waving tail
  if (P.get('sub') && P.get('sub') !== 'auto') return Number(P.get('sub'));
  if (t < 1.4) return 8;
  for (const c of CHECK_T) if (t > c - 0.1 && t < c + 0.2) return 6;
  if (t > 2.5 && t < 3.3) return 4;
  return 2;
}
function poseAt(t) {
  poseBram(t); poseLabels(t);
  rig(camera, t);
}
function setTime(t) {
  t = Math.min(t, SETTLE);
  drawSpray(t);
  const n = subAt(t);
  frame(scene, camera, n, (i, nn) => { const ts = nn > 1 ? t + ((i + 0.5) / nn - 0.5) * (SHUTTER / FPS) : t; poseAt(clamp(ts, 0, SETTLE)); });
  return true;
}
window.DURATION = DURATION; window.SETTLE = SETTLE; window.setTime = setTime;
window.ready = (async () => {
  const bs = new FontFace('BSStencil', 'url(../../assets/fonts/big-shoulders-stencil-display-latin-900-normal.woff2)', { weight: '900' }); await bs.load(); document.fonts.add(bs);
  await document.fonts.load('900 66px "Lexend V"'); await document.fonts.load('800 66px "Lexend V"'); await document.fonts.load('700 66px "Lexend V"'); await document.fonts.load('600 66px "Lexend V"'); await document.fonts.ready;
  buildStencil(); await buildBram(); buildLabels();
  setTime(Number(P.get('t') ?? 0));
  return true;
})().catch((e) => { console.error(e.stack || e); throw e; });
