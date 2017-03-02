precision highp float;

// Attributes
attribute vec3 position;

// Uniforms
uniform float time;
uniform mat4 worldViewProjection;

void main() {
    vec4 p = vec4( position, 1. );
    gl_Position = worldViewProjection * p;
}