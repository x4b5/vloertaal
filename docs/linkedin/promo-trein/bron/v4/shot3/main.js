// Shot 3 v3 (film 15.0–21.0 s, local 0–6): Henk (3D) in the canteen next to the warehouse floor. The camera
// arrives fast from the cut (glass wall, racks, forklift, his hard hat and mug), faces him across the desk,
// arcs round his right side to BEHIND his grey head and pushes in over his shoulder onto the laptop:
// vloertaal.nl with the full language list (readable). Then he shares it: the vloertaal.nl card flies out of
// the screen to avatar bubbles of Amina and Jada (3D head renders of the new figures) and "+3".
import * as THREE from 'three';
import { W, H, PAL, clamp, seg, lerp, smooth, inOut, makeRenderer, canvasTex, rng, loadText, parseFigure, rasterSVG } from '../../lib/kit.js';
import { easeOut, backOut, rr, roundBox, roundPlane, loadImg, labelCanvas, slabCard, placeCap } from '../../lib/figs.js';
import { buildCharacter, setWorldQuat } from '../../lib/char3d.js';
import { makeMove, frameDist, V3 } from '../../lib/v3cam.js';

const P = new URLSearchParams(location.search);
// v4: 9 s. The camera plays v3's 6-s move on a slower clock (τ = t · 6/9); the share tap, the bubbles and the
// link card start later by the same factor but run at real speed.
const CAM_END = 6.0, STRETCH = 9 / 6, DURATION = CAM_END * STRETCH, FPS = 30, SUBQ = P.get('sub') ?? 'auto', SHUTTER = 0.5;
const canvas = document.getElementById('gl');
const { renderer, frame } = makeRenderer(canvas);
const scene = new THREE.Scene();
scene.background = new THREE.Color('#dfe6ec');
scene.add(new THREE.HemisphereLight('#f4f8ff', '#cfc6b8', 2.5));
const key = new THREE.DirectionalLight('#fff1d6', 2.0);
const KEY_DIR = new THREE.Vector3(-0.55, 0.8, 0.45).normalize();
key.castShadow = true; key.shadow.mapSize.set(4096, 4096); key.shadow.bias = -0.0005; key.shadow.normalBias = 0.025; key.shadow.radius = 3;
key.target.position.set(0, 0.5, -0.5); key.position.copy(key.target.position).addScaledVector(KEY_DIR, 30);
{ const c = key.shadow.camera; c.left = -5; c.right = 5; c.top = 5; c.bottom = -5; c.near = 5; c.far = 60; }
scene.add(key, key.target);
// a soft fill from the room side so the back of his head keeps its shape
const fill = new THREE.DirectionalLight('#eef4ff', 0.9); fill.position.set(1.5, 3, 4); scene.add(fill);
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
// Henk's office chair (room side of the desk): seat, low back, column, star base
add(new THREE.BoxGeometry(0.46, 0.06, 0.44), lam('#26313a'), -0.12, 0.45, 0.78);
add(new THREE.BoxGeometry(0.44, 0.36, 0.06), lam('#26313a'), -0.12, 0.74, 1.0, { rx: 0.1 });
add(new THREE.CylinderGeometry(0.03, 0.03, 0.38, 8), lam('#3c4a56'), -0.12, 0.24, 0.8);
for (let i = 0; i < 5; i++) add(new THREE.BoxGeometry(0.03, 0.03, 0.3), lam('#3c4a56'), -0.12 + Math.sin(i * 1.2566) * 0.15, 0.04, 0.8 + Math.cos(i * 1.2566) * 0.15, { ry: i * 1.2566 });

