const hover = document.querySelector('.hover');
const circle = document.querySelector('span');
hover.addEventListener('mouseenter', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    const buttonLeft = e.target.offsetLeft;
    const buttonTop = e.target.offsetTop;

    const xIns = x - buttonLeft;
    const yIns = y - buttonTop;
    console.log(xIns, yIns);

    circle.classList.add('active');
    circle.style.top = (yIns > 120 ? yIns + 150 : yIns - 150) + 'px';
    circle.style.left = xIns + 'px';
});

hover.addEventListener('mouseleave', () => {
    circle.classList.remove('active');
});