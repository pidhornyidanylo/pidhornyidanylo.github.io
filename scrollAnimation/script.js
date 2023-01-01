const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerPoint = window.innerHeight * 0.8;
    console.log(triggerPoint);

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        console.log(boxTop);
        if (boxTop < triggerPoint) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });

}