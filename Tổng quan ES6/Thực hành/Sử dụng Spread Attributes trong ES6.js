// B1:Sao chép mảng (từ cars1 sang cars2 và cars1 sang cars3) bằng cách sử dụng Spread Operator.
// const cars1 = ["AUDI","BMW","TATA","MERCEDES"];
// const cars2 = [...cars1];
// const cars3 = [...cars1,"NISSAN","TOYOTA"];
// console.log(cars1);
// console.log(cars2);
// console.log(cars3);

// B2:  Sử dụng Spread Operator để hợp nhất các mảng.
// const cars1 = ["AUDI","BMW","TATA","MERCEDES"];
// const cars2 = ["NISSAN","TOYOTA"];
// const cars3 = [...cars1, ...cars2];
// console.log(cars3);
// Kết quả: Ghép 2 mảng vào và hiển thị đầy đủ các phần tử

// B3: Sử dụng Spread Operator với các đối tượng
// const cars1 = {
//     Brand : "BMW",
//     Color : "RED"
// }
// const cars2 = {...cars1};
// console.log(cars2);

// B4: Sử dụng Spread Operator để hợp nhất các đối tượng.
// const cars1 = {
//     Brand : "Toyota",
//     Color : "RED"
// }
// const cars2 = {
//     Brand : "Nissan",
//     Color : "BLUE",
//     Year : 2004
// }
// const cars3 = {...cars1,...cars2};
// console.log(cars3);
// // Kết quả: Ghép 2 đối tượng và ghi đè giá trị của đối tượng car2 lên

// B5: Sử dụng Spread Operator để chia chuỗi thành một mảng chuỗi.
// const car = "AUDI";
// const a = [...car];
// console.log(a);

// B6: Sử dụng Spread Operator để cấu trúc lại mảng
// const numbers = [3,5,7,8,9];
// const [a,b,c,...others] = numbers;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(others);


