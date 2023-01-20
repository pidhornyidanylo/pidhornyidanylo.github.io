const btn = document.getElementById('button');

btn.addEventListener('click', function(e) {
    const x = e.clientX;
    const y = e.clientY;

    const buttonLeft = e.target.offsetLeft;
    const buttonTop = e.target.offsetTop;

    const xIns = x - buttonLeft;
    const yIns = y - buttonTop;

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yIns + 'px';
    circle.style.left = xIns + 'px';

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
});

