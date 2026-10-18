// Shot 1 v2 (0–9 s): fast low pass over the polder overtaking the yellow train → swing in alongside
// car 2 → diagonal push THROUGH a window → over the seats to Amina → her phone (real app screens,
// tap → "Goed zo!") holds the frame (hand-off point).
// window.setTime(t) renders one frame deterministically (sub-frames = motion blur, 180° shutter).
import * as THREE from 'three';
import { W, H, PAL, clamp, seg, lerp, inOut, smooth, track, makeRenderer, skyDome, loadText, parseFigure, propSlots,
  rasterSVG, canvasTex, cardMesh } from '../lib/kit.js';
import { buildPolder, animatePolder } from '../lib/polder.js';
import { buildTrain, glassMaterial, carCenter, CAR, WIN } from '../lib/train.js';

const P = new URLSearchParams(location.search);
const DURATION = 9.0, FPS = 30;
const SUB = Number(P.get('sub') ?? 1);       // sub-frames per frame
const SHUTTER = 0.5;                          // 180° shutter
const V = 24;                                 // train speed (m/s)
const X0 = -120;                              // train head x at t = 0
const AMINA_CAR = 1;
const PASS_X = -1.15;                         // car-local x of the window we fly through (near side)
const SEAT_X = 2.08, SEAT_Z = -1.08;          // Amina's card (bay +1.15, far window seat, facing −X)

const canvas = document.getElementById('gl');
const { renderer, frame } = makeRenderer(canvas);
const scene = new THREE.Scene();
const HORIZON = '#cfefff';
scene.fog = new THREE.Fog(HORIZON, 1500, 15000);
const sky = skyDome({ top: '#4fa8e8', mid: '#8fcbf2', horizon: HORIZON, below: '#cfe6c8' });
scene.add(sky);

// light: warm low sun from the left (slightly front), cool sky fill
const hemi = new THREE.HemisphereLight('#e3f2ff', '#d9d6cc', 2.6); scene.add(hemi);
const sun = new THREE.DirectionalLight('#ffe6b0', 2.25);
const SUN_DIR = new THREE.Vector3(-0.65, 0.57, 0.5).normalize();
sun.castShadow = true; sun.shadow.mapSize.set(4096, 4096); sun.shadow.bias = -0.0003; sun.shadow.normalBias = 0.03; sun.shadow.radius = 1.5;
scene.add(sun, sun.target);

const polder = buildPolder({ extraTurbines: [[-205, 118], [-70, 210]] }); scene.add(polder);

// glass: the pane we fly through (reflection streak), car 2 (clears as we come close), the rest
const passGlass = glassMaterial({ alpha: 0.5 });
const car2Glass = glassMaterial({ alpha: 0.5 });
const train = buildTrain({ aminaCar: AMINA_CAR, glassFor: (k, s, x) => (k !== AMINA_CAR ? null : s > 0 && x === PASS_X ? passGlass : car2Glass) });
scene.add(train);
const car2 = train.userData.cars[AMINA_CAR];

// a key light inside car 2 on Amina (the roof keeps the sun out)
const key = new THREE.SpotLight('#fff4e0', 2.4, 0, 0.75, 0.6, 0);
key.position.set(0.2, 3.85, -0.2); key.target.position.set(SEAT_X, 2.3, SEAT_Z);
key.castShadow = true; key.shadow.mapSize.set(1024, 1024); key.shadow.bias = -0.0005; key.shadow.radius = 4;
car2.add(key, key.target);

// ---------------- Amina: the app's own figure as a cut-out card ----------------
const K = 1.05 / 126;                               // metres per svg unit (her card is 1.05 m tall)
const CARD = { ox: 60, oy: 134, y: CAR.floor + 0.58 };
const PHONE_DROP = 12;                              // phone lowered (svg units) so her face shows
const PHONE_FWD = 0.2;
const amina = new THREE.Group(); amina.position.set(SEAT_X, CARD.y, SEAT_Z); amina.rotation.y = -Math.PI / 2; car2.add(amina);
const phonePivot = new THREE.Group(); amina.add(phonePivot);
let screenMat, phoneInfo, IMG = {}, screenCanvas, screenTex, TEX = {};

