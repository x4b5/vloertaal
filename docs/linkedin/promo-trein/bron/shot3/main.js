// Shot 3 (film 15.0–21.0 s, local 0–6): Henk in the canteen next to the warehouse floor. Pull OUT of the
// laptop (vloertaal.nl, the language picker) to reveal Henk, push in so the languages read, then the
// vloertaal.nl link card flies out of the laptop to Amina, Jada and +3, whose phones light up. Whip up (hand-off).
import * as THREE from 'three';
import { W, H, PAL, clamp, seg, lerp, smooth, inOut, makeRenderer, canvasTex, rng, loadText, parseFigure, rasterSVG } from '../lib/kit.js';
import { easeOut, backOut, rr, roundBox, roundPlane, loadImg, figureCard, avatarCanvas, labelCanvas, slabCard, camRig, frameScreen, placeCap } from '../lib/figs.js';

const P = new URLSearchParams(location.search);
const DURATION = 6.0, FPS = 30, SUB = Number(P.get('sub') ?? 1), SHUTTER = 0.5;
const canvas = document.getElementById('gl');
const { renderer, frame } = makeRenderer(canvas);
const scene = new THREE.Scene();
scene.background = new THREE.Color('#dfe6ec');
scene.add(new THREE.HemisphereLight('#f4f8ff', '#cfc6b8', 2.5));
const key = new THREE.DirectionalLight('#fff1d6', 2.0);
const KEY_DIR = new THREE.Vector3(-0.55, 0.8, 0.45).normalize();
key.castShadow = true; key.shadow.mapSize.set(2048, 2048); key.shadow.bias = -0.0004; key.shadow.normalBias = 0.02; key.shadow.radius = 3;
key.target.position.set(0, 0.5, -1.5); key.position.copy(key.target.position).addScaledVector(KEY_DIR, 30);
{ const c = key.shadow.camera; c.left = -6; c.right = 6; c.top = 6; c.bottom = -6; c.near = 5; c.far = 60; }
scene.add(key, key.target);
const lam = (c) => new THREE.MeshLambertMaterial({ color: c });
const basic = (c) => new THREE.MeshBasicMaterial({ color: c, toneMapped: false });
const add = (geo, mat, x, y, z, { ry = 0, rx = 0, rz = 0, cast = true, recv = true, parent = scene } = {}) => {
  const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.rotation.set(rx, ry, rz); m.castShadow = cast; m.receiveShadow = recv; parent.add(m); return m;
};
const R = rng(9);

// ---------------- canteen ----------------
const GZ = -1.9; // glass wall
add(new THREE.PlaneGeometry(14, 8), lam('#c9d1d6'), 0, 0, GZ + 4, { rx: -Math.PI / 2, cast: false });
// floor tiles hint
for (let i = -6; i <= 6; i++) add(new THREE.PlaneGeometry(0.012, 8), basic('#b8c1c7'), i * 0.6, 0.001, GZ + 4, { rx: -Math.PI / 2, cast: false });
// left wall with a window light and a clock, right wall
add(new THREE.BoxGeometry(0.15, 3.2, 8), lam('#eef0ea'), -3.2, 1.6, GZ + 4);
add(new THREE.BoxGeometry(0.15, 3.2, 8), lam('#eef0ea'), 3.6, 1.6, GZ + 4);
add(new THREE.CylinderGeometry(0.22, 0.22, 0.05, 32), lam('#ffffff'), -3.1, 2.3, -0.6, { rz: Math.PI / 2 });
add(new THREE.TorusGeometry(0.22, 0.025, 6, 32), lam('#1e2226'), -3.07, 2.3, -0.6, { ry: Math.PI / 2 });
add(new THREE.BoxGeometry(0.01, 0.15, 0.025), basic('#1e2226'), -3.06, 2.35, -0.6);
add(new THREE.BoxGeometry(0.01, 0.025, 0.11), basic('#1e2226'), -3.06, 2.3, -0.57);
// ceiling strip
add(new THREE.BoxGeometry(14, 0.1, 8), basic('#e6e2db'), 0, 3.2, GZ + 4, { cast: false });
// glass wall: low parapet, mullions, transom, glass
add(new THREE.BoxGeometry(7, 0.55, 0.12), lam('#3c4a56'), 0.2, 0.275, GZ);
for (let x = -3.1; x <= 3.6; x += 1.15) add(new THREE.BoxGeometry(0.07, 3.2, 0.1), lam('#26313a'), x, 1.6, GZ);
add(new THREE.BoxGeometry(7, 0.08, 0.1), lam('#26313a'), 0.2, 0.57, GZ);
add(new THREE.BoxGeometry(7, 0.08, 0.1), lam('#26313a'), 0.2, 2.65, GZ);
add(new THREE.PlaneGeometry(7, 2.65), new THREE.MeshBasicMaterial({ color: '#dff3ff', transparent: true, opacity: 0.12, depthWrite: false, toneMapped: false }), 0.2, 1.88, GZ + 0.01, { cast: false, recv: false });
for (const x of [-2.4, -0.2, 2.0]) add(new THREE.PlaneGeometry(0.22, 2.3), new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.16, depthWrite: false, toneMapped: false }), x, 1.8, GZ + 0.02, { rz: -0.45, cast: false, recv: false });

