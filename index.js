const main= document.querySelector('#main')

function onClick(event){
  alert('i was clicked')
}

main.addEventListener('click',onClick)

const input= document.querySelector('input')

function onKeyDown(event){
  console.log(event)
  if (event.which=== 74){
   event.preventDefault()
  
  }
}

input.addEventListener('keydown', onKeyDown)

const divs= document.querySelectorAll('div')
console.log(divs)

function onDivClick(event){
  
}

for(let div of divs){
  div.addEventListener('click', )
}

