precision highp float;

#define PI 3.141592

varying vec2 screenPosition;

void main(void)
{
	float x = screenPosition.x;
	float y = screenPosition.y;
	float m = 3.0;
	float n = 3.0;
	float z = abs(cos(n * PI * x) * cos(m * PI * y) - cos(m * PI * x) * cos(n * PI * y));
	gl_FragColor = vec4(z, z, z, 1.0);
}