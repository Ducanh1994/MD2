// B1: Lớp Shape
class Shape {
    color;
    filled;
    constructor(color, filled) {
        this.color = color;
        this.filled = filled;
    }
}
let shape = new Shape("red", false);

console.log(shape);


// B2: Lớp Circle
class Circle {
    color;
    radius;
    filled;
    constructor(radius ,
                color,
                filled) {
        this.color = color;
        this.filled = filled;
        this.radius = radius;
    }

    getArea()  {
        return this.radius * this.radius * Math.PI;
    }

    getPerimeter()  {
        return 2 * this.radius * Math.PI;
    }

}


// B3: Lớp Rectangle
class Rectangle {
    width ;
    length ;
    color;
    filled;
    constructor(width ,
                length ,
                color,
                filled) {
        this.color = color;
        this.filled = filled;
        this.width = width;
        this.length = length;
    }

    getArea()  {
        return this.width * this.length;
    }

    getPerimeter()  {
        return 2 * (this.width + this.length);
    }
}


// B4: Lớp Square
class Square {
    color;
    filled
    side ;
    constructor(color,
                filled,
                side ) {
        this.color = color;
        this.filled = filled;
        this.side = side
    }
}
let square = new Square("yellow", true, 5.8);

console.log(square);
