const cont = document.querySelector('.container');
const max = 10;
const url = 'https://picsum.photos/';
const body = document.querySelector('body');


for(let i = 0; i < max * 3; i++) {
    const img = document.createElement('img');
    img.className = 'image';
    img.src = `${url}` + getRandomSize();
    cont.appendChild(img);
}

function getRandomNum() {
    return Math.floor(Math.random() * 10) + 300;
}

function getRandomSize() {
    return getRandomNum() + '/' + getRandomNum();
}


const bodyEl = document.querySelector('body');
const overlay = document.querySelector('.overlay');
const images = document.querySelectorAll('img');

images.forEach(img => {
    img.addEventListener('click', (e) => {
        overlay.classList.add('active');
        overlay.appendChild(e.target);

        overlay.addEventListener('click', (e) => {
            if(e.target !== img) {
                overlay.classList.remove('active');
                overlay.removeChild(img);
                cont.appendChild(img);
            } else if(e.target === img) {
                overlay.classList.remove('active');
                overlay.removeChild(img);
                cont.appendChild(img);
            }
        });
    });
});