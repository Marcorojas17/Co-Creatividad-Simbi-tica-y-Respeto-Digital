attribute vec2 a_position;
uniform vec2 u_resolution;
uniform float u_time;
varying vec2 vUv;
varying float vElevation;

void main() {
  vec2 uv = a_position * 0.5 + 0.5;
  vUv = uv;
  float x = uv.x * 2.0 - 1.0;
  float y = uv.y * 2.0 - 1.0;
  float d = length(vec2(x, y));
  float elevation = sin(d * 8.0 - u_time * 1.2) * 0.15
                  + sin(x * 6.0 + y * 4.0 - u_time * 0.9) * 0.08;
  vElevation = elevation;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
