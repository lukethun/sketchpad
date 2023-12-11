const container = document.querySelector('.container');
const button = document.querySelector('button');
let gridDiv = document.querySelectorAll('.grid');





button.addEventListener('click', () => {
    deleteGrid();
    let gridSize = prompt('Please enter grid size');
    generateGrid(gridSize);      
    gridDiv = document.querySelectorAll('.grid'); 
    gridColour();
})



function gridColour(){
    gridDiv.forEach(grid => {
        grid.addEventListener('mouseover', () =>{
            grid.setAttribute('style', 'background-color: rgb(87, 247, 167);')
        })
    })
}



function generateGrid(size){
    for(let i = 0; i < size*size; i++){
        const gridDiv = document.createElement('div');
        gridDiv.setAttribute('class', 'grid');
        gridDiv.textContent = '';
        container.appendChild(gridDiv);
    }
};

function deleteGrid(){
    let gridDiv = document.querySelectorAll('.grid');
    gridDiv.forEach(grid => {
        grid.remove();
    })
}