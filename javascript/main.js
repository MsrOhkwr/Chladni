function main()
{
	const title = document.createElement("h1");
	title.setAttribute("font-family", "serif");
	title.innerHTML = "Chladni Patterns"
	document.body.appendChild(title);
	fomula.innerHTML = "<math><mi>cos</mi><mi>(nxPi)</mi><mi>cos</mi><mi>(mxPi)</mi><mi>-</mi><mi>cos</mi><mi>(mxPi)</mi><mi>cos</mi><mi>(nxPi)</mi><mi>=</mi><mi>0</mi></math>";
	const table = document.createElement("table");
	document.body.appendChild(table);

	const ext = ".png"
	const tr = document.createElement("tr");
	table.appendChild(tr);
	const td = document.createElement("td");
	tr.appendChild(td);
	const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttribute("width", "64");
	svg.setAttribute("height", "64");
	td.appendChild(svg);
	const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
	text.setAttribute("x", "12.275");
	text.setAttribute("y", "40");
	text.setAttribute("font-size", "16");
	text.setAttribute("font-family", "serif")
	text.innerHTML = "m / n";
	svg.appendChild(text);
	for (let i = 1; i <= 8; i++)
	{
		const td = document.createElement("td");
		tr.appendChild(td);
		const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		svg.setAttribute("width", "64");
		svg.setAttribute("height", "64");
		td.appendChild(svg);
		const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
		text.setAttribute("x", "26.53");
		text.setAttribute("y", "40");
		text.setAttribute("font-size", "16");
		text.setAttribute("font-family", "serif");
		text.innerHTML = i;
		svg.appendChild(text);
	}
	for (let i = 1; i <= 8; i++)
	{
		const tr = document.createElement("tr");
		table.appendChild(tr);
		const td = document.createElement("td");
		tr.appendChild(td);
		const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		svg.setAttribute("width", "64");
		svg.setAttribute("height", "64");
		td.appendChild(svg);
		const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
		text.setAttribute("x", "26.53");
		text.setAttribute("y", "40");
		text.setAttribute("font-size", "16");
		text.setAttribute("font-family", "serif");
		text.innerHTML = i;
		svg.appendChild(text);
		for (let j = 1; j <= 8; j++)
		{
			const filename = "./image/m" + i + "-n" + j + ext;
			const td = document.createElement("td");
			tr.appendChild(td);
			const img = document.createElement("img");
			img.setAttribute("src", filename);
			img.setAttribute("width", "64");
			td.appendChild(img);
		}
	}
}

main();