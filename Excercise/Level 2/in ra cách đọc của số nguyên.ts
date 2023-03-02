let arr = ["Không","Một", "Hai","Ba", "Bốn", "Năm", "Sáu", "Bảy", "Tám", "Chín"];
let a = 41;
let kq = '';
let hangdonvi = a % 10;
let hangchuc = Math.floor(a/10);
if(hangchuc <= 1){
    if (hangdonvi === 5){
        kq = 'Mười Lăm'
    }
    if (hangdonvi !== 0){
        kq = 'Mười' + arr[hangdonvi];
    }
    if (hangdonvi === 0){
        kq = 'Mười'
    }
}
else {
    kq = arr[hangchuc] + 'Mươi';
    if (hangdonvi ===1){
        kq += 'Mốt'
    }
    else if (hangdonvi ===4){
        kq += 'Tư'
    }
    else if (hangdonvi ===5){
        kq += 'Lăm'
    }
    else if (hangdonvi > 0){
        kq += arr[hangdonvi]
    }
}
console.log(kq)