// ---------------- warehouse behind the glass ----------------
add(new THREE.PlaneGeometry(30, 30), lam('#d6d2c9'), 0, -0.002, GZ - 15, { rx: -Math.PI / 2, cast: false });
for (let x = -12; x <= 12; x += 3) add(new THREE.PlaneGeometry(0.1, 30), basic('#ffc414'), x + 1.5, 0.001, GZ - 15, { rx: -Math.PI / 2, cast: false });
add(new THREE.BoxGeometry(30, 9, 0.2), lam('#e9ecef'), 0, 4.5, GZ - 14);
const blue = lam('#1f5fa8'), orange = lam('#ff7a00');
const BOX = ['#e0a86b', '#c98a4b', '#d9a868', '#ebd6b5'];
function rack(z, x0, bays) {
  for (let b = 0; b <= bays; b++) { add(new THREE.BoxGeometry(0.09, 4.2, 0.09), blue, x0 + b * 2.7, 2.1, z - 0.5); add(new THREE.BoxGeometry(0.09, 4.2, 0.09), blue, x0 + b * 2.7, 2.1, z + 0.5); }
  for (const y of [0.15, 1.45, 2.75, 4.0]) {
    add(new THREE.BoxGeometry(bays * 2.7, 0.12, 0.08), orange, x0 + bays * 1.35, y, z - 0.5); add(new THREE.BoxGeometry(bays * 2.7, 0.12, 0.08), orange, x0 + bays * 1.35, y, z + 0.5);
    if (y > 3.9) continue;
    for (let b = 0; b < bays; b++) for (let k = 0; k < 2; k++) {
      if (R() < 0.15) continue;
      const cx = x0 + b * 2.7 + 0.7 + k * 1.3;
      add(new THREE.BoxGeometry(1.15, 0.12, 0.9), lam('#b47a45'), cx, y + 0.12, z);
      let yy = y + 0.18; const n = 1 + Math.floor(R() * 2);
      for (let j = 0; j < n; j++) { const h = 0.35 + R() * 0.3; add(new THREE.BoxGeometry(1.0 - j * 0.15, h, 0.8), lam(BOX[Math.floor(R() * 4)]), cx, yy + h / 2, z); yy += h; }
    }
  }
}
rack(GZ - 3.2, -6.5, 5); rack(GZ - 6.6, -7.8, 6); rack(GZ - 10, -6.5, 5);
// forklift (yellow), parked in the aisle
const fl = new THREE.Group(); fl.position.set(-1.6, 0, GZ - 1.7); fl.rotation.y = 0.45; scene.add(fl);
{
  const y = lam('#ffc414'), yd = lam('#e0a800'), blk = lam('#1e2226'), grey = lam('#3c4a56');
  add(new THREE.BoxGeometry(1.1, 0.6, 0.85), y, 0, 0.55, 0, { parent: fl });
  add(new THREE.BoxGeometry(0.5, 0.55, 0.8), yd, -0.45, 0.6, 0, { parent: fl });
  for (const [x, z] of [[0.35, 0.45], [0.35, -0.45], [-0.4, 0.45], [-0.4, -0.45]]) add(new THREE.CylinderGeometry(0.24, 0.24, 0.18, 16), blk, x, 0.24, z, { rx: Math.PI / 2, parent: fl });
  for (const [x, z] of [[0.2, 0.36], [0.2, -0.36], [-0.35, 0.36], [-0.35, -0.36]]) add(new THREE.BoxGeometry(0.05, 1.2, 0.05), grey, x, 1.45, z, { parent: fl });
  add(new THREE.BoxGeometry(0.7, 0.05, 0.85), y, -0.08, 2.05, 0, { parent: fl });
  add(new THREE.BoxGeometry(0.35, 0.08, 0.4), blk, -0.1, 0.9, 0, { parent: fl });
  for (const z of [-0.36, 0.36]) add(new THREE.BoxGeometry(0.08, 2.2, 0.08), grey, 0.6, 1.1, z, { parent: fl });
  add(new THREE.BoxGeometry(0.06, 0.5, 0.8), grey, 0.66, 0.5, 0, { parent: fl });
  for (const z of [-0.22, 0.22]) add(new THREE.BoxGeometry(0.9, 0.04, 0.1), grey, 1.1, 0.3, z, { parent: fl });
  add(new THREE.BoxGeometry(0.9, 0.12, 0.9), lam('#b47a45'), 1.1, 0.38, 0, { parent: fl });
  add(new THREE.BoxGeometry(0.75, 0.5, 0.75), lam('#c98a4b'), 1.1, 0.69, 0, { parent: fl });
}

