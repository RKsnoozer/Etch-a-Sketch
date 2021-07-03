const container = document.getElementById("container");


const title = document.getElementById("Title");
title.style.color = "red";

window.addEventListener("load", setDefaultGrid)

function setDefaultGrid() {
    setGridSize(16);
    createGrid(16);
}

function setGridSize() {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`; 
}

function createGrid (gridSize) {
    let gridArea = gridSize * gridSize;
    for (let i = 0; i < gridArea; i++) {
        let matrix = document.createElement("div");
        matrix.classList = "square";
        let text = document.createElement("p");
        matrix.appendChild(text);
        matrix.addEventListener("mouseover", changeColor);
        document.getElementById("container").appendChild(matrix);
    }
}

function changeColor (e) {
    e.target.style.backgroundcolor = `black`
}

