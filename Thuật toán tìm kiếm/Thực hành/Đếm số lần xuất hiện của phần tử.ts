
function Count(numbers: number[], target: number) {
    let count = 0;
    for (let item of numbers) {
        if (item === target) {
            count++
        }

    }
    return `Tổng số lần xuất hiện của target là : ${count}`
}

console.log(Count([1, 2, 3, 5, 5, 6, 4, 7, 5, 5], 5))


