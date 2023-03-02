class Instructor {
    private _role: string;
    private _name: string;
    constructor(name:string, role = "assistant" ) {
        this._role = role;
        this._name = name;
    }


    get role(): string {
        return this._role;
    }

    set role(value: string) {
        this._role = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    renderDetails() {
        console.log(`${this._name} - ${this._role}`);
    }

    // Base case static method
    static helloWorld() {
        console.log('Hi there');
    }

    // Static method
    static canTeach(instructor: Instructor) {
        return (instructor._role === 'classroom');
    }

}

let juniorInstructor = new Instructor(  'Brian' );
let seniorInstructor = new Instructor('Alice',  "classroom" );

juniorInstructor.renderDetails(); // "Brian - assistant"
seniorInstructor.renderDetails(); // "Alice - classroom"

Instructor.helloWorld(); // "Hi there"

// "Brian can teach: false"
console.log(
    `${juniorInstructor.name} can teach: ${Instructor.canTeach(juniorInstructor)}`
);


// "Alice can teach: true"
console.log(
    `${seniorInstructor.name} can teach: ${Instructor.canTeach(seniorInstructor)}`
);
