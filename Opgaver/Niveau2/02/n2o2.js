let count = 0;
const countElement = document.getElementById("count");

function increase() {
    count++;
    countElement.textContent = count;
}

function decrease() {
    if (count > 0) {
        count--;
        countElement.textContent = count;
    }
}