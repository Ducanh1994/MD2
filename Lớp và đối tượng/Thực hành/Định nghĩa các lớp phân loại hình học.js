var Shape = /** @class */ (function () {
    function Shape(color, filled) {
        this.color = color;
        this.filled = filled;
    }
    return Shape;
}());
var shape = new Shape("red", false);
console.log(shape);
