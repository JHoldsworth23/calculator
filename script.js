let firstOperand = '';
let secondOperand = '';
let currentOperator = null;
let shouldReset = false;

const currentEquation = document.querySelector(".number-display");
const equationDisplay = document.querySelector(".equation-display");

const numberButtons = document.querySelectorAll(".number-btn");
const operatorButtons = document.querySelectorAll(".operator-btn");
const equalButton = document.querySelector(".answer-btn");
const clearButton = document.querySelector(".clear-btn");

numberButtons.forEach(button => 
    button.addEventListener('click', () => appendNum(button.textContent))    
);

operatorButtons.forEach(button => 
    button.addEventListener('click', () => setOperation(button.textContent))
);

equalButton.addEventListener('click', calculate);
clearButton.addEventListener('click', clearScreen);

function appendNum(number) {
    if (currentEquation.textContent === "0" || shouldReset) {
        resetCalculator();
    }
    currentEquation.textContent += number;
}

function setOperation(operator) {
    if (currentOperator !== null) calculate();
    firstOperand = currentEquation.textContent;
    currentOperator = operator;
    equationDisplay.textContent = `${firstOperand} ${currentOperator}`;
    shouldReset = true;
}

function resetCalculator() {
    currentEquation.textContent = '';
    shouldReset = false;
}

function clearScreen() {
    currentEquation.textContent = '0';
    equationDisplay.textContent = '';
    firstOperand = '';
    secondOperand = '';
    currentOperator = null;
}

function calculate() {
    if (currentOperator === null || shouldReset) return;
    if (currentOperator === "÷" && currentEquation.textContent === "0") {
        alert("You can't divide by 0!");
        return;
    }
    secondOperand = currentEquation.textContent;
    currentEquation.textContent = fourDecimalPlaces(
        operate(parseFloat(firstOperand), currentOperator, parseFloat(secondOperand))
    );
    equationDisplay.textContent = `${firstOperand} ${currentOperator} ${secondOperand}`;
    currentOperator = null;
}

function fourDecimalPlaces(answer) {
    return Math.floor(answer * 10000) / 10000;
}

const add = (numA, numB) => numA + numB;
const subtract = (numA, numB) => numA - numB;
const multiply = (numA, numB) => numA * numB;
const divide = (numA, numB) => numA / numB;

function operate(firstOperand, currentOperator, secondOperand) {
    const calculation = {
        "+": add(firstOperand, secondOperand),
        "-": subtract(firstOperand, secondOperand),
        "x": multiply(firstOperand, secondOperand),
        "÷": divide(firstOperand, secondOperand)
    };
    return calculation[currentOperator];
}
