// Vloertaal promo 3D — extras (figuranten): simple low-poly people for the background, in the cast's toon style
// (flat fills, one crisp shade) but without the cast's faces, so nobody reads as Amina, Jada, Henk or Bram.
//
//   const e = buildExtra({ skin, top, pants, hair: 'short', vest: true, helmet: true, seed });  scene.add(e.root);
//   e.sit({ seatH, look, hands })   e.walk(phase)   e.bike(crank)   e.stand({ reach })   then e.head(yaw, pitch)
// Origin at floor level between the feet, facing +Z, left is +X (as the cast). Metres.
import * as THREE from 'three';
import { toon } from './char3d.js';

const HIP = 0.9, THIGH = 0.43, SHIN = 0.41, FOOT = 0.065, UPPER = 0.29, FORE = 0.26;
const SKIN = ['#f0c29b', '#e0a87e', '#c68a5e', '#a86c45', '#8d5536', '#6e3f25', '#f5d0b0'];
const TOPS = ['#3c4a56', '#d63b3b', '#1a86d8', '#f4f7f9', '#7ac70c', '#8e44c9', '#e0703f', '#26313a', '#2f8f9d', '#c4a35a', '#b0583a'];
const PANTS = ['#2f3a47', '#1d3a63', '#3c4a56', '#5d4a3e', '#26313a', '#6d7880', '#1592db'];
const HAIR = ['#2e201a', '#1e1a18', '#5a4236', '#8a5a3a', '#c4a35a', '#aab1b8', '#d9b77a'];
export const pick = (R, a) => a[Math.floor(R() * a.length) % a.length];
/** A random look from a seeded rng: { skin, top, pants, hair, hairStyle }. */
export function randomLook(R, o = {}) {
  const styles = ['short', 'short', 'long', 'bun', 'curly', 'bald', 'cap', 'scarf'];
  return { skin: pick(R, SKIN), top: pick(R, TOPS), pants: pick(R, PANTS), hairColor: pick(R, HAIR), hair: pick(R, styles), ...o };
}

const geoCache = new Map();
const G = (key, make) => { if (!geoCache.has(key)) geoCache.set(key, make()); return geoCache.get(key); };
function limb(len, r0, r1, seg) {
  return G(`limb${len},${r0},${r1},${seg}`, () => { const g = new THREE.CylinderGeometry(r1, r0, len, seg, 1, false); g.translate(0, -len / 2, 0); return g; });
}
const sphere = (r, w, h) => G(`sph${r},${w},${h}`, () => new THREE.SphereGeometry(r, w, h));

/**
 * o: skin, top, sleeve (= top), pants, shoe, hair ('short'|'long'|'bun'|'curly'|'bald'|'cap'|'scarf'|'none'), hairColor,
 *    capColor, scarfColor, beard, vest (true | colour), helmet (true | colour), shortSleeve, far (fewer polygons, no eyes)
 */
