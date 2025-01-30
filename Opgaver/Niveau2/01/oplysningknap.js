const buttons = document.querySelectorAll('#buttons button');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.style.backgroundColor = '');
        button.style.backgroundColor = 'lightblue';
    });
});

