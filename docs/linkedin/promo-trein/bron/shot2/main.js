// Shot 2 (film 9.0–15.0 s, local 0–6): Jada on a sunny café terrace. Pull OUT of her phone (Polish chat,
// tap "Bijna. Nog vijf minuten."), fly back and around to reveal the terrace, push in to the streak
// screen ("Dag 7 op rij" pops), then dive into the screen (hand-off to Henk's laptop).
import * as THREE from 'three';
import { W, H, PAL, clamp, seg, lerp, smooth, inOut, makeRenderer, skyDome, canvasTex, rng, flat } from '../lib/kit.js';
import { easeOut, backOut, rr, roundBox, loadImg, liveCanvas, figureWithPhone, labelCanvas, slabCard, camRig, frameScreen, placeCap } from '../lib/figs.js';

const P = new URLSearchParams(location.search);
const DURATION = 6.0, FPS = 30, SUB = Number(P.get('sub') ?? 1), SHUTTER = 0.5;
const canvas = document.getElementById('gl');
const { renderer, frame } = makeRenderer(canvas);
const scene = new THREE.Scene();
scene.fog = new THREE.Fog('#f3e6cf', 40, 140);
const sky = skyDome({ top: '#5aa9e0', mid: '#a7d4f0', horizon: '#f7e6c6', below: '#d9cbb0' }); scene.add(sky);
scene.add(new THREE.HemisphereLight('#e6f1ff', '#d8c7a8', 2.3));
const sun = new THREE.DirectionalLight('#ffe2a8', 2.7);
const SUN_DIR = new THREE.Vector3(0.75, 0.62, 0.42).normalize();
sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048); sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.02; sun.shadow.radius = 2;
scene.add(sun, sun.target);
{ sun.target.position.set(0.5, 0, -0.5); sun.position.copy(sun.target.position).addScaledVector(SUN_DIR, 40);
  const c = sun.shadow.camera; c.left = -7; c.right = 7; c.top = 7; c.bottom = -7; c.near = 10; c.far = 80; }
const lam = (c) => new THREE.MeshLambertMaterial({ color: c });
const add = (geo, mat, x, y, z, { ry = 0, rx = 0, rz = 0, cast = true, recv = true, parent = scene } = {}) => {
  const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.rotation.set(rx, ry, rz); m.castShadow = cast; m.receiveShadow = recv; parent.add(m); return m;
};
function tube(a, b, r, mat, parent = scene) {
  const A = new THREE.Vector3(...a), B = new THREE.Vector3(...b), d = B.clone().sub(A);
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, d.length(), 8), mat);
  m.position.copy(A).addScaledVector(d, 0.5); m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize()); m.castShadow = true; parent.add(m); return m;
}
function texCanvas(w, h, draw, rep = [1, 1]) {
  const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h);
  const t = canvasTex(c, renderer); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(...rep); return t;
}

// ---------------- set ----------------
const R = rng(5);
// pavement: warm grey clinkers, running bond
const paveTex = texCanvas(512, 512, (g, w, h) => {
  g.fillStyle = '#b9ab98'; g.fillRect(0, 0, w, h);
  const bw = 64, bh = 32;
  for (let y = 0; y < h; y += bh) for (let x = -bw; x < w; x += bw) {
    const ox = (y / bh) % 2 ? bw / 2 : 0; const v = R();
    g.fillStyle = v < 0.33 ? '#c9b8a2' : v < 0.66 ? '#c2ae96' : '#cfc0ab'; g.fillRect(x + ox + 2, y + 2, bw - 4, bh - 4);
  }
}, [10, 10]);
add(new THREE.PlaneGeometry(14.4, 20), new THREE.MeshLambertMaterial({ map: paveTex }), -2.6, 0, 5, { rx: -Math.PI / 2, cast: false });
// street beyond the terrace (darker cobbles)
const cobTex = texCanvas(256, 256, (g, w, h) => { g.fillStyle = '#8f8c88'; g.fillRect(0, 0, w, h);
  for (let y = 0; y < h; y += 32) for (let x = 0; x < w; x += 32) { g.fillStyle = ['#a29d96', '#9a958d', '#aaa49c'][Math.floor(R() * 3)]; g.fillRect(x + 2 + ((y / 32) % 2) * 16, y + 2, 28, 28); } }, [20, 3]);
