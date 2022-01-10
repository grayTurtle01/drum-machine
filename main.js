document.addEventListener('keydown', foo)

function foo(event){
  let code = event.code
  let letter = code.slice(3)
 
  try {
    let audio = document.querySelector(`#${letter}`)
    audio.play()
    
    let display = document.querySelector('#display')
    display.innerText = letter

  } catch (error) {
    
  }

}