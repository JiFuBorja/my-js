const num1Txt = document.getElementById("num1");
const num2Txt = document.getElementById("num2");
const sumTxt = document.getElementById("sum");
const diffTxt = document.getElementById("diff");
const prodTxt = document.getElementById("prod");
const quotTxt = document.getElementById("quot");
let sum = 0;
let diff = 0;
let prod = 0;
let quot = 0;

function calculate() {
    if(!(num1Txt.value === "" || num2Txt.value === "")) {
        
        sum = parseInt(num1Txt.value) + parseInt(num2Txt.value);
        sumTxt.innerHTML = sum;
        diff = parseInt(num1Txt.value) - parseInt(num2Txt.value);
        diffTxt.innerHTML = diff;
        prod = parseInt(num1Txt.value) * parseInt(num2Txt.value);
        prodTxt.innerHTML = prod;
        quot = parseInt(num1Txt.value) / parseInt(num2Txt.value);
        quotTxt.innerHTML = quot;
    }
}

function clearEntries() {
    num1Txt.value = "";
    num2Txt.value = ""
    sumTxt.innerHTML = "";
    sum = 0;
    diffTxt.innerHTML = "";
    diff = 0;
    prodTxt.innerHTML = "";
    prod = 0;
    quotTxt.innerHTML = "";
    quot = 0;

}