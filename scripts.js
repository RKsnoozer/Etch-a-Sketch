const container = document.getElementById("container");
const title = document.getElementById("Title");
title.style.color = "red";

function setDefaultGrid() {
    setGridSize(16);
    createGrid(16);
}

function setGridSize() {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`; 
}

function createGrid (gridSize) {
    let gridArea = gridSize * gridSize;
    for (let i = 1; i < gridArea; i++) {
        const matrix = document.createElement("div");
        matrix.classList = "grid-element";
        matrix.addEventListener("mouseover");
        container.appendChild(matrix);
    }
}

