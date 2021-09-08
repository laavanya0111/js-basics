const button = document.querySelector('button')
const body = document.querySelector('body')
console.log(button,body)
button.addEventListener('click', () => {
    body.classList.toggle('dark')
})