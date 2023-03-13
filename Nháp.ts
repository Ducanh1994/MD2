let x: number = 5;
let y: number = 10;
function myFuntion(y: number): void {
   y = x + y;
}
myFuntion(y);
console.log('y = ' + y);