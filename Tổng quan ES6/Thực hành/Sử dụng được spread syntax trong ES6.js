// B1: Đoạn mã dưới đây chứa một hàm có tên là sum với 3 đối số x, y và z.
// Chúng ta có một mảng với 3 phần tử và chúng ta muốn chuyển các phần tử trong mảng làm đối số cho hàm.
// function sum(x, y, z) {
//     return x + y + z;
// }
//
// const numbers = [1, 2, 3];
// console.log(sum(...numbers));  // 6


// B2: Đẩy các phần tử vào trong một mảng.
// var a = [1, 2];
// var b= [1,2,3];
// a.push(...b);
// console.log(a);  // [1,2,1,2,3]


// B3: Sao chép một mảng
// var a = [1, 2];
// var b= [1,2,3];
// a = [...b];
// console.log(a);  // [1,2,3]


// B4: Sao chép một đối tượng
// var obj1={a:1, b:2};
// var obj2 = {...obj1};
// console.log(obj2);  // {a:1, b:2}


// B5: Nối 2 mảng
let a = [1,2];
let b = [3,4,5];
let c = [...a,...b];  // Cách 1
 // a.push(...b)  // Cách 2
console.log(c);  // [1,2,3,4,5]