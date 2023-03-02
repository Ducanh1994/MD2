import {Officer, Sex} from "./Officer";

export class Engineer extends Officer {
    private _train: string

    constructor(id: number, name: string, age: number, address: string, sex: Sex, train: string) {
        super(id, name, age, address, sex);
        this._train = train;
    }

    get train(): string {
        return this._train;
    }

    set train(value: string) {
        this._train = value;
    }
}
