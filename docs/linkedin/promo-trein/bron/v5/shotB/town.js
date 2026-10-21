// v5: the town between Jada's terrace (world origin) and Henk's company (a hall on the business park, ~190 m
// to −z), for the drone flight of the one-shot film. Everything is merged per material (vertex colours), so
// a few hundred houses stay cheap. Low-poly, flat, the house palette; no text anywhere.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { rng, painted, M4 } from '../../lib/kit.js';

const BRICK = ['#a9573a', '#8b4d36', '#b4683f', '#7a3b2c', '#c98b5a', '#9c5b3c', '#b9623f', '#d0a073', '#6e4a3a'];
const ROOF = ['#4a3b33', '#5d4a3e', '#3c4a56', '#7a3b2c', '#a9573a', '#5a4a44'];
const CAR = ['#1a86d8', '#e0703f', '#f4f7f9', '#3c4a56', '#ffc414', '#d63b3b', '#26313a', '#7ac70c'];

/** Reserved zones (no houses): [x0, x1, z0, z1]. */
const KEEP_OUT = [
  [-16, 19, -17, 13],     // the terrace set (café, street, canal and houses of v4/shot2)
  [3.8, 12.6, -400, 400], // the canal and its quays
  [-60, 40, -400, -150],  // the business park
];
const free = (x0, x1, z0, z1) => !KEEP_OUT.some(([a, b, c, d]) => x1 > a && x0 < b && z1 > c && z0 < d);

/** A gabled roof prism over a w (x) × d (z) footprint, ridge along x, eaves at y = 0. */
function roofGeo(w, d, h) {
  const s = new THREE.Shape(); s.moveTo(-d / 2, 0); s.lineTo(d / 2, 0); s.lineTo(0, h); s.closePath();
  const g = new THREE.ExtrudeGeometry(s, { depth: w, bevelEnabled: false });
  g.rotateY(Math.PI / 2); g.translate(-w / 2, 0, 0);
  return g;
}

