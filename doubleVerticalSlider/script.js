const container = document.querySelector('.slide-container');
const leftSlide = document.querySelector('.slide-left');
const rightSlide = document.querySelector('.slide-right');
const buttonUp = document.querySelector('.up-button');
const buttonDown = document.querySelector('.down-button');
const slidesLength = rightSlide.querySelectorAll('div').length;

let activeSlidesIndex = 0;

leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`;

buttonUp.addEventListener('click', () => replace('up'));
buttonDown.addEventListener('click', () => replace('down'));

const replace =  (direction) => {
    const sliderHeight = container.clientHeight;
    if(direction === 'up') {
        activeSlidesIndex++;
        if(activeSlidesIndex > slidesLength - 1) {
            activeSlidesIndex = 0;
        }
    } else if(direction === 'down') {
        activeSlidesIndex--;
        if(activeSlidesIndex < 0) {
            activeSlidesIndex = slidesLength - 1;
        }
    }

    rightSlide.style.transform = `translateY(-${activeSlidesIndex * sliderHeight}px)`;
    leftSlide.style.transform = `translateY(${activeSlidesIndex * sliderHeight}px)`;
    console.log(activeSlidesIndex);
};