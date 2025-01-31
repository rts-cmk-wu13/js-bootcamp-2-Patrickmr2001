
    const countElement = document.getElementById('count');
    let count = 0;

    document.getElementById('decrease').addEventListener('click', function() {
        if (count > 0) {
            count--;
            countElement.textContent = count;
        }
    });

    document.getElementById('increase').addEventListener('click', function() {
        count++;
        countElement.textContent = count;
    });