async function buildAmina() {
  const svg = parseFigure(await loadText('../assets/chars/amina-idle.svg.html'));
  svg.querySelector('.ch-head').insertAdjacentHTML('beforeend',
    '<g class="earbud"><ellipse cx="41.6" cy="62.6" rx="2.5" ry="2.9" fill="#fff"/><rect x="40.3" y="63.6" width="2.2" height="6.2" rx="1.1" fill="#fff"/><ellipse cx="42.2" cy="62.2" rx="1.1" ry="1.3" fill="#dfe6ec"/></g>');
  // where phase 1 put her phone (the held hand's prop slot: x0 -10, y0 -56, w 28.5, rot -4)
  const slot = propSlots(svg)[0];
  const w = 28.5, h = w * 2.06, x0 = -10, y0 = -56;
  slot.innerHTML = `<g transform="rotate(-4 ${x0 + w / 2} ${y0 + h / 2})">${[[x0, y0], [x0 + w, y0], [x0, y0 + h], [x0 + w, y0 + h]].map(([x, y], i) => `<circle class="mk mk${i}" cx="${x}" cy="${y}" r=".2" fill="red"/>`).join('')}</g>`;
  const host = document.createElement('div'); host.style.cssText = 'position:absolute;left:0;top:0;opacity:0;pointer-events:none';
  const live = svg.cloneNode(true); const S = 10; live.setAttribute('width', 108 * S); live.setAttribute('height', 126 * S);
  host.appendChild(live); document.body.appendChild(host);
  await new Promise((r) => requestAnimationFrame(r));
  const o = live.getBoundingClientRect();
  const pts = [0, 1, 2, 3].map((i) => { const r = live.querySelector('.mk' + i).getBoundingClientRect(); return [6 + (r.left + r.width / 2 - o.left) / S, 14 + (r.top + r.height / 2 - o.top) / S]; });
  host.remove(); slot.innerHTML = '';
  const [tl, tr, bl, br] = pts;
  const phW = Math.hypot(tr[0] - tl[0], tr[1] - tl[1]), phH = Math.hypot(bl[0] - tl[0], bl[1] - tl[1]);
  const roll = Math.atan2(tr[1] - tl[1], tr[0] - tl[0]);
  const bottomMid = [(bl[0] + br[0]) / 2, (bl[1] + br[1]) / 2 + PHONE_DROP];
  phoneInfo = { phW, phH, roll, bottomMid };

  // body card (the app's fists hidden: 3D mittens hold the phone instead), soft shadow via the key light
  const body = svg.cloneNode(true);
  body.querySelectorAll('.ch-hand').forEach((e) => e.setAttribute('visibility', 'hidden'));
  const rb = await rasterSVG(body, [6, 14, 108, 126], 22, { edge: 0.75 });
  const bodyMesh = cardMesh(rb, renderer, K, { ox: CARD.ox, oy: CARD.oy, alphaTest: 0.5 });
  bodyMesh.castShadow = true;
  bodyMesh.customDepthMaterial = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, map: bodyMesh.material.map, alphaTest: 0.5 });
  amina.add(bodyMesh);

  // the phone (3D): body, side button, screen = the real app screenshots (unlit, true colours)
  phonePivot.position.set((bottomMid[0] - CARD.ox) * K, -(bottomMid[1] - CARD.oy) * K, PHONE_FWD);
  const phone = new THREE.Group(); phone.rotation.z = -roll; phonePivot.add(phone);
  const pw = phW * K, ph = phH * K, depth = 0.022, r = pw * 0.17;
  const shp = new THREE.Shape(); rr(shp, -pw / 2, 0, pw, ph, r);
  const bodyGeo = new THREE.ExtrudeGeometry(shp, { depth, bevelEnabled: true, bevelThickness: 0.004, bevelSize: 0.004, bevelSegments: 2, curveSegments: 8 });
  bodyGeo.translate(0, 0, -depth);
  const pm = new THREE.Mesh(bodyGeo, new THREE.MeshLambertMaterial({ color: PAL.inkUI })); pm.castShadow = true; phone.add(pm);
  const btn = new THREE.Mesh(new THREE.BoxGeometry(0.006, ph * 0.1, 0.01), new THREE.MeshLambertMaterial({ color: '#3c4a56' }));
  btn.position.set(pw / 2 + 0.004, ph * 0.72, -depth / 2); phone.add(btn);
  const b = pw * 0.07, sw = pw - 2 * b, sHt = sw * 844 / 390;
  const ss = new THREE.Shape(); rr(ss, -sw / 2, ph - b - sHt, sw, sHt, pw * 0.1);
  const sg = new THREE.ShapeGeometry(ss, 10);
  const uv = sg.attributes.uv, pos = sg.attributes.position;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, (pos.getX(i) + sw / 2) / sw, (pos.getY(i) - (ph - b - sHt)) / sHt);
  for (const k of ['dutch_ar', 'dutch_ar_tap', 'dutch_ar_ok']) {
    const im = new Image(); im.src = `../assets/shots/${k}.png`; await im.decode(); IMG[k] = im;
    TEX[k] = canvasTex(im, renderer);
  }
  screenCanvas = document.createElement('canvas'); screenCanvas.width = 1170; screenCanvas.height = 2532;
  screenTex = canvasTex(screenCanvas, renderer);
  screenMat = new THREE.MeshBasicMaterial({ map: TEX.dutch_ar, toneMapped: false });
  const screen = new THREE.Mesh(sg, screenMat); screen.position.z = 0.0045; phone.add(screen);
  phoneInfo.screen = { sw, sHt, top: ph - b, phone, pw, ph };

  // mittens in her skin tone hold the phone from the sides (thumbs on the bezel, never on the screen)
  const skin = new THREE.MeshBasicMaterial({ color: '#b97a52', toneMapped: false });
  const crease = new THREE.MeshBasicMaterial({ color: '#9c6141', toneMapped: false });
  for (const sx of [-1, 1]) {
    const m = new THREE.Group();
    const palm = new THREE.Shape(); rr(palm, -0.03, -0.055, 0.06, 0.11, 0.028);
    const pg = new THREE.ExtrudeGeometry(palm, { depth: 0.03, bevelEnabled: true, bevelThickness: 0.004, bevelSize: 0.004, bevelSegments: 2, curveSegments: 6 });
    pg.translate(0, 0, -0.026);
    m.add(new THREE.Mesh(pg, skin));
    const thumb = new THREE.Shape(); thumb.absellipse(0, 0, 0.012, 0.03, 0, Math.PI * 2);
    const tg = new THREE.ExtrudeGeometry(thumb, { depth: 0.006, bevelEnabled: false, curveSegments: 12 });
    const tm = new THREE.Mesh(tg, skin); tm.position.set(-sx * 0.026, 0.012, 0.006); tm.rotation.z = sx * 0.25; m.add(tm);
    const tl2 = new THREE.Mesh(new THREE.PlaneGeometry(0.003, 0.034), crease); tl2.position.set(-sx * 0.019, 0.006, 0.0125); tl2.rotation.z = sx * 0.25; m.add(tl2);
    m.position.set(sx * (pw / 2 + 0.02), ph * 0.13, 0.0);
    phone.add(m);
  }
}
function rr(p, x, y, w, h, r) {
  p.moveTo(x + r, y); p.lineTo(x + w - r, y); p.quadraticCurveTo(x + w, y, x + w, y + r); p.lineTo(x + w, y + h - r);
  p.quadraticCurveTo(x + w, y + h, x + w - r, y + h); p.lineTo(x + r, y + h); p.quadraticCurveTo(x, y + h, x, y + h - r);
  p.lineTo(x, y + r); p.quadraticCurveTo(x, y, x + r, y);
}

