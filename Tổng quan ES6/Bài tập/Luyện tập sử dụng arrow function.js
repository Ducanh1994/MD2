const inventory = [

    {type: "machine", value: 5000},


    {type: "machine", value: 650},


    {type: "duck", value: 10},


    {type: "furniture", value: 1200},


    {type: "machine", value: 77}


]
//CÁCH 1 : Đơn giản
// Buoc 1 : lọc những giá trị có type là machine

let inventoryType = inventory.filter((item)=>{
        if(item.type === 'machine'){
            return item
        }
})
console.log(inventoryType)

//Bước 2 : lấy giá trị value của từng phần tử

// let inventoryValue = inventoryType.map((item)=>{
//     return item.value
// })
// console.log(inventoryValue)

// Bước 3 : Tính tổng không dùng reduce
// let sum = 0
// inventoryValue.forEach((item)=>{
//     sum+= item
// })
// console.log(sum)

//CÁCH 2 : Giống cách 1 ở bước 1,2

// console.log(inventoryType.map((item)=>{
//         return item.value
//     }).reduce((current, total)=>{
//         return current + total
//     },0)
// )


// Cách 3 : Ngắn nhất

console.log(inventory.filter((item)=>{
    if(item.type === 'machine'){
        return item
    }
    }).map((item)=>{
        return item.value
    }).reduce((current, total)=>{
        return current + total
    },0)
)