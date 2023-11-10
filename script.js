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

// create an "operate" function to call the function 
function operate() {
    if (operator === "+") {
        return add(firstOperand, secondOperand);
    } else if (operator === "-") {
        return subtract(firstOperand, secondOperand);
    } else if (operator === "*") {
        return multiply(firstOperand, secondOperand);
    } else {
        return divide(firstOperand, secondOperand);
    }
}

console.log(operate());

// create an object for operator : function