let firstOperand = '';
let secondOperand = '';
let currentOperator = '';
let shouldReset = false;

const equation = document.querySelector(".equation");
const answer = document.querySelector(".answer");

const numberBtns = document.querySelectorAll(".btn");
const operatorBtns = document.querySelectorAll(".operator-btn");
const equalBtn = document.querySelector(".answer-btn");
const clearBtn = document.querySelector(".clear-btn");

numberBtns.forEach(btn => (
    btn.addEventListener('click', () => {
        equation.textContent += btn.textContent;
    })
));

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
