precision highp float;
uniform vec2 u_resolution;
uniform float u_time;
varying vec2 vUv;
varying float vElevation;

void main() {
  vec3 gold1 = vec3(0.83, 0.68, 0.21);
  vec3 gold2 = vec3(1.0, 0.92, 0.6);
  vec3 dark = vec3(0.016, 0.039, 0.078);

  float h = vElevation * 1.2 + 0.5;
  h = clamp(h, 0.0, 1.0);
  vec3 color = mix(gold1, gold2, h * 0.7 + 0.2);
  float glow = pow(h, 1.8) * 0.6;
  color += glow * gold2 * 0.4;
  float vignette = 1.0 - length(vUv - 0.5) * 0.7;
  color *= vignette;
  float edge = 1.0 - abs(vUv.x - 0.5) * 1.2 - abs(vUv.y - 0.5) * 1.2;
  edge = clamp(edge, 0.0, 1.0);
  color += vec3(0.08, 0.06, 0.02) * (1.0 - edge);
  color = mix(dark, color, 0.7 + h * 0.3);
  gl_FragColor = vec4(color, 1.0);
}
