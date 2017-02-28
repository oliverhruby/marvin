#ifdef GL_ES
precision highp float;
#endif


varying vec2 pos;

uniform float time;
uniform vec2 mouse;
uniform int mouseLeft;
  
const float R = 0.2;
const float G = 0.5;
const float B = 0.9;
const float C = 0.67;
const float escape = 10.0;
const int Iterations = 50;
const int PreIterations = 2;
vec2 c2 = vec2(-0.11766+0.1*sin(time/3.0),5.0571+0.1*cos(time/(5.0)));


vec2 cLog(vec2 a) {
	float b =  atan(a.y,a.x);
	if (b>0.0) b-=2.0*3.1415;
	return vec2(log(length(a)),b);
}

vec2 formula(vec2 z, vec2 c) {
    return cLog(vec2(z.x,abs(z.y)))+c;
}

vec3 getColor2D(vec2 c) {
	vec2 z = c;
	int iter = 0;
	float ci = 0.0;
	float mean = 0.0;
	for (int i = 0; i < Iterations; i++) {
		iter = i;z = formula(z, c2 );
		if (i>PreIterations) mean+=length(z);
		if (dot(z,z)> escape) break;
	}
	mean/=float(iter-PreIterations);
	ci =  1.0 - log2(.5*log2((1.5+mouse.y)*mean/C));
	return vec3( .5+.5*cos(6.*ci +R),.5+.5*cos(6.*ci + G),.5+.5*cos(6.*ci +B) );
}


void main() {
 vec2 p = pos*(0.5+mouse.x)*2.0*(5.0+1.0*cos(time/5.0));
 p.x -= 0.1;  
 gl_FragColor = vec4(getColor2D(p), 1.0);
}