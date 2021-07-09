const container = document.getElementById("container");
const resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", clearScreen);

let size = 16;

// Default Settings
createGrid(size);
setGridSize(size);

function setGridSize(gridSize) {
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`; 
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
    e.target.style.backgroundColor = `black`
}



function clearScreen () {
    const girdArray = Array.from(container.childNodes);
    girdArray.forEach((element) => {
        container.removeChild(element);
    });
    createGrid(size);
}