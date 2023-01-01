const load = document.querySelector('.loading');
const bg = document.querySelector('.bg');

let count = 0;
let int = setInterval(blurring, 30);

function blurring () {
    count ++;

    if (count > 99) {
        clearInterval(int);
    }

    load.innerHTML = `${count}%`;
    load.style.opacity = scale(count, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(count, 0, 100, 30, 0)}px)`;

}



function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}


// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers