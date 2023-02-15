const input = document.getElementById('range');
const label = document.querySelector('label');

console.log(input.value, label);

input.addEventListener('input', () => {
    label.innerText = input.value;
    label.style.left = `${input.value * 3}px`;
});