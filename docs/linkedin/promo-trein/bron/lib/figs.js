// Shared helpers for shots 2–4: phones, figure cards holding a phone, paper labels, captions,
// a camera rig from keyframes (one C1 curve = one global ease) and the frame loop with per-time sub-frames.
import * as THREE from 'three';
import { W, H, PAL, clamp, seg, lerp, smooth, inOut, track, loadText, parseFigure, propSlots, rasterSVG, canvasTex, cardMesh } from './kit.js';

export const easeOut = (x) => 1 - Math.pow(1 - x, 3);
export const backOut = (x, s = 2.2) => { const c3 = s + 1; return 1 + c3 * Math.pow(x - 1, 3) + s * Math.pow(x - 1, 2); };
export function rr(p, x, y, w, h, r) {
  p.moveTo(x + r, y); p.lineTo(x + w - r, y); p.quadraticCurveTo(x + w, y, x + w, y + r); p.lineTo(x + w, y + h - r);
  p.quadraticCurveTo(x + w, y + h, x + w - r, y + h); p.lineTo(x + r, y + h); p.quadraticCurveTo(x, y + h, x, y + h - r);
  p.lineTo(x, y + r); p.quadraticCurveTo(x, y, x + r, y); return p;
}
export function roundBox(w, h, d, r, bevel = 0.004) {
  const s = rr(new THREE.Shape(), -w / 2, -h / 2, w, h, r);
  const g = new THREE.ExtrudeGeometry(s, { depth: d, bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 2, curveSegments: 8 });
  g.translate(0, 0, -d / 2); return g;
}
/** A plane whose UVs fill a rounded rect (for screens). */
export function roundPlane(w, h, r) {
  const s = rr(new THREE.Shape(), -w / 2, -h / 2, w, h, r);
  const g = new THREE.ShapeGeometry(s, 10); const uv = g.attributes.uv, pos = g.attributes.position;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, (pos.getX(i) + w / 2) / w, (pos.getY(i) + h / 2) / h);
  return g;
}
export async function loadImg(url) { const im = new Image(); im.src = url; await im.decode(); return im; }

/** A canvas-backed texture you redraw per frame. */
export function liveCanvas(w, h, renderer) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const tex = canvasTex(c, renderer);
  return { c, g: c.getContext('2d'), tex };
}

/** A phone: dark rounded body (origin bottom-centre, screen facing +z), screen material returned. */
export function makePhone(pw, ph, mat) {
  const phone = new THREE.Group();
  const depth = 0.022, r = pw * 0.17;
  const shp = rr(new THREE.Shape(), -pw / 2, 0, pw, ph, r);
  const bodyGeo = new THREE.ExtrudeGeometry(shp, { depth, bevelEnabled: true, bevelThickness: 0.004, bevelSize: 0.004, bevelSegments: 2, curveSegments: 8 });
  bodyGeo.translate(0, 0, -depth);
  const pm = new THREE.Mesh(bodyGeo, new THREE.MeshLambertMaterial({ color: PAL.inkUI })); pm.castShadow = true; phone.add(pm);
  const btn = new THREE.Mesh(new THREE.BoxGeometry(0.006, ph * 0.1, 0.01), new THREE.MeshLambertMaterial({ color: '#3c4a56' }));
  btn.position.set(pw / 2 + 0.004, ph * 0.72, -depth / 2); phone.add(btn);
  const b = pw * 0.07, sw = pw - 2 * b, sHt = sw * 844 / 390;
  const sg = roundPlane(sw, sHt, pw * 0.1); sg.translate(0, ph - b - sHt / 2, 0);
  const screen = new THREE.Mesh(sg, mat); screen.position.z = 0.0045; phone.add(screen);
  return { phone, sw, sHt, top: ph - b, pw, ph };
}

/**
 * The app's figure as a cut-out card holding a 3D phone in its prop hand (as shot 1's Amina).
 * Returns { group, phonePivot, info }. K = metres per svg unit; card origin at svg (ox, oy).
 */
