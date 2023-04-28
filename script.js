const container = document.querySelector('.container');
const buttonPrompt = document.querySelector('button')
let gridSize = 16;

function createGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < gridSize; j++) {
      const widthAndHeight = 608 / gridSize;
      const squareBox = document.createElement('div');
      squareBox.classList.add('squareBox');
      squareBox.style.width = `${widthAndHeight}px`;
      squareBox.style.height = `${widthAndHeight}px`;
      squareBox.addEventListener('mouseenter', () => {
        squareBox.style.backgroundColor = 'red';
      });
      row.appendChild(squareBox);
    }
    container.appendChild(row);
  }
}

createGrid(gridSize);

buttonPrompt.addEventListener('click', () => {
  let inputSize = Number(prompt('Enter grid size:'))


});