// ---------------- the screen: before → tap → "Goed zo!" (composited from the real screenshots) ----------------
const TAP = 7.8;
const TILE = { x: 327, y: 1416, w: 518, h: 449 };      // helmet tile in dutch_ar / _tap (1170×2532)
const OKTILE_DY = 57, SHEET_Y = 1706, BADGE = { x: 721, y: 1498, w: 100, h: 100 };
const easeOut = (x) => 1 - Math.pow(1 - x, 3);
const overshoot = (x, peak) => (x < 0.6 ? lerp(0, peak, easeOut(x / 0.6)) : lerp(peak, 1, inOut((x - 0.6) / 0.4)));
function drawScreen(t) {
  if (t < TAP - 0.1) return TEX.dutch_ar;
  if (t >= TAP + 0.56) return TEX.dutch_ar_ok;
  const g = screenCanvas.getContext('2d'), dt = t - TAP;
  g.setTransform(1, 0, 0, 1, 0, 0); g.globalAlpha = 1;
  g.fillStyle = '#e7e3dc'; g.fillRect(0, 0, 1170, 2532);
  const press = clamp((dt + 0.1) / 0.15);                     // finger down (−100 … +50 ms)
  const correct = clamp((dt - 0.05) / 0.25);                  // tile turns green, check pops (250 ms)
  const xf = smooth(clamp((dt - 0.05) / 0.2));                // the rest of the screen cross-fades
  const sheet = easeOut(clamp((dt - 0.18) / 0.3));            // feedback card slides up (300 ms)
  const layer = (im, a, ex) => {
    g.save(); g.globalAlpha = a; g.beginPath(); g.rect(0, 0, 1170, 2532); g.rect(ex[0], ex[1], ex[2] - ex[0], ex[3] - ex[1]); g.clip('evenodd');
    g.drawImage(im, 0, 0, 1170, SHEET_Y, 0, 0, 1170, SHEET_Y); g.restore();
  };
  layer(press < 1 ? IMG.dutch_ar : IMG.dutch_ar_tap, 1 - xf, [320, 1405, 852, 1880]);
  if (xf > 0) layer(IMG.dutch_ar_ok, xf, [320, 1462, 852, 1940]);
  // the tile: pressed (1 → 0.95), then correct (0.95 → 1.05 → 1), sliding to its answer-state place
  const sc = correct > 0 ? lerp(0.95, 1, overshoot(correct, 2)) : lerp(1, 0.95, smooth(press));
  const ty = TILE.y + OKTILE_DY * smooth(correct);
  const cx = TILE.x + TILE.w / 2, cy = ty + TILE.h / 2;
  g.save(); g.translate(cx, cy); g.scale(sc, sc); g.translate(-cx, -cy);
  g.drawImage(press > 0.3 ? IMG.dutch_ar_tap : IMG.dutch_ar, TILE.x, TILE.y, TILE.w, TILE.h, TILE.x, ty, TILE.w, TILE.h);
  if (correct > 0) {
    g.globalAlpha = correct; g.globalCompositeOperation = 'multiply'; g.fillStyle = '#e3efe7';
    rrect2(g, TILE.x + 6, ty + 6, TILE.w - 12, TILE.h - 12, 34); g.fill();
    g.globalCompositeOperation = 'source-over'; g.lineWidth = 9; g.strokeStyle = '#137a55';
    rrect2(g, TILE.x + 3, ty + 3, TILE.w - 6, TILE.h - 6, 40); g.stroke();
    g.globalAlpha = 1;
    const bs = overshoot(correct, 1.15);
    const bx = BADGE.x + BADGE.w / 2, by = BADGE.y - OKTILE_DY + ty - TILE.y + BADGE.h / 2;
    g.save(); g.translate(bx, by); g.scale(bs, bs);
    g.drawImage(IMG.dutch_ar_ok, BADGE.x, BADGE.y, BADGE.w, BADGE.h, -BADGE.w / 2, -BADGE.h / 2, BADGE.w, BADGE.h); g.restore();
  }
  g.restore();
  // ripple of the tap (0–150 ms)
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
function rrect2(g, x, y, w, h, r) { g.beginPath(); g.roundRect(x, y, w, h, r); }

// ---------------- camera: one path, one speed profile ----------------
const camera = new THREE.PerspectiveCamera(50, W / H, 0.004, 16000);
const winLocal = new THREE.Vector3(carCenter(AMINA_CAR) + PASS_X, WIN.y, CAR.halfW - 0.04);
const trainX = (t) => X0 + V * t;
const Wc = (t) => new THREE.Vector3(trainX(t) + winLocal.x, winLocal.y, winLocal.z);
let path, aim, uOf, fovOf, rollOf, Lpath, crossT = 5.2;
function buildCamera() {
  setPhonePose(9);
  train.position.x = 0; train.updateMatrixWorld(true);
  const sc = phoneInfo.screen;
  const vFrame = 0.655;                                                     // frame centre on the screen (from the top)
  const pt = sc.phone.localToWorld(new THREE.Vector3(0, sc.top - sc.sHt * vFrame, 0.005));
  const n = new THREE.Vector3(0, 0, 1).transformDirection(sc.phone.matrixWorld);
  const fovEnd = 40;
  const d = (sc.sw * 1.08) / (2 * Math.tan(THREE.MathUtils.degToRad(fovEnd / 2)) * (W / H));
  const w0 = winLocal.clone();
  const rel = (v) => v.clone().sub(w0);
  const face = rel(amina.localToWorld(new THREE.Vector3(0, (CARD.oy - 60) * K, 0)));
  const end = rel(pt.clone().addScaledVector(n, d)), endT = rel(pt);
  const near = rel(pt.clone().addScaledVector(n, 0.5));
  const V3 = (x, y, z) => new THREE.Vector3(x, y, z);
  const pts = [V3(-175, 34, 62), V3(-112, 24, 46), V3(-55, 12, 27), V3(-18, 4.2, 12), V3(-5.6, 1.3, 4.4), V3(-2.3, 0.45, 1.75),
    V3(0, 0.2, 0), V3(1.0, 0.12, -0.95), V3(1.95, -0.12, -1.9), near.clone().add(V3(0, 0.03, 0)), end];
  const tgs = [V3(-135, -3, -14), V3(-40, -2, -2), V3(-12, -0.8, -1), V3(-1.5, -0.3, -1.5), V3(0.6, -0.15, -2.2), face.clone().add(V3(0, 0.05, 0)),
    face.clone(), face.clone().add(V3(0, -0.1, 0)), endT.clone().add(V3(0, 0.08, 0)), endT.clone().add(V3(0, 0.02, 0)), endT.clone()];
  path = new THREE.CatmullRomCurve3(pts, false, 'centripetal');
  const tcurve = new THREE.CatmullRomCurve3(tgs, false, 'centripetal');
  aim = (uRaw) => tcurve.getPoint(uRaw);
  const nk = pts.length - 1;
  const fovK = [57, 54, 50, 46, 44, 42, 46, 50, 48, 42, fovEnd];
  const rollK = [-9, -6, -3, -1, 0, 0, 0, 0, 0, 0, 0];
  const interp = (arr) => { const tr = track(arr.map((v, i) => [i / nk, [v]])); return (u) => tr(u)[0]; };
  fovOf = interp(fovK); rollOf = interp(rollK);
  path.arcLengthDivisions = 4000; Lpath = path.getLength();
  // one global speed profile (relative to the train): fast from frame 0 (no ease-in), easing out,
  // accelerating into the window, gliding, easing in only on the final lock
  const vk = track([[0, [1.0]], [1.5, [0.62]], [2.6, [0.26]], [3.5, [0.06]], [4.4, [0.021]], [5.0, [0.027]], [5.3, [0.028]],
    [5.9, [0.014]], [6.8, [0.0095]], [7.6, [0.0068]], [8.4, [0.0031]], [9.0, [0.0]]], { tan0: [-0.25] });
  const N = 3600, S = new Float64Array(N + 1);
  for (let i = 1; i <= N; i++) { const t0 = ((i - 1) / N) * 9, t1 = (i / N) * 9; S[i] = S[i - 1] + 0.5 * (Math.max(0, vk(t0)[0]) + Math.max(0, vk(t1)[0])) * (t1 - t0); }
  uOf = (t) => { const x = clamp(t / 9) * N, i = Math.floor(x), f = x - i; return (i >= N ? S[N] : S[i] + (S[i + 1] - S[i]) * f) / S[N]; };
  for (let i = 0; i <= 900; i++) { const t = i / 100; if (path.getPointAt(uOf(t)).z <= 0) { crossT = t; break; } }
  console.log('path length', Lpath.toFixed(1), 'm; glass crossing at', crossT.toFixed(2), 's; start speed (rel)', (Lpath / S[N]).toFixed(1), 'm/s');
}
function setPhonePose(t) {
  const k = inOut(seg(t, 6.0, 7.4));
  phonePivot.rotation.x = lerp(-0.38, -0.12, k);                     // screen tilts toward the camera
  phonePivot.rotation.z = lerp(0, phoneInfo.roll, k);            // and comes upright
  phonePivot.position.z = PHONE_FWD + 0.03 * k;
}

function poseAt(t) {
  train.position.x = trainX(t);
  animatePolder(polder, t);
  setPhonePose(t);
  const u = uOf(t), uRaw = path.getUtoTmapping(u);
  const w = Wc(t);
  const p = path.getPointAt(u).add(w), q = aim(uRaw).add(w);
  camera.position.copy(p); camera.up.set(0, 1, 0); camera.lookAt(q);
  camera.rotateZ(THREE.MathUtils.degToRad(rollOf(uRaw)));
  camera.fov = fovOf(uRaw); camera.updateProjectionMatrix();
  sky.position.copy(p);
  const dist = p.distanceTo(q);
  const size = clamp(dist * 1.3, 14, 260);
  const focus = p.clone().lerp(q, 0.6);
  sun.target.position.copy(focus); sun.position.copy(focus).addScaledVector(SUN_DIR, 400);
  const c = sun.shadow.camera; c.left = -size; c.right = size; c.top = size; c.bottom = -size; c.near = 100; c.far = 800; c.updateProjectionMatrix();
  passGlass.uniforms.alpha.value = lerp(0.5, 0.14, inOut(seg(t, 3.6, 4.8)));
  car2Glass.uniforms.alpha.value = lerp(0.5, 0.12, inOut(seg(t, 3.8, 5.5)));
  passGlass.uniforms.streak.value = lerp(-0.6, 1.9, inOut(seg(t, 3.9, crossT + 0.02)));
  passGlass.uniforms.streakAmt.value = 0.7;
  return p;
}

// ---------------- captions ----------------
const cap1 = document.getElementById('cap1'), cap2 = document.getElementById('cap2');
function captions(t) {
  const place = (el, op, dy) => { el.style.opacity = op; el.style.transform = `translate(${(W - el.offsetWidth) / 2}px, ${96 + dy}px)`; };
  place(cap1, 1 - smooth(seg(t, 2.55, 2.9)), -10 * smooth(seg(t, 2.55, 2.9)));
  const k2 = easeOut(seg(t, 5.6, 5.88));
  place(cap2, k2 * (1 - smooth(seg(t, 7.25, 7.55))), (1 - k2) * 36);
}

function setTime(t) {
  captions(t);
  const tex = drawScreen(t);
  if (screenMat.map !== tex) { screenMat.map = tex; screenMat.needsUpdate = true; }
  // the glass crossing: soft sweep over ~9 frames, a 3-frame ripple, a slight dolly push
  const dc = t - crossT;
  const fx = {
    sweep: lerp(-0.3, 1.7, clamp((dc + 0.17) / 0.32)), sweepAmt: Math.sin(Math.PI * clamp((dc + 0.17) / 0.32)) * 0.9,
    ripple: Math.max(0, 1 - Math.abs(dc - 0.01) / 0.055),
    zoom: 1 + 0.06 * Math.sin(Math.PI * clamp((dc + 0.15) / 0.75)),
  };
  frame(scene, camera, SUB, (i, n) => {
    const ts = n > 1 ? t + ((i + 0.5) / n - 0.5) * (SHUTTER / FPS) : t;
    poseAt(clamp(ts, 0, DURATION));
  }, fx);
  return true;
}

window.DURATION = DURATION;
window.setTime = setTime;
window.ready = (async () => {
  await document.fonts.load('700 66px "Lexend V"');
  await document.fonts.ready;
  await buildAmina();
  buildCamera();
  setTime(Number(P.get('t') ?? 0));
  return true;
})().catch((e) => { console.error(e.stack || e); throw e; });
