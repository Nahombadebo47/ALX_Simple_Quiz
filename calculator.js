function add (num1, num2) {
    return num1 + num2;
};

function multiply (num1, num2) {
    return num1*num2;
};

function subtract (num1, num2) {
    return num1-num2;
};

function divide (num1, num2) {
    return num1/num2;
};

const addBtn = document.getElementById('add');
const subtractBtn = document.getElementById('subtract');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');

addBtn.addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0 ;
    const number2 = parseFloat(document.getElementById('number2').value) || 0 ;
    const result = add(number1, number2); 
    document.getElementById('result').textContent = result; 
});

subtractBtn.addEventListener('click', function(){
    const number1 = parseFloat(document.getElementById('number1').value) || 0 ;
    const number2 = parseFloat(document.getElementById('number2').value) || 0 ;
    const result = subtract(number1, number2); 
    document.getElementById('result').textContent = result;
})

multiplyBtn.addEventListener('click', function(){
    const number1 = parseFloat(document.getElementById('number1').value) || 0 ;
    const number2 = parseFloat(document.getElementById('number2').value) || 0 ;
    const result = multiply(number1, number2); 
    document.getElementById('result').textContent = result;
})

divideBtn.addEventListener('click', function(){
    const number1 = parseFloat(document.getElementById('number1').value) || 0 ;
    const number2 = parseFloat(document.getElementById('number2').value) || 0 ;
    const result = divide(number1, number2); 
    document.getElementById('result').textContent = result;
}); 