// Shot A v5 (0–16.5 s) = shot 1 v4 + a dive into Amina's screen (16.0–16.5) to the hand-off pose that
// shot B starts from (screen centre on the normal, screen 4 % wider than the frame, screen-up up).
// Shot 1 v4 (0–16 s): the v3 choreography (0–9 s "camera time" τ) played on a slower clock τ(t): the drone
// at 0.75×, then it lingers facing Amina (she looks up and smiles at us), arcs behind her head and pushes
// in; her tap and "Goed zo!" run in real time (14.1 s), so the screen holds ~1.4 s before the cut.
// The world (train, polder, her breathing and blinks) runs in real time.
// v3 notes: 0–5.25 s is film-v2's camera, sample for sample (drone → train → through the
// glass, track dumped from shot1/main.js into v2cam.json). Then one continuous move with one global
// ease (speed falls smoothly from the glass crossing to the lock): toward 3D Amina (facing her),
// an arc past her left side to behind her head (~150°), and a push OVER HER LEFT SHOULDER onto the
// phone in her hands; her right thumb taps (7.8 s) → "Goed zo!"; at 9.0 s the screen fills the frame
// exactly as film-v2's hand-off frame.
import * as THREE from 'three';
import { W, H, PAL, clamp, seg, lerp, inOut, smooth, track, makeRenderer, skyDome, canvasTex, lensJitter, HIQ, rng } from '../../lib/kit.js';
import { buildPolder, animatePolder } from '../../lib/polder.js';
import { buildTrain, glassMaterial, carCenter, CAR, WIN } from '../../lib/train.js';
import { buildCharacter, holdPhone } from '../../lib/char3d.js';
import { buildExtra, randomLook } from '../../lib/extras.js';
import { realify } from '../../lib/real.js';
import { BAYS } from '../../lib/train.js';

const P = new URLSearchParams(location.search);
const DURATION = 16.5, FPS = 30, CAM_END = 9.0, DIVE0 = 16.0;
export const HANDOFF_FILL = 0.96, HANDOFF_FOV = 40, HANDOFF_V = 0.62;
const SUBQ = P.get('sub') ?? 'auto';
const SHUTTER = 0.5;
const V = 24, X0 = -120, AMINA_CAR = 1, PASS_X = -1.15;
const T1 = 5.25;                                   // hand-over from the v2 track
const TAP = 14.1;                                  // real time
// camera clock: Hermite keys [t, τ, dτ/dt]
const TAU = [[0, 0, 0.75], [7, 5.25, 0.75], [9.0, 6.22, 0.22], [10.6, 6.45, 0.17], [13.2, 7.64, 0.55], [16, 9, 0.35]];
function tauOf(t) {
  t = clamp(t, 0, 16);
  let i = 0; while (i < TAU.length - 2 && t > TAU[i + 1][0]) i++;
  const [t0, a, m0] = TAU[i], [t1, b, m1] = TAU[i + 1], h = t1 - t0, x = (t - t0) / h;
  const h00 = 2 * x ** 3 - 3 * x * x + 1, h10 = x ** 3 - 2 * x * x + x, h01 = -2 * x ** 3 + 3 * x * x, h11 = x ** 3 - x * x;
  return h00 * a + h10 * h * m0 + h01 * b + h11 * h * m1;
}
// she looks up from the phone to the camera (facing her over the table), smiles, and back down
const LOOK = (t) => smooth(seg(t, 9.0, 9.6)) * (1 - smooth(seg(t, 10.6, 11.25)));

const canvas = document.getElementById('gl');
const { renderer, frame } = makeRenderer(canvas);
const scene = new THREE.Scene();
const HORIZON = '#cfefff';
scene.fog = new THREE.Fog(HORIZON, 1500, 15000);
const sky = skyDome({ top: '#4fa8e8', mid: '#8fcbf2', horizon: HORIZON, below: '#cfe6c8' });
scene.add(sky);
const hemi = new THREE.HemisphereLight('#e3f2ff', '#d9d6cc', 2.6); scene.add(hemi);
const sun = new THREE.DirectionalLight('#ffe6b0', 2.25);
const SUN_DIR = new THREE.Vector3(-0.65, 0.57, 0.5).normalize();
sun.castShadow = true; sun.shadow.mapSize.set(4096, 4096); sun.shadow.bias = -0.0003; sun.shadow.normalBias = 0.03; sun.shadow.radius = 1.5;
scene.add(sun, sun.target);
const polder = buildPolder({ extraTurbines: [[-205, 118], [-70, 210]] }); scene.add(polder);
const passGlass = glassMaterial({ alpha: 0.5 }), car2Glass = glassMaterial({ alpha: 0.5 });
const train = buildTrain({ aminaCar: AMINA_CAR, glassFor: (k, s, x) => (k !== AMINA_CAR ? null : s > 0 && x === PASS_X ? passGlass : car2Glass) });
scene.add(train);
const car2 = train.userData.cars[AMINA_CAR];

