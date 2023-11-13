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

operatorBtns.forEach(btn => (
    btn.addEventListener('click', () => {
        equation.textContent += ` ${btn.textContent} `;
    })
));

equalBtn.addEventListener('click', calculate);

clearBtn.addEventListener('click', () => {
    equation.textContent = '';
})

const add = (numA, numB) => numA + numB;
const subtract = (numA, numB) => numA - numB;
const multiply = (numA, numB) => numA * numB;
const divide = (numA, numB) => numA / numB;

function operate() {
    const calculation = {
        "+": add(firstOperand, secondOperand),
        "-": subtract(firstOperand, secondOperand),
        "x": multiply(firstOperand, secondOperand),
        "÷": divide(firstOperand, secondOperand)
    };
    return calculation[operator];
}

function calculate() {
    equation.textContent += ' = ';
    equation.textContent = `${equation.textContent}`;

    firstOperand = parseFloat(equationArray[0]);
    secondOperand = parseFloat(equationArray[2]);
    currentOperator = equationArray[1];

    const equationArray = equation.textContent.split(" ");
    answer.textContent = `${operate()}`;
}
