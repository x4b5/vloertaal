// The Vloertaal train: 4 cars, fully yellow (#ffc414), a thin dark tinted window band (no blue
// livery, no logos). Local frame: +X = direction of travel, y up (rail top ≈ 0.6), +Z = camera side.
// Each window is a real aperture (glass pane + rubber with depth + inner frame) so a camera can fly
// through it. Inside: vis-à-vis seat bays with headrests, tables at the windows, luggage racks,
// a ceiling light strip.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { PAL, painted, M4, vcMat } from './kit.js';

export const CAR = { len: 20, gap: 1.2, halfW: 1.45, bottom: 1.02, floor: 1.28, top: 4.0, roof: 4.38 };
export const BAYS = [-3.45, -1.15, 1.15, 3.45];                 // bay centres (table + window), car-local x
export const WIN = { y: 2.62, h: 1.0, w: 1.9, r: 0.16, xs: [-8.0, ...BAYS, 8.0] };
export const DOORS = [-5.6, 5.6];
export const BAND = { y0: 2.05, y1: 3.19 };
export const SEAT = { blue: '#1d2f6f', blueShade: '#162459', cover: '#ece6da', frame: '#3a3f44' };
export const carCenter = (k) => -k * (CAR.len + CAR.gap);
const YEL = PAL.yellow, BANDC = '#27313b';

const rrect = (path, x, y, w, h, r) => {
  path.moveTo(x + r, y); path.lineTo(x + w - r, y); path.quadraticCurveTo(x + w, y, x + w, y + r);
  path.lineTo(x + w, y + h - r); path.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  path.lineTo(x + r, y + h); path.quadraticCurveTo(x, y + h, x, y + h - r); path.lineTo(x, y + r); path.quadraticCurveTo(x, y, x + r, y);
  return path;
};
const holeAt = (x, g = 0) => rrect(new THREE.Path(), x - WIN.w / 2 - g, WIN.y - WIN.h / 2 - g, WIN.w + 2 * g, WIN.h + 2 * g, WIN.r + g);

/** Glass: lightly tinted, a soft sky gradient, and a reflection streak that can slide across. */
export function glassMaterial({ tint = '#2a3a46', alpha = 0.5 } = {}) {
  return new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, side: THREE.DoubleSide,
    uniforms: { tint: { value: new THREE.Color(tint) }, alpha: { value: alpha }, streak: { value: -1 }, streakAmt: { value: 0.0 }, sky: { value: new THREE.Color('#e6f6ff') } },
    vertexShader: `varying vec2 vUv;
      #include <common>
      #include <logdepthbuf_pars_vertex>
      void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position,1.); gl_Position = projectionMatrix * mv;
      #include <logdepthbuf_vertex>
      }`,
    fragmentShader: `uniform vec3 tint, sky; uniform float alpha, streak, streakAmt; varying vec2 vUv;
      #include <logdepthbuf_pars_fragment>
      void main(){
        #include <logdepthbuf_fragment>
        float g = smoothstep(0.0, 1.0, vUv.y) * 0.22;
        float d = (vUv.x + vUv.y * 0.55) - streak;
        float s = exp(-pow(d / 0.09, 2.0)) * 0.8 + exp(-pow((d + 0.18) / 0.025, 2.0)) * 0.5;
        vec3 c = mix(tint, sky, g);
        float a = clamp(alpha + g * 0.4, 0.0, 1.0);
        c = mix(c, vec3(1.0), s * streakAmt);
        a = max(a, s * streakAmt * 0.6);
        gl_FragColor = vec4(c, a);
        #include <colorspace_fragment>
      }`,
  });
}

function sideShapes() {
  const wall = new THREE.Shape(); rrect(wall, -CAR.len / 2, CAR.bottom, CAR.len, CAR.top - CAR.bottom, 0.05);
  for (const x of WIN.xs) wall.holes.push(holeAt(x));
  const band = new THREE.Shape(); band.moveTo(-CAR.len / 2, BAND.y0); band.lineTo(CAR.len / 2, BAND.y0); band.lineTo(CAR.len / 2, BAND.y1); band.lineTo(-CAR.len / 2, BAND.y1); band.closePath();
  for (const x of WIN.xs) band.holes.push(holeAt(x));
  return { wall, band };
}

