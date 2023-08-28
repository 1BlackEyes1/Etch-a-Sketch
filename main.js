const container = document.querySelector('#container');
const sizeBar = document.querySelector('#grid-size')
const rgb = document.querySelector('#rgb')
const bla = document.querySelector('#Black')
const cPiker = document.querySelector('#color-picker')
const clean = document.querySelector('#reset')
//const dark = document.querySelector('#opacity')

function gridSize(val){
for(let i=0; i < val * val; i++){ 
    
    const div = document.createElement('div');
    const area = 700/val -1 
    let bri = 100 
    div.oncontextmenu = disable
    div.setAttribute('style', `width:${area}px; height:${area}px; filter: brightness(100%)`);
   // div.textContent = 'Hola';
   div.classList.add('color')
    container.appendChild(div);
     div.addEventListener('mouseover',function hola(){
    div.style.backgroundColor = '#000'
     })
     
    }
    let children = document.querySelectorAll('.color')
children.forEach(child =>{
    let bri = 100
    child.addEventListener('click', () =>{
        bri -= 10
        child.style.filter = `brightness(${bri}%)`
        if(bri < 10){
            bri = 110
        }

    })
    child.addEventListener('contextmenu',() =>{
        bri += 10
        child.style.filter = `brightness(${bri}%)`
        if(bri > 1000){
            bri = 90
        }
    })
})

}
gridSize(16)

function gridReSize(){
  let val = document.querySelector('#grid-size').value;
  let span = document.querySelectorAll('span');
  span.forEach(element => {
    element.textContent = val
    });
    gridSize(val)
}


function reset(){
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
}

sizeBar.addEventListener('input', () =>{
    reset();
    gridReSize()
    
})

function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}

rgb.addEventListener('click', () =>{
    let children = document.querySelectorAll('.color')
    children.forEach(child =>{
        child.addEventListener('mouseover', () => {
        child.style.backgroundColor = randomColor()
    })
})
})


bla.addEventListener('click', () =>{
    let children = document.querySelectorAll('.color')
    children.forEach(child =>{
        child.addEventListener('mouseover', () => {
        child.style.backgroundColor = '#000'
        })
    })
})

cPiker.addEventListener('input', () =>{
    let colorP = document.querySelector('#color-picker').value
    let children = document.querySelectorAll('.color')
    children.forEach(child =>{
        child.addEventListener('mouseover', () => {
            
        child.style.backgroundColor = colorP
        })
    })
})

clean.addEventListener('click', () =>{
    reset()
    gridSize(16)
})

let children = document.querySelectorAll('.color')
children.forEach(child =>{
    let bri = 100
    child.addEventListener('click', () =>{
        bri -= 10
        child.style.filter = `brightness(${bri}%)`
        if(bri < 10){
            bri = 110
        }

    })
    child.addEventListener('contextmenu',() =>{
        bri += 10
        child.style.filter = `brightness(${bri}%)`
        if(bri > 1000){
            bri = 90
        }
    })
})

function disable(){
    return false
}
/////

    



// intentarlo con condicionales



    


