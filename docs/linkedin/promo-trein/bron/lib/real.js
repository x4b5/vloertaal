// v6 "more realistic": one pass over a built scene that swaps the flat materials for physically based ones.
//   realify(scene, renderer, { env })
// - Lambert (the sets) → MeshStandardMaterial, mostly rough and matte, with a little world-space variation in the
//   colour (large blotches and fine grain) so walls, pavement, grass and roofs no longer read as one flat fill;
//   known metal colours (rails, chrome, bistro chairs) become slightly metallic.
// - Toon (the cast and the extras) → MeshStandardMaterial without the variation: soft, rounded shading instead
//   of the two-step toon shade. Faces and prints (decals) stay as they are, so everyone keeps the app's face.
// - The scene gets an environment (a neutral studio room, PMREM) for soft ambient light and real reflections.
// Basic and shader materials (screens, captions, glass, sky) are left alone.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { addDetail } from './detail.js';

const METAL = new Set(['#2a2e33', '#cfd8de', '#8a96a0', '#6d7880', '#9aa5ab', '#3a3f44', '#1e2226']);
const hex = (c) => '#' + c.getHexString();
const cache = new Map();
let METAL_ENV = null;
// var and env are off by default (2–3× the render time); detail (v7 textures, lib/detail.js) is on
const QP = new URLSearchParams(location.search), VAR = QP.get('var') === '1', ENV = QP.get('env') === '1';
const DETAIL = QP.get('detail') !== '0';

function variation(mat) {
  mat.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vRealW;')
      .replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvRealW = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
varying vec3 vRealW;
float rh(vec3 p){ return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
float rn(vec3 p){ vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(rh(i), rh(i + vec3(1,0,0)), f.x), mix(rh(i + vec3(0,1,0)), rh(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(rh(i + vec3(0,0,1)), rh(i + vec3(1,0,1)), f.x), mix(rh(i + vec3(0,1,1)), rh(i + vec3(1,1,1)), f.x), f.y), f.z); }`)
      .replace('#include <color_fragment>', `#include <color_fragment>
{ float big = rn(vRealW * 0.35) * 0.6 + rn(vRealW * 1.3) * 0.4;   // large blotches: weathering, grime
  float fine = rn(vRealW * 11.0);                                   // fine grain: texture of the material
  diffuseColor.rgb *= 0.9 + 0.16 * big + 0.07 * (fine - 0.5); }`);
  };
  mat.customProgramCacheKey = () => 'realvar';
}

function convert(m, kind) {
  const key = m.uuid;
  if (cache.has(key)) return cache.get(key);
  const c = m.color ? hex(m.color) : '#ffffff';
  const metal = kind === 'set' && METAL.has(c) && !m.map && !m.vertexColors;
  const s = new THREE.MeshStandardMaterial({
    color: m.color, map: m.map ?? null, vertexColors: m.vertexColors, flatShading: m.flatShading ?? false,
    transparent: m.transparent, opacity: m.opacity, side: m.side, depthWrite: m.depthWrite, alphaTest: m.alphaTest,
    polygonOffset: m.polygonOffset, polygonOffsetFactor: m.polygonOffsetFactor, polygonOffsetUnits: m.polygonOffsetUnits,
    emissive: m.emissive ?? new THREE.Color(0), emissiveMap: m.emissiveMap ?? null,
    roughness: metal ? 0.42 : kind === 'cast' ? 0.62 : 0.86, metalness: metal ? 0.55 : 0.0,
  });
  s.name = m.name; s.toneMapped = m.toneMapped;
  if (metal && METAL_ENV && !ENV) { s.envMap = METAL_ENV; s.envMapIntensity = 0.7; s.roughness = 0.32; }   // v7: reflections on metal only
  if (kind === 'set' && !m.transparent && VAR) variation(s);
  else if (kind === 'set' && !m.transparent && DETAIL) addDetail(s);
  cache.set(key, s);
  return s;
}

/** Swap the scene's materials (see above) and give it an environment. Call after everything is built. */
export function realify(scene, renderer, { env = 0.32 } = {}) {
  if (!ENV && QP.get('metalenv') !== '0' && !METAL_ENV) {   // a small studio room, sampled by the metal materials only (cheap)
    const pm = new THREE.PMREMGenerator(renderer);
    METAL_ENV = pm.fromScene(new RoomEnvironment(), 0.04).texture; pm.dispose();
  }
  scene.traverse((o) => {
    if (!o.isMesh || !o.material) return;
    const one = (m) => {
      if (m.isMeshLambertMaterial) return convert(m, 'set');
      if (m.isMeshToonMaterial) return m.transparent ? convert(m, 'decal') : convert(m, 'cast');
      return m;
    };
    o.material = Array.isArray(o.material) ? o.material.map(one) : one(o.material);
  });
  // light for the rounder shading: a little more sun and less flat fill, so form and shadow read
  scene.traverse((o) => { if (o.isHemisphereLight) o.intensity *= 0.82; if (o.isDirectionalLight) o.intensity *= 1.12; });
  if (!ENV) return;
  const pm = new THREE.PMREMGenerator(renderer);
  scene.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = env;
  pm.dispose();
}