export function buildExtra(o = {}) {
  const far = !!o.far, S = far ? 7 : 10, SW = far ? 8 : 14, SH = far ? 6 : 10;
  const m = (c) => toon(c);
  const mesh = (geo, color, parent, x = 0, y = 0, z = 0) => {
    const k = new THREE.Mesh(geo, m(color)); k.position.set(x, y, z); k.castShadow = true; k.receiveShadow = !far; parent.add(k); return k;
  };
  const skin = o.skin ?? '#c68a5e', top = o.top ?? '#3c4a56', sleeve = o.sleeve ?? top, pants = o.pants ?? '#2f3a47', shoe = o.shoe ?? '#22262a';
  const root = new THREE.Group(); root.name = 'extra';
  const hips = new THREE.Group(); hips.position.y = HIP; root.add(hips);
  // pelvis + torso (a tapered, flattened cylinder), shoulders
  const pel = mesh(G(`pel${S}`, () => new THREE.CylinderGeometry(0.16, 0.15, 0.17, S)), pants, hips, 0, -0.02, 0); pel.scale.z = 0.72;
  const spine = new THREE.Group(); spine.position.y = 0.04; hips.add(spine);
  const tor = mesh(G(`tor${S}`, () => { const g = new THREE.CylinderGeometry(0.185, 0.16, 0.5, S); g.translate(0, 0.25, 0); return g; }), top, spine); tor.scale.z = 0.64;
  for (const s of [-1, 1]) mesh(sphere(0.06, SW, SH), sleeve, spine, s * 0.19, 0.455, 0);
  // v8: a rounded chest and back over the top of the torso (the bare cylinder read as unfinished), and a collar
  { const y = mesh(sphere(0.19, SW, SH), top, spine, 0, 0.4, 0); y.scale.set(1.02, 0.42, 0.66);
    const c = mesh(G(`collar${S}`, () => new THREE.TorusGeometry(0.058, 0.014, 6, S + 4)), top, spine, 0, 0.5, 0); c.rotation.x = Math.PI / 2; }
  { const b = mesh(sphere(0.165, SW, SH), pants, hips, 0, -0.06, 0); b.scale.set(1, 0.5, 0.72); }   // seat of the trousers
  if (o.vest) {
    const vc = o.vest === true ? '#ff7a00' : o.vest;
    const v = mesh(G(`vest${S}`, () => { const g = new THREE.CylinderGeometry(0.195, 0.175, 0.42, S, 1, true); g.translate(0, 0.27, 0); return g; }), vc, spine); v.scale.z = 0.68;
    v.material = toon(vc, { side: THREE.DoubleSide });
    for (const y of [0.17, 0.3]) { const b = mesh(G(`band${S},${y}`, () => { const g = new THREE.CylinderGeometry(0.19 - y * 0.03 + 0.007, 0.19 - y * 0.03 + 0.007, 0.035, S, 1, true); g.translate(0, y, 0); return g; }), '#e9ecef', spine); b.scale.z = 0.69; }
  }
  // neck + head
  const neck = new THREE.Group(); neck.position.y = 0.5; spine.add(neck);
  mesh(limb(0.09, 0.05, 0.05, S), skin, neck, 0, 0.09, 0);
  const head = new THREE.Group(); head.position.y = 0.08; neck.add(head);
  const HR = 0.112;
  const hd = mesh(sphere(HR, SW, SH), skin, head, 0, HR * 1.08, 0.005); hd.scale.set(0.95, 1.12, 1.02);
  if (!far) for (const s of [-1, 1]) mesh(sphere(0.012, 8, 6), '#1e2226', head, s * 0.04, HR * 1.12, HR * 0.98);
  if (!far) {   // v8: ears and a nose
    for (const s of [-1, 1]) { const ear = mesh(sphere(0.022, 8, 6), skin, head, s * HR * 0.93, HR * 1.05, -0.005); ear.scale.set(0.45, 1, 0.8); }
    const nose = mesh(sphere(0.016, 8, 6), skin, head, 0, HR * 0.99, HR * 1.12); nose.scale.set(0.85, 1, 0.9);
  }
  if (!far) {   // v6: a small smile and a hint of brows, so the extras read as friendly faces up close
    const sm = mesh(G('smile', () => new THREE.TorusGeometry(0.022, 0.0045, 4, 10, Math.PI * 0.8)), '#5a2e22', head, 0, HR * 0.86, HR * 1.03);
    sm.rotation.set(0, 0, Math.PI * 1.1); sm.material = toon('#5a2e22');
    for (const s of [-1, 1]) { const b = mesh(G('brow', () => new THREE.BoxGeometry(0.03, 0.006, 0.006)), o.hairColor ?? '#2e201a', head, s * 0.042, HR * 1.38, HR * 1.02); b.rotation.z = -s * 0.15; }
  }
  const hc = o.hairColor ?? '#2e201a', hy = HR * 1.08;
  const cap = (r, color, thetaLen = Math.PI * 0.5, tilt = -0.42) => {
    const k = mesh(G(`cap${r},${thetaLen},${SW}`, () => new THREE.SphereGeometry(r, SW, SH, 0, Math.PI * 2, 0, thetaLen)), color, head, 0, hy, 0);
    k.rotation.x = tilt; k.scale.set(0.97, 1.14, 1.04); k.material = toon(color, { side: THREE.DoubleSide }); return k;
  };
  const hair = o.hair ?? 'short';
  if (o.helmet) {
    const hcol = o.helmet === true ? '#ffc414' : o.helmet;
    const k = mesh(G(`helm${SW}`, () => new THREE.SphereGeometry(HR * 1.16, SW, SH, 0, Math.PI * 2, 0, Math.PI * 0.5)), hcol, head, 0, hy + 0.035, 0); k.scale.y = 0.95;
    const b = mesh(G(`brim${SW}`, () => new THREE.CylinderGeometry(HR * 1.3, HR * 1.3, 0.014, SW)), hcol, head, 0, hy + 0.035, 0.02); b.scale.z = 1.1;
  } else if (hair === 'scarf') {
    const sc = o.scarfColor ?? '#2f8f9d';
    const k = mesh(G(`scarf${SW}`, () => new THREE.SphereGeometry(HR * 1.14, SW, SH, Math.PI / 2 + 0.85, Math.PI * 2 - 1.7, 0, Math.PI * 0.86)), sc, head, 0, hy, -0.005);
    k.scale.set(0.97, 1.13, 1.05); k.material = toon(sc, { side: THREE.DoubleSide });
    mesh(G(`drape${S}`, () => { const g = new THREE.CylinderGeometry(0.13, 0.2, 0.2, S); g.translate(0, -0.03, 0); return g; }), sc, neck);
  } else if (hair !== 'bald' && hair !== 'none') {
    if (hair === 'curly') { const k = mesh(G(`afro${far}`, () => new THREE.IcosahedronGeometry(HR * 1.22, far ? 0 : 1)), hc, head, 0, hy + 0.03, -0.025); k.scale.set(1, 0.95, 1); }
    else cap(HR * 1.05, hc, Math.PI * 0.58, -0.78);
    if (hair === 'long') { const k = mesh(G(`long${S}`, () => new THREE.BoxGeometry(0.21, 0.3, 0.08)), hc, head, 0, hy - 0.07, -0.075); k.rotation.x = 0.1; }
    if (hair === 'bun') mesh(sphere(0.05, SW, SH), hc, head, 0, hy + 0.1, -0.08);
    if (hair === 'cap') {
      const cc = o.capColor ?? '#d63b3b';
      cap(HR * 1.08, cc, Math.PI * 0.5, -0.2);
      const b = mesh(G('peak', () => new THREE.BoxGeometry(0.15, 0.012, 0.11)), cc, head, 0, hy + 0.035, HR * 1.05); b.rotation.x = 0.12;
    }
  }
  if (o.beard) { const k = mesh(G(`beard${SW}`, () => new THREE.SphereGeometry(HR * 0.86, SW, SH, Math.PI * 0.1, Math.PI * 0.8, Math.PI * 0.5, Math.PI * 0.32)), hc, head, 0, hy - 0.005, 0.005); k.material = toon(hc, { side: THREE.DoubleSide }); }
  // arms: shoulder › elbow › hand (bones along −Y)
  const arm = {};
  for (const [side, s] of [['L', 1], ['R', -1]]) {
    const sh = new THREE.Group(); sh.position.set(s * 0.215, 0.45, 0); spine.add(sh);
    mesh(limb(UPPER, 0.05, 0.045, S), sleeve, sh);
    const el = new THREE.Group(); el.position.y = -UPPER; sh.add(el);
    mesh(sphere(0.045, SW, SH), o.shortSleeve ? skin : sleeve, el);
    mesh(limb(FORE, 0.044, 0.036, S), o.shortSleeve ? skin : sleeve, el);
    if (far) { const hand = mesh(sphere(0.045, SW, SH), skin, el, 0, -FORE - 0.025, 0); hand.scale.set(0.8, 1.1, 0.95); }
    else {   // v8: a hand with a thumb (it was a ball): wrist, flat palm with the fingers together, thumb toward the body
      mesh(limb(0.03, 0.034, 0.03, S), skin, el, 0, -FORE + 0.005, 0);
      const pg = G('xpalm', () => { const g = new THREE.BoxGeometry(0.07, 0.095, 0.032, 1, 2, 1); g.translate(0, -0.047, 0); return g; });
      const palm = mesh(pg, skin, el, 0, -FORE - 0.02, 0); palm.rotation.y = s * 0.0;
      const tip = mesh(sphere(0.035, SW, SH), skin, el, 0, -FORE - 0.11, 0); tip.scale.set(1, 0.45, 0.46);
      const th = mesh(G('xthumb', () => { const g = new THREE.CapsuleGeometry(0.013, 0.035, 3, 8); g.translate(0, -0.024, 0); return g; }), skin, el, -s * 0.012, -FORE - 0.025, 0.022);
      th.rotation.set(-0.45, 0, -s * 0.2);
    }
    arm[side] = { sh, el, s };
  }
  // legs: hip › knee › foot
  const leg = {};
  for (const [side, s] of [['L', 1], ['R', -1]]) {
    const hp = new THREE.Group(); hp.position.set(s * 0.085, -0.04, 0); hips.add(hp);
    mesh(limb(THIGH, 0.075, 0.06, S), pants, hp);
    const kn = new THREE.Group(); kn.position.y = -THIGH; hp.add(kn);
    mesh(sphere(0.06, SW, SH), pants, kn);
    mesh(limb(SHIN, 0.057, 0.045, S), pants, kn);
    const ft = new THREE.Group(); ft.position.y = -SHIN; kn.add(ft);
    mesh(G('shoe', () => { const g = new THREE.BoxGeometry(0.1, FOOT, 0.25); g.translate(0, -FOOT / 2 + 0.01, 0.06); return g; }), shoe, ft);
    leg[side] = { hp, kn, ft, s };
  }

  // ---------------- posing (angles in radians; a bone rotated by −a about X swings forward) ----------------
  /** Two-bone IK in the sagittal plane: target (dz forward, dy up) from the joint; returns [joint, mid] X-angles. */
  function ik2(L1, L2, dz, dy, bendBack) {
    const d = Math.min(Math.hypot(dz, dy), L1 + L2 - 1e-4);
    const base = Math.atan2(dz, -dy);                                   // angle of the target from straight down (forward +)
    const a1 = Math.acos(Math.max(-1, Math.min(1, (L1 * L1 + d * d - L2 * L2) / (2 * L1 * d))));
    const a2 = Math.acos(Math.max(-1, Math.min(1, (L1 * L1 + L2 * L2 - d * d) / (2 * L1 * L2))));
    return bendBack ? [-(base - a1), -(Math.PI - a2)] : [-(base + a1), Math.PI - a2];
  }
  const _p = new THREE.Vector3();
  /** Leg: ankle to (x, y, z) in this figure's root frame; `out` splays the knee sideways. */
  function legAt(side, x, y, z, out = 0) {
    const L = leg[side]; root.updateMatrixWorld(true);
    hips.worldToLocal(root.localToWorld(_p.set(x, y, z)));
    const [a, b] = ik2(THIGH, SHIN, _p.z - L.hp.position.z, _p.y - L.hp.position.y, false);
    L.hp.rotation.set(a, 0, L.s * out); L.kn.rotation.set(b, 0, 0); L.ft.rotation.set(-(a + b) - hips.rotation.x, 0, 0);
  }
  /** Arm: hand to (x, y, z) in this figure's root frame. */
  function armAt(side, x, y, z) {
    const A = arm[side]; root.updateMatrixWorld(true);
    spine.worldToLocal(root.localToWorld(_p.set(x, y, z)));
    const dx = (_p.x - A.sh.position.x) * A.s, dy = _p.y - A.sh.position.y, dz = _p.z - A.sh.position.z;
    const roll = Math.atan2(dx, Math.hypot(dz, dy));
    const [a, b] = ik2(UPPER, FORE + 0.03, dz, dy, true);
    A.sh.rotation.set(a, 0, A.s * roll); A.el.rotation.set(b, 0, 0);
  }
  function reset() { hips.position.set(0, HIP, 0); hips.rotation.set(0, 0, 0); spine.rotation.set(0, 0, 0); neck.rotation.set(0, 0, 0); head.rotation.set(0, 0, 0); }
  const api = {
    root, hips, spine, head, arm, leg, armAt, legAt,
    head2(yaw = 0, pitch = 0, roll = 0) { head.rotation.set(pitch, yaw, roll); },
    /** Standing, weight on both feet; `sway` a gentle idle. */
    stand(t = 0, { sway = 1 } = {}) {
      reset(); const b = Math.sin(t * 1.3) * 0.01 * sway; spine.rotation.z = b; hips.position.y = HIP - 0.005;
      for (const [s, k] of [['L', 1], ['R', -1]]) legAt(s, k * 0.09, FOOT, 0.0);
      for (const [s, k] of [['L', 1], ['R', -1]]) { arm[s].sh.rotation.set(0.05, 0, k * 0.1); arm[s].el.rotation.set(-0.15, 0, 0); }
    },
    /** A walk cycle at phase p (radians; one stride per 2π). */
    walk(p) {
      reset();
      hips.position.y = HIP - 0.035 + 0.025 * Math.abs(Math.cos(p)); spine.rotation.x = 0.04; spine.rotation.y = 0.08 * Math.sin(p);
      for (const [s, k] of [['L', 1], ['R', -1]]) {
        const q = p + (k > 0 ? 0 : Math.PI), sw = Math.sin(q);
        leg[s].hp.rotation.set(-0.42 * sw, 0, 0);
        leg[s].kn.rotation.set(0.12 + 0.6 * Math.max(0, Math.sin(q - 1.2)), 0, 0);
        leg[s].ft.rotation.set(0.42 * sw * 0.4 - 0.1 * Math.max(0, Math.sin(q - 1.2)), 0, 0);
        arm[s].sh.rotation.set(0.38 * sw, 0, k * 0.08); arm[s].el.rotation.set(-0.25 - 0.2 * Math.max(0, sw), 0, 0);
      }
    },
    /** Seated on a seat whose top is at seatH (from this root's floor), feet forward on the floor. */
    sit({ seatH = 0.46, lean = 0.05, knees = 0.45, spread = 0.06 } = {}) {
      reset(); hips.position.set(0, seatH + 0.075, -0.04); spine.rotation.x = lean;
      for (const [s, k] of [['L', 1], ['R', -1]]) legAt(s, k * (0.1 + spread), FOOT, knees);
      for (const [s, k] of [['L', 1], ['R', -1]]) { arm[s].sh.rotation.set(-0.5, 0, k * 0.08); arm[s].el.rotation.set(-0.9, 0, 0); }
    },
    /** On a bike: saddle height above floor, crank angle c (radians). Bike geometry from buildBike. */
    bike(c, { saddle = 0.97 } = {}) {
      reset(); hips.position.set(0, saddle + 0.07, -0.17); spine.rotation.x = 0.3;
      for (const [s, k] of [['L', 1], ['R', -1]]) {
        const q = c + (k > 0 ? 0 : Math.PI);
        legAt(s, k * 0.11, 0.36 + Math.sin(q) * 0.17 + 0.03, -0.08 + Math.cos(q) * 0.17, 0.04);
      }
      for (const [s, k] of [['L', 1], ['R', -1]]) armAt(s, k * 0.25, 1.12, 0.35);
    },
  };
  return api;
}

