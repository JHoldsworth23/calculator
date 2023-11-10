function add(numA, numB) {
    return numA + numB;
}

function subtract(numA, numB) {
    return numA - numB;
}

function multiply(numA, numB) {
    return numA * numB;
}

function divide(numA, numB) {
    return numA / numB;
}

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

