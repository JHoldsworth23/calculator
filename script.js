const add = (numA, numB) => numA + numB;
const subtract = (numA, numB) => numA - numB;
const multiply = (numA, numB) => numA * numB;
const divide = (numA, numB) => numA / numB;

const equation = document.querySelector(".equation");
const previousEquation = document.querySelector(".previous-answer");
const numberBtns = document.querySelectorAll(".btn");
numberBtns.forEach(btn => (
    btn.addEventListener('click', () => {
        equation.textContent += btn.id;
    })
));

const operatorBtns = document.querySelectorAll(".operator-btn");
operatorBtns.forEach(btn => (
    btn.addEventListener('click', () => {
        equation.textContent += ` ${btn.textContent} `
    })
));

// user input in the calculator
let firstOperand = null;
let operator = "";
let secondOperand = null;

// create an "operate" function to call the function 
function operate() {
    return calculation[operator];
}

const equalBtn = document.querySelector(".answer-btn");
equalBtn.addEventListener('click', () => {
    const equationArray = equation.textContent.split(" ");
    firstOperand = parseFloat(equationArray[0]);
    secondOperand = parseFloat(equationArray[2]);
    console.log(typeof firstOperand);
});

// create an object for operator : function
const calculation = {
    "+": add(firstOperand, secondOperand),
    "-": subtract(firstOperand, secondOperand),
    "x": multiply(firstOperand, secondOperand),
    "÷": divide(firstOperand, secondOperand)
};