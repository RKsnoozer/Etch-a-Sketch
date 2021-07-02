const matrix = document.createElement("div");
const containerJS = document.getElementById("#container");
containerJS.appendChild(matrix);
document.getElementById(matrix).style.backgroundColor = "red";
document.getElementById(matrix).style.width = "100%";

function createGrid (gridSize) {
    let gridArea = gridSize * gridSize;
    for (let i = 1; i < gridArea; i++) {
        let matrix = document.createElement("div");
    }
}