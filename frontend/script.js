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

// TODO: fix multiply and divide functions

function multiply() {
    let binary1 = document.getElementById('binary1').value;
    let binary2 = document.getElementById('binary2').value;
    if (!isValidBinary(binary1) || !isValidBinary(binary2)) {
        alert('Please enter valid binary numbers (0s and 1s only).');
        return;
    }
    let decimal1 = parseInt(binary1, 2);
    let decimal2 = parseInt(binary2, 2);
    let result = (decimal1 * decimal2).toString(2);
    document.getElementById('result').value = result;
}

function divide() {
    let binary1 = document.getElementById('binary1').value;
    let binary2 = document.getElementById('binary2').value;
    if (!isValidBinary(binary1) || !isValidBinary(binary2)) {
        alert('Please enter valid binary numbers (0s and 1s only).');
        return;
    }
    let decimal1 = parseInt(binary1, 2);
    let decimal2 = parseInt(binary2, 2);
    if (decimal2 === 0) {
        alert('Division by zero is not allowed.');
        return;
    }
    let quotient = (decimal1 / decimal2) | 0;
    let remainder = decimal1 % decimal2;
    document.getElementById('result').value = quotient.toString(2) + ' Remainder: ' + remainder.toString(2);
}

function isValidBinary(binary) {
    return /^[01]+$/.test(binary);
}
