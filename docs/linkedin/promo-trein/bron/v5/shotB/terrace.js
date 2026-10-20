// v5: Jada's café terrace (from v4/shot2), built into `root`. T = { TAP, STREAK, DAG } in the caller's clock.
import * as THREE from 'three';
import { PAL, clamp, seg, lerp, smooth, canvasTex, rng } from '../../lib/kit.js';
import { easeOut, backOut, rr, roundBox, loadImg, labelCanvas, slabCard } from '../../lib/figs.js';
import { buildCharacter, holdPhone } from '../../lib/char3d.js';
import { makePhone3D, V3 } from '../../lib/v3cam.js';

export function terrace(root, renderer, T) {
  const lam = (c) => new THREE.MeshLambertMaterial({ color: c });
  const basic = (c) => new THREE.MeshBasicMaterial({ color: c, toneMapped: false });
  const add = (geo, mat, x, y, z, { ry = 0, rx = 0, rz = 0, cast = true, recv = true, parent = root } = {}) => {
    const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.rotation.set(rx, ry, rz); m.castShadow = cast; m.receiveShadow = recv; parent.add(m); return m;
  };
  function tube(a, b, r, mat, parent = root) {
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
  const awn = new THREE.Group(); root.add(awn);
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
  const sign = slabCard(signC, renderer, 2.2, { depth: 0.06 }); sign.position.set(-0.4, 3.9, FZ + 0.05); root.add(sign);
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
    const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = ry; root.add(g);
    add(new THREE.CylinderGeometry(0.21, 0.21, 0.04, 20), lam('#c98a4b'), 0, 0.46, 0, { parent: g });
    for (const [a, b] of [[0.14, 0.14], [-0.14, 0.14], [0.14, -0.14], [-0.14, -0.14]]) tube([a, 0, b], [a * 0.85, 0.45, b * 0.85], 0.012, metal, g);
    const back = add(new THREE.TorusGeometry(0.19, 0.014, 6, 20, Math.PI), metal, 0, 0.66, -0.17, { rx: -0.12, parent: g });
    tube([0.19, 0.47, -0.17], [0.19, 0.66, -0.19], 0.012, metal, g); tube([-0.19, 0.47, -0.17], [-0.19, 0.66, -0.19], 0.012, metal, g);
    add(new THREE.TorusGeometry(0.15, 0.01, 6, 20, Math.PI), metal, 0, 0.6, -0.175, { rx: -0.12, parent: g });
  }
  table(0, 0); chair(0, -0.55, 0); chair(0.62, 0.38, -2.3);
  // v5: more of the terrace in use (seen wide from the street and the air): tables with cups, an A-board
  for (const [x, z, k] of [[-4.3, 1.4, 0], [2.6, 2.3, 1], [-1.6, 3.4, 2], [-5.6, 3.6, 3], [1.0, 5.2, 4]]) {
    table(x, z); chair(x, z - 0.55, 0); chair(x + 0.55, z + 0.4, -2.3); if (k % 2) chair(x - 0.55, z + 0.4, 2.3);
    add(new THREE.CylinderGeometry(0.045, 0.035, 0.07, 20), lam('#ffffff'), x + 0.15, 0.8, z + 0.05);
    if (k !== 2) add(new THREE.CylinderGeometry(0.03, 0.026, 0.1, 14), new THREE.MeshLambertMaterial({ color: '#cfe6f2', transparent: true, opacity: 0.6 }), x - 0.15, 0.81, z - 0.05);
  }
  { const ab = new THREE.Group(); ab.position.set(3.6, 0, 3.4); ab.rotation.y = -0.5; root.add(ab);
    for (const s of [-1, 1]) add(new THREE.BoxGeometry(0.6, 0.95, 0.03), lam(s > 0 ? '#1f5b3a' : '#2a2e33'), 0, 0.47, s * 0.13, { rx: s * 0.16, parent: ab });
    add(new THREE.BoxGeometry(0.42, 0.04, 0.005), lam('#f4f7f9'), 0, 0.72, 0.16, { rx: 0.16, parent: ab });
    add(new THREE.BoxGeometry(0.36, 0.03, 0.005), lam('#f4f7f9'), 0, 0.6, 0.18, { rx: 0.16, parent: ab });
    add(new THREE.BoxGeometry(0.4, 0.03, 0.005), lam('#ffc414'), 0, 0.48, 0.2, { rx: 0.16, parent: ab }); }
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
  const bike = new THREE.Group(); bike.position.set(1.75, 0, -1.6); bike.rotation.y = -0.18; root.add(bike);
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

  // ---------------- Jada (3D), seated at her table, phone in both hands ----------------
  const SEAT = V3(0, 0.565, -0.55);
  let jada, hold, PH, IMG = {};
  async function buildJada() {
    jada = await buildCharacter('jada', { renderer, base: '../../assets/chars/' });
    jada.root.position.copy(SEAT); root.add(jada.root);
    jada.pose.lean = 0.07; jada.pose.headPitch = 0.36; jada.pose.headRoll = 0.03; jada.pose.blinkOffset = 1.4;
    PH = makePhone3D(renderer);
    const pv = new THREE.Group(); pv.position.set(-0.03, 0.27, 0.33); pv.rotation.y = Math.PI; jada.root.add(pv);
    const tilt = new THREE.Group(); tilt.rotation.x = -1.05; pv.add(tilt); tilt.add(PH.phone);
    hold = holdPhone(jada, PH.phone, { pw: PH.pw, ph: PH.ph, depth: PH.depth, grip: 0.26 });
    jada.root.updateMatrixWorld(true);
    for (const s of ['L', 'R']) {
      const sx = s === 'L' ? 1 : -1;
      jada.legIK(s, jada.root.localToWorld(V3(sx * 0.1, -0.49, 0.42)), jada.root.localToWorld(V3(sx * 0.05, 0.3, 1.5)), new THREE.Quaternion().setFromRotationMatrix(jada.root.matrixWorld));
    }
    for (const k of ['chat_pl', 'chat_pl_ok', 'streak_pl']) IMG[k] = await loadImg(`../../assets/shots/${k}.png`);
  }
  const { TAP, STREAK, DAG } = T;
  // her left thumb taps answer 1 ("Bijna. Nog vijf minuten.", at x 330, y 1509 of 1170 × 2532)
  const tapK = (t) => clamp(Math.min(smooth(seg(t, TAP - 0.3, TAP - 0.08)), 1 - smooth(seg(t, TAP + 0.08, TAP + 0.32))));
  function poseJada(t) {
    jada.update(t);
    jada.root.updateMatrixWorld(true);
    hold(t, { tap: { u: 330 / 1170, v: 1509 / 2532, k: tapK(t), side: 'L' } });
  }

  // ---------------- the screen (the app's real screenshots) ----------------
  function drawScreen(t) {
    const g = PH.g; g.globalAlpha = 1; g.setTransform(1, 0, 0, 1, 0, 0);
    if (t < STREAK) {
      const x = smooth(clamp((t - TAP - 0.1) / 0.12));
      g.drawImage(IMG.chat_pl, 0, 0);
      if (x > 0) { g.globalAlpha = x; g.drawImage(IMG.chat_pl_ok, 0, 0); g.globalAlpha = 1; }
      const s = 1 - 0.04 * Math.sin(Math.PI * clamp((t - TAP + 0.08) / 0.2));
      if (s < 1 && x < 0.5) { g.save(); g.translate(495, 1509); g.scale(s, s); g.translate(-495, -1509); g.drawImage(IMG.chat_pl, 48, 1400, 900, 220, 48, 1400, 900, 220); g.restore(); }
      const rp = clamp((t - TAP + 0.05) / 0.25);
      if (rp > 0 && rp < 1) {
        g.globalAlpha = Math.sin(rp * Math.PI) * 0.85; g.fillStyle = 'rgba(30,34,38,0.16)';
        g.beginPath(); g.arc(330, 1509, 50 + 170 * easeOut(rp), 0, 7); g.fill();
        g.lineWidth = 10; g.strokeStyle = '#fff'; g.stroke(); g.globalAlpha = 1;
      }
    } else {
      const x = smooth(clamp((t - STREAK) / 0.2));
      g.drawImage(IMG.chat_pl_ok, 0, 0);
      g.globalAlpha = x; g.drawImage(IMG.streak_pl, 0, 0); g.globalAlpha = 1;
      const k = clamp((t - STREAK - 0.15) / 0.45);
      if (k > 0) {
        const s = k < 1 ? lerp(0.86, 1, backOut(k, 2.6)) : 1, cx = 1170 * 0.5, cy = 2532 * 0.36;
        g.fillStyle = '#e7e3dc'; g.fillRect(40, 700, 1090, 420);
        g.save(); g.translate(cx, cy); g.scale(s, s); g.translate(-cx, -cy); g.drawImage(IMG.streak_pl, 40, 700, 1090, 420, 40, 700, 1090, 420); g.restore();
      }
    }
    PH.tex.needsUpdate = true;
  }
  // "Dag 7 op rij": a paper badge that pops out of the screen and floats just in front of it
  let dag;
  function buildDag() {
    const c = labelCanvas(1100, 300, (g, w, h) => {
      g.save(); g.translate(150, 158); g.scale(1.25, 1.25);
      g.fillStyle = '#ff7a00'; g.beginPath(); g.moveTo(0, -90); g.bezierCurveTo(60, -40, 70, 10, 55, 45); g.bezierCurveTo(40, 85, -40, 85, -55, 45); g.bezierCurveTo(-68, 10, -40, -20, -20, -40); g.bezierCurveTo(-15, -10, 0, -5, 5, -15); g.bezierCurveTo(15, -40, 5, -70, 0, -90); g.fill();
      g.fillStyle = '#ffc414'; g.beginPath(); g.moveTo(0, -10); g.bezierCurveTo(35, 15, 35, 50, 20, 62); g.bezierCurveTo(5, 72, -22, 70, -30, 52); g.bezierCurveTo(-38, 30, -15, 15, 0, -10); g.fill();
      g.restore();
      g.fillStyle = PAL.inkUI; g.font = '800 128px "Lexend V"'; g.textBaseline = 'middle'; g.fillText('Dag 7 op rij', 270, h / 2 + 6);
    }, { bg: '#fffdf8', bw: 14, r: 50 });
    dag = slabCard(c, renderer, 0.17, { depth: 0.012 });
    root.add(dag);
  }
  const DAG_W = 0.074;     // badge width (m): whole inside the final frame
  function poseDag(t) {
    const k = seg(t, DAG, DAG + 0.42);
    if (k <= 0) { dag.visible = false; return; }
    dag.visible = true;
    const s = backOut(k, 2.4) * DAG_W / 0.17;
    dag.scale.setScalar(Math.max(0.001, s));
    const S = PH.point(0.5, 0.56);
    const bob = 0.0012 * Math.sin((t - DAG) * 3.1);
    dag.position.copy(S.pt).addScaledVector(S.n, 0.004 + 0.022 * easeOut(k) + bob);
    dag.quaternion.copy(PH.phone.getWorldQuaternion(new THREE.Quaternion()));
    dag.rotateZ(0.05 + 0.1 * (1 - easeOut(k)) + 0.01 * Math.sin((t - DAG) * 2.3)); dag.rotateY(-0.3 * (1 - easeOut(k)));
  }

  return { buildSign, buildJada, buildDag, poseJada, drawScreen, poseDag, get jada() { return jada; }, get PH() { return PH; }, IMG, FZ };
}
