// B1: Sử dụng vòng lặp for (;;) in ra dãy số tự nhiên 0, 2, 4, 6, 8, 10
// function geeks() {
//     console.log("for(;;)")
//     for (let i = 0; i <= 10; i += 2) {
//         console.log(i + " ")
//     }
// }
// geeks();


// B2: Sử dụng vòng lặp for... of để in ra các đối tượng trong mảng
// console.log("for...of")
// for (let i of ['Ha Noi', 20.32, 3000]) {
//     console.log(i + " ")
// }


// B3: Sử dụng vòng lặp for... in để lặp qua các thuộc tính của một đối tượng
let obj = {name: 'Peter', age: 25, salary: 3000};
console.log("for...in")
for (let i in obj) {
    console.log(obj[i] + " ");
}