// Amina's seat: bay +1.15, far window seat (x 1.95, z −1.13), facing −X; backrest front at x ≈ 2.145
const SEAT = { x: 2.03, z: -1.13, y: CAR.floor + 0.585 };
const key = new THREE.SpotLight('#fff4e0', 2.4, 0, 0.75, 0.6, 0);
key.position.set(0.2, 3.85, -0.2); key.target.position.set(1.95, 2.3, -1.13);
key.castShadow = true; key.shadow.mapSize.set(2048, 2048); key.shadow.bias = -0.0004; key.shadow.normalBias = 0.012; key.shadow.radius = 3;
car2.add(key, key.target);
// the ceiling strip behind her: a soft top light so the back of the scarf keeps its shape
const back = new THREE.PointLight('#fff6e8', 2.0, 2.4, 0); back.position.set(3.0, 3.75, -0.55); car2.add(back);

// ---------------- v5b: fellow passengers (figuranten) ----------------
// seat (bay T, side s, facing f, window or aisle) → a seated extra in that car; none on the bays the camera flies through
const PAX = [];
{
  const R = rng(41);
  const seatPax = (car, T, s, f, win, o, act) => {
    const e = buildExtra(o); const x = T - f * 0.8 - f * 0.04, z = s * (win ? 1.13 : 0.63);
    e.root.position.set(x, CAR.floor, z); e.root.rotation.y = f > 0 ? Math.PI / 2 : -Math.PI / 2;
    e.sit({ seatH: 0.505, knees: 0.4, lean: 0.02 }); car.add(e.root); PAX.push({ e, act });
  };
  const phoneA = (ph) => (t, e) => { e.head2(0.05 * Math.sin(t * 0.4 + ph), 0.42); e.armAt('R', -0.07, 0.95, 0.32); e.armAt('L', 0.07, 0.95, 0.32); };
  const lookOut = (side, ph) => (t, e) => { e.head2(side * (0.75 + 0.08 * Math.sin(t * 0.3 + ph)), 0.02); e.armAt('R', -0.14, 0.78, 0.36); e.armAt('L', 0.14, 0.78, 0.36); };
  const read = (ph) => (t, e) => { e.head2(0.03 * Math.sin(t * 0.5 + ph), 0.5); e.armAt('R', -0.1, 0.9, 0.36); e.armAt('L', 0.1, 0.9, 0.36); };
  const doze = (t, e) => { e.head2(0.15, 0.35, 0.22 + 0.02 * Math.sin(t * 0.8)); e.armAt('R', -0.12, 0.66, 0.3); e.armAt('L', 0.12, 0.66, 0.3); };
  seatPax(car2, 3.45, 1, -1, false, randomLook(R, { hair: 'short', top: '#3c4a56', skin: '#e0a87e' }), phoneA(0.3));
  seatPax(car2, 3.45, 1, -1, true, randomLook(R, { hair: 'long', hairColor: '#5a4236', top: '#d63b3b' }), lookOut(1, 1.1));
  seatPax(car2, 1.15, 1, -1, true, randomLook(R, { hair: 'bun', hairColor: '#aab1b8', top: '#2f8f9d', skin: '#f0c29b' }), read(0.6));
  seatPax(car2, -3.45, 1, 1, true, randomLook(R, { hair: 'cap', capColor: '#1a86d8', top: '#ffc414' }), phoneA(2.0));
  seatPax(car2, -3.45, -1, -1, true, randomLook(R, { hair: 'bald', beard: true, top: '#5d4a3e' }), doze);
  { // standing in the aisle by the door, one hand on the yellow pole, phone in the other (seen over the seats behind her)
    const e = buildExtra(randomLook(R, { hair: 'short', hairColor: '#1e1a18', top: '#7ac70c', skin: '#8d5536' }));
    e.root.position.set(5.25, CAR.floor, 0.12); e.root.rotation.y = -Math.PI / 2; car2.add(e.root);
    PAX.push({ e, act: (t, e) => { e.stand(t); e.spine.rotation.z = 0.02 * Math.sin(t * 0.9); e.armAt('L', 0.3, 1.5, 0.5); e.armAt('R', -0.08, 1.18, 0.3); e.head2(0.06 * Math.sin(t * 0.5), 0.4); } });
  }
  for (const k of [0, 2, 3]) {
    const car = train.userData.cars[k];
    for (let i = 0; i < 5; i++) {
      const T = BAYS[Math.floor(R() * 4)], s = R() < 0.5 ? 1 : -1, f = R() < 0.5 ? 1 : -1;
      if (PAX.some((p) => p.car === car && p.key === `${T},${s},${f}`)) continue;
      seatPax(car, T, s, f, true, randomLook(R, { far: true }), R() < 0.5 ? phoneA(R() * 6) : lookOut(s * -f, R() * 6));
      PAX[PAX.length - 1].car = car; PAX[PAX.length - 1].key = `${T},${s},${f}`;
    }
  }
}
const posePax = (t) => { for (const p of PAX) p.act(t, p.e); };

