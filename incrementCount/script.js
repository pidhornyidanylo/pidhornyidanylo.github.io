const counts = document.querySelectorAll('.counter');


counts.forEach(count => {
    count.innerText = '0';

    const updateCount = () => {
        const target = +count.getAttribute('data-counter');
        const c = +count.innerText;

        const incr = target / 200;

        if(c < target) {
            count.innerText = `${Math.ceil(incr + c)}`;
            setInterval(updateCount, 70);
        }
    };

    updateCount();
});