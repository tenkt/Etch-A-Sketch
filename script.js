const container = document.querySelector('.container');
const buttonPrompt = document.querySelector('button')
let gridSize = 16;

function createGrid(gridSize) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

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
    wrapper.appendChild(row);
  }
  container.appendChild(wrapper)
}

createGrid(gridSize);

buttonPrompt.addEventListener('click', () => {
  let userSize = (prompt('Enter grid size:'))
  
  while (userSize > 100) {
    userSize = (prompt('Enter grid size between 0-100'));
  }
  const wrapper = document.querySelector('.wrapper')
  if(!wrapper) {
  createGrid(userSize);
  } else {
    wrapper.remove()
    createGrid(userSize)
  }
});

