// B1: Sử dụng destructuring assignment trích xuất các giá trị của mảng
// let names = ["alpha", "beta", "gamma", "delta"];
// let [firstName, secondName] = names;
// console.log(firstName); //"alpha"
// console.log(secondName); //"beta"

//hoặc có thể viết chương trình gọn lại như sau:
// let [firstName, secondName] = ["alpha", "beta", "gamma", "delta"];
// console.log(firstName);//"alpha"
// console.log(secondName);//"beta


// B2: Các phần tử của mảng cũng có thể được bỏ qua bằng cách sử dụng dấu phân cách bằng dấu phẩy.
// Một dấu phẩy có thể được sử dụng để bỏ qua một phần tử mảng.
// let [firstName,,thirdName] = ["alpha", "beta", "gamma", "delta"];
// console.log(firstName); //"alpha"
// console.log(thirdName); //"gamma"


// B3:  Để gán một số phần tử mảng cho biến và phần còn lại của các phần tử mảng cho chỉ một biến duy nhất,
// có thể thực hiện được bằng cách sử dụng toán tử rest (…) như cách triển khai bên dưới.
// let [firstName,,...lastName] = ["alpha", "beta", "gamma", "delta"];
// console.log(firstName);//"alpha"
// console.log(lastName);//"gamma, delta"


// B4: Các giá trị cũng có thể được hoán đổi bằng cách sử dụng destructuring assignment như sau:
// let [firstName, secondName] = ["alpha", "beta", "gamma", "delta"];
// console.log(firstName);  //"alpha"
// console.log(secondName); //"beta"
// [firstName, secondName] = [secondName, firstName]
// console.log(firstName);  //"beta"
// console.log(secondName); //"alpha"


// B5: Dữ liệu cũng có thể được trích xuất từ một mảng được trả về từ một hàm
// function NamesList() {
//     return ["alpha", "beta", "gamma", "delta"]
// }
// let [firstName, secondName] = NamesList();
//
// console.log(firstName); //"alpha"
// console.log(secondName); //"beta"


// B6: Trong ES5 để gán các biến từ các đối tượng, cách thực hiện của nó là:

// let marks = {x: 21, y: -34, z: 47 };
// let x = marks.x; // x = 21
// let y = marks.y; // y = -34
// let z = marks.z; // z = 47

// console.log(x);
// console.log(y);
// console.log(z);

// Việc triển khai ở trên trong ES6 bằng cách sử dụng destructuring assignment là:

// let marks = {x: 21, y: -34, z: 47 };
// const { x, y, z } = marks; // x = 21, y = -34, z = 47
//
// console.log(x);
// console.log(y);
// console.log(z);


// B7: Các đối tượng lồng nhau cũng có thể được trích xuất dữ liệu sử dụng destructuring assignment
const marks = {
    section1: { alpha: 15, beta: 16},
    section2: { alpha: -31, beta: 19 }
};
const { section1 : { alpha: alpha1, beta: beta1 }} = marks;
console.log(alpha1, beta1); // 15, 16