import {Officer} from "./Officer";

export interface IManager<T> {
    addOfficer (t: T) :void
    findOfficer(id: number): number
    DisplayOfficer(): Officer[]
    RemoveOfficer(id: number): number
    ExitOfficer(): void
}