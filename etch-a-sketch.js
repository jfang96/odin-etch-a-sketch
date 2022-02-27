const container = document.querySelector('#container');

rows = 16;
cols = 16;

for (c = 0; c < rows*cols; c++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    container.appendChild(cell);
    cell.textContent = 'cell';
    cell.addEventListener('mouseover', () => {
        cell.style['background-color'] = 'blue';
    })
}

container.style['grid-template-columns'] = Array(cols).fill('1fr').join(' ');

container.style['grid-template-rows'] = Array(rows).fill('1fr').join(' ');