// ---------------- desk, laptop, hard hat, mug ----------------
const DESK = { y: 0.74, w: 1.7, d: 0.8 };
add(new THREE.BoxGeometry(DESK.w, 0.04, DESK.d), lam('#d9a868'), 0, DESK.y - 0.02, 0);
add(new THREE.BoxGeometry(DESK.w - 0.06, 0.012, 0.012), lam('#b47a45'), 0, DESK.y - 0.035, DESK.d / 2 - 0.006);
for (const [x, z] of [[-0.8, -0.35], [0.8, -0.35], [-0.8, 0.35], [0.8, 0.35]]) add(new THREE.BoxGeometry(0.04, DESK.y - 0.04, 0.04), lam('#3c4a56'), x, (DESK.y - 0.04) / 2, z);
// chair back behind Henk
add(new THREE.BoxGeometry(0.5, 0.55, 0.06), lam('#26313a'), -0.3, 0.95, -0.72);

// laptop
const LAP = new THREE.Group(); LAP.position.set(0.36, DESK.y, 0.06); LAP.rotation.y = -0.42; scene.add(LAP);
const LW = 0.36, LH = LW * 1760 / 2560 + 0.03;
let screenMesh, scrInfo;
{
  const alu = lam('#cfd8de'), dark = lam('#3c4a56');
  add(new THREE.BoxGeometry(LW + 0.02, 0.016, 0.25), alu, 0, 0.008, 0, { parent: LAP });
  add(new THREE.BoxGeometry(LW - 0.04, 0.002, 0.12), dark, 0, 0.0165, -0.03, { parent: LAP });
  add(new THREE.BoxGeometry(0.11, 0.001, 0.065), lam('#b9c3ca'), 0, 0.0165, 0.08, { parent: LAP });
  const lid = new THREE.Group(); lid.position.set(0, 0.016, -0.125); lid.rotation.x = -0.2; LAP.add(lid);
  add(roundBox(LW + 0.02, LH, 0.008, 0.012, 0.002), alu, 0, LH / 2, -0.004, { parent: lid });
  add(new THREE.PlaneGeometry(LW + 0.01, LH - 0.008), basic('#1e2226'), 0, LH / 2, 0.0032, { parent: lid, cast: false });
  scrInfo = { lid, sw: LW - 0.008, sh: (LW - 0.008) * 1760 / 2560, cy: LH / 2 + 0.006 };
}
async function buildScreen() {
  const page = await loadImg('../assets/shots/language_desk_v2.png');
  const c = document.createElement('canvas'); c.width = 2560; c.height = 1760; const g = c.getContext('2d');
  g.fillStyle = '#e9ecef'; g.fillRect(0, 0, 2560, 160);
  for (const [i, col] of [['0', '#ff5f57'], ['1', '#febc2e'], ['2', '#28c840']]) { g.fillStyle = col; g.beginPath(); g.arc(70 + i * 56, 80, 20, 0, 7); g.fill(); }
  g.fillStyle = '#ffffff'; g.beginPath(); g.roundRect(560, 34, 1440, 92, 46); g.fill();
  g.strokeStyle = '#3c4a56'; g.lineWidth = 6; g.beginPath(); g.roundRect(612, 74, 30, 24, 4); g.stroke(); g.beginPath(); g.arc(627, 74, 10, Math.PI, 0); g.stroke();
  g.fillStyle = '#1e2226'; g.font = '600 52px "Lexend V"'; g.textBaseline = 'middle'; g.fillText('vloertaal.nl', 670, 82);
  g.drawImage(page, 0, 160);
  const tex = canvasTex(c, renderer);
  screenMesh = new THREE.Mesh(new THREE.PlaneGeometry(scrInfo.sw, scrInfo.sh), new THREE.MeshBasicMaterial({ map: tex, toneMapped: false }));
  screenMesh.position.set(0, scrInfo.cy, 0.0036); scrInfo.lid.add(screenMesh);
}
// hard hat (3D) on the desk, a mug
const hat = new THREE.Group(); hat.position.set(-0.68, DESK.y, 0.12); hat.rotation.y = 0.6; scene.add(hat);
{
  const y = new THREE.MeshLambertMaterial({ color: '#ffc414' }), yd = lam('#e0a800');
  const dome = add(new THREE.SphereGeometry(0.13, 28, 14, 0, Math.PI * 2, 0, Math.PI / 2), y, 0, 0.035, 0, { parent: hat }); dome.scale.set(1, 1.0, 1.15);
  const brim = add(new THREE.CylinderGeometry(0.17, 0.175, 0.016, 32), yd, 0, 0.04, 0.03, { parent: hat }); brim.scale.set(1, 1, 1.18);
  const ridge = add(new THREE.TorusGeometry(0.125, 0.014, 6, 24, Math.PI), lam('#ffd94d'), 0, 0.035, 0, { ry: Math.PI / 2, parent: hat }); ridge.scale.set(1.12, 1.02, 1);
  const v = new THREE.Shape(); v.moveTo(-0.04, 0.035); v.lineTo(-0.018, 0.035); v.lineTo(0, -0.01); v.lineTo(0.018, 0.035); v.lineTo(0.04, 0.035); v.lineTo(0.012, -0.035); v.lineTo(-0.012, -0.035); v.closePath();
  add(new THREE.ShapeGeometry(v), basic('#1e2226'), 0, 0.1, 0.143, { parent: hat, rx: -0.35, cast: false });
}
{
  const m = add(new THREE.CylinderGeometry(0.042, 0.038, 0.1, 20), lam('#ffffff'), 0.86, DESK.y + 0.05, 0.22);
  add(new THREE.CylinderGeometry(0.0425, 0.0425, 0.025, 20), lam('#ffc414'), 0.86, DESK.y + 0.07, 0.22);
  add(new THREE.TorusGeometry(0.026, 0.007, 6, 14), lam('#ffffff'), 0.905, DESK.y + 0.05, 0.22);
  add(new THREE.CircleGeometry(0.038, 20), lam('#6b3f22'), 0.86, DESK.y + 0.098, 0.22, { rx: -Math.PI / 2, cast: false });
}
// a plant in the corner + a stack of papers
add(new THREE.CylinderGeometry(0.2, 0.15, 0.4, 12), lam('#e0703f'), -2.6, 0.2, -1.3);
add(new THREE.IcosahedronGeometry(0.42, 1), lam('#5f9e3c'), -2.6, 0.75, -1.3);
add(new THREE.IcosahedronGeometry(0.28, 1), lam('#7ac70c'), -2.45, 1.05, -1.2);
add(new THREE.BoxGeometry(0.22, 0.02, 0.3), lam('#ffffff'), -0.25, DESK.y + 0.01, 0.2, { ry: 0.2 });

