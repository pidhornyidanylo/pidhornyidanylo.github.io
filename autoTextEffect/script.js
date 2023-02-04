const textElement = document.getElementById('text');
let text = 'Hello World!';
const speedElement = document.getElementById('speed');
const newText = document.getElementById('textInner');
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

newText.addEventListener('input', (e) => {
    text = e.target.value;

    if(e.target.value === '') {
        text = 'Type me!!!';
    }
});