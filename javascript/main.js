function main()
{
	const title = document.createElement("h1");
	title.setAttribute("font-family", "serif");
	title.innerHTML = "Chladni Patterns"
	document.body.appendChild(title);
	const fomula = document.createElement("math");
	document.body.appendChild(fomula);
	fomula.innerHTML = "cos(nxPi)cos(mxPi) - cos(mxPi)cos(nxPi) = 0";
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