const content = document.querySelectorAll('.content');
const lis = document.querySelectorAll('li');
let i = 0;

lis.forEach((item, idx) => {
    item.addEventListener('click', () => {
        hideContents();
        hideItems();

        item.classList.add('active');
        content[idx].classList.add('show');
    });
});

function hideContents() {
    content.forEach(con => con.classList.remove('show'));
}

function hideItems() {
    lis.forEach(li => li.classList.remove('active'));
}