// ---------------- 3D Amina + phone ----------------
let amina, hold, phone, screenMat, screenInfo, IMG = {}, TEX = {}, screenCanvas, screenTex;
const PW = 0.095, PH = PW * 2.06, PD = 0.011;
async function buildAmina() {
  amina = await buildCharacter('amina', { renderer, base: '../../assets/chars/' });
  amina.root.position.set(SEAT.x, SEAT.y, SEAT.z); amina.root.rotation.y = -Math.PI / 2;
  car2.add(amina.root);
  amina.pose.lean = 0.08; amina.pose.headPitch = 0.38; amina.pose.headRoll = -0.04; amina.pose.blinkOffset = 2.2;
  // phone: origin bottom-centre, screen +Z (turned to face her), tilted back toward her eyes
  const pv = new THREE.Group(); pv.position.set(0.03, 0.27, 0.33); pv.rotation.y = Math.PI; amina.root.add(pv);
  const tilt = new THREE.Group(); tilt.rotation.x = -1.1; pv.add(tilt);
  phone = new THREE.Group(); tilt.add(phone);
  const r = PW * 0.17, shp = new THREE.Shape(); rr(shp, -PW / 2, 0, PW, PH, r);
  const bodyGeo = new THREE.ExtrudeGeometry(shp, { depth: PD, bevelEnabled: true, bevelThickness: 0.0025, bevelSize: 0.0025, bevelSegments: 2, curveSegments: 8 });
  bodyGeo.translate(0, 0, -PD);
  const pm = new THREE.Mesh(bodyGeo, new THREE.MeshLambertMaterial({ color: PAL.inkUI })); pm.castShadow = true; pm.receiveShadow = true; phone.add(pm);
  const btn = new THREE.Mesh(new THREE.BoxGeometry(0.004, PH * 0.1, 0.006), new THREE.MeshLambertMaterial({ color: '#3c4a56' }));
  btn.position.set(PW / 2 + 0.003, PH * 0.72, -PD / 2); phone.add(btn);
  const b = PW * 0.07, sw = PW - 2 * b, sHt = sw * 844 / 390;
  const ss = new THREE.Shape(); rr(ss, -sw / 2, PH - b - sHt, sw, sHt, PW * 0.1);
  const sg = new THREE.ShapeGeometry(ss, 10);
  const uv = sg.attributes.uv, pos = sg.attributes.position;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, (pos.getX(i) + sw / 2) / sw, (pos.getY(i) - (PH - b - sHt)) / sHt);
  for (const k of ['dutch_ar', 'dutch_ar_tap', 'dutch_ar_ok']) {
    const im = new Image(); im.src = `../../assets/shots/${k}.png`; await im.decode(); IMG[k] = im; TEX[k] = canvasTex(im, renderer);
  }
  screenCanvas = document.createElement('canvas'); screenCanvas.width = 1170; screenCanvas.height = 2532;
  screenTex = canvasTex(screenCanvas, renderer);
  screenMat = new THREE.MeshBasicMaterial({ map: TEX.dutch_ar, toneMapped: false });
  const screen = new THREE.Mesh(sg, screenMat); screen.position.z = 0.0028; phone.add(screen);
  screenInfo = { sw, sHt, top: PH - b };
  hold = holdPhone(amina, phone, { pw: PW, ph: PH, depth: PD, grip: 0.26 });
  // seated legs: knees forward, feet flat on the floor
  for (const s of ['L', 'R']) {
    const sx = s === 'L' ? 1 : -1;
    amina.legIK(s, amina.root.localToWorld(new THREE.Vector3(sx * 0.1, -0.505, 0.43)), amina.root.localToWorld(new THREE.Vector3(sx * 0.05, 0.3, 1.5)),
      new THREE.Quaternion().setFromRotationMatrix(amina.root.matrixWorld));
  }
}
function rr(p, x, y, w, h, r) {
  p.moveTo(x + r, y); p.lineTo(x + w - r, y); p.quadraticCurveTo(x + w, y, x + w, y + r); p.lineTo(x + w, y + h - r);
  p.quadraticCurveTo(x + w, y + h, x + w - r, y + h); p.lineTo(x + r, y + h); p.quadraticCurveTo(x, y + h, x, y + h - r);
  p.lineTo(x, y + r); p.quadraticCurveTo(x, y, x + r, y);
}
const tapK = (t) => clamp(Math.min(smooth(seg(t, TAP - 0.3, TAP - 0.1)), 1 - smooth(seg(t, TAP + 0.07, TAP + 0.3))));
function poseAmina(t) {
  const k = LOOK(t);
  amina.pose.headPitch = lerp(0.38, 0.02, k); amina.pose.headYaw = -0.14 * k; amina.pose.lean = lerp(0.08, 0.05, k);
  // v6: the app's faces: happy when she looks up, concentrating on the lesson, happy again after "Goed zo!"
  amina.expression = k > 0.35 ? 'happy' : t > 11.6 && t < TAP + 0.2 ? 'thinking' : t >= TAP + 0.2 ? 'happy' : 'idle';
  amina.update(t);
  amina.root.updateMatrixWorld(true);
  hold(t, { tap: { u: 0.5, v: (1416 + 449 / 2 + 40) / 2532, k: tapK(t) } });
}

