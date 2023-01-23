var int1 = document.getElementById('int1');
var int2 = document.getElementById('int2');

var add = document.getElementById('add');
var subtract = document.getElementById('subtract');
var multiply = document.getElementById('multiply');
var divide = document.getElementById('divide');

var result = document.getElementById('result');


function calc(num1, num2, action) {

  var output;
  
  switch(action) {
    case "add": output = Number(num1)+Number(num2); break;
    case "subtract": output = Number(num1)-Number(num2); break;
    case "multiply": output = Number(num1)*Number(num2); break;
    case "divide": output = Number(num1)/Number(num2); break;
  }
  
  console.log(Number(num1)+Number(num2));

  result.innerHTML = output;

}


add.addEventListener('click', () => {
  calc(int1.value, int2.value, 'add');
});

subtract.addEventListener('click', () => {
  calc(int1.value, int2.value, 'subtract');
});

multiply.addEventListener('click', () => {
  calc(int1.value, int2.value, 'multiply');
});

divide.addEventListener('click', () => {
  calc(int1.value, int2.value, 'divide');
});
