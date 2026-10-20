// Shot B v5 (film 16.5–35.5 s, local u 0–19): the middle of the one-shot film, in one world.
//  u 0      the camera sits where shot A left it: square on a phone screen, the screen 4 % wider than the frame.
//           Shot A's last image is Amina's "Goed zo!"; here the same image slides away and Jada's chat slides in
//           (the app turns the page), so the phone became Jada's without a cut.
//  u 0.5–2.6 a slow pull back: her thumb taps the answer, the streak, "Dag 7 op rij" pops off the screen.
//  u 2.6–7.3 out over her shoulder, behind her head, round her right side to the front: the terrace.
//  u 7.3–11.4 up as a drone over the café and the town (canal, row houses), banking towards the business park.
//  u 11.4–13.8 down to the hall's open loading door, in along the aisle, through the canteen's glass wall.
//  u 13.8–17.1 round Henk, behind his head, over his shoulder onto the laptop; he shares the link (17.25).
//  u 18.4–19 a dive into the laptop screen; the end card (shot C) fades in over it (assembly).
import * as THREE from 'three';
import { W, H, clamp, seg, lerp, smooth, inOut, track, makeRenderer, skyDome, lensJitter, HIQ } from '../../lib/kit.js';
import { easeOut, loadImg, placeCap } from '../../lib/figs.js';
import { V3, frameDist } from '../../lib/v3cam.js';
import { terrace } from './terrace.js';
import { canteen } from './canteen.js';
import { buildTown, buildPark } from './town.js';
import { extrasB } from './extras.js';
import { realify } from '../../lib/real.js';

const P = new URLSearchParams(location.search);
// v5b: the film is 54 s; this shot plays its 19-s choreography (clock u) on a slower clock over 29 s (clock w):
// more time on Jada, the flight, the hall and Henk. WARP keys [w, u]; a monotone cubic between them.
const WARP = [[0, 0], [0.55, 0.55], [3.6, 2.6], [10.8, 7.3], [17.95, 11.45], [21.85, 13.85], [26.65, 17.15], [29.0, 19.0]];
const DURATION = 19.0, FILM_DURATION = 29.0, FPS = 30, SUBQ = P.get('sub') ?? 'auto', SHUTTER = 0.5;
// the hand-off pose of shot A (v5/shotA HANDOFF_*): kept in step by hand
const HANDOFF_FILL = 0.96, HANDOFF_FOV = 40, HANDOFF_V = 0.62;
const SLIDE = [0.1, 0.5];                      // Amina's screen → Jada's chat
const TJ = { TAP: 1.3, STREAK: 2.0, DAG: 2.3 }; // Jada's thumb, the streak screen, the badge
const SHARE_TAP = 17.25, LINK_T0 = 17.4;

const canvas = document.getElementById('gl');
const { renderer, frame } = makeRenderer(canvas);
const scene = new THREE.Scene();
const FOG = '#f3e6cf';
scene.fog = new THREE.Fog(FOG, 40, 160);
const sky = skyDome({ top: '#5aa9e0', mid: '#a7d4f0', horizon: '#f7e6c6', below: '#d9cbb0' }); scene.add(sky);
scene.add(new THREE.HemisphereLight('#e6f1ff', '#d8c7a8', 2.3));
const sun = new THREE.DirectionalLight('#ffe2a8', 2.7);
const SUN_DIR = new THREE.Vector3(0.75, 0.62, 0.42).normalize();
sun.castShadow = true; sun.shadow.mapSize.set(4096, 4096); sun.shadow.bias = -0.0005; sun.shadow.normalBias = 0.025; sun.shadow.radius = 2;
scene.add(sun, sun.target);

// ---------------- the world ----------------
const T1 = terrace(scene, renderer, TJ);
const G = new THREE.Group(); G.position.set(-14, 0, -205); G.rotation.y = Math.PI / 2; scene.add(G); G.updateMatrixWorld(true);
buildPark(scene, G);
const T3 = canteen(G, renderer, { SHARE_TAP, LINK_T0, world: scene });
buildTown(scene);
const EX = extrasB(scene, G);   // v5b: figuranten
const Gw = (x, y, z) => G.localToWorld(V3(x, y, z));