function buildCar({ cab = 0, glass, glassFor, detailed = false }) {
  const g = new THREE.Group();
  const parts = [], dark = [];
  const { wall, band } = sideShapes();
  for (const s of [1, -1]) {
    const rot = s > 0 ? 0 : Math.PI;
    const wg = new THREE.ExtrudeGeometry(wall, { depth: 0.06, bevelEnabled: false, curveSegments: 4 }); wg.translate(0, 0, -0.06);
    parts.push(painted(wg, YEL, M4(0, 0, s * CAR.halfW, rot)));
    parts.push(painted(new THREE.ShapeGeometry(band, 4), BANDC, M4(0, 0, s * (CAR.halfW + 0.012), rot)));
    // doors: yellow leaves, thin dark seams, dark door windows
    for (const dx of DOORS) {
      for (const lx of [-0.35, 0.35]) parts.push(painted(new THREE.BoxGeometry(0.68, 2.52, 0.03), YEL, M4(dx + lx, CAR.bottom + 0.18 + 1.26, s * (CAR.halfW + 0.03))));
      for (const lx of [-0.71, 0, 0.71]) dark.push(painted(new THREE.BoxGeometry(0.025, 2.52, 0.03), '#5b4a10', M4(dx + lx, CAR.bottom + 0.18 + 1.26, s * (CAR.halfW + 0.04))));
      for (const lx of [-0.35, 0.35]) dark.push(painted(new THREE.BoxGeometry(0.4, 0.88, 0.02), BANDC, M4(dx + lx, WIN.y + 0.04, s * (CAR.halfW + 0.05))));
    }
    // window rubbers through the wall + a light inner frame on the lining
    for (const x of WIN.xs) {
      const ring = new THREE.Shape(); rrect(ring, x - WIN.w / 2 - 0.05, WIN.y - WIN.h / 2 - 0.05, WIN.w + 0.1, WIN.h + 0.1, WIN.r + 0.05);
      ring.holes.push(holeAt(x));
      const rg = new THREE.ExtrudeGeometry(ring, { depth: 0.16, bevelEnabled: false, curveSegments: 6 }); rg.translate(0, 0, -0.14);
      dark.push(painted(rg, '#1e2226', M4(0, 0, s * (CAR.halfW + 0.02), rot)));
      const inner = new THREE.Shape(); rrect(inner, x - WIN.w / 2 - 0.11, WIN.y - WIN.h / 2 - 0.11, WIN.w + 0.22, WIN.h + 0.22, WIN.r + 0.11);
      inner.holes.push(holeAt(x, 0.03));
      const ig = new THREE.ExtrudeGeometry(inner, { depth: 0.03, bevelEnabled: false, curveSegments: 6 });
      parts.push(painted(ig, '#c9d1d6', M4(0, 0, s * (CAR.halfW - 0.1), s > 0 ? Math.PI : 0)));
      const pane = new THREE.Mesh(new THREE.PlaneGeometry(WIN.w, WIN.h), glassFor ? glassFor(s, x) : glass);
      pane.position.set(x, WIN.y, s * (CAR.halfW - 0.04)); pane.rotation.y = rot;
      pane.renderOrder = 5; pane.userData = { side: s, x };
      g.add(pane);
    }
    parts.push(painted(new THREE.BoxGeometry(CAR.len, 0.24, 0.04), PAL.yellowShade, M4(0, CAR.bottom + 0.12, s * (CAR.halfW + 0.01))));
  }
  parts.push(painted(new THREE.BoxGeometry(CAR.len, CAR.floor - CAR.bottom, CAR.halfW * 2 - 0.02), PAL.yellowShade, M4(0, (CAR.floor + CAR.bottom) / 2, 0)));
  for (const bx of [-6.8, 6.8]) {
    dark.push(painted(new THREE.BoxGeometry(2.9, 0.5, 2.2), '#3a3f44', M4(bx, 0.98, 0)));
    for (const wx of [-0.95, 0.95]) for (const wz of [-0.76, 0.76]) {
      const wh = new THREE.CylinderGeometry(0.46, 0.46, 0.12, 12); wh.rotateX(Math.PI / 2);
      dark.push(painted(wh, '#2b3239', M4(bx + wx, 0.98, wz)));
      const hub = new THREE.CylinderGeometry(0.16, 0.16, 0.14, 8); hub.rotateX(Math.PI / 2);
      dark.push(painted(hub, '#8a96a0', M4(bx + wx, 0.98, wz * 1.01)));
    }
  }
  dark.push(painted(new THREE.BoxGeometry(6, 0.4, 2.0), '#4b555e', M4(0, 0.84, 0)));
  const prof = new THREE.Shape();
  prof.moveTo(-CAR.halfW, CAR.top - 0.02); prof.lineTo(CAR.halfW, CAR.top - 0.02);
  prof.quadraticCurveTo(CAR.halfW, CAR.roof, CAR.halfW - 0.55, CAR.roof); prof.lineTo(-CAR.halfW + 0.55, CAR.roof);
  prof.quadraticCurveTo(-CAR.halfW, CAR.roof, -CAR.halfW, CAR.top - 0.02);
  const roof = new THREE.ExtrudeGeometry(prof, { depth: CAR.len, bevelEnabled: false, curveSegments: 5 });
  roof.translate(0, 0, -CAR.len / 2); roof.rotateY(Math.PI / 2);
  parts.push(painted(roof, YEL));
  parts.push(painted(new THREE.BoxGeometry(4.5, 0.32, 1.5), YEL, M4(cab ? 0 : 3, CAR.roof + 0.14, 0)));
  if (cab) {
    // pantograph: base, two arms, contact head touching the wire (y ≈ 6.0)
    const px = -cab * 5, D = '#30353a';
    dark.push(painted(new THREE.BoxGeometry(1.6, 0.16, 1.1), D, M4(px, CAR.roof + 0.08, 0)));
    for (const z of [-0.35, 0.35]) {
      dark.push(painted(new THREE.BoxGeometry(0.06, 1.25, 0.06), D, M4(px - 0.38, CAR.roof + 0.62, z, 0, 1, 1, 1, 0, -0.75)));
      dark.push(painted(new THREE.BoxGeometry(0.05, 1.05, 0.05), D, M4(px - 0.4, CAR.roof + 1.2, z, 0, 1, 1, 1, 0, 0.8)));
    }
    dark.push(painted(new THREE.BoxGeometry(0.14, 0.07, 1.8), D, M4(px - 0.02, 5.96, 0)));
  }
  for (const e of [1, -1]) {
    if (e === cab) continue;
    parts.push(painted(new THREE.BoxGeometry(0.06, CAR.top - CAR.bottom, CAR.halfW * 2), YEL, M4(e * (CAR.len / 2 - 0.03), (CAR.top + CAR.bottom) / 2, 0)));
    dark.push(painted(new THREE.BoxGeometry(CAR.gap / 2 + 0.02, 2.5, 1.9), '#2b3239', M4(e * (CAR.len / 2 + CAR.gap / 4), CAR.floor + 1.3, 0)));
  }
  if (cab) {
    const L = 2.6, n = new THREE.Shape();
    n.moveTo(0, CAR.bottom); n.lineTo(L - 0.25, CAR.bottom); n.quadraticCurveTo(L, CAR.bottom, L, CAR.bottom + 0.3);
    n.lineTo(L - 0.1, 2.15); n.quadraticCurveTo(L - 0.3, 2.45, L - 0.6, 2.6);
    n.lineTo(0.9, 3.95); n.quadraticCurveTo(0.5, CAR.roof, 0, CAR.roof); n.closePath();
    const ng = new THREE.ExtrudeGeometry(n, { depth: CAR.halfW * 2 - 0.3, bevelEnabled: true, bevelThickness: 0.15, bevelSize: 0.15, bevelSegments: 3, curveSegments: 6 });
    ng.translate(0, 0, -(CAR.halfW - 0.15));
    const nm = M4(cab * CAR.len / 2, 0, 0, cab > 0 ? 0 : Math.PI);
    parts.push(painted(ng, YEL, nm));
    const ws = new THREE.Shape(); ws.moveTo(-1.18, 0); ws.lineTo(1.18, 0); ws.lineTo(1.05, 1.72); ws.lineTo(-1.05, 1.72); ws.closePath();
    const ang = Math.atan2(3.95 - 2.6, 0.9 - (L - 0.6));
    const wsm = new THREE.Matrix4().multiplyMatrices(nm, new THREE.Matrix4().compose(
      new THREE.Vector3(L - 0.6 + 0.12, 2.6 + 0.06, 0), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, Math.PI / 2, ang - Math.PI / 2, 'YZX')), new THREE.Vector3(1, 0.98, 1)));
    dark.push(painted(new THREE.ShapeGeometry(ws), '#1e2226', wsm));
    for (const z of [-0.95, 0.95]) dark.push(painted(new THREE.BoxGeometry(0.12, 0.2, 0.42), PAL.white, new THREE.Matrix4().multiplyMatrices(nm, M4(L - 0.06, 1.75, z))));
    dark.push(painted(new THREE.BoxGeometry(0.5, 0.35, 0.6), '#3a3f44', new THREE.Matrix4().multiplyMatrices(nm, M4(L - 0.1, 0.78, 0))));
  }
  const body = new THREE.Mesh(mergeGeometries(parts), vcMat()); body.castShadow = true; body.receiveShadow = true; g.add(body);
  const dk = new THREE.Mesh(mergeGeometries(dark), vcMat()); dk.castShadow = true; dk.receiveShadow = true; g.add(dk);
  g.add(buildInterior(detailed));
  return g;
}

