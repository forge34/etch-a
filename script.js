function add_active(cell){
    cell.classList.add('active')
}

function set_grid(g_size , cont){
    while(cont.firstChild){
        cont.removeChild(cont.firstChild)
    }
    
    for (let i = 0;i < g_size;i++){
        for (let j = 0;j < g_size;j++)
        {
            let cell = document.createElement('div')
            cell.classList.add('cell')
    
            cont.append(cell)
        }
    }

    let cells = document.querySelectorAll('.cell')

    for (let i=0;i<cells.length;i++){
        cells[i].classList.remove('active')
    }

    for (let i=0;i<cells.length;i++){
        cells[i].addEventListener('mouseover' , () => {add_active(cells[i])})
        cells[i].style.height = `${560 / g_size}px`
        cells[i].style.width = `${560 / g_size}px`
    }
}


let container = document.querySelector('.container')
let btn = document.getElementById('btn')
let input = document.querySelector('.grid-input')

btn.addEventListener('click' ,() => {
    if (input.value > 100)
    {
        alert('grid limit exceeded')
    }
    else set_grid(input.value,container)
})
