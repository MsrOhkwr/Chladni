function main()
{
	const table = document.createElement("table");
	document.body.appendChild(table);

	const ext = ".png"
	const tr = document.createElement("tr");
	table.appendChild(tr);
	for (let i = 0; i <= 8; i++)
	{
		const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		svg.setAttribute("width", "64");
		svg.setAttribute("height", "64");
		tr,appendChild(svg);
	}
	for (let i = 1; i <= 8; i++)
	{
		const tr = document.createElement("tr");
		table.appendChild(tr);
		for (let j = 1; j <= 8; j++)
		{
			const filename = "./image/m" + i + "-n" + j + ext;
			const td = document.createElement("td");
			tr.appendChild(td);
			const svg = document.createElementNS("http://www.w3.org/2000/svg", svg);
			svg.setAttribute("width", "64");
			svg.setAttribute("height", "64");
			tr,appendChild(svg);
			const img = document.createElement("img");
			img.setAttribute("src", filename);
			img.setAttribute("width", "64");
			td.appendChild(img);
		}
	}
}

main();