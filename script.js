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

numberButtons.forEach(function(currentBtn){
    currentBtn.addEventListener('click', function(){
        alert(this.id);
    })
})
