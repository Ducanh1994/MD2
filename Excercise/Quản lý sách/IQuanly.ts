export interface IQuanly<T> {
    add(t:T): void;
    Delete(id: number);
    ShowAll(): T[];
    FindById(id: number): number;
}