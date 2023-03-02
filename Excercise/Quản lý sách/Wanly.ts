import {IQuanly} from "./IQuanly";
import {Tailieu} from "./Tailieu";

export class Wanly implements IQuanly<Tailieu> {
    private quanly: Tailieu[]
    constructor() {
        this.quanly = [];
    }

    Delete(id: number) {
        throw new Error("Method not implemented.");
    }
    ShowAll(): Tailieu[] {
        throw new Error("Method not implemented.");
    }
    FindById(id: number): number {
        throw new Error("Method not implemented.");
    }
    delete(id:number) {
      let index = this.findById(id);
      this.quanly.splice(index,1)
    }
    // Delete(id:number) {
    //     this.quanly.forEach((tailieu,index)=>{
    //         if(tailieu.id===id){
    //             this.quanly.splice(index,1)
    //         }
    //     })
    //     return this.quanly
    // }


    findById(id: number): number {
        for (let i = 0; i < this.quanly.length; i++) {
            if (this.quanly[i].id == id) {
                return i
            }
        }
        return -1;
    }

    showAll(): Tailieu[] {
        return this.quanly;
    }

    add(t: Tailieu): void {
        this.quanly.push(t)
    }

}