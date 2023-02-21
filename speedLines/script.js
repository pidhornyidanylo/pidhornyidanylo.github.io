const cont = document.querySelector('.container');
const colors = [
    '#eec7d5',
    '#8b4a8e',
    '#40699b',
    '#10270f',
    '#9a0808',
    '#b88121',
    '#b9b95a'
];

let count = 0;

function createLine() {
    const line = document.createElement('div');
    line.className = 'line';

    const y = getTop();
    const w = getWidth();
    const c = getColor();
    const a = getSpeed();

    line.style = `top: ${y}px; width: ${w < 100 ? 120 : w}px; background-color: ${c}; animation: trip ${a < 1 ? 0.5 : a}s linear infinite`;

    cont.appendChild(line);
    
    count++;

    if(count > 40) {
        clearInterval(int);
    }
}


const int = setInterval(createLine, 300);

function getTop() {
    const height = window.innerHeight;
    const y = Math.floor(Math.random() * height);
    return y;
}

function getWidth() {
    return Math.floor(Math.random() * 300);
}

function getColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function getSpeed() {
    return Math.random() * 3;
}