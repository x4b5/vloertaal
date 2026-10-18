// The Dutch polder: long narrow parcels (varied greens) with thin ditches, the railway on a low
// ballast bed with catenary, a canal with a road and a tree row, a village with a church tower,
// farmsteads and slowly turning wind turbines. World: X along the track, +Z = camera side, y up (m).
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { PAL, MEADOW, rng, painted, M4, vcMat, flat } from './kit.js';

const EXT = 2600; // half-size of the world
const box = new THREE.BoxGeometry(1, 1, 1);
// unit gable roof: ridge along X, base 1 (z -0.5..0.5) at y = 0, apex at y = 1
const GABLE = (() => {
  const sh = new THREE.Shape([new THREE.Vector2(-0.5, 0), new THREE.Vector2(0.5, 0), new THREE.Vector2(0, 1)]);
  const g = new THREE.ExtrudeGeometry(sh, { depth: 1, bevelEnabled: false }); g.translate(0, 0, -0.5); g.rotateY(Math.PI / 2); return g;
})();
const quad = (x0, z0, x1, z1, y, color, out) => {
  const g = new THREE.PlaneGeometry(x1 - x0, z1 - z0); g.rotateX(-Math.PI / 2); g.translate((x0 + x1) / 2, y, (z0 + z1) / 2);
  out.push(painted(g, color));
};

