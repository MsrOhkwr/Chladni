const screan =
[
	-1.0, -1.0, 0.0,
	-1.0, 1.0, 0.0,
	1.0, 1.0, 0.0,
	1.0, -1.0, 0.0,
]

class app
{
	constructor(width, height)
	{
		this.canvas = document.createElement("canvas");
		document.body.appendChild(this.canvas);
		this.gl = this.canvas.getContext("webgl");
		this.canvas.width = width;
		this.canvas.height = height;
		this.gl.viewport(0, 0, width, height);
	}

	async readSource()
	{
		
	}

	createShader(id)
	{
		let shader;

		const script = document.getElementById(id);
	
		if (script == null)
		{
			return;
		}
	
		switch(script.type)
		{
			case "x-shader/x-vertex":
			{
				shader = this.gl.createShader(this.gl.VERTEX_SHADER);
				break;
			}
			case "x-shader/x-fragment":
			{
				shader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
				break;
			}
			default:
			{
				return;
			}
		}
		const gl = this.gl;
		(async() =>
		{
			return await (await fetch(script.getAttribute("src"))).text();
		})().then((text) => console.log(text));

		//this.gl.shaderSource(shader, script.text);

		this.gl.compileShader(shader);

		if (this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS) == true)
		{
			return shader;
		}
		else
		{
			alert(this.gl.getShaderInfoLog(shader));
		}
	}

	createProgram(vertexShader, fragmentShader)
	{
		const program = this.gl.createProgram();

		this.gl.attachShader(program, vertexShader);
		this.gl.attachShader(program, fragmentShader);

		this.gl.linkProgram(program);

		if (this.gl.getProgramParameter(program, this.gl.LINK_STATUS) == true)
		{
			this.gl.useProgram(program);
			return program;
		}
		else
		{
			alert(this.gl.getProgramInfoLog(program));
		}
	}

	createVbo(data)
	{
		const vbo = this.gl.createBuffer();

		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, vbo);

		this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(data), this.gl.STATIC_DRAW);

		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);

		return vbo;
	}
}

function main()
{
	const mainApp = new app(512, 512);

	mainApp.gl.clearColor(0.0, 0.0, 0.0, 1.0);
	mainApp.gl.clear(mainApp.gl.COLOR_BUFFER_BIT);

	const vertexShader = mainApp.createShader("vertexShader");
	const fragmentShader = mainApp.createShader("fragmentShader");

	const mainProgram = mainApp.createProgram(vertexShader, fragmentShader);

	const attributeLocation = mainApp.gl.getAttribLocation(mainProgram, "verticesPosition");

	const attributeSlide = 3;
	
	const vbo = mainApp.createVbo(screan);

	mainApp.gl.bindBuffer(mainApp.gl.ARRAY_BUFFER, vbo);

	mainApp.gl.enableVertexAttribArray(attributeLocation);

	mainApp.gl.vertexAttribPointer(attributeLocation, attributeSlide, mainApp.gl.FLOAT, false, 0, 0);

	mainApp.gl.drawArrays(mainApp.gl.TRIANGLE_FAN, 0, 4);

	mainApp.gl.flush();
}

main();