add(new THREE.PlaneGeometry(24.4, 6), new THREE.MeshLambertMaterial({ map: cobTex }), -7.6, 0.002, 6.5, { rx: -Math.PI / 2, cast: false });
// canal along the right: quay, water, houses across
add(new THREE.BoxGeometry(0.35, 0.3, 60), lam('#d8d2c6'), 4.6, -0.12, -10);
add(new THREE.BoxGeometry(7, 1.2, 60), lam('#7d7468'), 8.2, -1.25, -10, { cast: false });
const waterTex = texCanvas(256, 256, (g, w, h) => { g.fillStyle = '#4f9cc4'; g.fillRect(0, 0, w, h); g.strokeStyle = 'rgba(220,240,255,.55)'; g.lineWidth = 3;
  for (let i = 0; i < 26; i++) { const x = R() * w, y = R() * h; g.beginPath(); g.moveTo(x, y); g.lineTo(x + 14 + R() * 30, y); g.stroke(); } }, [3, 18]);
add(new THREE.PlaneGeometry(7, 60), new THREE.MeshLambertMaterial({ map: waterTex }), 8.2, -0.62, -10, { rx: -Math.PI / 2, cast: false });
const HOUSE = ['#a9573a', '#7a3b2c', '#c98b5a', '#5d4a3e', '#b4683f', '#8b4d36', '#d0a073'];
for (let i = 0; i < 9; i++) {
  const z = 4 - i * 2.4, hgt = 7 + R() * 2.5, col = HOUSE[i % HOUSE.length];
  const sh = new THREE.Shape(); sh.moveTo(-1.15, 0); sh.lineTo(1.15, 0); sh.lineTo(1.15, hgt);
  if (i % 3 === 0) { sh.lineTo(0.75, hgt); sh.lineTo(0.75, hgt + 0.6); sh.lineTo(0.35, hgt + 0.6); sh.lineTo(0.35, hgt + 1.2); sh.lineTo(-0.35, hgt + 1.2); sh.lineTo(-0.35, hgt + 0.6); sh.lineTo(-0.75, hgt + 0.6); sh.lineTo(-0.75, hgt); }
  else if (i % 3 === 1) { sh.lineTo(0, hgt + 1.4); } else { sh.quadraticCurveTo(0.9, hgt + 1.1, 0.25, hgt + 1.3); sh.lineTo(-0.25, hgt + 1.3); sh.quadraticCurveTo(-0.9, hgt + 1.1, -1.15, hgt); }
  sh.closePath();
  const g = new THREE.ExtrudeGeometry(sh, { depth: 6, bevelEnabled: false });
  const m = add(g, lam(col), 11.8, -0.6, z, { ry: Math.PI / 2 });
  for (let f = 0; f < 3; f++) for (let k = -1; k <= 1; k += 2) {
    add(new THREE.BoxGeometry(0.06, 1.05, 0.62), lam('#f4f1ea'), 11.75, 1.4 + f * 2.1, z + k * 0.55, { cast: false });
    add(new THREE.BoxGeometry(0.07, 0.86, 0.46), lam('#2c3a42'), 11.73, 1.4 + f * 2.1, z + k * 0.55, { cast: false });
  }
}
// trees on the quay
for (const [x, z, s] of [[5.3, -3.5, 1.0], [5.4, -10.5, 1.15], [5.2, -17, 1.1]]) {
  add(new THREE.CylinderGeometry(0.09, 0.12, 2.6 * s, 7), lam('#6b4f3a'), x, 1.3 * s, z);
  const crown = add(new THREE.IcosahedronGeometry(1.35 * s, 1), lam('#6fae45'), x, 3.2 * s, z); crown.scale.set(1, 1.1, 1);
  add(new THREE.IcosahedronGeometry(0.9 * s, 1), lam('#82c050'), x + 0.5, 3.6 * s, z + 0.4);
}