// ---------------- Henk ----------------
const K = 1.05 / 126;
async function buildHenk() {
  const { mesh } = await figureCard('henk-idle', renderer, { K });
  mesh.position.set(-0.3, 0.52, -0.42); scene.add(mesh);
}

// ---------------- link card + avatars ----------------
let link, avatars = [], phones = [];
async function buildShare() {
  const logo = parseFigure(await loadText('../assets/chars/logo-mark.svg.html'));
  const lr = await rasterSVG(logo, [0, 0, 120, 120], 2.4);
  const c = labelCanvas(1200, 400, (g, w, h) => {
    g.drawImage(lr.canvas, 44, 70, 260, 260);
    g.fillStyle = PAL.inkUI; g.font = '800 132px "Lexend V"'; g.textBaseline = 'alphabetic'; g.fillText('vloertaal', 340, 210);
    const tw = g.measureText('vloertaal').width; g.fillStyle = '#ffc414'; g.fillText('.', 340 + tw, 210); g.fillStyle = PAL.inkUI; g.fillText('nl', 340 + tw + g.measureText('.').width, 210);
    g.font = '500 50px "Lexend V"'; g.fillStyle = '#3c4a56'; g.fillText('Nederlands voor op de werkvloer', 344, 300);
  }, { bg: '#fffdf8', bw: 14, r: 44 });
  link = slabCard(c, renderer, 0.5, { depth: 0.012 }); scene.add(link);
  const specs = [['amina-idle', '#d8c8f0'], ['jada-idle', '#cfe6f2'], [null, '#ffc414']];
  for (const [name, bg] of specs) {
    let cv;
    if (name) cv = await avatarCanvas(name, { rect: [33, 22, 54, 54], bg });
    else { cv = document.createElement('canvas'); cv.width = cv.height = 512; const g = cv.getContext('2d');
      g.beginPath(); g.arc(256, 256, 242, 0, 7); g.fillStyle = bg; g.fill(); g.lineWidth = 16; g.strokeStyle = PAL.inkUI; g.stroke();
      g.fillStyle = PAL.inkUI; g.font = '800 200px "Lexend V"'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('+3', 256, 268); }
    const grp = new THREE.Group();
    const disc = new THREE.Mesh(new THREE.CircleGeometry(0.135, 48), new THREE.MeshBasicMaterial({ map: canvasTex(cv, renderer), transparent: true, toneMapped: false }));
    disc.position.z = 0.012; grp.add(disc);
    const back = new THREE.Mesh(new THREE.CylinderGeometry(0.133, 0.133, 0.02, 48), basic('#d9d2c4')); back.rotation.x = Math.PI / 2; grp.add(back);
    // small phone under each avatar: dark → lit (yellow with the V)
    const ph = new THREE.Group(); ph.position.set(0.12, -0.13, 0.03); ph.rotation.z = -0.15; grp.add(ph);
    ph.add(new THREE.Mesh(roundBox(0.075, 0.14, 0.01, 0.014, 0.002), basic('#1e2226')));
    const lit = new THREE.Mesh(roundPlane(0.062, 0.122, 0.01), new THREE.MeshBasicMaterial({ map: canvasTex(lr.canvas, renderer), color: '#ffffff', toneMapped: false, transparent: true, opacity: 0 }));
    lit.position.z = 0.0065; ph.add(lit);
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.143, 0.162, 48), new THREE.MeshBasicMaterial({ color: '#ffc414', transparent: true, opacity: 0, toneMapped: false }));
    ring.position.z = 0.013; grp.add(ring);
    grp.userData = { lit, ring, ph };
    scene.add(grp); avatars.push(grp);
  }
}
const AV_POS = [[-0.18, 1.46, -0.62], [0.28, 1.55, -0.62], [0.74, 1.44, -0.56]];
const LINK_T0 = 3.4, LINK_T1 = 4.5;
function poseShare(t) {
  // link card: out of the laptop screen, arcs up to the middle under the avatars, then a ping to each
  const k = seg(t, LINK_T0, LINK_T1);
  const start = screenMesh.localToWorld(new THREE.Vector3(0, -0.02, 0.01));
  const end = new THREE.Vector3(0.34, 1.17, -0.38);
  const mid = start.clone().lerp(end, 0.5).add(new THREE.Vector3(0.2, 0.2, 0.18));
  const e = inOut(k);
  const a = start.clone().lerp(mid, e), b = mid.clone().lerp(end, e); const p = a.lerp(b, e);
  link.position.copy(p);
  link.scale.setScalar(Math.max(0.001, lerp(0.03, 1, easeOut(seg(t, LINK_T0, LINK_T0 + 0.5)))));
  link.rotation.set(lerp(-0.2, 0, e), lerp(-0.42, 0.05, e) + Math.sin(e * Math.PI) * 0.5, Math.sin(e * Math.PI) * -0.12);
  link.visible = t >= LINK_T0;
  link.position.y += Math.sin(Math.max(0, t - LINK_T1) * 2.4) * 0.01;
  avatars.forEach((g, i) => {
    const t0 = 2.9 + i * 0.12;
    const s = t < t0 ? 0 : backOut(seg(t, t0, t0 + 0.4), 2.2);
    g.visible = s > 0.001; g.scale.setScalar(Math.max(0.001, s));
    g.position.set(...AV_POS[i]); g.position.y += Math.sin(t * 2 + i) * 0.012;
    g.rotation.y = 0.12 - i * 0.08;
    const tl = LINK_T1 - 0.05 + i * 0.16;            // ping
    const L = seg(t, tl, tl + 0.25);
    g.userData.lit.material.opacity = smooth(L);
    g.userData.ring.material.opacity = smooth(L) * (0.6 + 0.4 * Math.sin(Math.PI * seg(t, tl, tl + 0.5)));
    const pop = Math.sin(Math.PI * seg(t, tl, tl + 0.35)) * 0.14;
    g.scale.multiplyScalar(1 + pop);
  });
}