// ---------------- Jada's screen: the page turn from Amina's lesson ----------------
let AMINA;
function drawScreenAt(u) {
  if (u >= SLIDE[1]) { T1.drawScreen(u); return; }
  const g = T1.PH.g, x = inOut(seg(u, SLIDE[0], SLIDE[1]));
  g.setTransform(1, 0, 0, 1, 0, 0); g.globalAlpha = 1;
  g.fillStyle = '#e7e3dc'; g.fillRect(0, 0, 1170, 2532);
  g.drawImage(AMINA, -x * 1170, 0, 1170, 2532);
  g.drawImage(T1.IMG.chat_pl, (1 - x) * 1170, 0, 1170, 2532);
  // a thin shadow on the incoming page's left edge
  if (x > 0 && x < 1) { g.fillStyle = 'rgba(30,34,38,0.12)'; g.fillRect((1 - x) * 1170 - 14, 0, 14, 2532); }
  T1.PH.tex.needsUpdate = true;
}

// ---------------- camera ----------------
const camera = new THREE.PerspectiveCamera(40, W / H, 0.004, 3000);
let posAt, aimAt, fovAt, rollAt, upAt, handoff, lapEnd, lapDive, crossU = 99;
/** Fritsch–Carlson monotone cubic through (x_k, y_k): no overshoot, C1. */
function monotone(xs, ys) {
  const n = xs.length, d = [], m = new Array(n);
  for (let i = 0; i < n - 1; i++) d.push((ys[i + 1] - ys[i]) / (xs[i + 1] - xs[i]));
  m[0] = 0; m[n - 1] = 0;
  for (let i = 1; i < n - 1; i++) m[i] = d[i - 1] * d[i] <= 0 ? 0 : (3 * (xs[i + 1] - xs[i - 1])) / ((2 * xs[i + 1] - xs[i] - xs[i - 1]) / d[i - 1] + (xs[i + 1] + xs[i] - 2 * xs[i - 1]) / d[i]);
  return (x) => {
    if (x <= xs[0]) return ys[0];
    if (x >= xs[n - 1]) return ys[n - 1];
    let i = 0; while (x > xs[i + 1]) i++;
    const h = xs[i + 1] - xs[i], s = (x - xs[i]) / h, s2 = s * s, s3 = s2 * s;
    return (2 * s3 - 3 * s2 + 1) * ys[i] + (s3 - 2 * s2 + s) * h * m[i] + (-2 * s3 + 3 * s2) * ys[i + 1] + (s3 - s2) * h * m[i + 1];
  };
}
function screenPose(PH, v, fill, fov) {
  const top = PH.top, pt = PH.phone.localToWorld(V3(0, top - PH.sHt * v, 0.0028));
  const n = V3(0, 0, 1).transformDirection(PH.phone.matrixWorld);
  const d = (PH.sw * fill) / (2 * Math.tan(THREE.MathUtils.degToRad(fov / 2)) * (W / H));
  return { p: pt.clone().addScaledVector(n, d), aim: pt, up: V3(0, 1, 0).transformDirection(PH.phone.matrixWorld), n };
}
function buildCamera() {
  T1.poseJada(0); T3.poseHenk(0); scene.updateMatrixWorld(true);
  handoff = screenPose(T1.PH, HANDOFF_V, HANDOFF_FILL, HANDOFF_FOV);
  const back = screenPose(T1.PH, 0.5, 1.9, 42);
  const J = (x, y, z) => T1.jada.root.localToWorld(V3(x, y, z));       // Jada's frame (+Z her front, +X her left)
  const Hk = (x, y, z) => T3.henk.root.localToWorld(V3(x, y, z));      // Henk's frame
  const jFace = J(0, 0.64, 0.17), jPhone = T1.PH.phone.localToWorld(V3(0, T1.PH.ph * 0.5, 0));
  const hFace = Hk(0, 0.64, 0.15), lap = T3.scrPt(0.5, 0.5).pt;
  const S = T3.scrPt(0.5, 0.52);
  lapEnd = S.pt.clone().addScaledVector(S.n, frameDist(T3.scrInfo.sw, 40, 0.62));
  const S2 = T3.scrPt(0.5, 0.5);
  lapDive = S2.pt.clone().addScaledVector(S2.n, (T3.scrInfo.sh * 0.9) / (2 * Math.tan(THREE.MathUtils.degToRad(20))));
  const door = Gw(-15, 2.7, -3.3);
  // position keys [u, point]
  const K = [
    [0.55, handoff.p], [2.5, back.p],
    [3.35, J(-0.2, 0.66, 0.3)], [3.95, J(-0.38, 0.86, 0.02)], [4.55, J(-0.42, 1.06, -0.55)],
    [5.25, J(-1.02, 1.0, -0.62)], [5.95, J(-1.32, 0.86, 0.5)], [6.65, J(-0.95, 0.92, 1.95)],
    [7.35, V3(-2.6, 2.3, 4.6)], [8.15, V3(-4.2, 12.5, 8.2)], [8.95, V3(-6.5, 31, 4)],
    [9.85, V3(-9.5, 41, -42)], [10.75, V3(-14, 34, -110)], [11.45, V3(-17, 14.5, -160)],
    [12.05, Gw(-24, 3.3, -3.3)], [12.4, door], [12.85, Gw(-8.5, 2.45, -3.35)],
    [13.2, Gw(-3.4, 2.2, -3.4)], [13.5, Gw(-1.3, 1.9, -3.1)], [13.68, Gw(-0.225, 1.72, -2.45)], [13.85, Gw(-0.225, 1.62, -1.75)],
    [14.35, Hk(0.25, 0.8, 1.55)], [14.85, Hk(-1.0, 0.85, 0.95)], [15.25, Hk(-1.3, 0.92, -0.05)],
    [15.65, Hk(-0.62, 1.06, -0.62)], [15.95, Hk(-0.34, 1.08, -0.42)], [16.35, Hk(-0.33, 0.86, 0.06)],
    [16.75, Hk(-0.12, 0.6, 0.26)], [17.15, lapEnd], [18.45, lapEnd], [19.0, lapDive],
  ];
  // arc-length timing: a centripetal Catmull-Rom through the points, the time → length map monotone
  const pts = K.map((k) => k[1]);
  const curve = new THREE.CatmullRomCurve3(pts, false, 'centripetal'); curve.arcLengthDivisions = 20000;
  const lens = curve.getLengths(20000), L = lens[lens.length - 1];
  const at = K.map((_, i) => lens[Math.round((i / (K.length - 1)) * 20000)]);
  const sOf = monotone(K.map((k) => k[0]), at);
  posAt = (u) => (u <= K[0][0] ? handoff.p.clone() : curve.getPointAt(clamp(sOf(u) / L)));
  // aim keys (C1 track)
  const A = (v) => [v.x, v.y, v.z];
  const aimT = track([
    [0.55, A(handoff.aim)], [2.5, A(back.aim)], [3.35, A(jPhone)], [4.55, A(jPhone.clone().lerp(jFace, 0.4))],
    [5.95, A(jFace)], [6.65, A(jFace)], [7.35, A(J(0, 0.5, 0))], [8.15, A(V3(0, 0.6, -0.8))],
    [8.95, A(V3(-6, 0, -36))], [9.85, A(V3(-11, 0, -100))], [10.75, A(V3(-16, 2, -168))],
    [11.45, A(door)], [12.05, A(Gw(-12, 2.5, -3.3))], [12.85, A(Gw(-2, 2.0, -3.2))], [13.5, A(Gw(-0.225, 1.5, 0.5))],
    [13.8, A(hFace)], [14.85, A(hFace)], [15.25, A(hFace)], [15.95, A(hFace.clone().lerp(lap, 0.6))],
    [16.35, A(lap)], [17.15, A(S.pt)], [18.45, A(S.pt)], [19.0, A(S2.pt)],
  ]);
  aimAt = (u) => (u <= 0.55 ? handoff.aim.clone() : V3(...aimT(u)));
  const fT = track([[0.55, [40]], [2.5, [42]], [4.5, [44]], [7.35, [47]], [8.95, [56]], [10.75, [56]], [12.05, [50]], [13.25, [47]], [14.35, [45]], [16.35, [42]], [17.15, [40]], [19, [40]]]);
  fovAt = (u) => fT(u)[0];
  // when the camera passes the canteen's glass wall (local z = −1.9): the kit's glass sweep and ripple
  { const inv = new THREE.Matrix4().copy(G.matrixWorld).invert(); let prev = null;
    for (let u = 12.5; u < 14.5; u += 0.002) { const z = posAt(u).applyMatrix4(inv).z; if (prev !== null && prev < -1.9 && z >= -1.9) { crossU = u; break; } prev = z; } }
  const rT = track([[8.95, [0]], [9.85, [-7]], [10.75, [6]], [11.45, [0]]]);
  rollAt = (u) => rT(u)[0];
  const lapUp = V3(0, 1, 0).transformDirection(T3.screenMesh.matrixWorld);
  upAt = (u) => {
    if (u <= 0.55) return handoff.up.clone();
    const a = handoff.up.clone().lerp(V3(0, 1, 0), smooth(seg(u, 0.55, 3.0))).normalize();
    return a.lerp(lapUp, smooth(seg(u, 16.4, 17.15))).normalize();
  };
}
let lastFocus = 1;
function poseCamera(u) {
  const p = posAt(u), q = aimAt(u);
  camera.position.copy(p); camera.up.copy(upAt(u)); camera.lookAt(q);
  const r = rollAt(u); if (r) camera.rotateZ(THREE.MathUtils.degToRad(r));
  camera.fov = fovAt(u); camera.updateProjectionMatrix(); camera.updateMatrixWorld(true);
  lastFocus = p.distanceTo(q);
  // the sun's shadow box follows the camera (60 % towards the aim point)
  const size = clamp(lastFocus * 1.3, 5, 320), focus = p.clone().lerp(q, 0.6);
  sun.target.position.copy(focus); sun.position.copy(focus).addScaledVector(SUN_DIR, 400);
  const sc = sun.shadow.camera; sc.left = -size; sc.right = size; sc.top = size; sc.bottom = -size; sc.near = 100; sc.far = 900; sc.updateProjectionMatrix();
  // fog opens up with height (the town and the park read from the air), close again inside the hall
  const h = p.y;
  scene.fog.near = lerp(40, 260, smooth(seg(h, 4, 38)));
  scene.fog.far = lerp(160, 1100, smooth(seg(h, 4, 38)));
  sky.position.copy(p);
}
/** Lens: shallow focus near Jada and near Henk; none in the air and at both hand-offs. */
const apertureAt = (u) => 0.006 * (smooth(seg(u, 0.9, 1.6)) * (1 - smooth(seg(u, 6.7, 7.4))) + smooth(seg(u, 13.9, 14.5)) * (1 - smooth(seg(u, 16.9, 17.4))));
const SUBK = Number(P.get('subk') ?? 1);   // v6: scales the sub-frame counts (render time)
const AOK = Number(P.get('ao') ?? 1);   // v7: contact shadow strength (lib/ao.js); 0 = off
const subAt0 = (u) => (SUBQ !== 'auto' ? Number(SUBQ) : u < 0.55 ? 2 : u < 7.2 ? 5 : u < 13.9 ? 6 : u < 17.3 ? 5 : u < 18.45 ? 3 : 5);

