// v5b: extras (figuranten) for shot B, on the film clock w (0–29 s, so they walk at a natural pace whatever the
// camera's warp does): guests and a waiter on the terrace, passers-by on the street and the quay, cyclists and
// pedestrians in the town, workers in hi-vis at the business park and in the hall, colleagues in the canteen.
import * as THREE from 'three';
import { rng, clamp, smooth, seg } from '../../lib/kit.js';
import { buildExtra, buildBike, randomLook } from '../../lib/extras.js';

export function extrasB(scene, G) {
  const R = rng(77), list = [];
  const add = (o, parent, fn) => { const e = buildExtra(o); parent.add(e.root); list.push({ e, fn }); return e; };
  const look = (o = {}) => randomLook(R, o);
  const route = (pts, v, w0 = 0) => (w, e) => {     // walk a polyline at v from w0, then stand at its end
    let d = Math.max(0, (w - w0) * v);
    for (let i = 0; i < pts.length - 1; i++) {
      const [ax, az] = pts[i], [bx, bz] = pts[i + 1], L = Math.hypot(bx - ax, bz - az);
      if (d <= L || i === pts.length - 2) {
        const k = Math.min(1, d / L); e.root.position.set(ax + (bx - ax) * k, 0, az + (bz - az) * k); e.root.rotation.y = Math.atan2(bx - ax, bz - az);
        if (k < 1) e.walk(Math.max(0, (w - w0) * v) / 0.62 * Math.PI); else e.stand(w);
        return;
      }
      d -= L;
    }
  };
  // ---------------- terrace (scene frame; Jada's table at the origin) ----------------
  /** A guest on a terrace chair at (x, z) turned ry (the chair's own frame faces +z). */
  const guest = (x, z, ry, o, act) => add(look(o), scene, (w, e) => {
    e.root.position.set(x, 0, z); e.root.rotation.y = ry; e.root.translateZ(-0.05);
    e.sit({ seatH: 0.48, knees: 0.42 }); act(w, e);
  });
  const chat = (yaw0, ph) => (w, e) => {
    const k = Math.sin(w * 0.9 + ph);
    e.head2(yaw0 + 0.18 * k, 0.05 + 0.05 * Math.sin(w * 2.3 + ph), 0.04 * k);
    e.armAt('R', -0.2, 0.78 + 0.05 * Math.max(0, Math.sin(w * 1.7 + ph)), 0.42);
    e.armAt('L', 0.22, 0.76, 0.38);
  };
  const sip = (ph) => (w, e) => {
    const q = smooth(clamp(Math.sin(w * 0.55 + ph) * 3 - 2));            // now and then the cup goes up
    e.head2(0.1 * Math.sin(w * 0.4 + ph), 0.1 - 0.12 * q);
    e.armAt('R', -0.14 + 0.08 * q, 0.8 + 0.62 * q, 0.42 - 0.18 * q);
    e.armAt('L', 0.22, 0.76, 0.38);
  };
  const phone = (ph) => (w, e) => { e.head2(0.05 * Math.sin(w * 0.3 + ph), 0.45); e.armAt('R', -0.06, 0.92, 0.33); e.armAt('L', 0.06, 0.92, 0.33); };
  guest(-4.3, 0.85, 0, { hair: 'curly', top: '#e0703f' }, chat(-0.5, 0));
  guest(-3.75, 1.8, -2.3, { hair: 'short', beard: true, top: '#1a86d8' }, chat(0.4, 1.7));
  guest(2.6, 1.75, 0, { hair: 'bun', hairColor: '#aab1b8', top: '#8e44c9' }, sip(0.5));
  guest(3.15, 2.7, -2.3, { hair: 'bald', top: '#f4f7f9', skin: '#f0c29b' }, chat(0.3, 2.4));
  guest(-5.6, 3.05, 0, { hair: 'long', top: '#7ac70c' }, phone(0.7));
  guest(-2.4, -2.1, 0.2, { hair: 'scarf', scarfColor: '#d63b3b', top: '#26313a' }, chat(-0.35, 3.1));
  guest(-1.05, 3.8, -2.3, { hair: 'cap', capColor: '#3fa34d', top: '#3c4a56' }, phone(1.9));
  guest(1.0, 4.65, 0, { hair: 'long', hairColor: '#c4a35a', top: '#d63b3b' }, sip(3.0));
  guest(-3.0, -1.1, 2.4, { hair: 'short', top: '#c4a35a' }, sip(2.2));
  // the waiter: out of the café along the façade with a tray, then serves the far table
  { const tray = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.015, 20), new THREE.MeshLambertMaterial({ color: '#cfd8de' }));
    tray.castShadow = true;
    const walk = route([[-6.4, -2.72], [-2.1, -2.72], [-1.8, -2.25]], 1.1, 1.2);
    const e = add({ skin: '#a86c45', top: '#26313a', pants: '#1e2226', hair: 'short', hairColor: '#1e1a18' }, scene, (w, e) => {
      walk(w, e); e.armAt('L', 0.28, 1.08, 0.3); e.head2(0.12 * Math.sin(w * 0.7), 0.08);
    });
    e.root.add(tray); tray.position.set(0.28, 1.13, 0.32);
    const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.032, 0.08, 14), new THREE.MeshLambertMaterial({ color: '#ffffff' })); cup.position.set(0.03, 0.045, 0); cup.castShadow = true; tray.add(cup);
    const ap = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.5, 0.02), new THREE.MeshLambertMaterial({ color: '#f4f7f9' })); ap.position.set(0, -0.2, 0.13); e.hips.add(ap); }
  // passers-by on the cobbled street (z 3.5–9.5) and on the quay (x ≈ 4.1)
  const walker = (o, x0, z0, dx, dz, v, ph, parent = scene, until = 1e9) => add(look(o), parent, (w, e) => {
    const d = v * Math.min(w, until), L = Math.hypot(dx, dz);
    e.root.position.set(x0 + dx / L * d, 0, z0 + dz / L * d); e.root.rotation.y = Math.atan2(dx, dz);
    e.walk(d / 0.62 * Math.PI + ph); e.head2(0.1 * Math.sin(w * 0.5 + ph), 0);
  });
  walker({ hair: 'long', top: '#d63b3b' }, -12, 7.7, 1, 0, 1.25, 0);
  walker({ hair: 'short', top: '#3c4a56' }, -10.8, 7.9, 1, 0, 1.25, 2.2);
  walker({ hair: 'cap', capColor: '#1a86d8', top: '#f4f7f9' }, 2.5, 8.8, -1, 0, 1.35, 1);
  walker({ hair: 'scarf', scarfColor: '#8e44c9', top: '#2f3a47' }, 4.1, 9, 0, -1, 1.1, 0.4);
  walker({ hair: 'bald', beard: true, top: '#2f8f9d' }, 4.15, -6, 0, 1, 1.15, 1.3);
  const cyclist = (o, x0, z0, dx, dz, v, ph, far = false, parent = scene) => {
    const bike = buildBike(R() < 0.5 ? '#1e2226' : '#3c4a56', far); parent.add(bike);
    return add(look({ far, ...o }), parent, (w, e) => {
      const d = v * w, L = Math.hypot(dx, dz);
      e.root.position.set(x0 + dx / L * d, 0, z0 + dz / L * d); e.root.rotation.y = Math.atan2(dx, dz);
      bike.position.copy(e.root.position); bike.rotation.y = e.root.rotation.y;
      e.bike(d / 2.1 * Math.PI * 2 / 1.6 + ph); e.head2(0, -0.1);
    });
  };
  cyclist({ hair: 'long', top: '#ffc414' }, 3, 6.0, -1, 0, 4.2, 0);
  cyclist({ hair: 'short', top: '#1592db' }, -24, 5.0, 1, 0, 3.8, 1.3);
  // ---------------- the town (seen from the air: lighter figures) ----------------
  for (let i = 0; i < 9; i++) {           // the long street at x ≈ −19, both ways
    const up = i % 2 === 0;
    cyclist({}, up ? -17.6 : -20.4, (up ? 40 : -150) + (up ? -1 : 1) * i * 21 + R() * 6, 0, up ? -1 : 1, 4 + R(), R() * 6, true);
  }
  for (let i = 0; i < 10; i++) {
    const side = i % 2 ? -14.7 : -23.3, dir = R() < 0.5 ? -1 : 1;
    walker({ far: true }, side, 30 - i * 17 + R() * 8, 0, dir, 1.2 + R() * 0.3, R() * 6);
  }
  for (let i = 0; i < 8; i++) {           // the quays along the canal
    const x = i % 2 ? 4.0 : 12.4, dir = R() < 0.5 ? -1 : 1;
    walker({ far: true }, x, -20 - i * 16 + R() * 6, 0, dir, 1.2 + R() * 0.3, R() * 6);
  }
  for (const z of [-31, -71, -111]) for (let i = 0; i < 3; i++) {       // the cross streets
    const dir = i % 2 ? 1 : -1;
    if (i < 2) cyclist({}, -60 + i * 50 + R() * 10, z + (dir > 0 ? 1.4 : -1.4), dir, 0, 4.2 + R(), R() * 6, true);
    else walker({ far: true }, -45 + R() * 40, z + 4.2, dir, 0, 1.3, R() * 6);
  }
  // ---------------- the business park (scene frame; the loading door at ≈ (−17.3, −190)) ----------------
  const worker = (o, fn) => add(look({ vest: R() < 0.5 ? true : '#d7e83a', helmet: R() < 0.6 ? '#ffc414' : '#f4f7f9', pants: '#2f3a47', ...o }), scene, fn);
  worker({}, route([[-33, -172], [-26, -180], [-23, -186.5]], 1.3, 9));
  worker({ hair: 'short' }, route([[-30, -174], [-24.5, -181], [-21.8, -187.2]], 1.25, 10.5));
  worker({}, (w, e) => { e.root.position.set(-33.4, 0, -180.6); e.root.rotation.y = 2.6; e.stand(w); e.armAt('R', -0.15, 1.05, 0.32); e.armAt('L', 0.12, 1.08, 0.3); e.head2(0.2 * Math.sin(w * 0.6), 0.25); });
  worker({}, route([[2, -176], [-6, -184], [-9, -188]], 1.4, 8));
  worker({}, (w, e) => { e.root.position.set(-10.5, 0, -186.5); e.root.rotation.y = -1.9; e.stand(w); e.armAt('R', -0.3, 1.55 + 0.12 * Math.sin(w * 7), 0.15); e.head2(0, 0.1); });
  // ---------------- in the hall and the canteen (G: the hall's local frame) ----------------
  const inG = (o, fn) => add(look(o), G, fn);
  // forklift driver: on the forklift's seat (local −0.1, 0.9, 0 of the forklift, which faces its +x)
  { const fl = G.children.find((c) => c.isGroup && Math.abs(c.position.x + 6.4) < 0.01 && Math.abs(c.position.z + 0.4) < 0.01);
    if (fl) { const e = buildExtra(look({ vest: true, helmet: '#f4f7f9', hair: 'short' })); fl.add(e.root);
      list.push({ e, fn: (w, e) => { e.root.position.set(-0.18, 0.43, 0); e.root.rotation.y = Math.PI / 2; e.sit({ seatH: 0.5, knees: 0.4 }); e.armAt('R', -0.18, 1.05, 0.38); e.armAt('L', 0.18, 1.05, 0.38); e.head2(0.25 * Math.sin(w * 0.5), 0.05); } }); } }
  // a picker at the first rack (local z −5.1), reaching for a box; another walking the next aisle
  inG({ vest: true, helmet: '#ffc414' }, (w, e) => { e.root.position.set(2.9, 0, -4.2); e.root.rotation.y = Math.PI; e.stand(w);
    const k = 0.5 + 0.5 * Math.sin(w * 0.8); e.armAt('R', -0.2, 1.35 + 0.15 * k, 0.4); e.armAt('L', 0.2, 1.3 + 0.15 * k, 0.4); e.head2(0, -0.2); });
  inG({ vest: '#d7e83a', helmet: '#ffc414' }, (w, e) => { const x = -9 + ((w * 1.2) % 22); e.root.position.set(x, 0, -6.85); e.root.rotation.y = Math.PI / 2; e.walk(w * 1.2 / 0.62 * Math.PI); });
  // canteen colleagues: two at the left table (−1.6, 3.2), one at the right (1.9, 4.2), one at the coffee machine
  const sitG = (x, z, face, o, act) => inG(o, (w, e) => { e.root.position.set(x, 0, z - face * 0.05); e.root.rotation.y = face > 0 ? 0 : Math.PI; e.sit({ seatH: 0.485, knees: 0.42 }); act(w, e); });
  sitG(-1.95, 2.6, 1, { hair: 'long', top: '#3fa34d' }, chat(0.25, 0.3));
  sitG(-1.25, 3.8, -1, { hair: 'short', beard: true, top: '#ff7a00', vest: true }, sip(1.1));
  sitG(2.25, 4.8, -1, { hair: 'scarf', scarfColor: '#1f5fa8', top: '#e9ecef' }, phone(0.2));
  inG({ hair: 'bald', top: '#244a7d' }, (w, e) => { e.root.position.set(2.55, 0, 2.45); e.root.rotation.y = Math.PI / 2; e.stand(w); e.armAt('R', -0.1, 1.05, 0.35); e.head2(0.1, 0.15); });
  return {
    update(w) { for (const { e, fn } of list) fn(w, e); },
    count: list.length,
  };
}
