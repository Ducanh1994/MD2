import {Officer, Sex} from "./Officer";

export class Worker extends Officer {
    private _level: number


    constructor(id: number, name: string, age: number, address: string, sex: Sex, level: number) {
        super(id, name, age, address, sex);
        this._level = level;
      
    }

    get level(): number {
        return this._level;
    }

    set level(value: number) {
        this._level = value;
    }
}