// ---------------- the screen (as film-v2): before → tap → "Goed zo!" ----------------
const TILE = { x: 327, y: 1416, w: 518, h: 449 };
const OKTILE_DY = 57, SHEET_Y = 1706, BADGE = { x: 721, y: 1498, w: 100, h: 100 };
const easeOut = (x) => 1 - Math.pow(1 - x, 3);
const overshoot = (x, peak) => (x < 0.6 ? lerp(0, peak, easeOut(x / 0.6)) : lerp(peak, 1, inOut((x - 0.6) / 0.4)));
function drawScreen(t) {
  if (t < TAP - 0.1) return TEX.dutch_ar;
  if (t >= TAP + 0.56) return TEX.dutch_ar_ok;
  const g = screenCanvas.getContext('2d'), dt = t - TAP;
  g.setTransform(1, 0, 0, 1, 0, 0); g.globalAlpha = 1;
  g.fillStyle = '#e7e3dc'; g.fillRect(0, 0, 1170, 2532);
  const press = clamp((dt + 0.1) / 0.15), correct = clamp((dt - 0.05) / 0.25), xf = smooth(clamp((dt - 0.05) / 0.2)), sheet = easeOut(clamp((dt - 0.18) / 0.3));
  const layer = (im, a, ex) => {
    g.save(); g.globalAlpha = a; g.beginPath(); g.rect(0, 0, 1170, 2532); g.rect(ex[0], ex[1], ex[2] - ex[0], ex[3] - ex[1]); g.clip('evenodd');
    g.drawImage(im, 0, 0, 1170, SHEET_Y, 0, 0, 1170, SHEET_Y); g.restore();
  };
  layer(press < 1 ? IMG.dutch_ar : IMG.dutch_ar_tap, 1 - xf, [320, 1405, 852, 1880]);
  if (xf > 0) layer(IMG.dutch_ar_ok, xf, [320, 1462, 852, 1940]);
  const sc = correct > 0 ? lerp(0.95, 1, overshoot(correct, 2)) : lerp(1, 0.95, smooth(press));
  const ty = TILE.y + OKTILE_DY * smooth(correct);
  const cx = TILE.x + TILE.w / 2, cy = ty + TILE.h / 2;
  g.save(); g.translate(cx, cy); g.scale(sc, sc); g.translate(-cx, -cy);
  g.drawImage(press > 0.3 ? IMG.dutch_ar_tap : IMG.dutch_ar, TILE.x, TILE.y, TILE.w, TILE.h, TILE.x, ty, TILE.w, TILE.h);
  if (correct > 0) {
    g.globalAlpha = correct; g.globalCompositeOperation = 'multiply'; g.fillStyle = '#e3efe7';
    g.beginPath(); g.roundRect(TILE.x + 6, ty + 6, TILE.w - 12, TILE.h - 12, 34); g.fill();
    g.globalCompositeOperation = 'source-over'; g.lineWidth = 9; g.strokeStyle = '#137a55';
    g.beginPath(); g.roundRect(TILE.x + 3, ty + 3, TILE.w - 6, TILE.h - 6, 40); g.stroke();
    g.globalAlpha = 1;
    const bs = overshoot(correct, 1.15), bx = BADGE.x + BADGE.w / 2, by = BADGE.y - OKTILE_DY + ty - TILE.y + BADGE.h / 2;
    g.save(); g.translate(bx, by); g.scale(bs, bs);
    g.drawImage(IMG.dutch_ar_ok, BADGE.x, BADGE.y, BADGE.w, BADGE.h, -BADGE.w / 2, -BADGE.h / 2, BADGE.w, BADGE.h); g.restore();
  }
  g.restore();
  const rp = clamp((dt + 0.05) / 0.2);
  if (rp > 0 && rp < 1) {
    g.globalAlpha = Math.sin(rp * Math.PI) * 0.85;
    g.fillStyle = 'rgba(30,34,38,0.18)'; g.beginPath(); g.arc(cx, cy + 40, 60 + 170 * easeOut(rp), 0, 7); g.fill();
    g.lineWidth = 10; g.strokeStyle = '#ffffff'; g.beginPath(); g.arc(cx, cy + 40, 60 + 170 * easeOut(rp), 0, 7); g.stroke();
    g.globalAlpha = 1;
  }
  if (sheet > 0) g.drawImage(IMG.dutch_ar_ok, 0, SHEET_Y, 1170, 2532 - SHEET_Y, 0, SHEET_Y + (1 - sheet) * (2532 - SHEET_Y + 20), 1170, 2532 - SHEET_Y);
  screenTex.needsUpdate = true;
  return screenTex;
}

