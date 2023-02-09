const prev = document.getElementById('left');
const next = document.getElementById('right');
const imgs = document.getElementById('imgs');
const img = document.querySelectorAll('#imgs img');


let idx = 0;

let interval = setInterval(go, 2000);

function go() {
    idx++;
    changes();
}

function changes() {
    if(idx > img.length - 1) {
        idx = 0;
    } else if(idx < 0) {
        idx = img.length - 1;
    }

    imgs.style.transform = `translateX(-${idx * 600}px)`;
}

function reset() {
    clearInterval(interval);
    interval = setInterval(go, 2000);
}

next.addEventListener('click', () => {
    idx++;
    changes();
    reset();
});

prev.addEventListener('click', () => {
    idx--;
    changes();
    reset();
});