// the café façade
const FZ = -2.75;
const brickTex = texCanvas(512, 512, (g, w, h) => {
  g.fillStyle = '#e8d9c4'; g.fillRect(0, 0, w, h);
  for (let y = 0; y < h; y += 24) for (let x = -64; x < w; x += 64) { const ox = (y / 24) % 2 ? 32 : 0;
    g.fillStyle = ['#b0583a', '#a8513a', '#b9623f', '#9f4c35'][Math.floor(R() * 4)]; g.fillRect(x + ox + 2, y + 2, 60, 20); }
}, [6, 3]);
add(new THREE.BoxGeometry(14, 6.5, 0.3), new THREE.MeshLambertMaterial({ map: brickTex }), -1, 3.25, FZ - 0.15);
// interior: dark with warm pendant lamps
const GREEN = '#1f5b3a';
add(new THREE.BoxGeometry(14, 6.5, 0.1), lam('#2a2622'), -1, 3.25, FZ - 1.6, { cast: false });
for (const [x0, x1] of [[-4.6, -0.5], [0.5, 3.6]]) {
  const cx = (x0 + x1) / 2, w = x1 - x0;
  // cut the wall: dark recess box in front of the brick (window)
  add(new THREE.BoxGeometry(w, 2.15, 0.05), new THREE.MeshLambertMaterial({ color: '#3b3a35' }), cx, 1.62, FZ + 0.02, { cast: false });
  const glass = add(new THREE.PlaneGeometry(w, 2.15), new THREE.MeshBasicMaterial({ color: '#7e9aa6', transparent: true, opacity: 0.35, toneMapped: false }), cx, 1.62, FZ + 0.06, { cast: false, recv: false });
  for (const lx of [cx - w / 4, cx + w / 4]) {
    add(new THREE.ConeGeometry(0.22, 0.2, 14, 1, true), new THREE.MeshBasicMaterial({ color: '#ffc414', side: THREE.DoubleSide, toneMapped: false }), lx, 2.3, FZ + 0.035, { cast: false });
    add(new THREE.CircleGeometry(0.13, 14), new THREE.MeshBasicMaterial({ color: '#fff3b0', toneMapped: false }), lx, 2.19, FZ + 0.036, { cast: false });
  }
  // green frames + mullion + sill
  for (const [fx, fy, fw, fh] of [[cx, 2.72, w + 0.16, 0.12], [cx, 0.52, w + 0.16, 0.12], [x0, 1.62, 0.12, 2.3], [x1, 1.62, 0.12, 2.3], [cx, 1.62, 0.07, 2.2], [cx, 2.2, w, 0.06]])
    add(new THREE.BoxGeometry(fw, fh, 0.12), lam(GREEN), fx, fy, FZ + 0.08);
  add(new THREE.BoxGeometry(w + 0.3, 0.06, 0.25), lam('#f4f1ea'), cx, 0.45, FZ + 0.12);
  // reflections: two soft diagonal streaks
  const st = add(new THREE.PlaneGeometry(0.35, 2.6), new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.18, toneMapped: false }), cx + w * 0.18, 1.62, FZ + 0.07, { rz: -0.5, cast: false, recv: false });
  st.scale.y = 0.85;
}
// door
add(new THREE.BoxGeometry(0.9, 2.35, 0.08), lam(GREEN), 0, 1.18, FZ + 0.03);
add(new THREE.BoxGeometry(0.62, 1.2, 0.02), new THREE.MeshLambertMaterial({ color: '#3b3a35' }), 0, 1.55, FZ + 0.08, { cast: false });
add(new THREE.SphereGeometry(0.035, 10, 8), lam('#e0a800'), 0.33, 1.1, FZ + 0.1);
// awning: green/white stripes sloping out, scalloped valance
const AW = { x0: -4.9, x1: 4.0, yw: 3.15, yf: 2.62, zf: FZ + 1.55 };
const awn = new THREE.Group(); scene.add(awn);
const sl = Math.atan2(AW.yw - AW.yf, AW.zf - FZ), len = Math.hypot(AW.yw - AW.yf, AW.zf - FZ);
for (let x = AW.x0, i = 0; x < AW.x1; x += 0.36, i++) {
  const col = i % 2 ? '#f4f7f9' : '#2f8a45';
  add(new THREE.BoxGeometry(0.36, 0.025, len), lam(col), x + 0.18, (AW.yw + AW.yf) / 2, (FZ + AW.zf) / 2, { rx: sl, parent: awn });
  const v = add(new THREE.BoxGeometry(0.36, 0.26, 0.02), lam(col), x + 0.18, AW.yf - 0.12, AW.zf, { parent: awn });
  const sc = add(new THREE.CylinderGeometry(0.18, 0.18, 0.02, 16, 1, false, 0, Math.PI), lam(col), x + 0.18, AW.yf - 0.25, AW.zf, { rx: Math.PI / 2, rz: Math.PI / 2, parent: awn });
  sc.rotation.set(Math.PI / 2, 0, 0); sc.scale.set(1, 1, 0.6);
}
// sign board above the awning
function buildSign() {
const signC = labelCanvas(1400, 300, (g, w, h) => {
  g.fillStyle = PAL.inkUI; g.font = '800 170px "Lexend V"'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('CAFÉ', w / 2, h / 2 + 8);
}, { bg: '#fff3b0', bw: 18, r: 40 });
const sign = slabCard(signC, renderer, 2.2, { depth: 0.06 }); sign.position.set(-0.4, 3.9, FZ + 0.05); scene.add(sign);
}