// ---------------- camera ----------------
const camera = new THREE.PerspectiveCamera(40, W / H, 0.004, 200);
let rig;
function scrPt(u, v) {
  const pt = screenMesh.localToWorld(new THREE.Vector3((u - 0.5) * scrInfo.sw, (0.5 - v) * scrInfo.sh, 0.001));
  const n = new THREE.Vector3(0, 0, 1).transformDirection(screenMesh.matrixWorld);
  return { pt, n };
}
function buildCamera() {
  scene.updateMatrixWorld(true);
  const A = scrPt(0.36, 0.52), F0 = frameScreen(A.pt, A.n, scrInfo.sw, 40, 0.24);
  const B = scrPt(0.5, 0.42), F1 = frameScreen(B.pt, B.n, scrInfo.sw, 40, 0.9);
  const G = scrPt(0.5, 0.505), F2 = frameScreen(G.pt, G.n, scrInfo.sw, 38, 0.45); // v2: list whole, no URL bar / bezel edge
  const k = (t, pos, tgt, fov, roll = 0) => [t, [pos.x, pos.y, pos.z, tgt.x, tgt.y, tgt.z, fov, roll]];
  const V = (x, y, z) => new THREE.Vector3(x, y, z);
  // three C1 pieces: fly out + push in (eases into the read), a short read (slow creep), share + whip up
  // v2: the shot starts already moving (carries the dive's speed through the 15.0 cut)
  const a0 = k(0.0, F0.pos, F0.tgt, 40, -22)[1], a1 = k(0.55, F1.pos, F1.tgt, 41, -4)[1];
  const rA = camRig([
    k(0.0, F0.pos, F0.tgt, 40, -22),
    k(0.55, F1.pos, F1.tgt, 41, -4),
    k(1.45, V(1.55, 1.45, 1.55), V(0.0, 1.05, -0.35), 46, 0),
    k(2.25, V(1.75, 1.5, 1.85), V(-0.05, 1.05, -0.4), 45, 0),
    k(2.95, F2.pos, F2.tgt, 38, 0),
  ], { tan0: a0.map((v, d) => (a1[d] - v) / 0.55 * 0.9) });
  const P3 = F2.pos.clone().addScaledVector(G.n, 0.012);
  const rB = camRig([k(2.95, F2.pos, F2.tgt, 38, 0), k(3.4, P3, F2.tgt, 38, 0)]);
  const rC = camRig([
    k(3.4, P3, F2.tgt, 38, 0),
    k(4.3, V(0.95, 1.5, 1.75), V(0.1, 1.5, -0.4), 45, 0),
    k(5.3, V(0.8, 1.62, 2.1), V(0.06, 1.7, -0.5), 45, 0),
    k(6.0, V(0.75, 1.58, 1.72), V(-0.15, 3.4, -1.0), 48, 5),
  ], { tan1: [0, 0.35, -0.3, -0.1, 7.5, 0, 6, 8] }); // v2: still whipping up at the 21.0 cut
  rig = (cam, t) => (t < 2.95 ? rA(cam, t) : t < 3.4 ? rB(cam, t) : rC(cam, t));
}
function subAt(t) {
  if (t > 2.97 && t < 3.38) return Math.max(1, Math.min(SUB, 2));
  // v2: every fast move gets 8 sub-frames at --sub 4 (fly-out, push-in past the mug, link card, whip up)
  if (t < 0.65 || (t > 2.2 && t < 2.97) || (t >= 3.38 && t <= 4.7) || t > 4.95) return SUB * 2;
  return SUB;
}
const cap1 = document.getElementById('cap1');
function poseAt(t) {
  poseShare(t);
  scene.updateMatrixWorld(true);
  rig(camera, t);
}
function setTime(t) {
  placeCap(cap1, t, 0.4, 4.3);
  const n = subAt(t);
  frame(scene, camera, n, (i, nn) => { const ts = nn > 1 ? t + ((i + 0.5) / nn - 0.5) * (SHUTTER / FPS) : t; poseAt(clamp(ts, 0, DURATION)); });
  return true;
}
window.DURATION = DURATION; window.setTime = setTime;
window.ready = (async () => {
  await document.fonts.load('700 66px "Lexend V"'); await document.fonts.load('800 66px "Lexend V"'); await document.fonts.load('500 66px "Lexend V"'); await document.fonts.ready;
  await buildScreen(); await buildHenk(); await buildShare(); buildCamera();
  setTime(Number(P.get('t') ?? 0));
  return true;
})().catch((e) => { console.error(e.stack || e); throw e; });
