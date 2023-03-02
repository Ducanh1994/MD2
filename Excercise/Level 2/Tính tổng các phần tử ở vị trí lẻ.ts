// let arr = [33,44,55,22];
// let sum = 0;
// for ( let i = 1; i < arr.length; i+=2) {
//     sum += arr[i]
// }
// console.log(sum);

// let a = 3, b = 6, c = 9;
// console.log(a + '' + b + '' +c);

// let motlan = 9;
// let n: number = 10 ;
// if (n % 9 === 0) {
//     console.log(`số lần = ${n/9} `  )
// }
// else  {
//     console.log(`số lần = ${Math.ceil(n/9)}`)
// }

let input = 400;
let nam,thang,ngay;
nam = Math.floor(input/365)
console.log(nam)
thang = Math.floor((input-nam*365)/30)
console.log(thang)
ngay = input-nam*365-thang*30
console.log(ngay)