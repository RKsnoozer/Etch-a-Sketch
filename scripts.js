const container = document.getElementById("container");


const title = document.getElementById("Title");
title.style.color = "red";

window.addEventListener("load", setDefaultGrid)

function setDefaultGrid() {
    setGridSize(4);
    createGrid(4);
}

function setGridSize(gridSize) {
    container.style.gridTemplateColumns = `repeat(${gridSize}, auto)`; 
}

function createGrid (gridSize) {
    let gridArea = gridSize * gridSize;
    for (let i = 0; i < gridArea; i++) {
        let matrix = document.createElement("div");
        matrix.classList = "square";
        matrix.addEventListener("mouseover", changeColor);
        document.getElementById("container").appendChild(matrix);
    }
}

function changeColor (e) {
    e.target.style.backgroundcolor = `black`
}

