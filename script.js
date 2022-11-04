const calcText = document.querySelector("#calcText");

const btnClear = document.querySelector("#btnClear");
const btnAllClear = document.querySelector("#btnAllClear");
const btnInteger = document.querySelector("#btnInteger");
const btnDivide = document.querySelector("#btnDivide");

const btn7 = document.querySelector("#btn7");
const btn8 = document.querySelector("#btn8");
const btn9 = document.querySelector("#btn9");
const btnMultiply = document.querySelector("#btnMultiply");

const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const btnSubtract = document.querySelector("#btnSubtract");

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btnAdd = document.querySelector("#btnAdd");

const btn0 = document.querySelector("#btn0");
const btnDecimal = document.querySelector("#btnDecimal");
const btnEqual = document.querySelector("#btnEqual");

const buttons = document.querySelectorAll("button");

let memArr = [0];
let operator = 0;
let operatorValue;
let numA = [];
let numB = [];
let display = [0];

function add(numA, numB) {
    return numA + numB;
};

function subtract(numA, numB) {
    return numA - numB;
};

function multiply(numA, numB) {
    return numA * numB;
};

function divide(numA, numB) {
    return numA / numB;
};

function operate(operator, numA, numB) {
    return window[operator](numA, numB);
};

buttons.forEach((button) => {
    button.onclick = () => {

        if (button.classList.contains("number")) {

            //Zero is default unless another number is entered 
            if (memArr == 0 && numA.length < 1) { //if you don't want to use 0 as numA
                memArr = [];

            };

            //Entering decimal vs number
            if (button.value == "." && !memArr.includes(".")) { //using decimal
                memArr.push(button.value);

            } else if (button.value != ".") { //entering numbers into memArr to be added to numA or numB later
                memArr.push(Number(button.value));
            };

        } else if (button.classList.contains("operator") && memArr.length > 0) {

            if (typeof numA == "number" && typeof operator == "string") {
                
                numB = Number(memArr.join(""));

                memArr = operate(operator, numA, numB);
                
                numA = memArr;
                console.log("numA", numA) //to display

                memArr = [];

                operator = button.id;
                operatorValue = button.textContent;

                numB = [];

            } else {
                numA = Number(memArr.join(""));

                operator = button.id;
                operatorValue = button.textContent;
                console.log("operatorvalue", operatorValue)
                memArr = [];

            };

        } else if (button.classList.contains("equal") && typeof operator == "string" && memArr.length > 0) {
            numB = Number(memArr.join(""));

            if (operator == "divide" && numB == 0) { //dividing by zero
                memArr = "Uh Oh"

                operator = 0;

            } else { //regular operations
                memArr = operate(operator, numA, numB);
                memArr = [Number(+memArr.toFixed(2))];

                operator = 0;
                numA = memArr;
                numB = [];

                operatorValue = button.textContent;

            };
        };
        toDisplay();
        console.log(memArr);
        console.log(operator);
    };
});

btnAllClear.onclick = () => {
    memArr = [0];
    numA = [];
    numB = [];

    toDisplay();
    // display = [0];
    // calcText.textContent = display.join("");
};

btnClear.onclick = () => {
    memArr.pop();
    [display].pop(); //WIP
    toDisplay();

    if (display.length < 1) {
        // display = [0];
        memArr = [0];
    };

    // calcText.textContent = display.join("");
};

function toDisplay() {
    if (typeof numA !== "number") {
        display = memArr.join('');
    } else if (typeof numA === "number" && operator !== 0) {
        display = numA + operatorValue; //btnAdd.value ?
        console.log("b", numA + operatorValue)
    } else if (typeof numB !== "number" && typeof numA === "number" && operator !== 0) {
        display = numA + operatorValue + memArr;
        console.log("c", numA + operatorValue + memArr)
    } else if (typeof numA === "number" && typeof numB === "number" && operator !== 0) {
        display = memArr.join('');
    }

    calcText.textContent = display;
};