// ---------------- camera ----------------
const camera = new THREE.PerspectiveCamera(50, W / H, 0.004, 16000);
const winLocal = new THREE.Vector3(carCenter(AMINA_CAR) + PASS_X, WIN.y, CAR.halfW - 0.04);
const trainX = (t) => X0 + V * t;
const Wc = (t) => new THREE.Vector3(trainX(t) + winLocal.x, winLocal.y, winLocal.z);
let V2, crossT, path, aimOf, sOf, fovOf, Lpath, sA, upEnd, uF;
const V3 = (x, y, z) => new THREE.Vector3(x, y, z);
/** film-v2's camera at time t (relative to the window): position, quaternion, fov (linear in the 480 Hz samples). */
function v2cam(t) {
  const x = clamp(t, 0, 9) * 480, i = Math.min(Math.floor(x), V2.length - 2), f = x - i;
  const a = V2[i], b = V2[i + 1];
  const p = V3(lerp(a[0], b[0], f), lerp(a[1], b[1], f), lerp(a[2], b[2], f));
  const q = new THREE.Quaternion(a[3], a[4], a[5], a[6]).slerp(new THREE.Quaternion(b[3], b[4], b[5], b[6]), f);
  return { p, q, fov: lerp(a[7], b[7], f), aim: V3(lerp(a[8], b[8], f), lerp(a[9], b[9], f), lerp(a[10], b[10], f)) };
}
async function buildCamera() {
  const d = await (await fetch('v2cam.json')).json(); V2 = d.samples; crossT = d.crossT;
  train.position.x = 0; train.updateMatrixWorld(true);
  const w0 = winLocal.clone();
  const rel = (v) => v.clone().sub(w0);
  const C = (x, y, z) => rel(amina.root.localToWorld(V3(x, y, z)));    // Amina's frame → window-relative
  // the end: screen centre at 0.655 from its top, camera on the screen normal (as film-v2)
  poseAmina(DURATION);
  { const h = handoffPose(); HP = { p: rel(h.p), q: h.q, aim: rel(h.aim) }; }
  const pt = phone.localToWorld(V3(0, screenInfo.top - screenInfo.sHt * 0.655, 0.003));
  const n = V3(0, 0, 1).transformDirection(phone.matrixWorld);
  const fovEnd = 40;
  const dEnd = (screenInfo.sw * 1.08) / (2 * Math.tan(THREE.MathUtils.degToRad(fovEnd / 2)) * (W / H));
  const end = rel(pt.clone().addScaledVector(n, dEnd)), endT = rel(pt);
  const face = C(0, 0.64, 0.17), phoneC = rel(phone.localToWorld(V3(0, PH * 0.5, 0)));
  // hand-over state
  const h0 = v2cam(T1 - 0.12), h1 = v2cam(T1);
  const fwd = (c) => V3(0, 0, -1).applyQuaternion(c.q);
  const dist = h1.p.distanceTo(face);
  // control polygon of a clamped cubic B-spline (C2: no kinks in speed or turn rate); it starts at the
  // hand-over point along film-v2's direction of travel and ends exactly on the screen normal
  const vdir = h1.p.clone().sub(h0.p).normalize();
  const ctrl = [h1.p, h1.p.clone().addScaledVector(vdir, 0.9),
    C(-0.32, 0.64, 1.62),         // facing her, over the table
    C(0.86, 0.74, 0.92),          // 3/4 from her left
    C(1.0, 0.84, 0.05),           // her side (above the empty aisle seat)
    C(0.7, 1.0, -0.42),           // behind, rising over the backrests
    C(0.34, 1.04, -0.36),         // behind her head
    C(0.38, 0.8, 0.1),            // over her left shoulder, beside the scarf
    C(0.12, 0.6, 0.3),            // past her cheek, down onto the screen
    end];
  const pts = bspline(ctrl, 900);
  const headC = C(0, 0.63, 0.07);
  let minD = 9; for (const q of pts) minD = Math.min(minD, q.distanceTo(headC));
  console.log('closest pass to the head centre', minD.toFixed(3), 'm');
  // aim: one C1 track in time, leaving film-v2's aim point with its own velocity
  const ga = v2cam(T1 - 0.01).aim, gb = v2cam(T1 + 0.01).aim, aimV = gb.clone().sub(ga).divideScalar(0.02);
  const A = (v) => [v.x, v.y, v.z];
  const at = track([[T1, A(v2cam(T1).aim)], [6.35, A(face)], [6.9, A(face.clone().lerp(phoneC, 0.22))], [7.35, A(face.clone().lerp(phoneC, 0.55))],
    [7.85, A(phoneC)], [8.5, A(phoneC.clone().lerp(endT, 0.75))], [9.0, A(endT)]], { tan0: A(aimV) });
  aimOf = (t) => V3(...at(t));
  const fovs = [h1.fov, 46.5, 46, 45, 45, 44.5, 43.5, 42, 41, fovEnd];
  path = new THREE.CatmullRomCurve3(pts, false, 'centripetal'); path.arcLengthDivisions = 4000;
  upEnd = V3(0, 1, 0).transformDirection(phone.matrixWorld);          // the screen's up: the camera settles onto it
  const ft = track(fovs.map((v, i) => [i / (fovs.length - 1), [v]])); fovOf = (u) => ft(u)[0];
  Lpath = path.getLength();
  const lens = path.getLengths(4000);
  sA = 0;
  // one ease: speed falls from v2's speed at T1 to zero at 9.0 as v0·(1 − x)^p, p set by the distance left
  const a = v2cam(T1 - 0.01), b = v2cam(T1 + 0.01); const v0 = a.p.distanceTo(b.p) / 0.02;
  const Tr = CAM_END - T1, rest = Lpath - sA, p = v0 * Tr / rest - 1;
  sOf = (t) => { const x = clamp((t - T1) / Tr); return sA + rest * (1 - Math.pow(1 - x, p + 1)); };
  const nearest = (c) => { let bi = 0, bd = 9; pts.forEach((q, i) => { const d = q.distanceTo(c); if (d < bd) { bd = d; bi = i; } }); return lens[Math.round((4000 * bi) / (pts.length - 1))]; };
  uF = nearest(ctrl[6]) / Lpath;
  const when = ctrl.map((c) => { const s = nearest(c); for (let t = T1; t <= 9; t += 0.01) if (sOf(t) >= s - 1e-6) return t.toFixed(2); return '-'; });
  console.log('end', JSON.stringify(amina.root.worldToLocal(end.clone().add(w0)).toArray().map((x) => +x.toFixed(3))), 'face', JSON.stringify(amina.root.worldToLocal(amina.rig.head.getWorldPosition(V3(0,0,0))).toArray().map((x) => +x.toFixed(3))));
  console.log(`v0 ${v0.toFixed(2)} m/s, rest ${rest.toFixed(2)} m, p ${p.toFixed(2)}; knots at`, when.join(' '), '; end dist', dEnd.toFixed(3));
}
/** Clamped uniform cubic B-spline through control points → n + 1 samples. */
function bspline(P, n) {
  const k = 3, m = P.length, knots = [];
  for (let i = 0; i <= m + k; i++) knots.push(clamp(i - k, 0, m - k));
  const out = [];
  for (let s = 0; s <= n; s++) {
    const u = Math.min((s / n) * (m - k), m - k - 1e-9);
    let j = k; while (j < m - 1 && u >= knots[j + 1]) j++;
    const d = []; for (let r = 0; r <= k; r++) d.push(P[j - k + r].clone());
    for (let r = 1; r <= k; r++) for (let i = k; i >= r; i--) {
      const ii = i + j - k, a = (u - knots[ii]) / (knots[ii + k + 1 - r] - knots[ii]);
      d[i] = d[i - 1].clone().lerp(d[i], a);
    }
    out.push(d[k]);
  }
  out[n] = P[m - 1].clone();
  return out;
}
function camAt(t) {
  if (t <= T1) return v2cam(t);
  const s = sOf(t), u = s / Lpath, uRaw = path.getUtoTmapping(u);
  const p = path.getPointAt(u), q = aimOf(t);
  const up = V3(0, 1, 0).lerp(upEnd, smooth(clamp((u - uF) / (1 - uF)))).normalize();
  const m = new THREE.Matrix4().lookAt(p, q, up);
  return { p, q: new THREE.Quaternion().setFromRotationMatrix(m), fov: fovOf(uRaw), aim: q };
}

