// toggle 
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navList = document.querySelector("nav");

    burger.addEventListener("click", () => {
        navList.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    });
};

navSlide();


// typed text 
document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed(".auto-type", {
        strings: ["Humaira"], 
        typeSpeed: 150,
        backSpeed: 150,
        loop: true 
    });
});

// popup image 
const images = [...document.querySelectorAll('.image')];
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const largeImage = document.querySelector('.large-image');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let index = 0;

images.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage(i);
        popup.classList.toggle('active');
    })
})

const updateImage = (i) => {
    let path = `images/certificate/certificate-${i+1}.png`;
    largeImage.src = path;
    index = i;
}

closeBtn.addEventListener('click', () => {
    popup.classList.toggle('active');
})

leftArrow.addEventListener('click', () => {
    if (index > 0) {
        updateImage(index - 1);
    }
})

rightArrow.addEventListener('click', () => {
    if (index < images.length - 1) {
        updateImage(index + 1);
    }
})

// scroll to top
let btnTop = document.getElementById("btntop")

// jika scroll ke bawah > 100px dari atas maka munculkan button 
window.onscroll = function() {scrollFunction()}

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btnTop.style.display = "block"
    }else {
        btnTop.style.display = "none"
    }
}

function btnTopFunc() {
    const scrollDuration = 800 //mili detik
    const scrollStep = -window.scrollY / (scrollDuration / 15)

    function smoothScroll () {
        if (window.scrollY != 0) {
            window.scrollBy(0, scrollStep)
            requestAnimationFrame(smoothScroll)
        }
    }

    requestAnimationFrame(smoothScroll)
}


// clear form 
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
}