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
    return this._perimeter;
  }
}

var figure = new Figure();
figure.area = 15;
console.log(figure.area);