// laptop
const LAP = new THREE.Group(); LAP.position.set(-0.12, DESK.y, 0.02); LAP.rotation.y = 0.04; scene.add(LAP);
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
  const page = await loadImg('../../assets/shots/language_desk_v2.png');
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
const hat = new THREE.Group(); hat.position.set(-0.62, DESK.y, 0.04); hat.rotation.y = 2.6; scene.add(hat);
{
  const y = new THREE.MeshLambertMaterial({ color: '#ffc414' }), yd = lam('#e0a800');
  const dome = add(new THREE.SphereGeometry(0.13, 28, 14, 0, Math.PI * 2, 0, Math.PI / 2), y, 0, 0.035, 0, { parent: hat }); dome.scale.set(1, 1.0, 1.15);
  const brim = add(new THREE.CylinderGeometry(0.17, 0.175, 0.016, 32), yd, 0, 0.04, 0.03, { parent: hat }); brim.scale.set(1, 1, 1.18);
  const ridge = add(new THREE.TorusGeometry(0.125, 0.014, 6, 24, Math.PI), lam('#ffd94d'), 0, 0.035, 0, { ry: Math.PI / 2, parent: hat }); ridge.scale.set(1.12, 1.02, 1);
  const v = new THREE.Shape(); v.moveTo(-0.04, 0.035); v.lineTo(-0.018, 0.035); v.lineTo(0, -0.01); v.lineTo(0.018, 0.035); v.lineTo(0.04, 0.035); v.lineTo(0.012, -0.035); v.lineTo(-0.012, -0.035); v.closePath();
  add(new THREE.ShapeGeometry(v), basic('#1e2226'), 0, 0.1, 0.143, { parent: hat, rx: -0.35, cast: false });
}
{
  const m = add(new THREE.CylinderGeometry(0.042, 0.038, 0.1, 20), lam('#ffffff'), 0.42, DESK.y + 0.05, 0.24);
  add(new THREE.CylinderGeometry(0.0425, 0.0425, 0.025, 20), lam('#ffc414'), 0.42, DESK.y + 0.07, 0.24);
  add(new THREE.TorusGeometry(0.026, 0.007, 6, 14), lam('#ffffff'), 0.465, DESK.y + 0.05, 0.24);
  add(new THREE.CircleGeometry(0.038, 20), lam('#6b3f22'), 0.42, DESK.y + 0.098, 0.24, { rx: -Math.PI / 2, cast: false });
}
// a plant in the corner + a stack of papers
add(new THREE.CylinderGeometry(0.2, 0.15, 0.4, 12), lam('#e0703f'), -2.6, 0.2, -1.3);
add(new THREE.IcosahedronGeometry(0.42, 1), lam('#5f9e3c'), -2.6, 0.75, -1.3);
add(new THREE.IcosahedronGeometry(0.28, 1), lam('#7ac70c'), -2.45, 1.05, -1.2);
add(new THREE.BoxGeometry(0.22, 0.02, 0.3), lam('#ffffff'), 0.5, DESK.y + 0.01, -0.12, { ry: 0.2 });

// ---------------- Henk (3D): at the desk, facing the laptop and the glass wall ----------------
let henk;
async function buildHenk() {
  henk = await buildCharacter('henk', { renderer, base: '../../assets/chars/' });
  henk.root.position.set(-0.12, 0.545, 0.74); henk.root.rotation.y = Math.PI; scene.add(henk.root);
  henk.pose.lean = 0.12; henk.pose.headPitch = 0.2; henk.pose.blinkOffset = 0.9;
  henk.root.updateMatrixWorld(true);
  for (const s of ['L', 'R']) {
    const sx = s === 'L' ? 1 : -1;
    henk.legIK(s, henk.root.localToWorld(V3(sx * 0.11, -0.47, 0.44)), henk.root.localToWorld(V3(sx * 0.05, 0.3, 1.5)), new THREE.Quaternion().setFromRotationMatrix(henk.root.matrixWorld));
  }
}
// hands on the desk either side of the keyboard; the right hand taps the trackpad to share
const HANDQ = new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().makeBasis(V3(1, 0, 0), V3(0, 0, 1), V3(0, -1, 0)));
const SHARE_TAP = 4.4 * STRETCH;
function poseHenk(t) {
  henk.update(t);
  henk.root.updateMatrixWorld(true);
  const tap = Math.sin(Math.PI * clamp((t - SHARE_TAP + 0.12) / 0.24));
  for (const s of ['L', 'R']) {
    const sx = s === 'L' ? -1 : 1;                    // world x of his left hand is −x (he faces −Z)
    const w = s === 'R' ? V3(-0.12 + 0.05, DESK.y + 0.032 + 0.018 * tap, 0.27) : V3(-0.12 - 0.16, DESK.y + 0.032, 0.3);
    const pole = henk.root.localToWorld(V3(s === 'L' ? 0.5 : -0.5, 0.0, -0.45));
    const q = HANDQ.clone().multiply(new THREE.Quaternion().setFromAxisAngle(V3(0, 0, 1), sx * 0.25));
    henk.armIK(s, w, pole, q);
  }
}

