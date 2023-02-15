const panel = document.querySelector('.panel');
const button = document.getElementById('review');
const ratingsAll = document.querySelectorAll('.rating');
const ratings = document.querySelector('.ratings');

ratings.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('rating')) {
        removeActive();
        e.target.parentNode.classList.add('active');
    }
});

function removeActive() {
    ratingsAll.forEach(rating => {
        rating.classList.remove('active');
    });
}

button.addEventListener('click', () => {
    panel.innerHTML = `
    <i class="fa fa-solid fa-heart"></i>
    <br>
    <small style="font-size:18px">Thank you!</small>
    <br>
    <br>
    <small style="font-size:18px">Feedback: ${document.querySelector('.active').innerText}</small>
    <br>
    <p style="font-size:18px" >We'll use your feedback to improve our customer service
    `;
});