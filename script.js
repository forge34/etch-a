let container = document.querySelector('.container')

let grid_size = 100

for (let i = 0;i < grid_size;i++){
    for (let j = 0;j < grid_size;j++)
    {
        let cell = document.createElement('div')
        cell.classList.add('cell')

        container.append(cell)
    }
}

function add_active(cell){
    cell.classList.add('active')
}

let cells = document.querySelectorAll('.cell')

for (let i=0;i<cells.length;i++){
    cells[i].addEventListener('mouseover' , () => {add_active(cells[i])})
    cells[i].style.height = `${560 / grid_size}px`
    cells[i].style.width = `${560 / grid_size}px`
}