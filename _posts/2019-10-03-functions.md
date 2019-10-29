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
    <script type="text/javascript" src="functions.js"></script>
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