/** One transverse seat at (x, z), occupant facing f (+1 = +X); headrest with a cream cover. */
function seat(p, x, z, f, aisle) {
  const F = CAR.floor;
  p.push(painted(new THREE.BoxGeometry(0.48, 0.13, 0.46), SEAT.blue, M4(x, F + 0.44, z)));
  p.push(painted(new THREE.BoxGeometry(0.06, 0.36, 0.3), SEAT.frame, M4(x - f * 0.05, F + 0.2, z)));
  p.push(painted(new THREE.BoxGeometry(0.11, 0.62, 0.46), SEAT.blue, M4(x - f * 0.25, F + 0.8, z, 0, 1, 1, 1, 0, f * 0.07)));
  p.push(painted(new THREE.BoxGeometry(0.11, 0.24, 0.38), SEAT.blueShade, M4(x - f * 0.27, F + 1.17, z, 0, 1, 1, 1, 0, f * 0.07)));
  p.push(painted(new THREE.BoxGeometry(0.03, 0.18, 0.32), SEAT.cover, M4(x - f * 0.207, F + 1.18, z, 0, 1, 1, 1, 0, f * 0.07)));
  if (aisle) p.push(painted(new THREE.BoxGeometry(0.42, 0.05, 0.06), SEAT.frame, M4(x - f * 0.02, F + 0.66, z + aisle * 0.24)));
}
/** The lining, floor, ceiling + light strip, seat bays, tables, racks. `detailed` adds props. */
function buildInterior(detailed) {
  const p = [], light = [];
  const { wall } = sideShapes();
  for (const s of [1, -1]) p.push(painted(new THREE.ShapeGeometry(wall, 4), '#e8ecef', M4(0, 0, s * (CAR.halfW - 0.075), s > 0 ? Math.PI : 0)));
  p.push(painted(new THREE.BoxGeometry(CAR.len - 0.1, 0.02, CAR.halfW * 2 - 0.16), '#8f969c', M4(0, CAR.floor + 0.01, 0)));
  p.push(painted(new THREE.BoxGeometry(CAR.len - 0.1, 0.03, 0.9), '#a7aeb3', M4(0, CAR.floor + 0.015, 0)));   // aisle runner
  p.push(painted(new THREE.BoxGeometry(CAR.len - 0.1, 0.02, CAR.halfW * 2 - 0.16), PAL.paper, M4(0, CAR.top - 0.06, 0)));
  for (const s of [1, -1]) p.push(painted(new THREE.BoxGeometry(CAR.len - 0.1, 0.25, 0.02), '#dfe6ec', M4(0, CAR.top - 0.2, s * 0.92, 0, 1, 1, 1, s * 0.6)));
  light.push(painted(new THREE.BoxGeometry(CAR.len - 0.8, 0.03, 0.36), '#ffffff', M4(0, CAR.top - 0.085, 0)));
  for (const e of [1, -1]) p.push(painted(new THREE.BoxGeometry(0.02, CAR.top - CAR.floor, CAR.halfW * 2 - 0.16), '#dfe6ec', M4(e * (CAR.len / 2 - 0.08), (CAR.top + CAR.floor) / 2, 0)));
  for (const s of [1, -1]) {
    for (const T of BAYS) {
      for (const f of [1, -1]) {
        const x = T - f * 0.8;
        seat(p, x, s * 1.13, f, 0); seat(p, x, s * 0.63, f, -s);
      }
      // table at the window: top + bracket
      p.push(painted(new THREE.BoxGeometry(0.6, 0.035, 0.42), '#d5dade', M4(T, CAR.floor + 0.69, s * 1.2)));
      p.push(painted(new THREE.BoxGeometry(0.62, 0.012, 0.44), '#9aa5ab', M4(T, CAR.floor + 0.67, s * 1.2)));
      p.push(painted(new THREE.BoxGeometry(0.06, 0.3, 0.3), PAL.steel, M4(T, CAR.floor + 0.53, s * 1.32)));
    }
    // luggage racks above the windows
    const z = s * (CAR.halfW - 0.3);
    p.push(painted(new THREE.BoxGeometry(CAR.len - 2, 0.035, 0.42), '#b9c2c8', M4(0, 3.46, z)));
    p.push(painted(new THREE.BoxGeometry(CAR.len - 2, 0.05, 0.04), '#6d7880', M4(0, 3.48, z - s * 0.21)));
    for (let x = -8.5; x <= 8.5; x += 2.3) p.push(painted(new THREE.BoxGeometry(0.04, 0.28, 0.42), PAL.steel, M4(x, 3.6, z)));
    // yellow grab poles at the door vestibules
    for (const x of [-4.75, 4.75]) p.push(painted(new THREE.CylinderGeometry(0.025, 0.025, CAR.top - CAR.floor, 8), YEL, M4(x, (CAR.top + CAR.floor) / 2, s * 0.42)));
  }
  if (detailed) {
    // on the far rack: a kraft box and a yellow hard hat; a coffee cup on Amina's table
    p.push(painted(new THREE.BoxGeometry(0.62, 0.32, 0.36), PAL.card, M4(0.6, 3.64, -(CAR.halfW - 0.32))));
    p.push(painted(new THREE.BoxGeometry(0.62, 0.02, 0.1), PAL.cardShade, M4(0.6, 3.805, -(CAR.halfW - 0.32))));
    p.push(painted(new THREE.SphereGeometry(0.15, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), YEL, M4(2.4, 3.48, -(CAR.halfW - 0.33))));
    p.push(painted(new THREE.CylinderGeometry(0.2, 0.2, 0.022, 14), PAL.yellowShade, M4(2.4, 3.48, -(CAR.halfW - 0.33))));
    p.push(painted(new THREE.CylinderGeometry(0.04, 0.032, 0.11, 12), PAL.white, M4(1.32, CAR.floor + 0.765, -1.33)));
    p.push(painted(new THREE.CylinderGeometry(0.041, 0.041, 0.03, 12), YEL, M4(1.32, CAR.floor + 0.805, -1.33)));
  }
  const g = new THREE.Group();
  const m = new THREE.Mesh(mergeGeometries(p), vcMat()); m.receiveShadow = true; m.castShadow = true; g.add(m);
  const lm = new THREE.Mesh(mergeGeometries(light), new THREE.MeshBasicMaterial({ color: '#fffdf2', toneMapped: false })); g.add(lm);
  return g;
}

