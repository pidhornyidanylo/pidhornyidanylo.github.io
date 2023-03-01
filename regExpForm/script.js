const user = document.getElementById('txt');
const pass = document.getElementById('pas');
const enter = document.querySelector('button');

enter.addEventListener('click', () => {
    checkEmail();
    checkPassword();
});


function checkEmail() {
    let input = user.value;
    let regExp = /[0-9a-zA-Z]+@\w+\.\w+/;
    let test = regExp.test(input);

    if(!test) {
        alert('Email address or/and password is not valid');
    }
}

function checkPassword() {
    let input = user.value;
    let regExp = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{3,20}/;
    let test = regExp.test(input);

    if(!test) {
        alert('Passwords should contain three of the four character types: uppercase letters: A-Z, lowercase letters: a-z, numbers: 0-9, symbols');
    }
}