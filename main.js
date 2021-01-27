const container = document.getElementById("container");

function formGrid(gridDimension) {
  container.innerHTML = "";
  var rows = columns = gridDimension;
  container.style.setProperty("--rows", rows);
  container.style.setProperty("--columns", columns);
  var i;
  for (i=0; i < (rows*columns); i++) {
    var cell = document.createElement("div");
    cell.cellIndex = i;
    cell.onmouseover = function() {
      onHoverChangeColor(this.cellIndex);
    }
    container.appendChild(cell).className = "cell";
  };
};
formGrid(16);

function onHoverChangeColor(presentIndex) {
  var cellList = container.getElementsByClassName("cell");
  cellList[presentIndex].style.backgroundColor = "black";
};

function changeGridDimension() {
  var gridDimension = prompt("How many squares per side do you want?");
  while(isNaN(gridDimension) || gridDimension < 1 || gridDimension > 100) {
    alert("Enter a number in range 1-100.");
    var gridDimension = prompt("How many squares per side do you want");
  }
  console.log(gridDimension);
  formGrid(gridDimension);
};