// plants: terracotta pots with leafy balls, a long planter
const leaf = lam('#5f9e3c'), leaf2 = lam('#7ac70c'), pot = lam('#e0703f');
for (const [x, z, s] of [[-5.3, FZ + 0.45, 1.1], [4.1, FZ + 0.5, 1.0], [-3.2, 1.6, 0.8], [3.7, 1.7, 0.75]]) {
  add(new THREE.CylinderGeometry(0.26 * s, 0.19 * s, 0.45 * s, 12), pot, x, 0.225 * s, z);
  add(new THREE.IcosahedronGeometry(0.42 * s, 1), leaf, x, 0.75 * s, z);
  add(new THREE.IcosahedronGeometry(0.27 * s, 1), leaf2, x + 0.18 * s, 0.98 * s, z + 0.1 * s);
}
add(new THREE.BoxGeometry(2.6, 0.38, 0.4), lam('#a86d3a'), -2.5, 0.19, FZ + 0.35);
for (let i = 0; i < 6; i++) add(new THREE.IcosahedronGeometry(0.2 + R() * 0.08, 1), i % 2 ? leaf : leaf2, -3.6 + i * 0.44, 0.48, FZ + 0.35);
for (let i = 0; i < 6; i++) add(new THREE.SphereGeometry(0.05, 8, 6), lam(['#ff7a00', '#ffc414', '#e0703f'][i % 3]), -3.45 + i * 0.44, 0.62, FZ + 0.46, { cast: false });

