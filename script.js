const container = document.querySelector('.container');
const gridSize = 16;

const createGrid = (gridSize) => {
  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < gridSize; j++) {
      const widthAndHeight = 608 / gridSize;
      const squareBox = document.createElement('div');
      squareBox.classList.add('squareBox');
      squareBox.style.width = `${widthAndHeight}px`;
      squareBox.style.height = `${widthAndHeight}px`;
      row.appendChild(squareBox);
    }
    container.appendChild(row);
  }
}

createGrid(gridSize);