function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    const displayValue = document.getElementById("display").value;
    const result = eval(displayValue);
    document.getElementById("display").value = result;
}