// bistro furniture
const metal = lam('#2a2e33'), marble = lam('#f4f1ea');
function table(x, z) {
  add(new THREE.CylinderGeometry(0.4, 0.4, 0.035, 32), marble, x, 0.74, z);
  add(new THREE.CylinderGeometry(0.025, 0.025, 0.72, 8), metal, x, 0.37, z);
  add(new THREE.CylinderGeometry(0.22, 0.25, 0.03, 20), metal, x, 0.015, z);
}
function chair(x, z, ry) {
  const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = ry; scene.add(g);
  add(new THREE.CylinderGeometry(0.21, 0.21, 0.04, 20), lam('#c98a4b'), 0, 0.46, 0, { parent: g });
  for (const [a, b] of [[0.14, 0.14], [-0.14, 0.14], [0.14, -0.14], [-0.14, -0.14]]) tube([a, 0, b], [a * 0.85, 0.45, b * 0.85], 0.012, metal, g);
  const back = add(new THREE.TorusGeometry(0.19, 0.014, 6, 20, Math.PI), metal, 0, 0.66, -0.17, { rx: -0.12, parent: g });
  tube([0.19, 0.47, -0.17], [0.19, 0.66, -0.19], 0.012, metal, g); tube([-0.19, 0.47, -0.17], [-0.19, 0.66, -0.19], 0.012, metal, g);
  add(new THREE.TorusGeometry(0.15, 0.01, 6, 20, Math.PI), metal, 0, 0.6, -0.175, { rx: -0.12, parent: g });
}
table(0, 0); chair(0, -0.55, 0); chair(0.62, 0.38, -2.3);
table(-2.4, -1.5); chair(-2.4, -2.1, 0.2); chair(-3.0, -1.1, 2.4); chair(-1.8, -1.0, -2.5);
// coffee: saucer, cup, handle, coffee, a spoon
const white = lam('#ffffff');
add(new THREE.CylinderGeometry(0.075, 0.06, 0.012, 24), white, 0.2, 0.764, 0.12);
add(new THREE.CylinderGeometry(0.045, 0.035, 0.07, 20), white, 0.2, 0.805, 0.12);
add(new THREE.CircleGeometry(0.041, 20), new THREE.MeshLambertMaterial({ color: '#8a5a3a' }), 0.2, 0.839, 0.12, { rx: -Math.PI / 2, cast: false });
add(new THREE.CircleGeometry(0.018, 12), new THREE.MeshLambertMaterial({ color: '#e8d2b4' }), 0.2, 0.8395, 0.12, { rx: -Math.PI / 2, cast: false });
add(new THREE.TorusGeometry(0.022, 0.006, 6, 12), white, 0.25, 0.81, 0.12, { ry: 0 });
add(new THREE.BoxGeometry(0.09, 0.004, 0.012), lam('#cfd8de'), 0.2, 0.772, 0.19, { ry: 0.4 });
// a little glass of water + a stroopwafel on the other table
add(new THREE.CylinderGeometry(0.03, 0.026, 0.1, 14), new THREE.MeshLambertMaterial({ color: '#cfe6f2', transparent: true, opacity: 0.6 }), -0.18, 0.81, 0.14);
add(new THREE.CylinderGeometry(0.075, 0.06, 0.012, 24), white, -2.3, 0.764, -1.45);
add(new THREE.CylinderGeometry(0.045, 0.035, 0.07, 20), white, -2.3, 0.805, -1.45);

