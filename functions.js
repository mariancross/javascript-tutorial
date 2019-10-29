var btn1 = document.getElementById('btn1');
btn1.addEventListener('click', displayMessage);

function displayMessage() {
  console.log('Using function declaration');
}

var btn2 = document.getElementById('btn2');
btn2.addEventListener('click', function(event) {
  console.log('Using function expression');
});

var n = parseInt(document.getElementById('input_value').value);
var btn_fact = document.getElementById('btn_factorial');

btn_fact.addEventListener('click', function(event) {
  var fact = factorial(n);
  result = document.getElementById('result').innerHTML = fact;
});

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  else {
    return n * factorial(n - 1);
  }
}
