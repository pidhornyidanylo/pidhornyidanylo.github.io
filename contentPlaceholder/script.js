
const header = document.getElementById('header');
const title = document.getElementById('title');
const sub = document.getElementById('sub');
const profileImg = document.getElementById('card-image');
const nameAuth = document.getElementById('name');
const date = document.getElementById('date');

const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedBgTexts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
    header.innerHTML =
    '<img src="1.jpg" alt="bg">';
  title.innerHTML = 'Lorem ipsum dolor sit amet';
  sub.innerHTML =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, aliquam.';
  profileImg.innerHTML =
    '<img src="2.jpg" alt="author">';
  nameAuth.innerHTML = 'John Doe';
  date.innerHTML = 'Jan 30, 2023';

  animatedBgs.forEach((bg) => bg.classList.remove('animated-bg'));
  animatedBgTexts.forEach((bg) => bg.classList.remove('animated-bg-text'));
}