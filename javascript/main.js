function main()
{
	const table = document.createElement("table");
	document.body.appendChild(table);

	const ext = ".png"
	for (let i = 1; i <= 8; i++)
	{
		const tr = document.createElement("tr");
		table.appendChild(tr);
		for (let j = 1; j <= 8; j++)
		{
			const filename = "./image/m" + i + "-n" + j + ext;
			const td = document.createElement("td");
			tr.appendChild(td);
			const img = document.createElement("img");
			img.setAttribute("src", filename);
			img.setAttribute("width", "64");
			tr.appendChild(img);
		}
	}
}

main();