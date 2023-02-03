const times = document.getElementById('times');
const image = document.getElementById('image');

let clickTime = 0;
let count = 0;
image.addEventListener('click', (e) => {

    if(clickTime === 0) {
        clickTime = new Date().getTime();
        console.log(clickTime);
    } else {
        if((new Date().getTime() - clickTime) < 800) {
            createHeart(e);
            clickTime = 0;
            count ++;
            times.innerText = count;
        } else {
            clickTime = new Date().getTime();
        }
    }
});

const createHeart = (e) => {
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    const x = e.clientX;
    const y = e.clientY;

    const imgLeft = e.target.offsetLeft;
    const imgTop = e.target.offsetTop;

    const xIns = x - imgLeft;
    const yIns = y - imgTop;

    heart.style.top = `${yIns}px`;
    heart.style.left = `${xIns}px`;

    image.appendChild(heart);
};