const btn_open = document.querySelector('.btn-open')
const btn_close = document.querySelector('.btn-close')
const navs = document.querySelectorAll('.nav')

btn_open.addEventListener('click', () => {
    navs.forEach(nav => nav.classList.add('visible'));
});

btn_close.addEventListener('click', () => {
    navs.forEach(nav => nav.classList.remove('visible'));
});