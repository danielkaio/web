let btn = document.querySelector(".btn-menu")

btn.addEventListener('click', () => {
    let menu = document.querySelector('.menu')
    menu.classList.toggle("ativo")
})