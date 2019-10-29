class Figure {
  constructor() {
    this._area = 0.0;
    this._perimeter = 0.0;
  }

  set area(area) {
    this._area = area;
  }

  set perimeter(perimeter) {
    this._perimeter = perimeter;
  }

  get area() {
    return this._area;
  }

  get perimeter() {
    return this.perimeter;
  }
}

var figure1 = new Figure();
figure1.area = 15;
var figure2 = new Figure();
figure2.area = 25;

console.log('Figure1 area: ' + figure1.area);
console.log('Figure2 area: ' + figure2.area);