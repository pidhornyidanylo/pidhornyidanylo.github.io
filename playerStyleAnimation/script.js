const cont = document.querySelector('.container');

const numSpans = Math.ceil(window.innerWidth / 8);

function createSpans() {
    for(let i = 1; i < numSpans; i++) {
        if(i <= numSpans) {
            const newLine = document.createElement('span');
            newLine.classList.add('line');
            cont.appendChild(newLine);
        }
    }
}

createSpans();


const interval = setInterval(() => {
    const spansList = document.querySelectorAll('span');
    spansList.forEach(span => {
        const random = randomHeight();
        span.style.height = random;
    });
}, 100);


function randomHeight() {
    return Math.random() * 150 + 'px';
}

function randomSpan() {
    const spansList = document.querySelectorAll('span');
    return Math.floor(Math.random() * spansList.length);
}
