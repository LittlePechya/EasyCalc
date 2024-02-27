var changePositiveValuesButton = document.getElementById("change-positive-values");
var positiveRow = document.getElementById("positive-row");

var changeNegativeValuesButton = document.getElementById("change-negative-values");
var negativeRow = document.getElementById("negative-row");

changePositiveValuesButton.addEventListener("click", () => {
    var newValues = prompt("Введите новые значения для положительных чисел (формат записи: 3 8 9.25 7):");

    if (newValues !== null) {
        newValues = newValues.replace(",", "."); // Замена запятых на точки

        var parsedValues = newValues.trim().split(/\s+/).map(value => {
            var parsedValue = parseFloat(value);
            return isNaN(parsedValue) || parsedValue < 0 ? 0 : parsedValue;
        });

        while (positiveRow.firstChild) {
            positiveRow.removeChild(positiveRow.firstChild);
        }

        parsedValues.forEach(value => {
            var button = document.createElement("button");
            button.classList.add("main-btn");
            button.innerText = "+" + value.toString();
            positiveRow.appendChild(button);
        });
    }
});

changeNegativeValuesButton.addEventListener("click", () => {
    var newValues = prompt("Введите новые значения для отрицательных чисел (формат записи: 3 8 9.25 7):");

    if (newValues !== null) {
        newValues = newValues.replace(",", "."); // Замена запятых на точки

        var parsedValues = newValues.trim().split(/\s+/).map(value => {
            var parsedValue = parseFloat(value);
            return isNaN(parsedValue) || parsedValue < 0 ? 0 : parsedValue;
        });

        while (negativeRow.firstChild) {
            negativeRow.removeChild(negativeRow.firstChild);
        }

        parsedValues.forEach(value => {
            var button = document.createElement("button");
            button.classList.add("main-btn");
            button.innerText = "-" + value.toString();
            negativeRow.appendChild(button);
        });
    }
});