/* OUR FIRST ATTEMPT WAS CORRECT LOL BUT WE WERE MISSING OUR RETURN STATEMENT:

const add = (a,b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a,b) => a * b;
const divide = function(a,b){
    if (b > a) return (b / a);
    else if (a > b || a == b) return (a / b);
} 

function addAgain(a,b){
    let result = a + b;
    return result;
}

const operate = (dothis,x,y) => {
    if (dothis && (typeof dothis == 'function'))    {
        return dothis(x,y);
}
};
*/

//Our second attempt is also correct:

let displayValue = document.getElementById('screenOutput');
let numberinos = document.getElementsByClassName('numberinos');

let numberinoOne = document.getElementById('one').innerText;
let numberinoTwo = document.getElementById('two').innerText;
let numberinoThree = document.getElementById('three').innerText;
let numberinoFour = document.getElementById('four').innerText;
let numberinoFive = document.getElementById('five').innerText;
let numberinoSix = document.getElementById('six').innerText;
let numberinoSeven = document.getElementById('seven').innerText;
let numberinoEight = document.getElementById('eight').innerText;
let numberinonNine = document.getElementById('nine').innerText;
let numberinoZero = document.getElementById('zero').innerText;

numberinos.addEventListener('click', function(){
    
};

function addy(a,b){
    let addition = a+b;
    return addition;
}

function subtracty(c,d){
    let subtraction = c-d;
    return subtraction;
}

function multiplyy(e,f){
    let multiplication = e * f;
    return multiplication;
}

function dividey(g,h){
    let division = g / h;
    return division;
}

function operatey(operator,x,y){
    if (operator && typeof operator == 'function'){
        return operator(x,y)
    }
}


function printValue(){
    numberinos.addEventListener('click', ()=> {
        displayValue.textContent = numberinos(textContent)
    })
}



/*
function one(x) {
    alert(x);
}

function two(func) {
    func();
}

two(function(){
    one('hello world')
});
*/
