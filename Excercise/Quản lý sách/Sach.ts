import {Tailieu} from "./Tailieu";

export class Sach extends Tailieu {
    private _tacgia: string
    private _sotrang: number

    constructor(id: number, tennxb: string, sobanph: number, tacgia: string, sotrang: number) {
        super(id, tennxb, sobanph);
        this._tacgia = tacgia;
        this._sotrang = sotrang;
    }

    get tacgia(): string {
        return this._tacgia;
    }

    set tacgia(value: string) {
        this._tacgia = value;
    }

    get sotrang(): number {
        return this._sotrang;
    }

    set sotrang(value: number) {
        this._sotrang = value;
    }
    getinfo() {
        return `Mã tài liệu: ${this.id} | Tên nhà xuất bản: ${this.tennxb} | Số bản phát hành: ${this.sobanph} | Tác giả: ${this._tacgia} | Số trang: ${this.sotrang}`
    }
}