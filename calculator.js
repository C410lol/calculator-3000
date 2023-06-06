//Numbers
const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");

//Functions
const restart = document.querySelector("#restart");
const division = document.querySelector("#division");
const minus = document.querySelector("#minus");
const multiplication = document.querySelector("#multiplication");
const addition = document.querySelector("#addition");
const comma = document.querySelector("#comma");
const equals = document.querySelector("#equals");

//Display Text
const displayTxt = document.querySelector("#display_txt");
let displayNumber = "";

//Others
let number01;
let currentFunction;

function setDisplayTxt() {
    displayTxt.innerText = displayNumber;
}

function setNumberBtns() {
    zero.addEventListener("click", function() {
        const newNumber = displayNumber + "0";
        displayNumber = newNumber;
        setDisplayTxt();
    })
    one.addEventListener("click", function() {
        const newNumber = displayNumber + "1";
        displayNumber = newNumber; 
        setDisplayTxt();
    });
    two.addEventListener("click", function() {
        const newNumber = displayNumber + "2";
        displayNumber = newNumber;
        setDisplayTxt();
    });
    three.addEventListener("click", function() {
        const newNumber = displayNumber + "3";
        displayNumber = newNumber;
        setDisplayTxt();
    });
    four.addEventListener("click", function() {
        const newNumber = displayNumber + "4";
        displayNumber = newNumber;
        setDisplayTxt();
    });
    five.addEventListener("click", function() {
        const newNumber = displayNumber + "5";
        displayNumber = newNumber;
        setDisplayTxt();
    });
    six.addEventListener("click", function() {
        const newNumber = displayNumber + "6";
        displayNumber = newNumber;
        setDisplayTxt();
    });
    seven.addEventListener("click", function() {
        const newNumber = displayNumber + "7";
        displayNumber = newNumber;
        setDisplayTxt();
    });
    eight.addEventListener("click", function() {
        const newNumber = displayNumber + "8";
        displayNumber = newNumber;
        setDisplayTxt();
    });
    nine.addEventListener("click", function() {
        const newNumber = displayNumber + "9";
        displayNumber = newNumber;
        setDisplayTxt();
    });
}

function setFunctionBtns() {
    restart.addEventListener("click", function() {
        displayNumber = "";
        number01 = null;
        currentFunction = null;
        setDisplayToZero();
        });
    division.addEventListener("click", function() {
        setCurrentFunction("division");
    });
    minus.addEventListener("click", function() {
        setCurrentFunction("minus");
    });
    multiplication.addEventListener("click", function() {
        setCurrentFunction("multiplication");
    });
    addition.addEventListener("click", function() {
        setCurrentFunction("addition");
    });
    comma.addEventListener("click", function() {
        const newNumber = displayNumber + ",";
        displayNumber = newNumber;
        setDisplayTxt();
    });
    equals.addEventListener("click", function() {
        let number02;
        if(displayNumber.replace(/,/g, "") === "") {
            number02 = 0;
        } else {
            number02 = parseFloat(displayNumber.replace(",", "."));
        }
        let result = "";
        if(currentFunction === "division") {
            result = number01 / number02;
        } else if(currentFunction === "minus") {
            result = number01 - number02;
        } else if(currentFunction === "multiplication") {
            result = number01 * number02;
        } else if(currentFunction === "addition") {
            result = number01 + number02;
        } else {
            result = displayTxt.textContent;
        }
        displayTxt.innerText = result;
        displayNumber = "";
        number01 = null;
        currentFunction = null;
    });
}

function setCurrentFunction(selectedFunction) {
    currentFunction = selectedFunction;
    if(displayNumber.replace(/,/g, "") === "") {
        displayNumber = "0";
    }
    number01 = parseFloat(displayNumber.replace(",", "."));
    displayNumber = "";
    setDisplayToZero();
}

function setDisplayToZero() {
    displayTxt.innerText = "0";
}

setDisplayToZero();
setNumberBtns();
setFunctionBtns();
