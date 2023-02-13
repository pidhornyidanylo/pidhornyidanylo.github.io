const inputs = document.querySelectorAll('input');

inputs[0].focus();

inputs.forEach((inp, idx) => {
    inp.addEventListener('keydown', (e) => {
        if(e.key >= 0 && e.key <= 9 && inp.nextElementSibling) {
            setTimeout(() => {inputs[idx + 1].focus();}, 1);
        } else if(e.key === 'ArrowLeft' || e.key === 'Backspace') {
            inputs[idx - 1].value = '';
            inputs[idx - 1].focus();
        } 
    });
});