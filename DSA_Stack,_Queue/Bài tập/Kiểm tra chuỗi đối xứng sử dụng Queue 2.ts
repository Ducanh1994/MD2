export interface IQuere<T> {
    enqueue(item: T): void;
    dequeue(): T | undefined;
    size(): number;
}

export class Queue<T> implements IQuere<T> {
    private storage: T[] = []

    constructor() {}

    dequeue(): T | undefined {
        return this.storage.shift();
    }

    enqueue(item: T): void {
        this.storage.push(item)
    }

    size(): number {
        return this.storage.length;
    }

}
export const Queue1 = new Queue<string>();
Queue1.enqueue('s');
Queue1.enqueue('a');
Queue1.enqueue('w');
Queue1.enqueue('e');
Queue1.enqueue('l');
Queue1.enqueue('b');
Queue1.enqueue('a');
console.log(Queue1);
