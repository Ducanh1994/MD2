function selectionSort(arr: number[]) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min_pos = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min_pos]) {
                min_pos = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[min_pos];
        arr[min_pos] = temp;
    }
    return arr;
}

// console.log(selectionSort([1,3,8,4,9,5,3]))

function bubbleSort(arr: number[]) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
// console.log(bubbleSort([5,7,2,9,1,3]))

function insertSort(arr: number[]) {
    for (let i = 1; i < arr.length; i++) {
        let x = arr[i]
        let pos = i - 1;
        while (pos >= 0 && x < arr[pos]) {
            arr[pos + 1] = arr[pos];
            pos--;
        }
        arr[pos + 1] = x;
    }
    return arr;
}
console.log(insertSort([5,7,2,9,1,3]));