export function buildPolder({ seed = 11, extraTurbines = [] } = {}) {
  const R = rng(seed);
  const root = new THREE.Group(); root.name = 'polder';
  const ground = [];
  const water = '#3fa0d8', waterDeep = '#3a98d0', road = '#b4ada2', roadEdge = '#e2dccf';
  const FIELDS = ['#5dbb4a', '#8fd45f', '#74c752', '#a3d96b', '#68be4f', '#86cc5a', '#b2df73'];
  const crops = [...FIELDS, ...FIELDS, ...FIELDS, '#cbd877', '#dccb84', '#c7d36a'];

  // the base under everything is ditch water (ditches = the gaps between parcels)
  quad(-EXT, -EXT, EXT, EXT, -0.08, water, ground);

  /** A band of parcels between z0..z1 (strips across the band, ditches 2.2 m between them). */
  const band = (z0, z1, { skip } = {}) => {
    let x = -EXT;
    while (x < EXT) {
      const w = 24 + R() * 22;
      if (!skip || !skip(x + w / 2)) {
        const c = crops[Math.floor(R() * crops.length)];
        quad(x + 1.1, z0 + 1.2, x + w - 1.1, z1 - 1.2, 0.0, c, ground);
        // a subtle mowing stripe on some parcels
        if (R() < 0.35) quad(x + 1.1 + (w - 2.2) * 0.45, z0 + 1.2, x + w - 1.1, z1 - 1.2, 0.012, shade(c, 0.94), ground);
      }
      x += w;
    }
  };
  // camera side (+Z): parcels in bands, farm roads between bands
  // grass verges beside the ballast bed, a narrow ditch, then the parcels from |z| = 9
  quad(-EXT, 3.6, EXT, 7.6, 0.0, '#7cc455', ground); quad(-EXT, -7.6, EXT, -3.6, 0.0, '#7cc455', ground);
  const bandsP = [[9, 260], [266, 620], [626, 1000], [1006, 1500], [1506, 2100], [2106, EXT]];
  for (const [a, b] of bandsP) band(a, b);
  for (const z of [263, 623, 1003, 1503, 2103]) quad(-EXT, z - 3, EXT, z + 3, 0.02, road, ground);
  // far side (-Z): parcels, a road with a tree row, the canal, more parcels, the village
  const VIL = { x0: 120, x1: 470, z0: -480, z1: -200 };
  band(-140, -9);
  quad(-EXT, -148, EXT, -141, 0.02, road, ground); quad(-EXT, -141.6, EXT, -141, 0.03, roadEdge, ground); quad(-EXT, -148, EXT, -147.4, 0.03, roadEdge, ground);
  quad(-EXT, -156, EXT, -150, 0.01, '#7cc455', ground);
  quad(-EXT, -186, EXT, -156, -0.05, waterDeep, ground); // the canal
  quad(-EXT, -190, EXT, -186, 0.01, '#7cc455', ground);
  band(-560, -190, { skip: (x) => x > VIL.x0 - 30 && x < VIL.x1 + 30 });
  quad(VIL.x0 - 30, -560, VIL.x1 + 30, -190, 0.0, '#9fd06e', ground); // village green ground
  quad(-EXT, -566, EXT, -560, 0.02, road, ground);
  for (const [a, b] of [[-1000, -566], [-1500, -1000], [-2100, -1500], [-EXT, -2100]]) band(a, b);

  // railway bed: ballast trapezoid along X
  const bedShape = new THREE.Shape([new THREE.Vector2(-4.2, 0), new THREE.Vector2(4.2, 0), new THREE.Vector2(2.6, 0.42), new THREE.Vector2(-2.6, 0.42)]);
  const bed = new THREE.ExtrudeGeometry(bedShape, { depth: EXT * 2, bevelEnabled: false });
  bed.rotateY(Math.PI / 2); bed.translate(-EXT, 0, 0);
  // a little texture: world-space UVs + a soft noise map (multiplies the flat parcel colours)
  const gm = mergeGeometries(ground);
  { const pp = gm.attributes.position, uv = new Float32Array(pp.count * 2);
    for (let i = 0; i < pp.count; i++) { uv[i * 2] = pp.getX(i) / 23; uv[i * 2 + 1] = pp.getZ(i) / 23; }
    gm.setAttribute('uv', new THREE.BufferAttribute(uv, 2)); }
  const groundMesh = new THREE.Mesh(gm, new THREE.MeshLambertMaterial({ vertexColors: true, map: noiseTex(), color: '#ebebeb' }));
  groundMesh.receiveShadow = true; root.add(groundMesh);
  const bedMesh = new THREE.Mesh(bed, flat('#b3ab9f')); bedMesh.receiveShadow = true; root.add(bedMesh);
  // grass verges and side ditches are part of the base (water) + bands start at |z| = 9

  // sleepers (instanced) and rails
  const nSl = Math.floor((EXT * 2) / 0.6);
  const sl = new THREE.InstancedMesh(new THREE.BoxGeometry(0.15, 0.08, 2.2), flat('#7c736a'), nSl);
  for (let i = 0; i < nSl; i++) sl.setMatrixAt(i, M4(-EXT + i * 0.6, 0.45, 0));
  sl.receiveShadow = true; root.add(sl);
  for (const z of [-0.72, 0.72]) {
    const r = new THREE.Mesh(new THREE.BoxGeometry(EXT * 2, 0.14, 0.09), flat('#8a8f94'));
    r.position.set(0, 0.6, z); r.receiveShadow = true; root.add(r);
  }
  // catenary on the far side: poles every 54 m with a cantilever, one contact wire
  const cat = [];
  for (let x = -EXT; x < EXT; x += 54) {
    cat.push(painted(box, '#7d868d', M4(x, 3.6, -3.4, 0, 0.26, 7.2, 0.26)));
    cat.push(painted(box, '#7d868d', M4(x, 6.55, -1.7, 0, 0.12, 0.12, 3.6)));
    cat.push(painted(box, '#7d868d', M4(x, 6.1, -2.4, 0, 0.08, 0.08, 2.2, 0.35)));
  }
  const catMesh = new THREE.Mesh(mergeGeometries(cat), vcMat()); catMesh.castShadow = true; root.add(catMesh);
  const wire = new THREE.Mesh(new THREE.BoxGeometry(EXT * 2, 0.05, 0.05), flat('#59626a')); wire.position.set(0, 6.0, 0); root.add(wire);

  // trees: a row along the canal road, clumps at farmsteads and the village
  const trees = [];
  const crown = new THREE.IcosahedronGeometry(1, 0), trunk = new THREE.CylinderGeometry(0.18, 0.26, 1, 5);
  const greens = ['#5f9548', '#6aa04d', '#58a700', '#4f8a3f'];
  const tree = (x, z, s = 1) => {
    const h = (5 + R() * 3) * s, cr = (2.6 + R() * 1.2) * s, c = greens[Math.floor(R() * greens.length)];
    trees.push(painted(trunk, PAL.brown, M4(x, h * 0.35, z, 0, s, h * 0.7, s)));
    trees.push(painted(crown, c, M4(x, h * 0.72, z, R() * 3, cr, cr * 1.15, cr)));
  };
  for (let x = -EXT + 4; x < EXT; x += 11 + R() * 2) tree(x, -152, 1.05);

  // farmsteads (+Z and -Z): house, barn, a few trees
  const houses = [];
  const house = (x, z, w, d, h, wall, roof, ry = 0) => {
    const m = M4(x, 0, z, ry);
    houses.push(painted(box, wall, new THREE.Matrix4().multiplyMatrices(m, M4(0, h / 2, 0, 0, w, h, d))));
    houses.push(painted(GABLE, roof, new THREE.Matrix4().multiplyMatrices(m, M4(0, h, 0, 0, w * 1.04, d * 0.55, d * 1.06))));
  };
  const farm = (x, z, ry) => {
    house(x, z, 11, 8, 4, PAL.label, PAL.slate, ry);
    house(x + 16, z + 4, 18, 12, 6, PAL.clayShade, '#4b555e', ry);
    for (let k = 0; k < 5; k++) tree(x - 8 + R() * 30, z - 12 - R() * 8, 1.1);
  };
  for (const [x, z] of [[-520, 330], [180, 700], [-220, 1150], [820, 420], [-900, 760], [560, 1300], [-700, -720], [700, -880], [-150, -1250], [1100, -640]]) farm(x, z, (R() - 0.5) * 0.3);

  // the village with a church tower (-Z, ahead of the train)
  const walls = [PAL.label, PAL.kraft, '#e9b48c', PAL.clay, '#f1e3cf'], roofs = [PAL.clayShade, PAL.slate, '#a8462a', '#4b555e'];
  for (let k = 0; k < 46; k++) {
    const x = VIL.x0 + R() * (VIL.x1 - VIL.x0), z = VIL.z0 + R() * (VIL.z1 - VIL.z0);
    if (Math.hypot(x - 300, z - 340 * -1) < 30) continue;
    house(x, z, 7 + R() * 5, 8 + R() * 3, 4 + R() * 3, walls[Math.floor(R() * walls.length)], roofs[Math.floor(R() * roofs.length)], Math.round(R()) * Math.PI / 2 + (R() - 0.5) * 0.1);
  }
  for (let k = 0; k < 26; k++) tree(VIL.x0 + R() * (VIL.x1 - VIL.x0), VIL.z0 + R() * (VIL.z1 - VIL.z0), 1.2);
  const church = [];
  church.push(painted(box, '#c9b79c', M4(300, 6, -340, 0, 30, 12, 13)));                  // nave
  church.push(painted(GABLE, PAL.slate, M4(300, 12, -340, 0, 30.4, 8, 13.6)));
  church.push(painted(box, '#d8c7aa', M4(282, 14, -340, 0, 9, 28, 9)));                   // tower
  church.push(painted(box, '#c9b79c', M4(282, 28.6, -340, 0, 9.6, 1.2, 9.6)));
  const spire = new THREE.ConeGeometry(6.6, 22, 4); spire.rotateY(Math.PI / 4);
  church.push(painted(spire, PAL.slate, M4(282, 40.2, -340)));
  church.push(painted(box, PAL.yellow, M4(282, 51.6, -340, 0, 0.5, 2.6, 0.5)));            // the weathercock post
  for (const s of [-1, 1]) church.push(painted(box, PAL.slateDark, M4(282, 22, -340 + s * 4.55, 0, 2.2, 3.4, 0.2)));

  const all = new THREE.Mesh(mergeGeometries([...trees, ...houses, ...church]), vcMat());
  all.castShadow = true; all.receiveShadow = true; root.add(all);

  // wind turbines (-Z, far), rotors turn slowly
  const turbines = [];
  const tw = flat(PAL.paper), tg = flat('#dfe6ec');
  for (const [x, z] of [[-380, -640], [-110, -690], [160, -740], [600, -700], [860, -760], [-260, 1500], ...extraTurbines]) {
    const g = new THREE.Group(); g.position.set(x, 0, z);
    const tower = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 2.6, 92, 8), tw); tower.position.y = 46; g.add(tower);
    const nac = new THREE.Mesh(new THREE.BoxGeometry(4, 3.6, 9), tg); nac.position.set(0, 93, -1.5); g.add(nac);
    const rotor = new THREE.Group(); rotor.position.set(0, 93, 3.4);
    const hub = new THREE.Mesh(new THREE.ConeGeometry(1.6, 3.4, 8), tw); hub.rotation.x = Math.PI / 2; rotor.add(hub);
    for (let b = 0; b < 3; b++) {
      const bl = new THREE.Mesh(new THREE.BoxGeometry(2.2, 46, 0.5), tw); bl.geometry.translate(0.5, 23, 0);
      const arm = new THREE.Group(); arm.rotation.z = (b * Math.PI * 2) / 3; arm.add(bl); rotor.add(arm);
    }
    g.add(rotor);
    g.rotation.y = z > 0 ? Math.PI - 0.5 : 0.25; // face roughly toward the railway
    rotor.userData.phase = R() * 6;
    turbines.push(rotor); root.add(g);
  }
  root.userData.turbines = turbines;
  return root;
}
function noiseTex() {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d'), R = rng(5), img = g.createImageData(128, 128);
  for (let i = 0; i < 128 * 128; i++) { const v = 236 + R() * 19; img.data[i * 4] = img.data[i * 4 + 1] = img.data[i * 4 + 2] = v; img.data[i * 4 + 3] = 255; }
  g.putImageData(img, 0, 0);
  // a few soft mowing lines
  g.globalAlpha = 0.05; g.fillStyle = '#000'; for (let y = 0; y < 128; y += 16) g.fillRect(0, y, 128, 6);
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8; return t;
}
function shade(hex, k) { const c = new THREE.Color(hex); c.multiplyScalar(k); return '#' + c.getHexString(); }
export function animatePolder(polder, t) {
  for (const r of polder.userData.turbines) r.rotation.z = r.userData.phase - t * 0.75;
}