export async function figureWithPhone(name, renderer, { K, ox = 60, oy = 134, drop = 12, fwd = 0.2, screenMat, skin = '#b97a52', creaseC = '#9c6141', edit } = {}) {
  const svg = parseFigure(await loadText(`../assets/chars/${name}.svg.html`));
  if (edit) edit(svg);
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
  const bottomMid = [(bl[0] + br[0]) / 2, (bl[1] + br[1]) / 2 + drop];
  const group = new THREE.Group();
  const body = svg.cloneNode(true);
  body.querySelectorAll('.ch-hand').forEach((e) => e.setAttribute('visibility', 'hidden'));
  const rb = await rasterSVG(body, [6, 14, 108, 126], 22, { edge: 0.75 });
  const bodyMesh = cardMesh(rb, renderer, K, { ox, oy, alphaTest: 0.5 });
  bodyMesh.castShadow = true;
  bodyMesh.customDepthMaterial = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, map: bodyMesh.material.map, alphaTest: 0.5 });
  group.add(bodyMesh);
  const phonePivot = new THREE.Group(); group.add(phonePivot);
  phonePivot.position.set((bottomMid[0] - ox) * K, -(bottomMid[1] - oy) * K, fwd);
  const P = makePhone(phW * K, phH * K, screenMat);
  P.phone.rotation.z = -roll; phonePivot.add(P.phone);
  const sk = new THREE.MeshBasicMaterial({ color: skin, toneMapped: false });
  const crease = new THREE.MeshBasicMaterial({ color: creaseC, toneMapped: false });
  for (const sx of [-1, 1]) {
    const m = new THREE.Group();
    const palm = rr(new THREE.Shape(), -0.03, -0.055, 0.06, 0.11, 0.028);
    const pg = new THREE.ExtrudeGeometry(palm, { depth: 0.03, bevelEnabled: true, bevelThickness: 0.004, bevelSize: 0.004, bevelSegments: 2, curveSegments: 6 });
    pg.translate(0, 0, -0.026); m.add(new THREE.Mesh(pg, sk));
    const thumb = new THREE.Shape(); thumb.absellipse(0, 0, 0.012, 0.03, 0, Math.PI * 2);
    const tm = new THREE.Mesh(new THREE.ExtrudeGeometry(thumb, { depth: 0.006, bevelEnabled: false, curveSegments: 12 }), sk);
    tm.position.set(-sx * 0.026, 0.012, 0.006); tm.rotation.z = sx * 0.25; m.add(tm);
    const tl2 = new THREE.Mesh(new THREE.PlaneGeometry(0.003, 0.034), crease); tl2.position.set(-sx * 0.019, 0.006, 0.0125); tl2.rotation.z = sx * 0.25; m.add(tl2);
    m.position.set(sx * (P.pw / 2 + 0.02), P.ph * 0.13, 0.0); P.phone.add(m);
  }
  return { group, phonePivot, P, roll, svg };
}

/** A plain figure card (no phone). */
export async function figureCard(name, renderer, { K, ox = 60, oy = 134, edit, edge = 0.75 } = {}) {
  const svg = parseFigure(await loadText(`../assets/chars/${name}.svg.html`));
  if (edit) edit(svg);
  const rb = await rasterSVG(svg, [6, 14, 108, 126], 22, { edge });
  const m = cardMesh(rb, renderer, K, { ox, oy, alphaTest: 0.5 });
  m.castShadow = true;
  m.customDepthMaterial = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, map: m.material.map, alphaTest: 0.5 });
  return { mesh: m, svg };
}

/** Round avatar raster of a figure's head (svg sub-rect), on a coloured disc with an ink ring. */
export async function avatarCanvas(name, { rect = [30, 18, 60, 60], bg = '#fff3b0', size = 512 } = {}) {
  const svg = parseFigure(await loadText(`../assets/chars/${name}.svg.html`));
  const r = await rasterSVG(svg, rect, size / rect[2]);
  const c = document.createElement('canvas'); c.width = c.height = size; const g = c.getContext('2d');
  g.beginPath(); g.arc(size / 2, size / 2, size / 2 - 14, 0, 7); g.fillStyle = bg; g.fill();
  g.save(); g.clip(); g.drawImage(r.canvas, -(r.canvas.width - size) / 2, -(r.canvas.height - size) / 2 + size * 0.08); g.restore();
  g.lineWidth = 16; g.strokeStyle = PAL.inkUI; g.beginPath(); g.arc(size / 2, size / 2, size / 2 - 12, 0, 7); g.stroke();
  return c;
}

