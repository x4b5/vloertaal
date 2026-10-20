// v7 contact shadow: screen-space ambient occlusion for the frame accumulator in kit.js.
//   const ao = makeAO(renderer, w, h);   ao.render(scene, camera, strength) → ao.texture (1 = open, 0 = occluded)
// The renderer uses a logarithmic depth buffer, which three's SSAO/GTAO passes cannot read; so one extra pass
// draws the scene with an override material that writes the view-space normal and the linear depth into a float
// target, at half resolution. The AO shader samples 16 points on a rotated spiral around each pixel (a fixed
// fraction of the frame height, so close-ups and aerials get the same soft size), counts the ones that rise above
// the surface (a horizon test, like Crytek / Alchemy AO), then a depth-aware 5 × 5 blur removes the noise.
import * as THREE from 'three';

export function makeAO(renderer, w, h) {
  const opt = { type: THREE.HalfFloatType, colorSpace: THREE.LinearSRGBColorSpace, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter };
  const rtND = new THREE.WebGLRenderTarget(w, h, { ...opt, type: THREE.FloatType, minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter, depthBuffer: true });
  const rtAO = new THREE.WebGLRenderTarget(w, h, opt), rtBl = new THREE.WebGLRenderTarget(w, h, opt);
  const ndMat = new THREE.ShaderMaterial({
    side: THREE.DoubleSide,
    vertexShader: `#include <common>
      #include <logdepthbuf_pars_vertex>
      varying vec3 vN; varying float vZ;
      void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.0); vN = normalize(normalMatrix * normal); vZ = -mv.z;
        gl_Position = projectionMatrix * mv;
        #include <logdepthbuf_vertex>
      }`,
    fragmentShader: `#include <logdepthbuf_pars_fragment>
      varying vec3 vN; varying float vZ;
      void main(){
        #include <logdepthbuf_fragment>
        vec3 n = normalize(vN); if (!gl_FrontFacing) n = -n;
        gl_FragColor = vec4(n, vZ);
      }`,
  });
  const quadCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1), geo = new THREE.PlaneGeometry(2, 2);
  const aoMat = new THREE.ShaderMaterial({
    uniforms: { tND: { value: rtND.texture }, tanY: { value: 0.4 }, aspect: { value: w / h }, ruv: { value: 0.035 }, strength: { value: 1 }, res: { value: new THREE.Vector2(w, h) } },
    depthTest: false, depthWrite: false,
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }',
    fragmentShader: `uniform sampler2D tND; uniform float tanY, aspect, ruv, strength; uniform vec2 res; varying vec2 vUv;
      vec3 viewPos(vec2 uv, float z){ vec2 ndc = uv * 2.0 - 1.0; return vec3(ndc.x * z * tanY * aspect, ndc.y * z * tanY, -z); }
      float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
      void main(){
        vec4 c = texture2D(tND, vUv); float z = c.a;
        if (z <= 0.0) { gl_FragColor = vec4(1.0); return; }
        vec3 p = viewPos(vUv, z), n = normalize(c.xyz);
        float R = ruv * 2.0 * tanY * z;                       // the sampling radius in world units at this depth
        float rot = hash(gl_FragCoord.xy) * 6.2831853, occ = 0.0;
        for (int i = 0; i < 16; i++) {
          float fi = float(i), a = fi * 2.3999632 + rot, r = ruv * sqrt((fi + 0.5) / 16.0);
          vec2 uv2 = vUv + vec2(cos(a) / aspect, sin(a)) * r;
          float z2 = texture2D(tND, uv2).a;
          if (z2 <= 0.0) continue;
          vec3 v = viewPos(uv2, z2) - p; float d = length(v);
          occ += max(0.0, dot(v / max(d, 1e-5), n) - 0.12) * (1.0 - smoothstep(R * 0.6, R * 1.6, d));
        }
        float ao = clamp(1.0 - strength * occ / 16.0 * 1.6, 0.0, 1.0);
        gl_FragColor = vec4(vec3(ao), 1.0);
      }`,
  });
  const blMat = new THREE.ShaderMaterial({
    uniforms: { tAO: { value: rtAO.texture }, tND: { value: rtND.texture }, texel: { value: new THREE.Vector2(1 / w, 1 / h) } },
    depthTest: false, depthWrite: false,
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }',
    fragmentShader: `uniform sampler2D tAO, tND; uniform vec2 texel; varying vec2 vUv;
      void main(){
        float z = texture2D(tND, vUv).a, s = 0.0, wsum = 0.0;
        for (int y = -2; y <= 2; y++) for (int x = -2; x <= 2; x++) {
          vec2 o = vec2(float(x), float(y)) * texel;
          float z2 = texture2D(tND, vUv + o).a;
          float wgt = (z <= 0.0 || z2 <= 0.0) ? 1.0 : exp(-abs(z2 - z) / (0.04 * z + 1e-4));
          s += texture2D(tAO, vUv + o).r * wgt; wsum += wgt;
        }
        gl_FragColor = vec4(vec3(s / max(wsum, 1e-4)), 1.0);
      }`,
  });
  const sAO = new THREE.Scene(); sAO.add(new THREE.Mesh(geo, aoMat));
  const sBl = new THREE.Scene(); sBl.add(new THREE.Mesh(geo, blMat));
  const clear = new THREE.Color();
  return {
    texture: rtBl.texture,
    /** Draw the AO for the scene as the camera sees it now. */
    render(scene, camera, strength = 1.6) {
      const prevO = scene.overrideMaterial, prevBg = scene.background, prevFog = scene.fog, a0 = renderer.getClearAlpha();
      renderer.getClearColor(clear);
      scene.overrideMaterial = ndMat; scene.background = null; scene.fog = null;
      renderer.setRenderTarget(rtND); renderer.setClearColor(0x000000, 0); renderer.clear(); renderer.render(scene, camera);
      scene.overrideMaterial = prevO; scene.background = prevBg; scene.fog = prevFog;
      aoMat.uniforms.tanY.value = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)); aoMat.uniforms.aspect.value = camera.aspect;
      aoMat.uniforms.strength.value = strength;
      renderer.setRenderTarget(rtAO); renderer.clear(); renderer.render(sAO, quadCam);
      renderer.setRenderTarget(rtBl); renderer.clear(); renderer.render(sBl, quadCam);
      renderer.setClearColor(clear, a0);
    },
  };
}
