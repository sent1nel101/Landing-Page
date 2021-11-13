const toggle = document.getElementById('toggle')
const container = document.getElementById('container')
const text = document.getElementById('text')
const title = document.getElementById('title')

toggle.addEventListener('click', ()=>{
    toggle.classList.toggle('active')
    container.classList.toggle('active')
    text.classList.toggle('active')
    title.classList.toggle('active')    
})