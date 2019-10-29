## Functions

- Function declaration
- Function expression
- Recursion

--

[Function declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function) (function statements) defines a function with the specified parameters

```
function name() {
  // body
}
```

--

[Function expression](https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Operators/function). The function keyword can be used to define a function inside an expression.

```
var my_function = function {
  // body
}
```

The function name can be omitted, in which case the function is anonymous

--

Create two buttons, one link to a function declaration and the other to a function expression.

```
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Tutorial 2 - JavaScript 6</title>
  </head>
  <body>
    <button type="button" id="btn1">Function definition</button>
    <button type="button" id="btn2">Function expression</button>
  </body>
</html>
```

[index.html](https://github.com/mariancross/javascript-tutorial/blob/1b9e65d35e8dd61b56b8413c792e3879cd2673c4/index.html)

--

```
var btn1 = document.getElementById('btn1');
btn1.addEventListener('click', displayMessage);

function displayMessage() {
  console.log('Using function declaration');
}

var btn2 = document.getElementById('btn2');
btn2.addEventListener('click', function(event) {
  console.log('Using function expression');
});
```

[functions.js](https://github.com/mariancross/javascript-tutorial/blob/1b9e65d35e8dd61b56b8413c792e3879cd2673c4/functions.js)

--

Recursion

"Recursion is a method of solving a problem where the solution depends on solutions to smaller instances of the same problem" [Wikipedia](https://en.wikipedia.org/wiki/Recursion_%28computer_science%29)

--

Typically, a recursive functions has two parts:

* Base case
* Recursive call

--

Example: [Factorial](https://en.wikipedia.org/wiki/Factorial) calculator

![factorial](https://wikimedia.org/api/rest_v1/media/math/render/svg/9b2be989313e5805c0d2a0d6a730493e04efd317)

--

```
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  else {
    return n * factorial(n - 1);
  }
}
```

--

```
<h2>Factorial</h2>
<input type="text" id="input_value">
<button type="button" id="btn_factorial">Calculate</button>
<p id="result"></p>
```

[index.html](https://github.com/mariancross/javascript-tutorial/blob/923d7c6b1ea61375123d3069be8d3c4901d461fa/index.html)

--

```
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
````

[functions.js](https://github.com/mariancross/javascript-tutorial/blob/923d7c6b1ea61375123d3069be8d3c4901d461fa/functions.js)