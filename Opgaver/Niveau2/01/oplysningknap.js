const buttons = document.querySelectorAll('#buttons button');

buttons.forEach(function(button) {
    button.addEventListener('click', function () {
        buttons.forEach(function(btn) {
            btn.style.backgroundColor = '';
        });
        button.style.backgroundColor = 'lightblue';
    });
});