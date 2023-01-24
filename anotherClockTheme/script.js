const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('button');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


toggle.addEventListener('click', () => {
    const html = document.querySelector('html');
    html.style.transition = 'all .5s ease-in';

    if(html.classList.contains('dark')) {
        html.classList.remove('dark');
        toggle.innerTEXT = 'Dark Mode';
    } else {
        html.classList.add('dark');
        toggle.innerTEXT = 'Light Mode';
    }
});

function setTime() {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const date = time.getDate();
    const day = time.getDay();
    const month = time.getMonth();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    timeEl.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds} ${ampm}`;
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span>${date}</span>`;

}

setTime();

setInterval(setTime, 1000);