const right = document.getElementById('right');
const left = document.getElementById('left');
const slides = document.querySelectorAll('.slide');
const body = document.querySelector('body');

let activeSlide = 0;

function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[activeSlide].classList.add('active');
}


right.addEventListener('click', () => {
    activeSlide++;

    if(activeSlide > slides.length) {
        activeSlide = 0;
    }

    setBgToBody();
    setActiveSlide();
});

left.addEventListener('click', () => {
    activeSlide--;

    if(activeSlide < 0) {
        activeSlide = slides.length;
    }

    setBgToBody();
    setActiveSlide();
});