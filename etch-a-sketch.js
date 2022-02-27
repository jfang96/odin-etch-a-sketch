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
            cell.style['background-color'] = 'blue';
        })
    }

    // container.style['grid-template-rows'] = Array(rows).fill('auto').join(' ');

    container.style['grid-template-columns'] = Array(cols).fill('auto').join(' ');    
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