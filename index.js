const grid = document.querySelector('.container');
const small = 16;
const medium = 30;
const large = 60;

let currentMode = 'black';

const addDivs = (size) => {
    // add divs to the grid
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        grid.appendChild(div);
    }
}

const clearGrid = () => {
    const divs = document.querySelectorAll('.container div');
    divs.forEach(div => div.style.backgroundColor = 'white');
}

const makeGrid = (button) => {
    // Makes a grid depending on the button its clicked on
    if (button.classList.contains('small')) {
        grid.style.gridTemplateColumns = `repeat(${small}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${small}, 1fr)`;
        addDivs(small);
    } else if (button.classList.contains('medium')) {
        grid.style.gridTemplateColumns = `repeat(${medium}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${medium}, 1fr)`;
        addDivs(medium);
    } else if (button.classList.contains('large')) {
        grid.style.gridTemplateColumns = `repeat(${large}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${large}, 1fr)`;
        addDivs(large);
    }
}


const toggleBtn = () => {
    // Toggle the size of grid and starts the drawing.
    let gridBtns = document.querySelectorAll('.grid-control > .btn');
    let colorBtns = document.querySelectorAll('.color-control > .btn');
    // toggle active state between grid btns
    gridBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            gridBtns.forEach(btn => btn.classList.remove('active')); // remove active from all buttons
            this.classList.add('active');
            makeGrid(this);
            clearGrid();
            draw();
        });    
    });    
    // toggle active state color buttons
    colorBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            colorBtns.forEach(btn => btn.classList.remove('active')); // remove active from all buttons
            this.classList.add('active');
            if (this.classList.contains('black')) {
                currentMode = 'black';
            } else {
                currentMode = 'rainbow';
            }
        });    
    });    
}    


const changeColor = (e) => {
    // Change color depending on the mode selected
    if (currentMode === 'rainbow') {
      const randomR = Math.floor(Math.random() * 256)
      const randomG = Math.floor(Math.random() * 256)
      const randomB = Math.floor(Math.random() * 256)
      e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (currentMode === 'black') {
      e.target.style.backgroundColor = 'black'
    };
  };


  const draw = () => {
    const divs = document.querySelectorAll('.container div');
    divs.forEach(div => div.addEventListener('mouseover', e => changeColor(e)));
  };


function main() {
    const clearBtn = document.querySelector('.clear');
    clearBtn.addEventListener('click', clearGrid);
    // Default settings for start
    addDivs(small);
    draw();
    // Modified settings for start
    toggleBtn();
};

main();


