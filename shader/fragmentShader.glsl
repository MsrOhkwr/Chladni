precision highp float;

#define PI 3.141592

varying vec2 screenPosition;

void main(void)
{
	const float x = screenPosition.x;
	const float y = screenPosition.y;
	const int m = 1;
	const int n = 2;
	const float z = abs(cos(n * PI * x) * cos(m * PI * y) - cos(m * PI * x) * cos(n * PI * y));
	gl_FragColor = vec4(z, z, z, 1.0);
}