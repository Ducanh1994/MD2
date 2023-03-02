// function findItemMiss(data: number[]): number[] {
//     let arr: number[] = [];
//     for (let xx = 1; xx <= 10 ; xx++) {
//         if (data.indexOf(xx) == -1) {
//             arr.push(xx);
//         }
//     }
//     return arr;
// }

function findItemMiss(data: number[]): number[] {
    let i: number = 1;
    let arr: number[] = [];
    while (i <= 10) {
        if (data.indexOf(i) == -1) {
            arr.push(i);
        }
        i++;
    }
    return arr;
}

console.log(findItemMiss([1,3,5,7,9,10]));