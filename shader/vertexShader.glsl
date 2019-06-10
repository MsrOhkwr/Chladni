attribute vec3 verticesPosition;
varying vec2 screenPosition;

void main(void)
{
	screenPosition = (verticesPosition.xy + 1.0) / 2.0;
	gl_Position = vec4(verticesPosition.x, verticesPosition.y, 0.0, 1.0);
}