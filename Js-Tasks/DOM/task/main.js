let buttons = document.querySelectorAll('button')
buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    document.body.style.backgroundColor = btn.innerText
  })
})