/** A Dutch city bike (black, upright), wheels along Z (rider faces +Z), origin on the ground under the crank. */
export function buildBike(color = '#1e2226', far = false) {
  const g = new THREE.Group(); const m = toon(color), tyre = toon('#2a2e33');
  const W = far ? 14 : 28;
  const tube = (a, b, r = 0.018) => {
    const A = new THREE.Vector3(...a), B = new THREE.Vector3(...b), d = B.clone().sub(A);
    const k = new THREE.Mesh(G(`btube${r},${far}`, () => new THREE.CylinderGeometry(r, r, 1, far ? 5 : 8)), m);
    k.scale.y = d.length(); k.position.copy(A).addScaledVector(d, 0.5); k.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize()); k.castShadow = true; g.add(k);
  };
  for (const z of [-0.55, 0.55]) {
    const w = new THREE.Mesh(G(`wheel${W}`, () => new THREE.TorusGeometry(0.34, 0.022, 6, W)), tyre); w.rotation.y = Math.PI / 2; w.position.set(0, 0.36, z); w.castShadow = true; g.add(w);
  }
  tube([0, 0.36, -0.55], [0, 0.36, -0.08]); tube([0, 0.36, -0.08], [0, 0.95, -0.15]); tube([0, 0.36, -0.55], [0, 0.9, -0.18]);
  tube([0, 0.36, -0.08], [0, 0.8, 0.42]); tube([0, 0.42, -0.05], [0, 0.68, 0.43]); tube([0, 0.9, 0.42], [0, 0.36, 0.55]);
  tube([0, 0.9, 0.42], [0, 1.1, 0.4]); tube([-0.27, 1.12, 0.35], [0, 1.1, 0.42], 0.014); tube([0.27, 1.12, 0.35], [0, 1.1, 0.42], 0.014);
  const sad = new THREE.Mesh(G('saddle', () => new THREE.BoxGeometry(0.13, 0.05, 0.22)), toon('#5d4a3e')); sad.position.set(0, 0.97, -0.17); g.add(sad);
  return g;
}
