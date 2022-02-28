// Create 16x16 grid
const container = document.querySelector('#container');

rows = 16;
cols = 16;

createGrid(rows, cols);

function createGrid(rows, cols) {

    for (c = 0; c < rows*cols; c++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
        cell.addEventListener('mouseover', () => {
            hover(cell);
        })
    }

    // container.style['grid-template-rows'] = Array(rows).fill('auto').join(' ');

    container.style['grid-template-columns'] = Array(cols).fill('auto').join(' ');    
}

function hover(cell) {
    const style = getComputedStyle(cell);
    const opacity = style['opacity'];

    if (style['background-color'] == 'rgba(0, 0, 0, 0)') {
        
        cell.style['background-color'] = getRandomColor();

        cell.style['opacity'] = '0.2';

    } else {
        if (parseFloat(opacity) < 1) {
            cell.style['opacity'] = (parseFloat(opacity) + 0.1).toString();
        }
    }
}


// Reset Button
const resetBtn = document.querySelector('#resetBtn'); 
resetBtn.addEventListener('click', () => {
    clearGrid();
    rows = parseInt(prompt("Number of rows/columns (max: 100)", 16));
    rows = Math.min(rows, 100); // Limit grid size to 100
    createGrid(rows, rows);
});

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }  
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }