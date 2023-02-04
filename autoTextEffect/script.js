const textElement = document.getElementById('text');
const text = 'Hello World!';
const speedElement = document.getElementById('speed');

let idx = 1;
let speed = 300 / speedElement.value;

writeText();

function writeText() {
    textElement.innerText = text.slice(0, idx);

    idx++;

    if(idx > text.length) {
        idx = 1;
    }

    setTimeout(writeText, speed);
}

speedElement.addEventListener('input', (e) => {
    speed = 300 / e.target.value;
});