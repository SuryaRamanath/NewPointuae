console.log('js is working')

// NAVBAR

const nav = document.querySelector('.navbar')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}


// SLIDER

const btns = document.querySelectorAll(".nav-btn")
const slides = document.querySelectorAll(".image-slide")

let sliderNav = (index) => {
    btns.forEach(btn => {
        btn.classList.remove("active")
    })

    slides.forEach(slide => {
        slide.classList.remove("active")
    })
    btns[index].classList.add("active")
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i)
    })
})