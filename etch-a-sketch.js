// Create 16x16 grid
const container = document.querySelector('#container');

rows = 16;
cols = 16;

for (c = 0; c < rows*cols; c++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    container.appendChild(cell);
    cell.addEventListener('mouseover', () => {
        cell.style['background-color'] = 'blue';
    })
}

container.style['grid-template-columns'] = Array(cols).fill('20px').join(' ');

container.style['grid-template-rows'] = Array(rows).fill('20px').join(' ');


// Reset Button
const resetBtn = document.querySelector('#resetBtn'); 
resetBtn.addEventListener('click', () => {
    const cells = document.getElementsByClassName('cell');
    for (const cell of cells) {
        cell.style['background-color'] = 'transparent';
    }
        
});