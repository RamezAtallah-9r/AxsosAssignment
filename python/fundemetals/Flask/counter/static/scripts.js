function sub(el) {
    var input = document.getElementById("inputText"); // Added quotes
    var currentValue = Number(input.value) || 0;     // Convert to number, default to 0
    input.value = currentValue - 2;
}

function add(el) {
    var input = document.getElementById("inputText"); // Added quotes
    var currentValue = Number(input.value) || 0;     // Convert to number, default to 0
    input.value = currentValue + 2;
}