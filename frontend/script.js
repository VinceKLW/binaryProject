let isBinary = true;

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

    let result = (decimal1 / decimal2).toString(2);

    document.getElementById('result').value = result;
}


function convert() {
    let inputElement = document.getElementById('result');
    let value = inputElement.value;

    if (isBinary) {
        // Convert from binary to decimal
        let decimal = parseInt(value, 2);
        // Update the input element with decimal or error message if binary was invalid
        inputElement.value = isNaN(decimal) ? 'Invalid binary number' : decimal;
    } else {
        // Convert from decimal to binary
        // Ensure that the input is a valid decimal number
        let decimal = parseInt(value, 10);
        if (isNaN(decimal)) {
            inputElement.value = 'Invalid decimal number';
        } else {
            inputElement.value = decimal.toString(2);
        }
    }
    isBinary = !isBinary;
}

function isValidBinary(binary) {
    return /^[01]+$/.test(binary);
}
