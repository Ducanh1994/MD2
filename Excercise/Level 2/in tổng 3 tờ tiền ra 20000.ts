let value1 = 1000;
let value2 = 2000;
let value3 = 5000;
let count = 0;
for (let i = 1; i <= 20 ; i++) {
    for (let j = 1; j <= 10; j++) {
        for (let k = 1; k <= 4 ; k++) {
            if(i*value1 + j*value2 + k*value3 === 20000){
                count++;
                console.log(`Cần ${i} tờ ${value1},Cần ${j} tờ ${value2},Cần ${k} tờ ${value3}`);
            }
        }
    }
}
console.log(`=> Có ${count} phương án`);


// for (let i = 1; i <= 20 ; i++) {
//     for (let j = 1; j <=10 ; j++) {
//         let left = 20000 - (i*value1 + j*value2);
//         if (left > 0 && left % value3 === 0){
//             count++
//             console.log(`Cần ${i} tờ ${value1},Cần ${j} tờ ${value2},Cần ${left/value3} tờ ${value3}`);
//         }
//     }
// }
// console.log(`=> Có ${count} phương án`);