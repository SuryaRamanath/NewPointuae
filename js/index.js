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
const contents = document.querySelectorAll(".content")
const rightBtn = document.querySelector(".slider-right-arrow")
const leftBtn = document.querySelector(".slider-left-arrow")
let sliderIndex = 0;

let sliderNav = (index) => {
    btns.forEach(btn => {
        btn.classList.remove("active")
    })

    slides.forEach(slide => {
        slide.classList.remove("active")
    })
    contents.forEach(content => {
        content.classList.remove("active")
    })

    btns[index].classList.add("active")
    slides[index].classList.add("active")
    contents[index].classList.add("active")
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i)
        sliderIndex = i
    })
})

rightBtn.addEventListener("click", () => {
    sliderNav((sliderIndex + 1)%slides.length)
    sliderIndex = (sliderIndex+1)%slides.length
})

leftBtn.addEventListener("click", () => {
    if(sliderIndex === 0){
        sliderIndex = slides.length
    }
    sliderNav((sliderIndex - 1)%slides.length)
    sliderIndex = (sliderIndex-1)%slides.length
})
// window.setInterval(function(){
//     sliderNav(sliderIndex);
//     sliderIndex = (sliderIndex + 1) % slides.length
// }, 4000);