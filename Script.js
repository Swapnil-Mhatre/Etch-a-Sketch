const defaultColor = "rbg(0, 0, 0)";
const defaultStyle = "black";
const defaultSize = 8;
const gridContainer = document.querySelector("#grid");

let currentColor = defaultColor;
let currentStyle = defaultStyle;
let currentSize = defaultSize;

function createGrid () {
    let gridWidth = 3 * currentSize;
    let gridHeight = 2 * currentSize;

    for (let i = 0; i < gridHeight * gridWidth; i++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add("grid-item");
        gridContainer.setAttribute('style', `grid-template-rows: repeat(${gridHeight}, 1fr); grid-template-columns: repeat(${gridWidth}, 1fr);`);
        gridContainer.appendChild(gridItem);
    }
}

