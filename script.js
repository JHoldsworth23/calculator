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
const pointButton = document.querySelector(".dot-btn");
const deleteButton = document.querySelector(".delete-btn");
const minusButton = document.querySelector(".minus-btn");
const percentButton = document.querySelector(".percent-btn");

window.addEventListener('keydown', keyboardInput);

numberButtons.forEach(button => 
    button.addEventListener('click', () => appendNum(button.textContent))    
);

operatorButtons.forEach(button => 
    button.addEventListener('click', () => setOperation(button.textContent))
);

equalButton.addEventListener('click', calculate);
clearButton.addEventListener('click', clearScreen);
pointButton.addEventListener('click', appendDecimalPoint);
deleteButton.addEventListener('click', removeLastDigit);
minusButton.addEventListener('click', convertMinus);
percentButton.addEventListener('click', convertPercent);

function appendNum(number) {
    if (currentEquation.textContent === "0" || currentEquation.textContent === "-0" || shouldReset) resetCalculator();
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

function clearScreen() {
    currentEquation.textContent = '0';
    equationDisplay.textContent = '0';
    firstOperand = '';
    secondOperand = '';
    currentOperator = null;
}

function appendDecimalPoint() {
    if (shouldReset) resetCalculator();
    if (currentEquation.textContent === '') {
        currentEquation.textContent = '0';
    }
    if (currentEquation.textContent.includes(".")) return;
    currentEquation.textContent += '.'
}

function removeLastDigit() {
    currentEquation.textContent.length === 1 
    ? currentEquation.textContent = "0"
    : currentEquation.textContent = currentEquation.textContent.toString().slice(0, -1);
}

function convertMinus() {
    currentEquation.textContent.includes("-") 
    ? currentEquation.textContent = currentEquation.textContent.slice(1)
    : currentEquation.textContent = `-${currentEquation.textContent}`;
}

function convertPercent() {
    if (currentEquation.textContent.includes(".")) return;
    currentEquation.textContent = currentEquation.textContent / 100;
}

function keyboardInput(event) {
    if (event.key >= 0 && event.key <= 9) appendNum(event.key)
    if (event.key === ".") appendDecimalPoint();
    if (event.key === "Enter" || event.key === "=") calculate();
    if (event.key === "Backspace") removeLastDigit();
    if (event.key === "Delete") clearScreen();
    if (event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/") {
        setOperation(convertMathOperator(event.key))
    }
}

function convertMathOperator(keyboardOperator) {
    return keyboardOperator === "/" ? "÷" : keyboardOperator === "*" ? "x" : keyboardOperator;
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
