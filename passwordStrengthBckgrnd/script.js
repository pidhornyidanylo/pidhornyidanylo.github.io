const bckg = document.getElementById('background');
const pass = document.getElementById('password');

pass.addEventListener('input', () => {
    let passwordLength = pass.value.length;
    bckg.style.filter = `blur(${10 - passwordLength}px)`;
});


// pass.addEventListener('input', (e) => {
//     const input = e.target.value;
//     const length = input.length;
//     const blurVal = 20 - length * 2;
//     bckg.style.filter = `blur(${blurVal}px)`;
// });