precision highp float;
uniform float uTime;
varying vec2 vUv;

void main(){
  vec2 center = vec2(0.5);
  float dist = distance(vUv, center);
  float wave = sin(dist * 18.0 - uTime * 2.0) * 0.5 + 0.5;
  float ring = smoothstep(0.25, 0.26, dist) * smoothstep(0.45, 0.44, dist);
  float fade = exp(-dist * 2.5);
  vec3 gold = vec3(0.84, 0.66, 0.31);
  vec3 dark = vec3(0.04, 0.04, 0.08);
  vec3 color = mix(dark, gold, wave * ring * fade * 1.8);
  float vignette = 1.0 - dist * 0.8;
  gl_FragColor = vec4(color * vignette, 1.0);
}
