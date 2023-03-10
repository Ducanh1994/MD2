import {Rectangle} from "./Rectangle";
class Square extends Rectangle {

    constructor(side: number, color: string, filled: boolean) {
        super(side, side, color, filled);
    }

    public getSide(): number {
        return this.getWidth();
    }

    public setSide(side: number): void {
        this.setWidth(side);
        this.setLength(side);
    }

    //Override method
    public setWidth(width: number): void {
        this.setSide(width);
    }

    //Override method
    public setLength(length: number): void {
        this.setSide(length);
    }

    //Override method
    public toString(): string {
        return "A Square with side="
            + this.getSide()
            + ", which is a subclass of "
            + super.toString();
    }
}

let square: Square = new Square(5.8, "yellow", true);
console.log(square);
console.log(square.toString());

