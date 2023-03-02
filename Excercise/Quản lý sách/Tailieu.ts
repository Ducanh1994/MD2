export class Tailieu {
    private _id: number
    private _tennxb: string
    private _sobanph: number

    constructor(id: number, tennxb: string, sobanph: number) {
        this._id = id;
        this._tennxb = tennxb;
        this._sobanph = sobanph;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get tennxb(): string {
        return this._tennxb;
    }

    set tennxb(value: string) {
        this._tennxb = value;
    }

    get sobanph(): number {
        return this._sobanph;
    }

    set sobanph(value: number) {
        this._sobanph = value;
    }
}