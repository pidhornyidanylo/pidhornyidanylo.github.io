const screens = document.querySelectorAll('.screen');
const start = document.querySelector('.start-btn');
const items = document.querySelectorAll('.choose-btn');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const overlay = document.querySelector('.overlay');
let selected_item = {};
let seconds = 0;
let score = 0;

start.addEventListener('click', () => {
    screens[0].classList.add('up');
});

items.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const src = img.src;
        const alt = img.alt;
        selected_item = { src, alt};
        screens[1].classList.add('up');
        setTimeout(addItem, 1000);
        startGame();
    });
});

function startGame() {
    setInterval(upgradeTime,  1000);
}

function upgradeTime() {
    let sec = seconds % 60;
    let min = Math.floor(seconds / 60);
    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;
    timeEl.innerHTML = `${min}:${sec}`;
    seconds++;
}

function addItem() {
    const div = document.createElement('div');
    div.className = 'image';
    const { x, y } = randomLocation();
    div.style = `top: ${y}px; left: ${x}px`;
    div.innerHTML = `<img src="${selected_item.src}" style="transform: rotate(${Math.random() * 360}deg)">`;

    div.addEventListener('click', () => {
        div.classList.add('caught');
        upgradeScore();
        catchItem();
    });

    screens[2].appendChild(div);
}

function upgradeScore() {
    score++;
    scoreEl.innerHTML = `Score: ${score}`;

    if(score > 20) {
        showOverlay();
    }
}

function showOverlay() {
    overlay.classList.add('visible' );
}

function randomLocation() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = Math.random() * (width - 200) + 100;
    const y = Math.random() * (height - 200) + 100;
    return { x, y};
}

function catchItem() {
    setTimeout(addItem, 200);
    setTimeout(addItem, 500);
}