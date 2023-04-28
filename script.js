const container = document.querySelector('.container');
const gridSize = 4;
//const sketchContainer = document.createElement('div');
//sketchContainer.classList.add('sketchContainer');
//ontainer.appendChild(sketchContainer);

//const gridSquares = document.createElement('div');
//gridSquares.classList.add('gridSquares');
//sketchContainer.appendChild(gridSquares);

const createGrid = (grid) => {
  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement('div');
    row.classList.add('row')

    for (let j = 0; j < grid; j++) {
      const squareBox = document.createElement('div');
      squareBox.classList.add('squareBox');
      row.appendChild(squareBox);
    }

    container.appendChild(row);
  }
}

createGrid(gridSize);