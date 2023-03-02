import {Shape} from "./Hệ các đối tượng hình học";
 export class Rectangle extends Shape {
    private width: number = 1.0;
    private length: number = 1.0;

    constructor(width: number, length: number, color: string, filled: boolean) {
        super(color, filled);
        this.width = width;
        this.length = length;
    }

    public getWidth(): number {
        return this.width;
    }

    public setWidth(width: number): void {
        this.width = width;
    }

    public getLength(): number {
        return this.length;
    }

    public setLength(length: number): void {
        this.length = length;
    }

    public getArea(): number {
        return this.width * this.length;
    }

    public getPerimeter(): number {
        return 2 * (this.width + this.length);
    }

    //Override method
    public toString(): string {
        return "A Rectangle with width="
            + this.getWidth()
            + " and length="
            + this.getLength()
            + ", which is a subclass of "
            + super.toString();
    }
}

let rectangle: Rectangle = new Rectangle(2.5, 3.8, "orange", true);
console.log(rectangle);
console.log(rectangle.getArea());
console.log(rectangle.getPerimeter());
console.log(rectangle.toString());
