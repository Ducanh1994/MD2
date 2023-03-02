class Application {
    private name:string;
    static count:number = 0;

    constructor(name:string) {
        this.name = name;
        Application.count++;
    }
}

console.log(Application.count);  // 0
let app1 = new Application('App One');
console.log(Application.count);  // 1
let app2 = new Application('App Two');
console.log(Application.count);  // 2