// ---------------- link card + avatar bubbles (3D head renders of Amina and Jada) ----------------
let link, avatars = [];
async function headRender(who, bg) {
  const c3 = await buildCharacter(who, { renderer, base: '../../assets/chars/' });
  const sc = new THREE.Scene(); sc.background = new THREE.Color(bg);
  sc.add(new THREE.HemisphereLight('#f4f8ff', '#cfc6b8', 2.4));
  const k = new THREE.DirectionalLight('#fff1d6', 2.2); k.position.set(-1, 2, 2.5); sc.add(k);
  sc.add(c3.root); c3.pose.headPitch = -0.04; c3.update(0.4); c3.root.updateMatrixWorld(true);
  const hp = c3.rig.head.localToWorld(V3(0, 0.13, 0.02));
  const cam = new THREE.PerspectiveCamera(24, 1, 0.05, 20); cam.position.copy(hp).add(V3(0.08, 0.02, 1.15)); cam.lookAt(hp.clone().add(V3(0, -0.02, 0)));
  const rt = new THREE.WebGLRenderTarget(512, 512, { samples: 4, colorSpace: THREE.SRGBColorSpace });
  renderer.setRenderTarget(rt); renderer.render(sc, cam); renderer.setRenderTarget(null);
  const px = new Uint8Array(512 * 512 * 4); renderer.readRenderTargetPixels(rt, 0, 0, 512, 512, px);
  const c = document.createElement('canvas'); c.width = c.height = 512; const g = c.getContext('2d');
  const id = g.createImageData(512, 512);
  for (let y = 0; y < 512; y++) id.data.set(px.subarray((511 - y) * 2048, (512 - y) * 2048), y * 2048);
  const raw = document.createElement('canvas'); raw.width = raw.height = 512; raw.getContext('2d').putImageData(id, 0, 0);
  g.beginPath(); g.arc(256, 256, 242, 0, 7); g.fillStyle = bg; g.fill(); g.save(); g.clip(); g.drawImage(raw, 0, 0); g.restore();
  g.lineWidth = 16; g.strokeStyle = PAL.inkUI; g.beginPath(); g.arc(256, 256, 244, 0, 7); g.stroke();
  return c;
}
async function buildShare() {
  const logo = parseFigure(await loadText('../../assets/chars/logo-mark.svg.html'));
  const lr = await rasterSVG(logo, [0, 0, 120, 120], 2.4);
  const c = labelCanvas(1200, 400, (g, w, h) => {
    g.drawImage(lr.canvas, 44, 70, 260, 260);
    g.fillStyle = PAL.inkUI; g.font = '800 132px "Lexend V"'; g.textBaseline = 'alphabetic'; g.fillText('vloertaal', 340, 210);
    const tw = g.measureText('vloertaal').width; g.fillStyle = '#ffc414'; g.fillText('.', 340 + tw, 210); g.fillStyle = PAL.inkUI; g.fillText('nl', 340 + tw + g.measureText('.').width, 210);
    g.font = '500 50px "Lexend V"'; g.fillStyle = '#3c4a56'; g.fillText('Nederlands voor op de werkvloer', 344, 300);
  }, { bg: '#fffdf8', bw: 14, r: 44 });
  link = slabCard(c, renderer, 0.5, { depth: 0.012 }); scene.add(link);
  const specs = [['amina', '#e3d3f5'], ['jada', '#cfe6f2'], [null, '#ffc414']];
  for (const [who, bg] of specs) {
    let cv;
    if (who) cv = await headRender(who, bg);
    else { cv = document.createElement('canvas'); cv.width = cv.height = 512; const g = cv.getContext('2d');
      g.beginPath(); g.arc(256, 256, 242, 0, 7); g.fillStyle = bg; g.fill(); g.lineWidth = 16; g.strokeStyle = PAL.inkUI; g.stroke();
      g.fillStyle = PAL.inkUI; g.font = '800 200px "Lexend V"'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('+3', 256, 268); }
    const grp = new THREE.Group();
    const disc = new THREE.Mesh(new THREE.CircleGeometry(0.5, 48), new THREE.MeshBasicMaterial({ map: canvasTex(cv, renderer), transparent: true, toneMapped: false }));
    disc.position.z = 0.04; grp.add(disc);
    const back = new THREE.Mesh(new THREE.CylinderGeometry(0.49, 0.49, 0.07, 48), new THREE.MeshBasicMaterial({ color: '#d9d2c4', toneMapped: false })); back.rotation.x = Math.PI / 2; grp.add(back);
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.53, 0.6, 48), new THREE.MeshBasicMaterial({ color: '#ffc414', transparent: true, opacity: 0, toneMapped: false }));
    ring.position.z = 0.045; grp.add(ring);
    // a small notification dot (yellow with the V) that lights when the link lands
    const dot = new THREE.Mesh(new THREE.CircleGeometry(0.17, 32), new THREE.MeshBasicMaterial({ map: canvasTex(lr.canvas, renderer), transparent: true, opacity: 0, toneMapped: false }));
    dot.position.set(0.36, -0.36, 0.05); grp.add(dot);
    grp.userData = { ring, dot };
    scene.add(grp); avatars.push(grp);
  }
}
// screen coordinates: u across, v from the top of the laptop page
function scrPt(u, v, lift = 0.001) {
  const pt = screenMesh.localToWorld(V3((u - 0.5) * scrInfo.sw, (0.5 - v) * scrInfo.sh, lift));
  const n = V3(0, 0, 1).transformDirection(screenMesh.matrixWorld);
  return { pt, n };
}
const AV = [[0.36, 0.14], [0.5, 0.125], [0.64, 0.14]], AV_D = 0.027, AV_LIFT = 0.045;
const LINK_T0 = 4.55 * STRETCH, LINK_T1 = LINK_T0 + 0.65;
function poseShare(t) {
  const q = screenMesh.getWorldQuaternion(new THREE.Quaternion());
  avatars.forEach((g, i) => {
    const t0 = SHARE_TAP - 0.05 + i * 0.12;
    const s = t < t0 ? 0 : backOut(seg(t, t0, t0 + 0.4), 2.2);
    const S = scrPt(AV[i][0], AV[i][1]);
    g.visible = s > 0.001; g.scale.setScalar(Math.max(0.001, s) * AV_D);
    g.position.copy(S.pt).addScaledVector(S.n, AV_LIFT); g.quaternion.copy(q);
    g.position.y += Math.sin(t * 2 + i) * 0.0012;
    const tl = LINK_T1 - 0.05 + i * 0.14, L = seg(t, tl, tl + 0.25);
    g.userData.dot.material.opacity = smooth(L);
    g.userData.ring.material.opacity = smooth(L) * (0.6 + 0.4 * Math.sin(Math.PI * seg(t, tl, tl + 0.5)));
    g.scale.multiplyScalar(1 + Math.sin(Math.PI * seg(t, tl, tl + 0.35)) * 0.14);
  });
  // the card: out of the page centre, arcs toward the camera and settles under the bubbles
  const k = seg(t, LINK_T0, LINK_T1), e = inOut(k);
  const A = scrPt(0.5, 0.58, 0.004), B = scrPt(0.5, 0.222, AV_LIFT - 0.01);
  const mid = A.pt.clone().lerp(B.pt, 0.5).addScaledVector(A.n, 0.05).add(V3(0.015, 0, 0));
  const a = A.pt.clone().lerp(mid, e), b = mid.clone().lerp(B.pt, e);
  link.visible = t >= LINK_T0;
  link.position.copy(a.lerp(b, e));
  link.scale.setScalar(Math.max(0.001, lerp(0.004, 0.072, easeOut(seg(t, LINK_T0, LINK_T0 + 0.45))) / 0.5));
  link.quaternion.copy(q); link.rotateY(Math.sin(e * Math.PI) * 0.45); link.rotateZ(Math.sin(e * Math.PI) * -0.1);
  link.position.y += Math.sin(Math.max(0, t - LINK_T1) * 2.4) * 0.0012;
}

