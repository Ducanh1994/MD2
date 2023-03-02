import {Wanly} from "./Wanly";
import {Tailieu} from "./Tailieu";
import {Sach} from "./Sach";
import {Tapchi} from "./Tapchi";
import {Bao} from "./Báo";


// @ts-ignore
let input = require('readline-sync');
let quanly: Wanly = new Wanly();
function main() {
    let choice = -1;
    do {
        console.log(`
    --------- Menu Chính ---------
    1.Thêm mới sách
    2.Thêm mới tạp chí
    3.Thêm mới báo 
    4.Hiện thị tất cả
    5.Hiển thị sách
    6.Hiển thị tạp chí
    7.Hiển thị báo
    8.Tìm kiếm theo id
    9.Xóa theo id
    0.Thoát
    `);
        choice = +input.question('Enter choice: ');
        switch (choice) {
            case 1:
                menuAddBook();
                break;
            case 2:
                menuAddMagazzine()
                break;
            case 3:
                menuAddNews()
                break;
            case 4:
                menuShowAll()
                break;
            case 5:
                menuShowBook()
                break;
            case 6:
                menuShowMagazine()
                break;
            case 7:
                menuShowNews()
                break;
            case 8:
                menuFindById()
                break;
            case 9:
                menuDelete()
                break;


        }
    } while (choice !== 0);
}
function menuAddBook() {
    console.log(`
     -------- Menu thêm mới -------
    `)
    let id = +input.question('Nhập id : ');
    let tennxb = input.question('Nhập tên nhà xuất bản: ');
    let sobanph = input.question('Nhập số bản phát hành : ');
    let tacgia = input.question('Nhập tác giả : ');
    let sotrang = input.question('Nhập số trang : ');
    let sach = new Sach(id, tennxb, sobanph,tacgia,sotrang);
    quanly.add(sach);
    console.log('------ Thêm thành công --------')
}

function menuAddMagazzine(){
    console.log(`
     -------- Menu thêm mới -------
    `)
    let id = +input.question('Nhập id : ');
    let tennxb = input.question('Nhập tên nhà xuất bản: ');
    let sobanph = input.question('Nhập số bản phát hành : ');
    let soph = input.question('Nhập số phát hành : ');
    let thangph = input.question('Nhập tháng phát hành : ');
    let tapchi = new Tapchi(id, tennxb, sobanph,soph,thangph);
    quanly.add(tapchi);
    console.log('------ Thêm thành công --------')
}

function menuAddNews(){
    console.log(`
     -------- Menu thêm mới -------
    `)
    let id = +input.question('Nhập id : ');
    let tennxb = input.question('Nhập tên nhà xuất bản: ');
    let sobanph = input.question('Nhập số bản phát hành : ');
    let ngayph = input.question('Nhập số ngày phát hành : ');
    let bao = new Bao(id, tennxb, sobanph,ngayph);
    quanly.add(bao);
    console.log('------ Thêm thành công --------')
}

function menuShowAll() {
    console.log(`
    --------- Menu hiển thị tất ------------
    `)
    let manage = quanly.showAll();
    manage.map(item => {
        if (item instanceof Sach) {
            console.log(item.getinfo()) }
        if (item instanceof Tapchi) {
            console.log(item.getinfo()) }
        if (item instanceof Bao) {
            console.log(item.getinfo()) }
    })
}
// Nếu đã vào if rồi thì auto chạy tất cả các if
// Nếu đã sử dụng if-elsse-if thì nhảy vào if rồi không nhảy vào else if nữa
function menuShowBook() {
    console.log(`
    --------- Menu hiển thị sách ------------
    `)
    let manage = quanly.showAll();
    manage.map(item => {
        if (item instanceof Sach) {
            console.log(item.getinfo())
        }
    })
}
function menuShowMagazine() {
    console.log(`
    --------- Menu hiển thị sách ------------
    `)
    let manage = quanly.showAll();
    manage.map(item => {
        if (item instanceof Tapchi) {
            console.log(item.getinfo())
        }
    })
}
function menuShowNews() {
    console.log(`
    --------- Menu hiển thị sách ------------
    `)
    let manage = quanly.showAll();
    manage.map(item => {
        if (item instanceof Bao) {
            console.log(item.getinfo())
        }
    })
}
function menuFindById() {
    let id = +input.question('Enter id : ');
    let file = quanly.findById(id);
    let list = quanly.showAll()
    if(file != -1) {
        console.log(list[file]);
    }
}

function menuDelete() {
    let id = +input.question('Nhập id: ')
    let file = quanly.findById(id);
     quanly.delete(file);
    console.log('Đã xóa')
}
main()