export function buildTown(scene) {
  const R = rng(31);
  const body = [], roof = [], win = [], green = [], tree = [], trunk = [], street = [], car = [];
  const box = new THREE.BoxGeometry(1, 1, 1);
  const pane = new THREE.PlaneGeometry(1, 1);

  /** A row of narrow Dutch houses along x (facing +z when face = 1, −z when −1), from (x0, z) over length L. */
  function row(x0, z, L, face, depth = 9) {
    let x = x0;
    while (x < x0 + L - 4) {
      const w = 4.6 + R() * 2.2, h = 6 + Math.floor(R() * 3) * 2.6 + R() * 0.6, d = depth;
      const cx = x + w / 2, cz = z - face * d / 2;
      body.push(painted(box, BRICK[Math.floor(R() * BRICK.length)], M4(cx, h / 2, cz, 0, w, h, d)));
      const rh = 2.4 + R() * 1.6;
      // gable to the street (ridge across the row, along z) on most houses: the Dutch canal-house look
      const r = R() < 0.65 ? roofGeo(d, w, rh).rotateY(Math.PI / 2) : roofGeo(w, d, rh);
      roof.push(painted(r, ROOF[Math.floor(R() * ROOF.length)], M4(cx, h, cz)));
      // windows on the street side: white frame, dark glass, 2 per floor
      const floors = Math.max(2, Math.round(h / 2.6) - 0);
      for (let f = 0; f < floors; f++) for (const k of [-1, 1]) {
        const wx = cx + k * w * 0.22, wy = 1.5 + f * 2.5, wz = z + face * 0.02;
        if (wy > h - 0.8) continue;
        win.push(painted(pane, '#f4f1ea', M4(wx, wy, wz, face > 0 ? 0 : Math.PI, 1.05, 1.5, 1)));
        win.push(painted(pane, '#2c3a42', M4(wx, wy, wz + face * 0.01, face > 0 ? 0 : Math.PI, 0.8, 1.22, 1)));
      }
      x += w + 0.02;
    }
  }
  /** A block: four rows of houses around a garden. */
  function block(x0, z0, W, D) {
    if (!free(x0, x0 + W, z0, z0 + D)) return;
    row(x0, z0 + D, W, 1);                                   // front (facing +z)
    row(x0, z0, W, -1);                                      // back (facing −z)
    green.push(painted(box, '#8dbb57', M4(x0 + W / 2, 0.03, z0 + D / 2, 0, W - 18, 0.06, D - 18)));
    // garden trees
    for (let i = 0; i < 3; i++) {
      const tx = x0 + 10 + R() * (W - 20), tz = z0 + 10 + R() * (D - 20), s = 0.8 + R() * 0.6;
      trunk.push(painted(box, '#6b4f3a', M4(tx, 1.2 * s, tz, 0, 0.3, 2.4 * s, 0.3)));
      tree.push(painted(new THREE.IcosahedronGeometry(2.0 * s, 1), ['#6fae45', '#5f9e3c', '#82c050'][i % 3], M4(tx, 3.3 * s, tz)));
    }
  }
  // the town grid: blocks of 46 × 30 m, streets of 10 m
  for (let bx = -126; bx < 110; bx += 56) for (let bz = -146; bz < 70; bz += 40) block(bx, bz, 46, 30);
  // the café's own building (v4/shot2 had only its front wall) and its neighbours along the street
  body.push(painted(box, '#b0583a', M4(-1, 3.4, -9.5, 0, 14, 6.8, 13)));
  roof.push(painted(roofGeo(14, 13, 3.4), '#4a3b33', M4(-1, 6.8, -9.5)));
  row(-46, -2.9, 38, 1, 12);
  // the houses across the canal behind shot2's façades, and down the canal
  row(-140, 12.5, 128, -1, 9);
  for (let z = -150; z < 60; z += 1) {} // (canal houses: below)
  for (let z = -146; z < 60; z += 9.5) {
    if (z > -17 && z < 13) continue;
    const w = 4.6 + R() * 2, h = 7 + R() * 3;
    body.push(painted(box, BRICK[Math.floor(R() * BRICK.length)], M4(14.6, h / 2, z, 0, 5.4, h, w)));
    roof.push(painted(roofGeo(5.4, w, 2.6 + R()), ROOF[Math.floor(R() * ROOF.length)], M4(14.6, h, z)));
  }

  // streets (asphalt) between the blocks, and the long canal with quays
  for (let bz = -146; bz < 70; bz += 40) street.push(painted(box, '#8f8c88', M4(-10, 0.01, bz - 5, 0, 260, 0.02, 10)));
  for (let bx = -126; bx < 110; bx += 56) street.push(painted(box, '#8f8c88', M4(bx - 5, 0.01, -40, 0, 10, 0.02, 230)));
  // trees along the canal (both quays)
  const onCrossStreet = (z) => [-151, -111, -71, -31, 9, 49].some((c) => Math.abs(z - c) < 6.5);   // v8: no trees on the road
  for (let z = -150; z < 60; z += 11) for (const x of [4.9, 11.6]) {
    if ((z > -20 && z < 12) || onCrossStreet(z)) continue;
    const s = 0.85 + R() * 0.4;
    trunk.push(painted(box, '#6b4f3a', M4(x, 1.3 * s, z, 0, 0.25, 2.6 * s, 0.25)));
    tree.push(painted(new THREE.IcosahedronGeometry(1.6 * s, 1), R() < 0.5 ? '#6fae45' : '#82c050', M4(x, 3.4 * s, z)));
  }
  // parked cars along the streets
  for (let bz = -146; bz < 70; bz += 40) for (let x = -120; x < 100; x += 7 + R() * 9) {
    if (!free(x - 2, x + 2, bz - 9, bz - 1)) continue;
    if ([-131, -75, -19, 37, 93].some((c) => Math.abs(x - c) < 7.5)) continue;   // v8: not in the crossings (people walked through them)
    const col = CAR[Math.floor(R() * CAR.length)], zz = bz - (R() < 0.5 ? 2.2 : 7.8);
    car.push(painted(box, col, M4(x, 0.55, zz, 0, 4.0, 0.7, 1.75)));
    car.push(painted(box, col, M4(x - 0.2, 1.1, zz, 0, 2.2, 0.55, 1.6)));
    car.push(painted(box, '#2c3a42', M4(x - 0.2, 1.1, zz, 0, 2.25, 0.4, 1.62)));
  }

  const mesh = (geos, opts = {}) => {
    const g = mergeGeometries(geos); g.computeVertexNormals();
    const { cast, ...mo } = opts;
    const m = new THREE.Mesh(g, new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true, ...mo }));
    m.castShadow = cast ?? true; m.receiveShadow = true; scene.add(m); return m;
  };
  // ground: green outside the streets, with the canal water and quays
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(1400, 1400), new THREE.MeshLambertMaterial({ color: '#9cc56a' }));
  ground.rotation.x = -Math.PI / 2; ground.position.y = -0.03; ground.receiveShadow = true; scene.add(ground);
  const water = new THREE.Mesh(new THREE.PlaneGeometry(7, 600), new THREE.MeshLambertMaterial({ color: '#4f9cc4' }));
  water.rotation.x = -Math.PI / 2; water.position.set(8.2, -0.62, -100); scene.add(water);
  for (const x of [4.45, 11.95]) street.push(painted(box, '#d8d2c6', M4(x, -0.15, -100, 0, 0.5, 0.3, 600)));   // v8: kerbs flush with the street
  street.push(painted(box, '#7d7468', M4(8.2, -1.25, -100, 0, 7, 1.2, 600)));
  mesh(body); mesh(roof); mesh(win, { cast: false }); mesh(green, { cast: false }); mesh(tree); mesh(trunk); mesh(street, { cast: false }); mesh(car);
  return { };
}