/** The hand-off: screen centre (u .5, v .5) on the screen normal, the screen HANDOFF_FILL of the frame width. */
function handoffPose() {
  const top = screenInfo.top, sHt = screenInfo.sHt;
  const pt = phone.localToWorld(V3(0, top - sHt * HANDOFF_V, 0.0028));
  const n = V3(0, 0, 1).transformDirection(phone.matrixWorld);
  const d = (screenInfo.sw * HANDOFF_FILL) / (2 * Math.tan(THREE.MathUtils.degToRad(HANDOFF_FOV / 2)) * (W / H));
  const p = pt.clone().addScaledVector(n, d);
  const up = V3(0, 1, 0).transformDirection(phone.matrixWorld);
  const m = new THREE.Matrix4().lookAt(p, pt, up);
  return { p, q: new THREE.Quaternion().setFromRotationMatrix(m), aim: pt };
}
let HP;
function dive(c, k) {
  return { p: c.p.clone().lerp(HP.p, k), q: c.q.clone().slerp(HP.q, k), fov: lerp(c.fov, HANDOFF_FOV, k), aim: c.aim.clone().lerp(HP.aim, k) };
}
window.handoff = () => { train.position.x = 0; train.updateMatrixWorld(true); poseAmina(DURATION); const h = handoffPose(); return { p: h.p.toArray(), aim: h.aim.toArray() }; };

