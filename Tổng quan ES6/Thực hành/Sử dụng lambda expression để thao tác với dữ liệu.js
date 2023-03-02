// B1: Khai báo mảng ban đầu và biểu thức lambda như sau:
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let square = (item) => item * item;
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let square = (item) => item * item;


// B2: Xây dựng hàm để bình phương các phần tử trong mảng cũ và đẩy các giá trị vào mảng mới.
// function arraySq(func, arr) {
//      let newArr = [];
//      arr.forEach((element) => {
//           newArr.push(func(element));
//      });
//      return console.log( newArr);
// }


// B3: Gọi hàm, truyền vào mảng và biểu thức lambda đã khai báo:

let arr = [1, 2, 3, 4, 5, 6, 7];   // Khởi tạo một mảng số
let square = (item) => item * item;  // Khởi tạo 1 hàm Lambda
function arraySq(func, arr) {        // Khởi tạo 1 hàm và truyền tham số vào hàm, chính là 2 biến đại diện cho: hàm square và mảng arr
     let newArr = [];
     arr.forEach((element) => {
          newArr.push(func(element));
     });
     return  newArr;
}

console.log(arraySq(square, arr));


