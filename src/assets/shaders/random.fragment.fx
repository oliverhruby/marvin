precision highp float;

uniform float time;

void main(void) {
  gl_FragColor = vec4(0, cos(time)/2.+.5, 0, 1);
}