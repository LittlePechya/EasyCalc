var valueElement = document.getElementById("value");
var positiveRow = document.getElementById("positive-row");
var negativeRow = document.getElementById("negative-row");

var undoButton = document.getElementById("undo-button");
var cleanButton = document.getElementById("clean-button");

var valueHistory = [0];

function updateUndoButton() {
    undoButton.disabled = valueHistory.length < 2;
}

positiveRow.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        var value = parseInt(valueElement.innerText);
        var increment = parseInt(event.target.innerText);
        value += increment;
        valueElement.innerText = value;
        valueHistory.push(value);
        updateUndoButton();
    }
});

negativeRow.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        var value = parseInt(valueElement.innerText);
        var decrement = parseInt(event.target.innerText);
        value -= Math.abs(decrement);
        valueElement.innerText = value;
        valueHistory.push(value);
        updateUndoButton();
    }
});

cleanButton.addEventListener("click", () => {
    valueElement.innerText = 0;
    valueHistory = [0];
    updateUndoButton();
});

undoButton.addEventListener("click", () => {
    if (valueHistory.length >= 2) {
        valueHistory.pop();
        var previousValue = valueHistory[valueHistory.length - 1];
        valueElement.innerText = previousValue;
        updateUndoButton();
    }
});