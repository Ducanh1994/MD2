export type Sex = 'male' | 'female' | 'other'
export class Officer {
   private _id: number
     private _name: string
     private _age: number
     private _address: string
     private _sex: Sex

    constructor(id: number, name: string, age: number, address: string, sex: Sex) {
       this._id = id;
       this._name = name;
       this._age = age;
       this._address = address;
       this._sex = sex;
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

     get age(): number {
         return this._age;
     }

     set age(value: number) {
         this._age = value;
     }

     get address(): string {
         return this._address;
     }

     set address(value: string) {
         this._address = value;
     }

     get sex(): Sex {
         return this._sex;
     }

     set sex(value: Sex) {
         this._sex = value;
     }
 }