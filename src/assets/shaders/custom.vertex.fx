precision highp float;

attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;

uniform mat4 worldViewProjection;

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUV;

void main(void) {
    vec3 v = position;
    gl_Position = worldViewProjection * vec4(v, 1.0);
    vPosition = position;
    vNormal = normal;
    vUV = uv;
}

