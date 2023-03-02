// function S(n:number): number {
//     if (n==1) {
//         return 1;
//     }
//     else {
//         return n*S(n-1);
//     }
// }
//
// console.log(S(4));


function  fib(n: number): number {
    if (n <= 1) {
        return n;
    }
    return fib(n-1) + fib(n-2)
}

console.log(fib(10))