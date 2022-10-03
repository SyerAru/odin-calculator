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

let memArr = [];
let a = [];
let operator = [];
let b = [];

buttons.forEach((button) => {
    button.onclick = () => {
        if (button.classList.contains("number")) {
            if (typeof (a[a.length - 1]) === "string") {
                a.push((button.value));
                a.join();
                //Number(a);
                console.log(a.join());
                console.log(a);

            } else {
                a.push((button.value));
                console.log(a);
            };



        } else if (typeof memArr[memArr.length - 1] == "number" && button.classList.contains("operator")) {


        } else if (typeof memArr[memArr.length - 1] == "number" && button.classList.contains("equal")) {



        } else {


        };
    };
});

// memArr[memArr.length - 1][memArr.length].push(Number(button.value));

// if memArr has string and last item is number and pressed equals, calculate
// if last item is number, remove comma from memArr - splice

btnAllClear.onclick = () => {
    memArr = [];
    calcText.value = memArr;
};

btnClear.onclick = () => {
    memArr.splice(memArr.length - 1, 1);
    calcText.value = memArr.join("");
    console.log(memArr);
};

const add = function add(arr) {
    return arr.lengthS
        ? arr.reduce((accumulator, nextItem) => accumulator + nextItem)
        : 0;
};

const subtract = function subtract(arr) {
    return arr.length
        ? arr.reduce((accumulator, nextItem) => accumulator - nextItem)
        : 0;
};

const multiply = function multiply(arr) {
    return arr.length
        ? arr.reduce((accumulator, nextItem) => accumulator * nextItem)
        : 0;
};

const divide = function divide(arr) {
    return arr.length
        ? arr.reduce((accumulator, nextItem) => accumulator / nextItem)
        : 0;
};

function operate(operator, a, b) {
    return operator(a, b); //use reduce or arr?
};