const input = document.querySelector('#inp');
const users = document.querySelector('.users');
const usersArr = [];
const usersNumber = 50;

input.addEventListener('input', (e) => {
    filterData(e.target.value);
});

function filterData(searchTerm) {
    usersArr.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
        
    });
}

const fetchUSers = async () => {
        await getUser(usersNumber);
};

const getUser = async (idx) => {
    const url = `https://randomuser.me/api/?results=${idx}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results);
    createUsers(data.results);
};

fetchUSers();


const createUsers = (data) => {

    data.forEach(user => {
        const { name, location, picture } = user;

        const userEl = document.createElement('div');
        usersArr.push(userEl);
        userEl.className = 'user';
        userEl.innerHTML = `
        <img src="${picture.medium}" alt="">
        <div class="info">
            <h4 class="name">${name.first + ' ' + name.last}</h4>
            <small class="location">${location.city + ',' + ' ' + location.country}</small>
        </div>       
        `;

        users.appendChild(userEl);
    });
};
