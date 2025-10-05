/**
 * Simple Calculator JavaScript Logic
 */

// ------------------------------------------
// 1. Implement Arithmetic Functions
// ------------------------------------------

/**
 * Adds two numbers.
 * @param {number} num1 The first number.
 * @param {number} num2 The second number.
 * @returns {number} The sum of num1 and num2.
 */
function add(num1, num2) {
    return num1 + num2;
}

/**
 * Subtracts the second number from the first.
 * @param {number} num1 The first number (minuend).
 * @param {number} num2 The second number (subtrahend).
 * @returns {number} The difference between num1 and num2.
 */
function subtract(num1, num2) {
    return num1 - num2;
}

/**
 * Multiplies two numbers.
 * @param {number} num1 The first number.
 * @param {number} num2 The second number.
 * @returns {number} The product of num1 and num2.
 */
function multiply(num1, num2) {
    return num1 * num2;
}

/**
 * Divides the first number by the second.
 * Handles division by zero.
 * @param {number} num1 The first number (dividend).
 * @param {number} num2 The second number (divisor).
 * @returns {number|string} The quotient or an error message if dividing by zero.
 */
function divide(num1, num2) {
    if (num2 === 0) {
        return "Error: Divide by Zero";
    }
    return num1 / num2;
}

// ------------------------------------------
// 2. Helper function to Get and Validate Inputs
// ------------------------------------------

/**
 * Gets the values from the input fields, converts them to floats,
 * and provides a default value of 0 if the input is empty or invalid.
 * @returns {{num1: number, num2: number}} The validated numbers.
 */
function getValidatedInputs() {
    // Get the string value from the input field
    const input1Value = document.getElementById('number1').value;
    const input2Value = document.getElementById('number2').value;

    // Convert to a floating-point number. If the result is NaN (Not a Number, 
    // which happens for empty string or invalid input), use 0 instead.
    const num1 = parseFloat(input1Value) || 0;
    const num2 = parseFloat(input2Value) || 0;

    return { num1, num2 };
}

// ------------------------------------------
// 3. Attach Event Listeners
// ------------------------------------------

// Target the result display area
const resultDisplay = document.getElementById('calculation-result');

// --- Addition Listener ---
document.getElementById('add').addEventListener('click', function() {
    const { num1, num2 } = getValidatedInputs();
    const result = add(num1, num2);
    resultDisplay.textContent = result;
});

// --- Subtraction Listener ---
document.getElementById('subtract').addEventListener('click', function() {
    const { num1, num2 } = getValidatedInputs();
    const result = subtract(num1, num2);
    resultDisplay.textContent = result;
});

// --- Multiplication Listener ---
document.getElementById('multiply').addEventListener('click', function() {
    const { num1, num2 } = getValidatedInputs();
    const result = multiply(num1, num2);
    resultDisplay.textContent = result;
});

// --- Division Listener ---
document.getElementById('divide').addEventListener('click', function() {
    const { num1, num2 } = getValidatedInputs();
    const result = divide(num1, num2);
    resultDisplay.textContent = result;
});
