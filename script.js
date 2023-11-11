const add = (numA, numB) => numA + numB;
const subtract = (numA, numB) => numA - numB;
const multiply = (numA, numB) => numA * numB;
const divide = (numA, numB) => numA / numB;

const equation = document.querySelector(".equation")
const numberBtns = document.querySelectorAll(".btn");
numberBtns.forEach(btn => (
    btn.addEventListener('click', () => {
        equation.textContent += btn.id;
    })
));

// user input in the calculator
let firstOperand = 2;
let operator = "+";
let secondOperand = 2;

// create an object for operator : function
const calculation = {
    "+": add(firstOperand, secondOperand),
    "-": subtract(firstOperand, secondOperand),
    "*": multiply(firstOperand, secondOperand),
    "/": divide(firstOperand, secondOperand)
};

// create an "operate" function to call the function 
function operate() {
    return calculation[operator];
}
