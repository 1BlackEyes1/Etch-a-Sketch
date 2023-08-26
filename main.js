const container = document.querySelector('#container');
const sizeBar = document.querySelector('#grid-size')

function gridSize(val){
for(i=0; i < val * val; i++){
        
    const div = document.createElement('div');

    const area = 700/val -1

    div.setAttribute('style', `width:${area}px  ; height:${area}px;`);
   // div.textContent = 'Hola';
   div.classList.add('color')
    container.appendChild(div);
     div.addEventListener('mouseover',function hola(){
    div.style.backgroundColor = '#000'
     })
    }
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


    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);



const rgb = document.querySelector('#rgb')

rgb.addEventListener('click',() =>{
    div.removeEventListener
    
    const div = document.querySelector('.color');
    div.addEventListener('mouseover',() =>{
        let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
        div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
         })
}) 


// intentarlo con condicionales
