const container = document.getElementById("container");
const resetButton = document.getElementById("reset-button");
const changeSizeButton = document.getElementById("size-button");

// Default Size
let size = 16;

resetButton.addEventListener("click", () => {
    clearScreen();
    createGrid(size);
});

changeSizeButton.addEventListener("click", () => {
    changeGridSize()
});


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

function changeGridSize() {
    clearScreen();
    size = prompt("Input Size")
    setGridSize(size);
    createGrid(size);
}

function clearScreen () {
    const girdArray = Array.from(container.childNodes);
    girdArray.forEach((element) => {
        container.removeChild(element);
    });
}

function colorRGB() {
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);  
    let B = Math.floor(Math.random() * 256);
    return colorRGB(R, G, B);
}