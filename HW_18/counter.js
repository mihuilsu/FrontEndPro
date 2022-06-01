window.onload = function () {
    let incButton = document.getElementById("plus-button");
    incButton.onclick = incClick;
    
    let decButton = document.getElementById("minus-button");
    decButton.onclick = decClick;

    let resButton = document.getElementById("reset-button")
    resButton.onclick = resCounter;

}

var countVal = 0;

incClick = function () {
    updateDisplay(++countVal);
}

decClick = function () {
    updateDisplay(--countVal);
}

function resCounter() {
    countVal = 0;
    updateDisplay(countVal);
}

function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
}
