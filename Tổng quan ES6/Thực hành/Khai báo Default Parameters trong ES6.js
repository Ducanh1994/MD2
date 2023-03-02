// B1: Nếu chúng ta nhân hai số trong ví dụ sau mà không truyền tham số thứ hai và không sử dụng tham số mặc định,
// thì câu trả lời mà hàm này sẽ trả về là NAN (Không phải số), vì nếu chúng ta không truyền tham số thứ hai,
// hàm sẽ nhân số đầu tiên với không xác định.

// function multiply(a, b) {
//     return a * b;
// }
// let num1 = multiply(5);
// console.log(num1);  //NaN
// let num2 = multiply(5, 8);
// console.log(num2);   //40


// B2: Nếu chúng ta không truyền một số làm tham số thứ hai và lấy tham số mặc định làm tham số thứ hai,
// nó sẽ nhân số đầu tiên với số mặc định, và nếu chúng ta truyền hai số làm tham số, nó sẽ nhân số đầu tiên với số thứ hai.

// function multiply(a, b = 2) {
//     return a * b;
// }
// let num1 = multiply(5);
// console.log(num1);  //10
// let num2 = multiply(5, 8);
// console.log(num2);  //40


// B3: Tham số mặc định với hàm tạo: chúng ta có thể sử dụng khái niệm tham số mặc định với phương thức khởi tạo của một lớp.

class Geeks {
    constructor(a, b = 3) {
        console.log(a * b);
    }
}
let obj = new Geeks(5); //15
let obj1 = new Geeks(5, 4); //20