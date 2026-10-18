// v3 shared camera + phone helpers (shots 2–4): one C2 path (clamped cubic B-spline through a control
// polygon), one speed profile per shot (v0·(1−x)^p: fast at the cut, easing to rest at the end), an aim
// track keyed in time (C1), and an up vector that settles onto a screen's "up" for the final frame.
import * as THREE from 'three';
import { W, H, PAL, clamp, track, canvasTex } from './kit.js';

export const V3 = (x, y, z) => new THREE.Vector3(x, y, z);
const smooth = (x) => x * x * (3 - 2 * x);

/** Clamped uniform cubic B-spline through control points → n + 1 samples. */
export function bspline(P, n = 900) {
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

/**
 * Camera move: ctrl = control polygon (first = start, last = end exactly), T0..T1 the shot's local time,
 * v0 = speed at T0 (m/s; rests at T1), aimKeys = [[t, Vector3], …] (C1 track), fovKeys = [[t, fov], …],
 * upEnd (optional) = the up vector the camera settles onto from time upFrom.
 */
export function makeMove({ ctrl, T0 = 0, T1, v0, aimKeys, aimTan0, fovKeys, upEnd, upFrom = T1, roll = null }) {
  const pts = bspline(ctrl, 1200);
  const path = new THREE.CatmullRomCurve3(pts, false, 'centripetal'); path.arcLengthDivisions = 6000;
  const L = path.getLength(), Tr = T1 - T0;
  const p = v0 * Tr / L - 1;
  const sOf = (t) => { const x = clamp((t - T0) / Tr); return L * (1 - Math.pow(1 - x, p + 1)); };
  const A = (v) => [v.x, v.y, v.z];
  const at = track(aimKeys.map(([t, v]) => [t, A(v)]), aimTan0 ? { tan0: A(aimTan0) } : {});
  const ft = track(fovKeys.map(([t, f]) => [t, [f]]));
  const rt = roll ? track(roll.map(([t, r]) => [t, [r]])) : null;
  const lens = path.getLengths(6000);
  const when = (c) => { let bi = 0, bd = 1e9; pts.forEach((q, i) => { const d = q.distanceTo(c); if (d < bd) { bd = d; bi = i; } });
    const s = lens[Math.round((6000 * bi) / (pts.length - 1))]; for (let t = T0; t <= T1; t += 0.01) if (sOf(t) >= s - 1e-6) return +t.toFixed(2); return T1; };
  const at3 = (t) => V3(...at(t));
  function pose(camera, t) {
    const u = clamp(sOf(t) / L), pos = path.getPointAt(u), aim = at3(t);
    let up = V3(0, 1, 0);
    if (upEnd) up.lerp(upEnd, smooth(clamp((t - upFrom) / (T1 - upFrom)))).normalize();
    camera.position.copy(pos); camera.up.copy(up); camera.lookAt(aim);
    if (rt) camera.rotateZ(THREE.MathUtils.degToRad(rt(t)[0]));
    camera.fov = ft(t)[0]; camera.updateProjectionMatrix(); camera.updateMatrixWorld(true);
    return { pos, aim };
  }
  return { pose, path, L, p, sOf, when, pts };
}

/** Distance along the screen normal so a screen of width sw fills `fill` of the frame width (fill > 1: margins). */
export const frameDist = (sw, fov, fill = 1.08) => (sw * fill) / (2 * Math.tan(THREE.MathUtils.degToRad(fov / 2)) * (W / H));

function rr(p, x, y, w, h, r) {
  p.moveTo(x + r, y); p.lineTo(x + w - r, y); p.quadraticCurveTo(x + w, y, x + w, y + r); p.lineTo(x + w, y + h - r);
  p.quadraticCurveTo(x + w, y + h, x + w - r, y + h); p.lineTo(x + r, y + h); p.quadraticCurveTo(x, y + h, x, y + h - r);
  p.lineTo(x, y + r); p.quadraticCurveTo(x, y, x + r, y); return p;
}
/** A 3D phone (origin bottom-centre, screen +Z) with a live 1170×2532 canvas screen. */
export function makePhone3D(renderer, { pw = 0.095, depth = 0.011 } = {}) {
  const ph = pw * 2.06, phone = new THREE.Group();
  const bodyGeo = new THREE.ExtrudeGeometry(rr(new THREE.Shape(), -pw / 2, 0, pw, ph, pw * 0.17), { depth, bevelEnabled: true, bevelThickness: 0.0025, bevelSize: 0.0025, bevelSegments: 2, curveSegments: 8 });
  bodyGeo.translate(0, 0, -depth);
  const pm = new THREE.Mesh(bodyGeo, new THREE.MeshLambertMaterial({ color: PAL.inkUI })); pm.castShadow = true; pm.receiveShadow = true; phone.add(pm);
  const btn = new THREE.Mesh(new THREE.BoxGeometry(0.004, ph * 0.1, 0.006), new THREE.MeshLambertMaterial({ color: '#3c4a56' }));
  btn.position.set(pw / 2 + 0.003, ph * 0.72, -depth / 2); phone.add(btn);
  const b = pw * 0.07, sw = pw - 2 * b, sHt = sw * 844 / 390;
  const sg = new THREE.ShapeGeometry(rr(new THREE.Shape(), -sw / 2, ph - b - sHt, sw, sHt, pw * 0.1), 10);
  const uv = sg.attributes.uv, pos = sg.attributes.position;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, (pos.getX(i) + sw / 2) / sw, (pos.getY(i) - (ph - b - sHt)) / sHt);
  const c = document.createElement('canvas'); c.width = 1170; c.height = 2532;
  const tex = canvasTex(c, renderer);
  const mat = new THREE.MeshBasicMaterial({ map: tex, toneMapped: false });
  const screen = new THREE.Mesh(sg, mat); screen.position.z = 0.0028; phone.add(screen);
  const top = ph - b;
  /** world point + normal of screen point (u across, v from the top) */
  const point = (u, v, lift = 0.003) => ({ pt: phone.localToWorld(V3((u - 0.5) * sw, top - sHt * v, lift)), n: V3(0, 0, 1).transformDirection(phone.matrixWorld) });
  return { phone, pw, ph, depth, sw, sHt, top, canvas: c, g: c.getContext('2d'), tex, mat, screen, point };
}
