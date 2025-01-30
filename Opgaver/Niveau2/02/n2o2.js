
    const countElement = document.getElementById('count');
    let count = 0;

    document.getElementById('decrease').addEventListener('click', () => {
        count--;
        countElement.textContent = count;
    });

    document.getElementById('increase').addEventListener('click', () => {
        count++;
        countElement.textContent = count;
    });
