// function checkNumber(a: number): boolean {
//     if (a % 2 === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
//
// console.log(checkNumber(4));

// function checkNumber (a: number, b:number): any {
//     for (let i = a; i < b; i++) {
//         if (i % 2 !== 0) {
//             console.log(i)
//         }
//     }
// }
//
// checkNumber(2,9);


// function sumNumber (a: number, b:number): any {
//     let sum = 0;
//     for (let i = a; i <= b; i++) {
//         sum += i
//         }
//     return sum
//     }
//     console.log(sumNumber(2,9));


function sumNumber(a: number): any {
    let sum = 0;
    for (let i = a; i <= 10; i++) {
        sum = i * (i + 1);
    }
    return sum;
}

console.log(sumNumber(5))