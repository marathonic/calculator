let one = document.getElementById('1');
let two = document.getElementById('2');
let three = document.getElementById('3');
let four = document.getElementById('4');
let five = document.getElementById('5');
let six = document.getElementById('6');
let seven = document.getElementById('7');
let eight = document.getElementById('8');
let nine = document.getElementById('9');
let zero = document.getElementById('0');

let numberWrapper = document.getElementById('numberWrapper');

let numberButtons = document.querySelectorAll('.numberinos');

let operators = document.querySelectorAll('.operators');

let onScreen = document.getElementById('screenOutput');

let equals = document.getElementById('equals');

let aggregator = 0;

let result = 0;

numberButtons.forEach(function(currentBtn){
    currentBtn.addEventListener('click', function(){
        aggregator = +this.id;
        onScreen.innerText += aggregator;

if (onScreen.innerText.length > 12){
    onScreen.style.fontSize = '30px';
}
    })
});


let add = document.getElementById('add');
let multiply = document.getElementById('multiply');
let subtract = document.getElementById('subtract');
let divide = document.getElementById('divide');


let saveX = 0;
let saveY = 0;
let x;
let y;
let chosenOperator;

//copied the countDecimals function from PhilipTrep on stackoverflow;

var countDecimals = function(value) {
    if (Math.floor(value) !== value)
        return value.toString().split(".")[1].length || 0;
    return 0;
}

operators.forEach(function(pressedOp){
   

    pressedOp.addEventListener('click', function(){
        //We could change the id to "add" instead of "+", and write a function operate(chosenOp,x,y); 
                     //if chosen == add(), etc...;

        chosenOperator = this.id;
        x = +onScreen.innerText; 
        onScreen.innerText = '';
        
    })
  
})



equals.addEventListener('click', function(){
    y = +onScreen.innerText;

    function operate(chosenOperator, x,y){
        
        if (chosenOperator == 'add'){
            result = (x + y);
            //if (countDecimals(result) > 2) onScreen.innerText = result.toFixed(2);
            onScreen.innerText = result;
            return result;
        }

        else if (chosenOperator == 'multiply'){
            result = (x * y);
            //if (countDecimals(result) > 2) onScreen.innerText = result.toFixed(2);
            onScreen.innerText = result;
            return result;
        }

        else if (chosenOperator == 'subtract'){
            result = x - y;
            //if (countDecimals(result) > 2) onScreen.innerText = result.toFixed(2);
            onScreen.innerText = result;
            return result;
        }

        else if (chosenOperator == 'divide'){
            result = x / y;
            if (countDecimals(result) >= 6) onScreen.innerText = result.toFixed(2);
            onScreen.innerText = result;
            return result;
        }


        onScreen.innerText = result;     
    }

    operate(chosenOperator,x,y);
    
});

