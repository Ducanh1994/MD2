import {Officer, Sex} from "./Officer";

export class Employee extends Officer {
    private _work : string

    constructor(id: number, name: string, age: number, address: string, sex: Sex, work: string) {
        super(id, name, age, address, sex);
        this._work = work;
    }

    get work(): string {
        return this._work;
    }

    set work(value: string) {
        this._work = value;
    }
}