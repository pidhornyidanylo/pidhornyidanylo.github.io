let transition = 1000;

const inp = document.querySelector('input');
const clear = document.querySelector('.bar.clear');
const arrow = document.querySelector('.bar.arrow');
const form = document.getElementById('form');

console.log(inp, form);

inp.focus();

function showClearBar() {
    inp.addEventListener('input', () => {
        clear.style = 'opacity: 1';
    
        if(inp.value.length < 1) {
            clear.style = 'opacity: 0';
        }
    });
}

showClearBar();

function movement() {
    clear.addEventListener('click', () => {
        clear.style = 'opacity: 0; transform: rotate(90deg)';
        arrow.style = 'opacity: 1; transform: rotate(0deg)';

        setTimeout(() => {
            arrow.style = 'left: -175px; opacity: 1; display: block; width: 300px; background-color: white';
        }, 300);
    
        setTimeout(() => {
            inp.value = '';
            arrow.style = 'left: 0px; opacity: 0; z-index: -1; display: block';
            inp.focus();
        }, 1000);
    });
}

movement();

