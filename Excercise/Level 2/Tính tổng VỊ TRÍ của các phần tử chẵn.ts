let arr = [1,2,2,3,4,5];
let sumChan = 0;
let sumLe = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0){
//         sum += i;
//     }
// }
// console.log(sum);

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0){
        sumChan += arr[i];
    }
    else {
        sumLe += arr[i];
    }
}
if (sumLe > sumChan) {
    console.log("Le");
}
else {
    console.log("Chan");
}