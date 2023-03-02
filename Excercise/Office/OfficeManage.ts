import {IManager} from "./IManager";
import {Officer} from "./Officer";

export class OfficeManage implements IManager<Officer> {
    private newofficer: Officer[]
    constructor() {
        this.newofficer = [];
    }
    DisplayOfficer(): Officer[] {
       return this.newofficer;
    }

    ExitOfficer(): void {
    }

    RemoveOfficer(id: number): number {
        return 0;
    }

    addOfficer(t: Officer): void {
        this.newofficer.push(t)
    }

    findOfficer(id: number): number {
        return 0;
    }

}