const main= document.querySelector('#main')

function onClick(event){
  alert('i was clicked')
}

main.addEventListener('click',onClick)

const input= document.querySelector('input')

function onKeyDown(event){
  console.log(event)
  if (event.which=== 74){
    alert('what the j')
  
  }
}

input.addEventListener('keydown', )