let lastFocus = 1;
/** v5 lens: shallow focus on Amina and her phone while the camera is in the train; sharp at the hand-off. */
// v5b: opens from 9.0 s, where the film's 1.5× render of this shot starts (before that: v4's sharp render + extras)
const apertureAt = (t) => 0.007 * smooth(seg(t, 9.0, 10.0)) * (1 - smooth(seg(t, 14.8, 15.5)));
function poseAt(t) {
  train.position.x = trainX(t);
  animatePolder(polder, t);
  poseAmina(t);
  posePax(t);
  const tau = tauOf(t);
  let c = camAt(tau);
  if (t > DIVE0) c = dive(c, inOut(seg(t, DIVE0, DURATION)));
  const w = Wc(t);
  const p = c.p.clone().add(w);
  camera.position.copy(p); camera.quaternion.copy(c.q); camera.fov = c.fov; camera.updateProjectionMatrix();
  camera.updateMatrixWorld(true);
  sky.position.copy(p);
  const q = c.aim.clone().add(w);                       // film-v2's sun-shadow framing (focus 60 % to the aim point)
  lastFocus = p.distanceTo(q);
  const size = clamp(p.distanceTo(q) * 1.3, 14, 260), focus = p.clone().lerp(q, 0.6);
  sun.target.position.copy(focus); sun.position.copy(focus).addScaledVector(SUN_DIR, 400);
  const sc = sun.shadow.camera; sc.left = -size; sc.right = size; sc.top = size; sc.bottom = -size; sc.near = 100; sc.far = 800; sc.updateProjectionMatrix();
  passGlass.uniforms.alpha.value = lerp(0.5, 0.14, inOut(seg(tau, 3.6, 4.8)));
  car2Glass.uniforms.alpha.value = lerp(0.5, 0.12, inOut(seg(tau, 3.8, 5.5)));
  passGlass.uniforms.streak.value = lerp(-0.6, 1.9, inOut(seg(tau, 3.9, crossT + 0.02)));
  passGlass.uniforms.streakAmt.value = 0.7;
  return p;
}

