#extension GL_OES_standard_derivatives : enable
precision highp float;   
            
// Varying
varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUV;

// Refs
uniform vec3 color;
uniform vec3 cameraPosition;
            

void main(void) {          
    float x = vUV.x;
    float y = vUV.y;
    vec2 uv = -1. + 2. * vUV;
    float a = 1. - smoothstep(-.9, 0.9, abs(uv.x)); //*(1.-vUV.y))*1.);
    float b = 1. - pow(0.1, vUV.y);
    vec3 col = vec3(1., b, 0.);
    gl_FragColor = vec4(col, a);
}