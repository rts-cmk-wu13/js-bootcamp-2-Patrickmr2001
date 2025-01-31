const button = document.querySelector('button');

button.addEventListener('click', function() {
    if (button.style.backgroundColor === 'red') {
        button.style.backgroundColor = 'white';
    } else {
        button.style.backgroundColor = 'red';
    }
});