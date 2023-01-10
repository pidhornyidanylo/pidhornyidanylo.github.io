const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');


smallCups.forEach((cup, index) => {
    cup.addEventListener('click',() => highliteCups(index));
});

function highliteCups(index) {
    if(smallCups[index].classList.contains('full') && !smallCups[index].nextElementSibling.classList.contains('full')) {
        index--;
    }

    smallCups.forEach((cup, index2) => {
        if(index2 <= index) {
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    });

    updateBigCup();
}

function updateBigCup () {
    const totalCups = smallCups.length;
    const totalFullCups = document.querySelectorAll('.cup-small.full').length;

    if(totalFullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = smallCups.length;
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${totalFullCups / totalCups * 330}px`;
        percentage.innerText = `${totalFullCups * 0.25 * 50}%`;
    }  

    if(totalFullCups === totalCups) {
        remained.style.height = 0;
        remained.style.visibility = 'hidden';
    } else {
        remained.style.visibility = 'visible';
        liters.innerText = `${2 - (totalFullCups * 0.25)}L`;
    }
}