// Dutch bike with a front crate (black omafiets), parked along the façade on the right
const bike = new THREE.Group(); bike.position.set(1.75, 0, -1.6); bike.rotation.y = -0.18; scene.add(bike);
{
  const blk = lam('#1e2226'), chrome = lam('#cfd8de'), tyre = lam('#2a2e33');
  for (const x of [-0.56, 0.56]) {
    add(new THREE.TorusGeometry(0.34, 0.022, 8, 40), tyre, x, 0.36, 0, { parent: bike });
    add(new THREE.TorusGeometry(0.31, 0.008, 6, 40), chrome, x, 0.36, 0, { parent: bike });
    for (let k = 0; k < 8; k++) { const a = (k / 8) * Math.PI; tube([x + Math.cos(a) * 0.3, 0.36 + Math.sin(a) * 0.3, 0], [x - Math.cos(a) * 0.3, 0.36 - Math.sin(a) * 0.3, 0], 0.003, chrome, bike); }
    add(new THREE.TorusGeometry(0.37, 0.03, 4, 24, Math.PI * 0.8), blk, x, 0.36, 0, { rz: 0.35, parent: bike });
  }
  const T = (a, b, r = 0.018) => tube(a, b, r, blk, bike);
  T([-0.56, 0.36, 0], [-0.1, 0.36, 0]); T([-0.1, 0.36, 0], [-0.2, 0.8, 0]); T([-0.56, 0.36, 0], [-0.2, 0.75, 0]);
  T([-0.1, 0.36, 0], [0.38, 0.72, 0]); T([-0.05, 0.42, 0], [0.4, 0.62, 0]); T([0.4, 0.82, 0], [0.56, 0.36, 0]);
  T([0.4, 0.82, 0], [0.36, 0.98, 0]); T([0.36, 0.98, -0.25], [0.36, 0.98, 0.25], 0.014);
  T([0.36, 0.98, -0.25], [0.2, 0.98, -0.32], 0.014); T([0.36, 0.98, 0.25], [0.2, 0.98, 0.32], 0.014);
  add(new THREE.BoxGeometry(0.22, 0.05, 0.12), lam('#6b3f22'), -0.22, 0.84, 0, { parent: bike });
  // crate on the front rack
  T([0.5, 0.75, -0.12], [0.75, 0.75, -0.12], 0.01); T([0.5, 0.75, 0.12], [0.75, 0.75, 0.12], 0.01);
  const crate = new THREE.Group(); crate.position.set(0.66, 0.92, 0); bike.add(crate);
  const wood = lam('#d9a868'), woodD = lam('#b9884a');
  add(new THREE.BoxGeometry(0.42, 0.02, 0.36), woodD, 0, -0.14, 0, { parent: crate });
  for (const s of [-1, 1]) for (let k = 0; k < 3; k++) {
    add(new THREE.BoxGeometry(0.42, 0.06, 0.015), wood, 0, -0.1 + k * 0.09, s * 0.18, { parent: crate });
    add(new THREE.BoxGeometry(0.015, 0.06, 0.36), wood, s * 0.21, -0.1 + k * 0.09, 0, { parent: crate });
  }
  add(new THREE.IcosahedronGeometry(0.1, 1), leaf2, 0.05, 0.05, 0.02, { parent: crate });
  add(new THREE.BoxGeometry(0.12, 0.2, 0.08), lam('#ffc414'), -0.1, 0.0, -0.05, { rz: 0.2, parent: crate });
}

// ---------------- Jada (cut-out, holds the phone) ----------------
const K = 1.05 / 126;
const JADA = new THREE.Vector3(0, 0.56, -0.42);
let jada, phoneInfo, screenMat, IMG = {}, LC;
async function buildJada() {
  for (const k of ['chat_pl', 'chat_pl_ok', 'streak_pl']) IMG[k] = await loadImg(`../assets/shots/${k}.png`);
  LC = liveCanvas(1170, 2532, renderer);
  screenMat = new THREE.MeshBasicMaterial({ map: LC.tex, toneMapped: false });
  jada = await figureWithPhone('jada-idle', renderer, { K, drop: 14, fwd: 0.22, screenMat, skin: '#8a5233', creaseC: '#6e3f26' });
  jada.group.position.copy(JADA); scene.add(jada.group);
  jada.phonePivot.rotation.z = jada.roll; jada.phonePivot.rotation.x = -0.1;
}
// "Dag 7 op rij" label that pops out of the phone
let dag;
function buildDag() {
  const c = labelCanvas(1100, 300, (g, w, h) => {
    // flame
    g.save(); g.translate(150, 158); g.scale(1.25, 1.25);
    g.fillStyle = '#ff7a00'; g.beginPath(); g.moveTo(0, -90); g.bezierCurveTo(60, -40, 70, 10, 55, 45); g.bezierCurveTo(40, 85, -40, 85, -55, 45); g.bezierCurveTo(-68, 10, -40, -20, -20, -40); g.bezierCurveTo(-15, -10, 0, -5, 5, -15); g.bezierCurveTo(15, -40, 5, -70, 0, -90); g.fill();
    g.fillStyle = '#ffc414'; g.beginPath(); g.moveTo(0, -10); g.bezierCurveTo(35, 15, 35, 50, 20, 62); g.bezierCurveTo(5, 72, -22, 70, -30, 52); g.bezierCurveTo(-38, 30, -15, 15, 0, -10); g.fill();
    g.restore();
    g.fillStyle = PAL.inkUI; g.font = '800 128px "Lexend V"'; g.textBaseline = 'middle'; g.fillText('Dag 7 op rij', 270, h / 2 + 6);
  }, { bg: '#fffdf8', bw: 14, r: 50 });
  dag = slabCard(c, renderer, 0.17, { depth: 0.012 });
  scene.add(dag);
}

