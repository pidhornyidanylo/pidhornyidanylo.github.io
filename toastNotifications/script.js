const button = document.querySelector('button');
const toastCont = document.querySelector('.toast-container');

const array = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
    'Message Five',
    'Message Six'
];

const colors = [
    'coral',
    'cadetblue',
    'darkorange',
    'darkcyan',
    'deeppink',
    'goldenrod',
    'plum'
];

let counter = 0;

button.addEventListener('click', () => {
    const toast = document.createElement('div');
    toast.classList = 'toast';
    toast.innerText = array[counter];
    toast.style.backgroundColor = randomColor();
    toastCont.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
    counter++;
    if(counter > array.length) {
        counter = 0;
        toastCont.innerHTML = '';
        button.innerText = 'Ooops.. No notifications to show';
        setTimeout(() => button.innerText = 'Click here to show notification', 2000);
    } 
});

function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}