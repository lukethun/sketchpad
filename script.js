const container = document.querySelector('.container');
const button = document.querySelector('button');

button.addEventListener('click', () => {

    const gridSize = prompt('Please enter a grid size:');
    generateGrid(gridSize, gridSize);
    gridDiv.remove();
})



const gridDiv = document.querySelectorAll('.grid');
gridDiv.forEach(grid => {
    grid.addEventListener('mouseover', () =>{
        grid.setAttribute('style', 'background-color: rgb(87, 247, 167);')
    })
})



function generateGrid(rows, columns){
    for(let i = 0; i < rows*columns; i++){
        const gridDiv = document.createElement('div');
        gridDiv.setAttribute('class', 'grid');
        gridDiv.textContent = '';
        container.appendChild(gridDiv);
    }
};