var btn1 = document.getElementById('btn1');
btn1.addEventListener('click', displayMessage);

function displayMessage() {
  console.log('Using function declaration');
}

var btn2 = document.getElementById('btn2');
btn2.addEventListener('click', function(event) {
  console.log('Using function expression');
});
