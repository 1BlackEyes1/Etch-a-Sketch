const container = document.querySelector('#container');
const sizeBar = document.querySelector('#grid-size')

function createDiv(cant){
    for(i=0; i < cant * cant; i++){
    const div = document.createElement('div');
    const area = 600/cant -1
    div.setAttribute('style', `width:${area}px  ; height:${area}px;`);
   // div.textContent = 'Hola';
    container.appendChild(div);
     div.addEventListener('mouseover',() =>{
    div.style.backgroundColor = '#000'
})
    } 
}




