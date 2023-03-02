import {Tailieu} from "./Tailieu";

export class Tapchi extends Tailieu {
    private _soph: number
    private _thangph: number

    constructor(id: number, tennxb: string, sobanph: number, soph: number, thangph: number) {
        super(id, tennxb, sobanph);
        this._soph = soph;
        this._thangph = thangph;
    }

    get soph(): number {
        return this._soph;
    }

    set soph(value: number) {
        this._soph = value;
    }

    get thangph(): number {
        return this._thangph;
    }

    set thangph(value: number) {
        this._thangph = value;
    }
    getinfo() {
        return `Mã tài liệu: ${this.id} | Tên nhà xuất bản: ${this.tennxb} | Số bản phát hành: ${this.sobanph} | Số phát hành: ${this._soph} | Tháng phát hành: ${this._thangph}`
    }
}