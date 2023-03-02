export interface IStack<T> {
    push (t:T): void;
    pop(): T | undefined;
    peak(): T | undefined;
    size(): number;
}

export class Stack<T> implements IStack<T> {
    private storage: T[] = []

    constructor() {}

    peak(): T | undefined {
        return this.storage[this.size()-1];
    }

    pop(): T | undefined {
        return this.storage.pop();
    }

    push(item: T): void {
        this.storage.push(item)
    }

    size(): number {
        return this.storage.length;
    }

}

export const stack1 = new Stack<string>();
stack1.push('a')
stack1.push('b')
stack1.push('l')
stack1.push('e')
stack1.push('w')
stack1.push('a')
stack1.push('s')
console.log(stack1)