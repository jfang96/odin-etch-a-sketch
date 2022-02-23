const container = document.querySelector('#container');

rows = 16;
cols = 16;

for (c = 0; c < rows*cols; c++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    container.appendChild(cell);
    cell.textContent = 'cell';
}

container.style['grid-template-columns'] = 'auto '.repeat(cols);
