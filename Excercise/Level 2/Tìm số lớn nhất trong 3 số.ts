// function findMax(a:number,b:number,c:number): any {
//     if (a > b && a > c) {
//         console.log("a max")
//     }
//     else if (b > a && b > c) {
//         console.log('b max')
//     }
//     else {
//         console.log("c max")
//     }
// }
// findMax(4,5,3);


// function chiaHet (a:number,b:number): any {
//     for (let i = a; i <= b ; i++) {
//         if (i % 3 ===0 && i % 5 !== 0 ){
//             console.log("Fizz")
//         }
//         else if (i % 3 !== 0 && i % 5 === 0 ){
//             console.log("Buzz")
//         }
//         else if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz")
//         }
//     }
// }
// chiaHet(1,15);


// function sumchan(a:number,b:number): any {
//     let sum = 0;
//     for (let i = a; i <= b ; i++) {
//         if (i % 2 === 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }
//
// console.log(sumchan(1,10));


function findUoc(n:number): any {
    let max = 0;
    for (let i = 1 ; i <= n ; i++) {
        if (n % i === 0 && i % 2 == 1) {
                max = i;
        }
    }
    console.log(max)
}
findUoc(20)
