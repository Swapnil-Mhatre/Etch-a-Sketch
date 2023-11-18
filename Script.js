const defaultColor = "rgb(0, 0, 0)";
const defaultStyle = "black";
const defaultSize = 8;
const gridContainer = document.querySelector(".grid-container");

let currentColor = defaultColor;
let currentStyle = defaultStyle;
let currentSize = defaultSize;

function changeCurrentColor(newColor) {
  currentColor = newColor;
}

function changeCurrentStyle(newStyle) {
  activeButton(newStyle);
  currentStyle = newStyle;
}

function changeCurrentSize(newSize) {
  currentSize = newSize;
}

const colorPicker = document.querySelector("#colorPicker");
const blackBtn = document.querySelector("#blackColorBtn");
const rainbowBtn = document.querySelector("#randomColorBtn");
const eraseBtn = document.querySelector("#eraseBtn");
const resetBtn = document.querySelector("#clear");
const slider = document.querySelector("#slider");
const gridLength = document.querySelector("#gridlength");

colorPicker.addEventListener("input", (newColor) => {changeCurrentColor(newColor.target.value);});
blackBtn.addEventListener("click", () => {changeCurrentStyle("black");});
rainbowBtn.addEventListener("click", () => {changeCurrentStyle("rainbow");});
eraseBtn.addEventListener("click", () => {changeCurrentStyle("erase");});
resetBtn.addEventListener("click", resetGrid);
slider.addEventListener("mousemove", (newSize) => {changeCurrentSize(newSize.target.value);});
slider.addEventListener("change", (size) => {changeSize(size.target.value);});

function changeSize(size) {
  changeCurrentSize(size);
  resetGrid();
}

function resetGrid() {
  gridContainer.textContent = "";
  createGrid(currentSize);
}

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function changeColor(e) {
  if (e.type === "mouseover" && !mouseDown) return;
  switch (currentStyle) {
    case "black":
      this.style.backgroundColor = currentColor;
      break;
    case "rainbow":
      const colorR = Math.floor(Math.random() * 256);
      const colorG = Math.floor(Math.random() * 256);
      const colorB = Math.floor(Math.random() * 256);
      this.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`;
      break;
    case "erase":
      this.style.backgroundColor = "rgb(255, 255, 255)";
      break;
  }
}

function createGrid(currentSize) {
  let gridWidth = 3 * currentSize;
  let gridHeight = 2 * currentSize;
  gridLength.textContent = `${gridWidth} x ${gridHeight}`;
  gridContainer.setAttribute("style", `grid-template-columns: repeat(${gridWidth}, 1fr); grid-template-rows: repeat(${gridHeight}, 1fr);`);

  for (let i = 0; i < gridHeight * gridWidth; i++) {
    let gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.addEventListener("mouseover", changeColor);
    gridItem.addEventListener("mousedown", changeColor);
    gridContainer.appendChild(gridItem);
  }
}

function activeButton(newStyle) {
  if (currentStyle === "black") {
    blackBtn.classList.remove("active");
  } else if (currentStyle === "darken") {
    darkenBtn.classList.remove("active");
  } else if (currentStyle === "rainbow") {
    rainbowBtn.classList.remove("active");
  } else if (currentStyle === "erase") {
    eraseBtn.classList.remove("active");
  }

  if (newStyle === "black") {
    blackBtn.classList.add("active");
  } else if (newStyle === "darken") {
    darkenBtn.classList.add("active");
  } else if (newStyle === "rainbow") {
    rainbowBtn.classList.add("active");
  } else if (newStyle === "erase") {
    eraseBtn.classList.add("active");
  }
}

createGrid(defaultSize);