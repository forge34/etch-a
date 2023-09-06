let container = document.querySelector('.container')
let input = document.querySelector('.grid-input')
let btn = document.querySelector('.btn')

let grid_size = input.value


function set_grid(g_size){
    for (let i = 0;i < g_size;i++){
        for (let j = 0;j < g_size;j++)
        {
            let cell = document.createElement('div')
            cell.classList.add('cell')
    
            container.append(cell)
        }
    }
}

set_grid(grid_size)

function add_active(cell){
    cell.classList.add('active')
}

let cells = document.querySelectorAll('.cell')

for (let i=0;i<cells.length;i++){
    cells[i].addEventListener('mouseover' , () => {add_active(cells[i])})
    cells[i].style.height = `${560 / grid_size}px`
    cells[i].style.width = `${560 / grid_size}px`
}