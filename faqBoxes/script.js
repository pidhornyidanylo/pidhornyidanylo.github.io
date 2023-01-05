const btn = document.querySelectorAll('.faq-toggler');

btn.forEach(button => {
    button.addEventListener('click', () => {
        button.parentNode.classList.toggle('active');
    });
});