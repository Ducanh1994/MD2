import {Lover} from "./Lover";

export class LoverManage {
    listLover: Lover[];

    constructor() {
        this.listLover = [];
    }
    addLover (lover: Lover){
        this.listLover.push(lover);
    }
    showLover(){
        return this.listLover;
    }
    findLoverByName (name: string){
        let newList = [];
        for (let i = 0; i < this.listLover.length; i++) {
            if (this.listLover[i].name.includes(name)) {
               newList.push(this.listLover[i])
            }
        }
        return newList;
    }
    removeLover(name: string){
        for (let i = 0; i < this.listLover.length; i++) {
            if (this.listLover[i].name === name){
                this.listLover.splice(i,1);
            }
        }

    }
    findLoverById (id: number){
        for (let i = 0; i < this.listLover.length; i++) {
            if (this.listLover[i].id === id){
                return i;
            }
        }
        return -1;
    }
    editName (id:number, name:string){
        let index = this.findLoverById(id);
        this.listLover[index].name = name;
    }
    editZodiac (id:number, zodiac:string){
        let index = this.findLoverById(id);
        this.listLover[index].zodiac = zodiac;
    }
    editHometown (id:number, hometown:string){
        let index = this.findLoverById(id);
        this.listLover[index].hometown = hometown;
    }
    editYearOfBirth (id:number, yearOfBirth:number){
        let index = this.findLoverById(id);
        this.listLover[index].yearOfBirth = yearOfBirth;
    }
    editHobby (id:number, hobby:string){
        let index = this.findLoverById(id);
        this.listLover[index].hobby = hobby;
    }
}