export function buildTrain({ aminaCar = 1, glassFor } = {}) {
  const train = new THREE.Group(); train.name = 'train';
  const glass = glassMaterial();
  const cars = [];
  for (let k = 0; k < 4; k++) {
    const car = buildCar({ cab: k === 0 ? 1 : k === 3 ? -1 : 0, detailed: k === aminaCar, glass, glassFor: glassFor ? (s, x) => glassFor(k, s, x) ?? glass : null });
    car.position.x = carCenter(k);
    train.add(car); cars.push(car);
  }
  // soft contact shadow on the ballast under the whole train
  const c = document.createElement('canvas'); c.width = 8; c.height = 64;
  const g2 = c.getContext('2d'); const gr = g2.createLinearGradient(0, 0, 0, 64);
  gr.addColorStop(0, 'rgba(0,0,0,0)'); gr.addColorStop(0.3, 'rgba(0,0,0,0.38)'); gr.addColorStop(0.7, 'rgba(0,0,0,0.38)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
  g2.fillStyle = gr; g2.fillRect(0, 0, 8, 64);
  const tex = new THREE.CanvasTexture(c);
  const len = 4 * CAR.len + 3 * CAR.gap + 5.2;
  const cs = new THREE.Mesh(new THREE.PlaneGeometry(len, 4.2), new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }));
  cs.rotation.x = -Math.PI / 2; cs.position.set(carCenter(1.5), 0.56, 0); train.add(cs);
  train.userData = { cars, glass };
  return train;
}
