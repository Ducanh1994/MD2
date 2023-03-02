var Point = /** @class */ (function () {
    function Point(x, y) {
        this.displayName = "Point";
        this.x = x;
        this.y = y;
    }
    Point.prototype.distance = function (b) {
        var dx = this.x - b.x;
        var dy = this.y - b.y;
        return Math.hypot(dx, dy);
    };
    return Point;
}());
var p1 = new Point(5, 5);
var p2 = new Point(10, 10);
console.log(p1.displayName);
console.log(p1.distance(p2));
