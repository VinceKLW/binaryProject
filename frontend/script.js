function add() {
    let binary1 = document.getElementById('binary1').value;
    let binary2 = document.getElementById('binary2').value;
    if (!isValidBinary(binary1) || !isValidBinary(binary2)) {
        alert('Please enter valid binary numbers (0s and 1s only).');
        return;
    }
    let decimal1 = parseInt(binary1, 2);
    let decimal2 = parseInt(binary2, 2);
    let result = (decimal1 + decimal2).toString(2);
    document.getElementById('result').value = result;
}

function subtract() {
    let binary1 = document.getElementById('binary1').value;
    let binary2 = document.getElementById('binary2').value;
    if (!isValidBinary(binary1) || !isValidBinary(binary2)) {
        alert('Please enter valid binary numbers (0s and 1s only).');
        return;
    }
    let decimal1 = parseInt(binary1, 2);
    let decimal2 = parseInt(binary2, 2);
    let result = (decimal1 - decimal2).toString(2);
    document.getElementById('result').value = result;
}

function isValidBinary(binary) {
    return /^[01]+$/.test(binary);
}
