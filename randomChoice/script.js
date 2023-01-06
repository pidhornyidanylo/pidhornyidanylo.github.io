const tagsEl = document.getElementById('tags');
const text = document.getElementById('text');

text.focus();

text.addEventListener('keyup', (e) => {
    createTags(e.target.value);

    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = '';
        }, 100);

        randomSelection();
    }
});

function createTags(input) {
    const tagsArray = input.split(',').filter((tag) => tag.trim() !== '').map((tag) => tag.trim());
    
    tagsEl.innerHTML = '';
    tagsArray.forEach(tag => {
        const newTag = document.createElement('span');
        newTag.classList.add('tag');
        newTag.innerText = tag;
        tagsEl.appendChild(newTag);
    });
}

function randomSelection() {
    const times = 30;

    const highliteInterval = setInterval(() => {
        const randomTag = randomTagPicker();
        addHighlite(randomTag);

        setTimeout(() => {
            removeHighlite(randomTag);
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(highliteInterval);
        
        setTimeout(() => {
            const randomTag = randomTagPicker();
            addHighlite(randomTag);
        }, 100);
    }, 100 * times);
}

function randomTagPicker() {
    const tagsEl = document.querySelectorAll('.tag');
    return tagsEl[Math.floor(Math.random() * tagsEl.length)];
}

function addHighlite(element) {
    element.classList.add('highlite');
}

function removeHighlite(element) {
    element.classList.remove('highlite');
}