// ---------------- captions ----------------
const cap1 = document.getElementById('cap1'), cap2 = document.getElementById('cap2');
function captions(t) {
  const place = (el, op, dy) => { el.style.opacity = op; el.style.transform = `translate(${(W - el.offsetWidth) / 2}px, ${96 + dy}px)`; };
  place(cap1, 1 - smooth(seg(t, 3.45, 3.85)), -10 * smooth(seg(t, 3.45, 3.85)));
  const k2 = easeOut(seg(t, 6.6, 6.9));
  place(cap2, k2 * (1 - smooth(seg(t, 12.4, 12.75))), (1 - k2) * 36);
}
/** Sub-frames: 8 while the camera moves fast (drone, glass, arc), fewer on the slow push and the lock. */
const SUBK = Number(P.get('subk') ?? 1);   // v6: scales the sub-frame counts (render time)
const subAt0 = (t) => (SUBQ !== 'auto' ? Number(SUBQ) : t < 9.0 ? 8 : t < 15.5 ? (HIQ ? 6 : t < 10.8 ? 3 : t < 13.6 ? 6 : 4) : 2);
const subAt = (t) => (SUBQ !== 'auto' ? Number(SUBQ) : Math.max(2, Math.round(subAt0(t) * SUBK)));

function setTime(t) {
  captions(t);
  const tex = drawScreen(t);
  if (screenMat.map !== tex) { screenMat.map = tex; screenMat.needsUpdate = true; }
  const dc = tauOf(t) - crossT;
  const fx = {
    sweep: lerp(-0.3, 1.7, clamp((dc + 0.17) / 0.32)), sweepAmt: Math.sin(Math.PI * clamp((dc + 0.17) / 0.32)) * 0.9,
    ripple: Math.max(0, 1 - Math.abs(dc - 0.01) / 0.055),
    zoom: 1 + 0.06 * Math.sin(Math.PI * clamp((dc + 0.15) / 0.75)),
  };
  const n = subAt(t);
  frame(scene, camera, n, (i, nn) => {
    const ts = nn > 1 ? t + ((i + 0.5) / nn - 0.5) * (SHUTTER / FPS) : t;
    poseAt(clamp(ts, 0, DURATION));
    if (HIQ) lensJitter(camera, i, nn, lastFocus, apertureAt(ts));
  }, { ...fx, seed: t });
  return true;
}

window.DURATION = DURATION;
window.setTime = setTime;
window.camAt = camAt;
window.ready = (async () => {
  await document.fonts.load('700 66px "Lexend V"');
  await document.fonts.ready;
  await buildAmina();
  if (P.get('real') !== '0') realify(scene, renderer);   // v6: physically based materials + environment
  await buildCamera();
  setTime(Number(P.get('t') ?? 0));
  return true;
})().catch((e) => { console.error(e.stack || e); throw e; });