/**
 * The business park and Henk's company: a big hall whose local frame is v4/shot3's (canteen glass wall at
 * z = −1.9, warehouse behind it), turned so its loading door (local x = −15, z ≈ −3.3) faces the town (+z).
 * `group` is the hall's frame; the caller builds the canteen into it.
 */
export function buildPark(scene, group) {
  const R = rng(57);
  const box = new THREE.BoxGeometry(1, 1, 1);
  const shell = [], dark = [], misc = [];
  // the hall shell in local coordinates: x −15..15, z −15.9..6.1, 9 m high; no shadows from the shell, so
  // the sun still lights the inside as in v4/shot3 (the roof hides the sky)
  const H = 9, X0 = -15, X1 = 15, Z0 = -15.9, Z1 = 6.1;
  const DOOR = { z0: -4.55, z1: -2.05, h: 4.3 };
  const wall = (x, y, z, sx, sy, sz, c = '#dfe4e8') => shell.push(painted(box, c, M4(x, y, z, 0, sx, sy, sz)));
  // left wall with the open loading door
  wall(X0, H / 2, (Z0 + DOOR.z0) / 2, 0.3, H, DOOR.z0 - Z0);
  wall(X0, H / 2, (DOOR.z1 + Z1) / 2, 0.3, H, Z1 - DOOR.z1);
  wall(X0, (DOOR.h + H) / 2, (DOOR.z0 + DOOR.z1) / 2, 0.3, H - DOOR.h, DOOR.z1 - DOOR.z0);
  wall(X1, H / 2, (Z0 + Z1) / 2, 0.3, H, Z1 - Z0);
  wall((X0 + X1) / 2, H / 2, Z1, X1 - X0, H, 0.3);
  wall((X0 + X1) / 2, H + 0.15, (Z0 + Z1) / 2, X1 - X0 + 0.6, 0.3, Z1 - Z0 + 0.6, '#9aa5ab');   // roof
  // blue band and an orange stripe round the hall, the rolled-up door, hazard posts
  for (const [x, z, sx, sz] of [[X0 - 0.17, (Z0 + Z1) / 2, 0.05, Z1 - Z0], [X1 + 0.17, (Z0 + Z1) / 2, 0.05, Z1 - Z0], [(X0 + X1) / 2, Z1 + 0.17, X1 - X0, 0.05]]) {
    dark.push(painted(box, '#1f5fa8', M4(x, 7.6, z, 0, sx, 1.4, sz)));
    dark.push(painted(box, '#ff7a00', M4(x, 6.7, z, 0, sx, 0.25, sz)));
  }
  // cut the band at the door (the door is below it anyway) and frame the door
  misc.push(painted(box, '#3c4a56', M4(X0 - 0.2, DOOR.h + 0.35, (DOOR.z0 + DOOR.z1) / 2, 0, 0.5, 0.7, DOOR.z1 - DOOR.z0 + 0.4)));
  for (const z of [DOOR.z0 - 0.12, DOOR.z1 + 0.12]) {
    misc.push(painted(box, '#ffc414', M4(X0 - 0.3, 0.6, z, 0, 0.25, 1.2, 0.25)));
    misc.push(painted(box, '#1e2226', M4(X0 - 0.3, 1.3, z, 0, 0.26, 0.2, 0.26)));
    misc.push(painted(box, '#ffc414', M4(X0 - 0.3, 1.6, z, 0, 0.25, 0.4, 0.25)));
  }
  // windows of the canteen on the town-facing end (local z = 6.1 is the canteen's back)
  for (let x = -2.8; x <= 3.2; x += 1.5) dark.push(painted(box, '#2c3a42', M4(x, 1.9, Z1 + 0.16, 0, 1.1, 1.3, 0.04)));
  // the warehouse's open floor between the door and the racks: pallets and a pallet truck
  for (let i = 0; i < 4; i++) {
    const x = -13 + i * 1.4, z = -6.8 - (i % 2) * 1.2;
    misc.push(painted(box, '#b47a45', M4(x, 0.07, z, 0, 1.2, 0.14, 1.0)));
    if (i % 2 === 0) misc.push(painted(box, ['#e0a86b', '#c98a4b'][i % 2], M4(x, 0.5, z, 0, 1.0, 0.75, 0.85)));
  }
  misc.push(painted(box, '#1f5fa8', M4(-12.2, 0.15, -0.9, 0.3, 1.4, 0.2, 0.6)));
  misc.push(painted(box, '#26313a', M4(-12.9, 0.7, -0.6, 0.3, 0.1, 1.2, 0.1)));
  // light strips under the roof
  for (let x = -12; x <= 12; x += 6) misc.push(painted(box, '#fff6dc', M4(x, H - 0.3, -7, 0, 0.3, 0.06, 16)));
  const mk = (geos, cast = false) => {
    const g = mergeGeometries(geos); g.computeVertexNormals();
    const m = new THREE.Mesh(g, new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true })); m.castShadow = cast; m.receiveShadow = true; group.add(m); return m;
  };
  mk(shell); mk(dark); mk(misc, true);

  // the business park around it (world coordinates): asphalt, other halls, trucks, containers, a fence
  const park = [], parkCast = [];
  park.push(painted(box, '#a7a39c', M4(-10, 0.0, -230, 0, 120, 0.04, 170)));
  // the apron in front of the door, with yellow parking lines
  for (let x = -40; x <= 0; x += 4) park.push(painted(box, '#ffc414', M4(x, 0.03, -178, 0, 0.15, 0.02, 6)));
  // other halls
  for (const [x, z, w, d, h, c, band] of [[-58, -215, 26, 40, 8, '#cfd8de', '#ff7a00'], [24, -205, 30, 34, 10, '#e9ecef', '#3fa34d'], [22, -255, 40, 26, 9, '#dfe6ec', '#1f5fa8'], [-52, -262, 34, 22, 7, '#d6d2c9', '#d63b3b']]) {
    parkCast.push(painted(box, c, M4(x, h / 2, z, 0, w, h, d)));
    parkCast.push(painted(box, '#9aa5ab', M4(x, h + 0.15, z, 0, w + 0.4, 0.3, d + 0.4)));
    parkCast.push(painted(box, band, M4(x, h - 1.2, z + d / 2 + 0.05, 0, w, 1.0, 0.1)));
    for (let k = -1; k <= 1; k++) parkCast.push(painted(box, '#3c4a56', M4(x + k * w / 4, 2, z + d / 2 + 0.06, 0, 3.2, 4, 0.1)));
  }
  // trucks: white trailers with a coloured cab, parked at the docks
  for (const [x, z, ry, cab] of [[-36, -186, 0, '#1a86d8'], [8, -182, 0.1, '#d63b3b'], [30, -175, -1.4, '#ffc414'], [-48, -190, 0.05, '#26313a']]) {
    parkCast.push(painted(box, '#f4f7f9', M4(x, 2.2, z, ry, 2.5, 3.0, 12)));
    parkCast.push(painted(box, cab, M4(x + Math.sin(ry) * 7.4, 1.6, z + Math.cos(ry) * 7.4, ry, 2.5, 2.6, 2.6)));
    for (const s of [-1, 1]) for (const k of [-4.5, -3.2, 4.5, 7.2]) parkCast.push(painted(box, '#1e2226', M4(x + Math.cos(ry) * s * 1.1 + Math.sin(ry) * k, 0.5, z - Math.sin(ry) * s * 1.1 + Math.cos(ry) * k, ry, 0.35, 1.0, 1.0)));
  }
  // containers
  for (let i = 0; i < 6; i++) parkCast.push(painted(box, ['#d63b3b', '#1f5fa8', '#3fa34d', '#ff7a00'][i % 4], M4(-52 + (i % 3) * 3, 1.3 + Math.floor(i / 3) * 2.6, -232, 0, 2.4, 2.6, 12)));
  // v5: parked cars in front of the halls (staff parking), clear of the camera's line to the door (x ≈ −17)
  for (let i = 0; i < 18; i++) {
    const x = -52 + (i % 9) * 3.1 + (i % 9 > 4 ? 0 : 0), z = -166 - Math.floor(i / 9) * 6.5;
    if (Math.abs(x + 17) < 5) continue;
    const col = ['#1a86d8', '#e0703f', '#f4f7f9', '#3c4a56', '#d63b3b', '#26313a'][i % 6];
    parkCast.push(painted(box, col, M4(x, 0.55, z, Math.PI / 2, 4.0, 0.7, 1.75)));
    parkCast.push(painted(box, col, M4(x, 1.1, z + 0.2, Math.PI / 2, 2.2, 0.55, 1.6)));
    parkCast.push(painted(box, '#2c3a42', M4(x, 1.1, z + 0.2, Math.PI / 2, 2.25, 0.4, 1.62)));
  }
  for (let x = 6; x <= 38; x += 3.1) {
    const col = ['#f4f7f9', '#3c4a56', '#ffc414', '#1a86d8'][Math.round(x) % 4];
    parkCast.push(painted(box, col, M4(x, 0.55, -168, Math.PI / 2, 4.0, 0.7, 1.75)));
    parkCast.push(painted(box, col, M4(x, 1.1, -167.8, Math.PI / 2, 2.2, 0.55, 1.6)));
  }
  // a fence along the park edge, with a few trees
  for (let x = -70; x <= 50; x += 3) park.push(painted(box, '#8a96a0', M4(x, 0.9, -150, 0, 0.06, 1.8, 0.06)));
  park.push(painted(box, '#8a96a0', M4(-10, 1.7, -150, 0, 120, 0.05, 0.05)));
  for (let x = -66; x <= 46; x += 9) {
    const s = 0.9 + R() * 0.4;
    parkCast.push(painted(new THREE.IcosahedronGeometry(1.7 * s, 1), '#6fae45', M4(x, 3.2 * s, -147)));
    parkCast.push(painted(box, '#6b4f3a', M4(x, 1.2 * s, -147, 0, 0.25, 2.4 * s, 0.25)));
  }
  const mw = (geos, cast) => {
    const g = mergeGeometries(geos); g.computeVertexNormals();
    const m = new THREE.Mesh(g, new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true })); m.castShadow = cast; m.receiveShadow = true; scene.add(m); return m;
  };
  mw(park, false); mw(parkCast, true);
  return { DOOR, X0 };
}
