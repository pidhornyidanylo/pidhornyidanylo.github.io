const input = document.querySelector('input');
const display = document.querySelector('.calc-grid');

let firstNumber = '';
let secondNumber = '';
let sign = '';
let finish = false;


const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const signs = ['×', '−', '+', '÷'];


function clearInput() {
    firstNumber = '';
    secondNumber = '';
    sign = '';
    finish = false;
    input.value = '';
}

document.getElementById('clear').addEventListener('click', () => clearInput());

display.addEventListener('click', (e) => {
    if(!e.target.classList.contains('item')) {
        return;
    }
    if(e.target.id === 'clear') {
        input.style = 'font-size: 140px';
        return;
    }

    input.value = '';

    const key = e.target.textContent;

    if(digits.includes(key) && key !== '.') {
        if(secondNumber === '' && sign === '') {
            firstNumber += key;
            input.value = firstNumber;
        } else if(firstNumber !== '' && secondNumber !== '' && finish) {
            secondNumber = key;
            finish = false;
            input.value = secondNumber;
        } else {
            secondNumber += key;
            input.value = secondNumber;
        }
    }

    if(signs.includes(key)) {
        sign = key;
        input.value = sign;
        console.log(firstNumber, secondNumber, sign);
    }

    if(key === '=') {
        if(secondNumber === '') {
            secondNumber = firstNumber;
        }
        switch(sign) {
            case "×":
                firstNumber = (+firstNumber) * (+secondNumber);
                break;
            case "÷":
                if(secondNumber === '0') {
                    input.value = 'Error';
                    firstNumber = '';
                    secondNumber = '';
                    sign = '';
                    return;
                }
                firstNumber = (+firstNumber) / (+secondNumber);
                break;
            case "+":
                firstNumber = (+firstNumber) + (+secondNumber);
                break;
            case "−":
                firstNumber = (+firstNumber) - (+secondNumber);
                break;
        }
        
        finish = true;
        input.value = isInt(firstNumber);
    }

    function isInt(num) {
        return Number.isInteger(num) ? num : num.toFixed(9);
    }

    
    if(key === '.' && secondNumber === '' && !finish && !firstNumber.includes('.')) {
        firstNumber += '.';
        input.value = firstNumber;
        return;
    } else if(key === '.' && secondNumber === '' && !finish && firstNumber.includes('.')) {
        firstNumber += '';
        input.value = firstNumber;
        return;
    } else if(key === '.' && firstNumber !== '' && !finish && !secondNumber.includes('.')) {
        secondNumber += '.';
        input.value = secondNumber;
        return;
    } else if(key === '.' && firstNumber !== '' && !finish && secondNumber.includes('.')) {
        secondNumber += '';
        input.value = secondNumber;
        return;
    } 


    if(key === '+/-' && secondNumber === '' && !finish) {
        let minus = '-';
        firstNumber = minus + firstNumber;
        input.value = firstNumber;
    } else if(key === '+/-' && firstNumber !== '' && !finish) {
        let minus = '-';
        secondNumber = minus + secondNumber;
        input.value = secondNumber;
    }

    if(key === '%' && secondNumber === '' && !finish) {
        firstNumber = firstNumber / 100;
        input.value = firstNumber;
    } else if(key === '%' && firstNumber !== '' && !finish) {
        secondNumber = secondNumber / 100;
        input.value = secondNumber;
    }
    
    if(firstNumber.length > 7 && sign === '' && secondNumber === '' && !finish) {
        input.style = 'font-size: 70px';
    } else if(secondNumber.length > 7 && sign !== '' && firstNumber !== '' && !finish) {
        input.style = 'font-size: 70px';
    } else if(finish && input.value.length > 7) {
        input.style = 'font-size: 70px';
    } else {
        input.style = 'font-size: 140px';
    }
});


