class Figure {
  constructor() {
    this._area = 0.0;
    this._perimeter = 0.0;
  }

  set area(value) {
    this._area = value;
  }

  set perimeter(value) {
    this._perimeter = value;
  }

  get area() {
    return this._area;
  }

  get perimeter() {
    return this._perimeter;
  }

  print(type) {
    console.log('This is a ' + type);
  }
}

var figure1 = new Figure();
figure1.area = 15;
var figure2 = new Figure();
figure2.area = 25;

console.log('Figure1 area: ' + figure1.area);
console.log('Figure2 area: ' + figure2.area);

class Rectangle extends Figure {
  constructor(width, height) {
    super();
    this._width = width;
    this._height = height;

    this.area = this._width * this._height;
    this.perimeter = 2 * (this._width + this._height);
  }

  print() {
    super.print('rectangle');
  }
}

var rect1 = new Rectangle(10, 5);
console.log('Rectangle area: ' + rect1.area);
console.log('Rectangle perimeter: ' + rect1.perimeter);
rect1.print();

class Circle extends Figure {
  constructor(radius) {
    super();
    this._radius = radius;
    this.area = Math.PI * radius * radius;
    this.perimeter = 2 * Math.PI * radius;
  }

  print() {
    super.print('circle');
  }
}

var cir1 = new Circle(8);
console.log('Circle area: ' + cir1.area);
console.log('Circle perimeter: ' + cir1.perimeter);
cir1.print();
