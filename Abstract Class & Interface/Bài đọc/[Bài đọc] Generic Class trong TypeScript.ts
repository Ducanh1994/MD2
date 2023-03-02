class Stack<T> {
    private elements: T[] = [];

    constructor(private size: number) {
    }

    isEmpty(): boolean {
        return this.elements.length === 0;
    }

    isFull(): boolean {
        return this.elements.length === this.size;
    }

    push(element: T): void {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);

    }

    pop(): T {
        if (this.elements.length == 0) {
            throw new Error('The stack is empty!');
        }
        return this.elements.pop();
    }
}
let number = new Stack<number>(5);
function randBetween(low: number, high: number): number {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
let numbers = new Stack<number>(5);

while (!numbers.isFull()) {
    let n = randBetween(1, 10);
    console.log(`Push ${n} into the stack.`)
    numbers.push(n);
}

// Kết quả:
// Push 3 into the stack.
// Push 2 into the stack.
// Push 1 into the stack.
// Push 8 into the stack.
// Push 9 into the stack.

while (!numbers.isEmpty()) {
    let n = numbers.pop();
    console.log(`Pop ${n} from the stack.`);
}
// Kết quả:
//
//     Pop 9 from the stack.
//     Pop 8 from the stack.
//     Pop 1 from the stack.
//     Pop 2 from the stack.
//     Pop 3 from the stack.

let words = 'The quick brown fox jumps over the lazy dog'.split(' ');

let wordStack = new Stack<string>(words.length);

words.forEach(word => wordStack.push(word));

while (!wordStack.isEmpty()) {
    console.log(wordStack.pop());
}