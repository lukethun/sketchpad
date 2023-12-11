const container = document.querySelector('.container');
const button = document.querySelector('button');
const clearButton = document.createElement('button');
const buttonContainer = document.querySelector('.button-container');
let gridDiv = document.querySelectorAll('.grid');
let gridSize = '';



// Delete old grid and generate a new one with specified size
button.addEventListener('click', () => {
    gridSize = prompt('Please enter grid size');
    if(gridSize > 100 || gridSize <= 0){
        alert('Please enter a number between 1-100');
    } else {
    deleteGrid();
    document.documentElement.style.setProperty(`--box-sizing`, `calc(var(--page-dimensions) / ${gridSize} - 1px`); // Set individual gridBox size to fit within container dimensions
    generateGrid(gridSize);      
    gridDiv = document.querySelectorAll('.grid'); 
    gridColour();
    clearColours();
    }
})



function clearColours(){
    clearButton.textContent = 'Clear Grid';
    buttonContainer.appendChild(clearButton);

    clearButton.addEventListener('click', () => {
        gridDiv.forEach(grid => {
            grid.setAttribute('style', 'background-color: white;');
        })
    })
}

function gridColour(colour){
    gridDiv.forEach(grid => {
        grid.addEventListener('mouseover', () =>{
            
            grid.setAttribute('style', `background-color: ${getRandomRgb()}`);
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
}

function deleteGrid(){
    let gridDiv = document.querySelectorAll('.grid');
    gridDiv.forEach(grid => {
        grid.remove();
    })
}

function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ');';
}
