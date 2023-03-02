import {Tailieu} from "./Tailieu";

export class Bao extends Tailieu {
    private _ngayph: number

    constructor(id: number, tennxb: string, sobanph: number, ngayph: number) {
        super(id, tennxb, sobanph);
        this._ngayph = ngayph;
    }
    get ngayph(): number {
        return this._ngayph;
    }

    set ngayph(value: number) {
        this._ngayph = value;
    }

    getinfo() {
        return `Mã tài liệu: ${this.id} | Tên nhà xuất bản: ${this.tennxb} | Số bản phát hành: ${this.sobanph} | Ngày phát hành: ${this._ngayph} `
    }
}