precision highp float;
varying vec2 screenPosition;

void main(void)
{
	gl_FragColor = vec4(screenPosition, 0.0, 1.0);
}