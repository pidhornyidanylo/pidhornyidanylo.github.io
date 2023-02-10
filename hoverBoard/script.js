const cont = document.getElementById('cont');
const sqrs = 504;
const colors = ['#FD7500', '#FF9F03', '#02B59F', '#017562', '#022422'];

for(let i = 0; i < sqrs; i++) {
    const squareEl = document.createElement('div');
    squareEl.className = 'square';

    squareEl.addEventListener('mouseenter', () => addColor(squareEl));
    squareEl.addEventListener('mouseleave', () => removeColor(squareEl));


    cont.appendChild(squareEl);
}

function addColor(el) {
    const color = randomHex();
    el.style.background = color;
    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(el) {
    el.style.background = '#1d1d1d';
    el.style.boxShadow = '0 0 2px #000';
}


function randomHex() {
    return colors[Math.floor(Math.random() * colors.length)];
}