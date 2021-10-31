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

function add(a,b){
    let addition = a+b;
    return addition;
}

function subtract(c,d){
    let subtraction = c-d;
    return subtraction;
}

function multiply(e,f){
    let multiplication = e * f;
    return multiplication;
}

function divide(g,h){
    let division = g / h;
    return division;
}

function operate(operator,x,y){
    if (operator && typeof operator == 'function'){
        return operator(x,y)
    }
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