/** Paper label canvas: drawFn(g, w, h) draws the content; ink border, rounded, slight shadow baked. */
export function labelCanvas(w, h, drawFn, { bg = PAL.label, border = PAL.inkUI, bw = 10, r = 36 } = {}) {
  const c = document.createElement('canvas'); c.width = w; c.height = h; const g = c.getContext('2d');
  g.beginPath(); g.roundRect(bw / 2 + 2, bw / 2 + 2, w - bw - 4, h - bw - 4, r); g.fillStyle = bg; g.fill();
  g.lineWidth = bw; g.strokeStyle = border; g.stroke();
  drawFn(g, w, h); return c;
}
/** A thin 3D slab with the canvas on its front (a "paper card" with thickness). */
export function slabCard(canvas, renderer, wM, { depth = 0.01, side = '#d9d2c4', lit = false } = {}) {
  const hM = wM * canvas.height / canvas.width;
  const grp = new THREE.Group();
  const front = new THREE.MeshBasicMaterial({ map: canvasTex(canvas, renderer), transparent: true, alphaTest: 0.3, toneMapped: false });
  const f = new THREE.Mesh(new THREE.PlaneGeometry(wM, hM), front); f.position.z = depth / 2 + 0.0005; grp.add(f);
  const back = new THREE.Mesh(roundBox(wM * 0.985, hM * 0.97, depth, Math.min(wM, hM) * 0.07, 0), lit ? new THREE.MeshLambertMaterial({ color: side }) : new THREE.MeshBasicMaterial({ color: side, toneMapped: false }));
  back.castShadow = true; grp.add(back);
  grp.userData = { w: wM, h: hM, front };
  return grp;
}

/** Camera from keyframes [[t, [px,py,pz, tx,ty,tz, fov, roll]]] — one C1 curve through all keys. */
export function camRig(keys, opts = {}) {
  const tr = track(keys, opts);
  return (camera, t) => {
    const v = tr(t);
    camera.position.set(v[0], v[1], v[2]); camera.up.set(0, 1, 0); camera.lookAt(v[3], v[4], v[5]);
    if (v[7]) camera.rotateZ(THREE.MathUtils.degToRad(v[7]));
    camera.fov = v[6]; camera.updateProjectionMatrix();
    return v;
  };
}
/** Camera pose (pos, target) that frames a screen of width sw (metres) centred at pt with normal n. */
export function frameScreen(pt, n, sw, fov, fill = 1.08) {
  const d = (sw * fill) / (2 * Math.tan(THREE.MathUtils.degToRad(fov / 2)) * (W / H));
  return { pos: pt.clone().addScaledVector(n, d), tgt: pt.clone() };
}

/** Captions: proof-v2 style; el appears at tIn (slide up 36 px, 0.28 s), fades out at tOut. */
export function placeCap(el, t, tIn, tOut) {
  const k = easeOut(seg(t, tIn, tIn + 0.28));
  const o = 1 - smooth(seg(t, tOut, tOut + 0.3));
  el.style.opacity = k * o;
  el.style.transform = `translate(${(W - el.offsetWidth) / 2}px, ${96 + (1 - k) * 36 - 10 * (1 - o)}px)`;
}

export function sunShadow(sun, focus, dir, size, mapSize = 2048) {
  sun.target.position.copy(focus); sun.position.copy(focus).addScaledVector(dir, 60);
  const c = sun.shadow.camera; c.left = -size; c.right = size; c.top = size; c.bottom = -size; c.near = 1; c.far = 200; c.updateProjectionMatrix();
}