// ---------------- camera: one move, one ease ----------------
const camera = new THREE.PerspectiveCamera(44, W / H, 0.004, 200);
let move;
function buildCamera() {
  poseHenk(DURATION); scene.updateMatrixWorld(true);
  const fovEnd = 40, S = scrPt(0.5, 0.52);
  const end = S.pt.clone().addScaledVector(S.n, frameDist(scrInfo.sw, fovEnd, 0.62));
  const C = (x, y, z) => henk.root.localToWorld(V3(x, y, z));     // Henk's frame (+Z = his front, +X = his left)
  const face = C(0, 0.64, 0.15), lap = scrPt(0.5, 0.5).pt;
  const ctrl = [V3(-3.3, 2.35, -3.35), V3(-1.7, 1.95, -2.55), V3(-0.3, 1.6, -1.9),   // warehouse aisle (racks, forklift) → through the glass wall
    C(0.25, 0.8, 1.55),          // facing him across the desk (laptop back, glass wall behind the camera)
    C(-1.0, 0.85, 0.95),         // his right-front, over the mug (v4: wider, the move is slower now)
    C(-1.3, 0.92, -0.05),        // his right side
    C(-0.62, 1.06, -0.62),       // behind him
    C(-0.34, 1.08, -0.42),       // behind his grey head
    C(-0.33, 0.86, 0.06),        // over his right shoulder
    C(-0.12, 0.6, 0.26),
    end];
  move = makeMove({ ctrl, T0: 0, T1: CAM_END, v0: 4.4,
    aimKeys: [[0, C(0, 0.3, 0.0)], [1.0, face], [2.2, face], [2.9, face.clone().lerp(lap, 0.6)], [3.5, lap], [CAM_END, S.pt]],
    fovKeys: [[0, 50], [1.3, 45], [2.6, 43], [4.0, 41], [CAM_END, fovEnd]],
    upEnd: V3(0, 1, 0).transformDirection(screenMesh.matrixWorld), upFrom: 2.8 });
  const headC = C(0, 0.63, 0.07); let minD = 9; for (const q of move.pts) minD = Math.min(minD, q.distanceTo(headC));
  console.log('shot3: p', move.p.toFixed(2), 'L', move.L.toFixed(2), 'knots at', ctrl.map((c) => move.when(c)).join(' '), 'closest to head', minD.toFixed(3));
}
const subAt = (t) => (t /= STRETCH, SUBQ !== 'auto' ? Number(SUBQ) : t < 3.6 ? 8 : t < 4.3 ? 3 : t < 5.5 ? 6 : 3);
const cap1 = document.getElementById('cap1');
function poseAt(t) {
  poseHenk(t); poseShare(t);
  scene.updateMatrixWorld(true);
  move.pose(camera, t / STRETCH);
}
function setTime(t) {
  placeCap(cap1, t, 0.6, 6.4);
  const n = subAt(t);
  frame(scene, camera, n, (i, nn) => { const ts = nn > 1 ? t + ((i + 0.5) / nn - 0.5) * (SHUTTER / FPS) : t; poseAt(clamp(ts, 0, DURATION)); });
  return true;
}
window.DURATION = DURATION; window.setTime = setTime;
window.ready = (async () => {
  await document.fonts.load('700 66px "Lexend V"'); await document.fonts.load('800 66px "Lexend V"'); await document.fonts.load('500 66px "Lexend V"'); await document.fonts.load('600 66px "Lexend V"'); await document.fonts.ready;
  await buildScreen(); await buildHenk(); await buildShare(); buildCamera();
  setTime(Number(P.get('t') ?? 0));
  return true;
})().catch((e) => { console.error(e.stack || e); throw e; });