const subAt = (t) => (SUBQ !== 'auto' ? Number(SUBQ) : Math.max(2, Math.round(subAt0(t) * SUBK)));
function poseAt(u) {
  T1.poseJada(u); T1.poseDag(u);
  T3.poseHenk(u); T3.poseShare(u);
  scene.updateMatrixWorld(true);
  poseCamera(u);
}
const cap1 = document.getElementById('cap1'), cap2 = document.getElementById('cap2');
/** The glass wall: one soft diagonal sweep and a short ripple, as through the train window in shot A. */
function glassFx(u) {
  const dc = u - crossU;
  return {
    sweep: lerp(-0.3, 1.7, clamp((dc + 0.12) / 0.24)), sweepAmt: Math.sin(Math.PI * clamp((dc + 0.12) / 0.24)) * 0.7,
    ripple: Math.max(0, 1 - Math.abs(dc - 0.01) / 0.05),
    zoom: 1 + 0.04 * Math.sin(Math.PI * clamp((dc + 0.12) / 0.5)),
  };
}
let warp;
function setTime(w) {
  const u = warp(w);
  placeCap(cap1, u, 5.5, 7.9);
  placeCap(cap2, u, 13.95, 16.85);
  drawScreenAt(u);
  const n = subAt(u);
  frame(scene, camera, n, (i, nn) => {
    const ws = nn > 1 ? w + ((i + 0.5) / nn - 0.5) * (SHUTTER / FPS) : w;
    const us = warp(clamp(ws, 0, FILM_DURATION));
    EX.update(clamp(ws, 0, FILM_DURATION));
    poseAt(clamp(us, 0, DURATION));
    if (HIQ) lensJitter(camera, i, nn, lastFocus, apertureAt(us));
  }, { seed: w + 16.5, ...glassFx(u), ao: AOK });
  return true;
}
window.DURATION = FILM_DURATION; window.setTime = setTime;
window.crossU = () => crossU;
window.camInfo = (u) => { poseAt(u); return { p: camera.position.toArray().map((x) => +x.toFixed(2)), fov: camera.fov }; };
window.ready = (async () => {
  await document.fonts.load('700 66px "Lexend V"'); await document.fonts.load('800 66px "Lexend V"'); await document.fonts.ready;
  T1.buildSign(); await T1.buildJada(); T1.buildDag();
  await T3.buildScreen(); await T3.buildHenk(); await T3.buildShare();
  AMINA = await loadImg('../../assets/shots/dutch_ar_ok.png');
  if (P.get('real') !== '0') realify(scene, renderer);   // v6: physically based materials + environment
  buildCamera();
  warp = monotone(WARP.map((k) => k[0]), WARP.map((k) => k[1]));
  setTime(Number(P.get('t') ?? 0));
  return true;
})().catch((e) => { console.error(e.stack || e); throw e; });