// ---------------- the screen ----------------
const TAP = 0.95, STREAK = 4.35;
function drawScreen(t) {
  const g = LC.g; g.globalAlpha = 1; g.setTransform(1, 0, 0, 1, 0, 0);
  if (t < STREAK) {
    const x = smooth(clamp((t - TAP - 0.1) / 0.12));
    g.drawImage(IMG.chat_pl, 0, 0);
    if (x > 0) { g.globalAlpha = x; g.drawImage(IMG.chat_pl_ok, 0, 0); g.globalAlpha = 1; }
    // tap on answer 1
    const rp = clamp((t - TAP + 0.05) / 0.25);
    if (x < 1) { const s = 1 - 0.04 * Math.sin(Math.PI * clamp((t - TAP + 0.08) / 0.2));
      if (s < 1 && x < 0.5) { g.save(); g.translate(495, 1509); g.scale(s, s); g.translate(-495, -1509); g.drawImage(IMG.chat_pl, 48, 1400, 900, 220, 48, 1400, 900, 220); g.restore(); } }
    if (rp > 0 && rp < 1) {
      g.globalAlpha = Math.sin(rp * Math.PI) * 0.85; g.fillStyle = 'rgba(30,34,38,0.16)';
      g.beginPath(); g.arc(330, 1509, 50 + 170 * easeOut(rp), 0, 7); g.fill();
      g.lineWidth = 10; g.strokeStyle = '#fff'; g.stroke(); g.globalAlpha = 1;
    }
  } else {
    const x = smooth(clamp((t - STREAK) / 0.2));
    g.drawImage(IMG.chat_pl_ok, 0, 0);
    g.globalAlpha = x; g.fillStyle = '#e7e3dc'; g.drawImage(IMG.streak_pl, 0, 0); g.globalAlpha = 1;
    // the streak card pops (scale overshoot) and the 7th day ticks
    const k = clamp((t - STREAK - 0.15) / 0.45);
    if (k > 0) {
      const s = k < 1 ? lerp(0.86, 1, backOut(k, 2.6)) : 1;
      const cx = 1170 * 0.5, cy = 2532 * 0.36;
      g.fillStyle = '#e7e3dc'; g.fillRect(40, 700, 1090, 420);
      g.save(); g.translate(cx, cy); g.scale(s, s); g.translate(-cx, -cy); g.drawImage(IMG.streak_pl, 40, 700, 1090, 420, 40, 700, 1090, 420); g.restore();
    }
  }
  LC.tex.needsUpdate = true;
}

