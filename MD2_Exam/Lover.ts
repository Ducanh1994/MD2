export class Lover {
    private _id: number;
    private _name: string;
    private _zodiac: string;
    private _hometown: string;
    private _yearOfBirth: number;
    private _hobby: string;

    constructor(id: number, name: string, zodiac: string, hometown: string, yearOfBirth: number, hobby: string) {
        this._id = id;
        this._name = name;
        this._zodiac = zodiac;
        this._hometown = hometown;
        this._yearOfBirth = yearOfBirth;
        this._hobby = hobby;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get zodiac(): string {
        return this._zodiac;
    }

    set zodiac(value: string) {
        this._zodiac = value;
    }

    get hometown(): string {
        return this._hometown;
    }

    set hometown(value: string) {
        this._hometown = value;
    }

    get yearOfBirth(): number {
        return this._yearOfBirth;
    }

    set yearOfBirth(value: number) {
        this._yearOfBirth = value;
    }

    get hobby(): string {
        return this._hobby;
    }

    set hobby(value: string) {
        this._hobby = value;
    }
    getInfo(){
        return `Id Lover: ${this.id} | Name: ${this.name} | Zodiac: ${this.zodiac} | Hometown: ${this.hometown} | 
        Year Of Birth: ${this.yearOfBirth} | Hobby: ${this.hobby}`
    }
}