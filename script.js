const add = (numA, numB) => numA + numB;
const subtract = (numA, numB) => numA - numB;
const multiply = (numA, numB) => numA * numB;
const divide = (numA, numB) => numA / numB;

const equation = document.querySelector(".equation");
const answer = document.querySelector(".answer");

const numberBtns = document.querySelectorAll(".btn");
numberBtns.forEach(btn => (
    btn.addEventListener('click', () => {
        equation.textContent += btn.textContent;
    })
));

const operatorBtns = document.querySelectorAll(".operator-btn");
operatorBtns.forEach(btn => (
    btn.addEventListener('click', () => {
        equation.textContent += ` ${btn.textContent} `;
    })
));

const equalBtn = document.querySelector(".answer-btn");
equalBtn.addEventListener('click', calculate);

const clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener('click', () => {
    equation.textContent = '';
})

function operate(firstOperand, operator, secondOperand) {
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
    
    const equationArray = equation.textContent.split(" ");
    answer.textContent = `${operate(parseFloat(equationArray[0]), equationArray[1], parseFloat(equationArray[2]))}`;
}