// ---------------- camera ----------------
const camera = new THREE.PerspectiveCamera(40, W / H, 0.005, 400);
let rig, subWin;
function screenPoint(u, v) { // u across (0..1), v from the top (0..1) → world point + normal
  const p = jada.P;
  const pt = p.phone.localToWorld(new THREE.Vector3((u - 0.5) * p.sw, p.top - p.sHt * v, 0.005));
  const n = new THREE.Vector3(0, 0, 1).transformDirection(p.phone.matrixWorld);
  return { pt, n };
}
function buildCamera() {
  scene.updateMatrixWorld(true);
  const A = screenPoint(0.5, 0.5), F0 = frameScreen(A.pt, A.n, jada.P.sw, 40, 1.2); // v2: the colleague's question in view
  const S = screenPoint(0.5, 0.42), F1 = frameScreen(S.pt, S.n, jada.P.sw, 38, 1.45);
  const D = screenPoint(0.5, 0.82), F2 = frameScreen(D.pt, D.n, jada.P.sw, 38, 0.3);
  const k = (t, pos, tgt, fov, roll = 0) => [t, [pos.x, pos.y, pos.z, tgt.x, tgt.y, tgt.z, fov, roll]];
  const V = (x, y, z) => new THREE.Vector3(x, y, z);
  const tc = V(0.25, 1.0, -0.5);
  const nA = A.n, dv = F2.pos.clone().sub(F1.pos.clone().lerp(F1.tgt, 0.25)).multiplyScalar(1.35 / 0.65);
  const dt = F2.tgt.clone().sub(S.pt.clone().lerp(D.pt, 0.3)).multiplyScalar(1 / 0.65);
  rig = camRig([
    k(0.0, F0.pos, F0.tgt, 40),
    k(0.9, F0.pos.clone().addScaledVector(A.n, 0.05), F0.tgt, 40.5),
    k(1.75, V(-0.6, 1.55, 0.85), V(0.0, 1.22, -0.3), 46, -4),
    k(2.75, V(-2.6, 1.85, 2.75), V(0.45, 1.0, -0.7), 45, -1.5),
    k(3.65, V(-3.25, 2.0, 3.35), V(0.95, 1.0, -1.0), 45, 0),
    k(4.4, V(-1.0, 1.45, 1.25), V(0.0, 1.15, -0.25), 40, 1),
    k(5.0, F1.pos, F1.tgt, 38, 0),
    k(5.35, F1.pos.clone().lerp(F1.tgt, 0.25), S.pt.clone().lerp(D.pt, 0.3), 38, 3),
    k(6.0, F2.pos, F2.tgt, 38, 24),
  ], { // v2: moving at both cuts (a slow pull already under way at 9.0, the dive still accelerating into 15.0)
    tan0: [nA.x * 0.09, nA.y * 0.09, nA.z * 0.09, 0, 0, 0, 0.8, 0],
    tan1: [dv.x, dv.y, dv.z, dt.x, dt.y, dt.z, 0, 42],
  });
}
function subAt(t) {
  if (t > 1.0) return SUB; // v2: full sub-frames through the Dag-7 pop too
  return Math.max(1, Math.min(SUB, 2));
}

const cap1 = document.getElementById('cap1');
function poseAt(t) {
  // phone: a gentle lift as she reads, settles
  jada.phonePivot.rotation.x = -0.1 - 0.04 * Math.sin(Math.PI * seg(t, 1.0, 4.0));
  const k = seg(t, 4.7, 5.15);
  if (k > 0) {
    const s = backOut(k, 2.4) * (1 - Math.pow(seg(t, 5.18, 5.4), 2));
    const S = screenPoint(0.4, 0.6); // v2: whole badge in frame
    dag.visible = true; dag.scale.setScalar(Math.max(0.001, s * 0.85));
    dag.position.copy(S.pt).addScaledVector(S.n, 0.015 + 0.05 * easeOut(k)).add(new THREE.Vector3(0.03 * easeOut(k), 0.01 * easeOut(k), 0));
    dag.quaternion.copy(jada.P.phone.getWorldQuaternion(new THREE.Quaternion()));
    dag.rotateZ(0.08 * (1 - k) + 0.06); dag.rotateY(-0.25 * (1 - easeOut(k)));
    if (s < 0.01) dag.visible = false;
  } else dag.visible = false;
  scene.updateMatrixWorld(true);
  rig(camera, t);
  sky.position.copy(camera.position);
}
function setTime(t) {
  placeCap(cap1, t, 1.2, 5.25); // v2: the question reads first
  drawScreen(t);
  const n = subAt(t);
  frame(scene, camera, n, (i, nn) => { const ts = nn > 1 ? t + ((i + 0.5) / nn - 0.5) * (SHUTTER / FPS) : t; poseAt(clamp(ts, 0, DURATION)); });
  return true;
}
window.DURATION = DURATION; window.setTime = setTime;
window.ready = (async () => {
  await document.fonts.load('700 66px "Lexend V"'); await document.fonts.load('800 66px "Lexend V"'); await document.fonts.ready;
  buildSign(); await buildJada(); buildDag(); buildCamera();
  setTime(Number(P.get('t') ?? 0));
  return true;
})().catch((e) => { console.error(e.stack || e); throw e; });
