function clearGrid() {
	const sketchArea = document.querySelector("#sketch-area");
	while (sketchArea.firstChild) {
		sketchArea.removeChild(sketchArea.firstChild);
	}
}

function drawGrid(gridSize) {
	const sketchArea = document.querySelector("#sketch-area");
	const btnContainer = document.querySelector("#btn-container");
	const screenWidth = window.visualViewport.width;
	const screenHeight = window.visualViewport.height - 70;
	const sizeOfCell = Math.min(Math.floor(screenHeight / 16),
									Math.floor(screenWidth / 16));
	const cell = document.createElement("div");
	const gridRow = document.createElement("div");
	gridRow.style.display = "flex";
	
	cell.style.backgroundColor = "#eeeeee";
	cell.style.boxSizing = "border-box";
	cell.style.width = `${sizeOfCell}px`;
	cell.style.height = `${sizeOfCell}px`;
	cell.style.border = "1px solid black";
	console.log(screenWidth/gridSize);
	for (let row = 1; row <= gridSize; row++) {
		const gridRowClone = gridRow.cloneNode(true);
		sketchArea.appendChild(gridRowClone);
		for (let col = 1; col <= gridSize; col++) {
			const cellClone = cell.cloneNode(true);
			let hasPainted = false;
			cellClone.addEventListener("mouseover", () => {
				if (!hasPainted) {
					cellClone.style.backgroundColor = "black";
					hasPainted = true;
				}
			});
			gridRowClone.appendChild(cellClone);
		}
	}
}

function setDrawArea() {
	let userGridSize = 16;
	const setGridSizeBtn = document.querySelector("#set-grid-size-btn");
	setGridSizeBtn.addEventListener("click", (event) => {
		const userInput = prompt("Enter a number");
		if (!isNaN(userInput)) {
			if (Number.isInteger(parseInt(userInput)))
			{
				if (userInput < 16) {
					alert("Grid size cannot be less than 16");
				}
				else if (userInput > 100) {
					alert("Grid size cannot be more than 100");
				}
				else {
					userGridSize = parseInt(userInput);
					clearGrid();
					drawGrid(userGridSize);
				}
			}
		}
	});
	
	drawGrid(userGridSize);
}

setDrawArea();