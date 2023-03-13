import {LoverManage} from "./LoverManage";
import {Lover} from "./Lover";

let input = require('readline-sync');
let newLoverManage = new LoverManage();
function main(){
    let choice = -1;
    do {
        console.log(`
        ------------Lựa chọn------------
        1.Hiển thị danh sách người yêu
        2.Tìm kiếm người yêu theo tên
        3.Nhập thông tin người yêu mới
        4.Chỉnh sửa thông tin người yêu
        5.Xóa người yêu khỏi ứng dụng
        `)
        choice = +input.question("Enter choice: ");
        switch (choice){
            case 1:
                showLover();
                break;
            case 2:
                findLoverByName();
                break;
            case 3:
                 addLover();
                 break;
            case 4:
                 editLover();
                 break;
            case 5:
                 removeLover();
                 break;
        }
    }
    while (choice !== 0);
}
function showLover (){
    let listLover = newLoverManage.showLover();
    for (let i = 0; i < listLover.length; i++) {
        console.log(listLover[i].getInfo());
    }
}
function findLoverByName(){
    let name = input.question("Enter name: ");
    let newList = newLoverManage.findLoverByName(name);

    if (newList.length != 0){
        for (let i = 0; i < newList.length; i++) {
            console.log(newList[i].getInfo())
        }
    }
   else {
       console.log("-----Không tồn tại tên trong danh sách!-----");
   }
}
function addLover(){
    let id = +input.question("Enter ID: ");
    let name = input.question("Enter Name: ");
    let zodiac = input.question("Enter Zodiac: ");
    let hometown = input.question("Enter Hometown: ");
    let yearOfBirth = +input.question("Enter Year Of Birth: ");
    let hobby = input.question("Enter Hobby: ");
    let newLover = new Lover(id,name,zodiac,hometown,yearOfBirth,hobby);
    newLoverManage.addLover(newLover);
}
function removeLover(){
let name = input.question("Enter Name To Remove: ");
newLoverManage.removeLover(name);
    console.log("-----Đã xóa thành công!-----");
    let listLover = newLoverManage.showLover();
    console.log(listLover);
}
function editLover(){
    let choice = -1;
    do {
        console.log(`
    --------- Bạn muốn sửa thông tin nào ? ------------
    1. Sửa tên 
    2. Sửa cung hoàng đạo
    3. Sửa quê quán
    4. Sửa năm sinh
    5. Sửa sở thích
    0. Exit
   
    `)
        choice = +input.question('Enter choice: ');
        switch (choice) {
            case 1:
                editName() ;
                break;
            case 2:
                editZodiac();
                break;
            case 3:
                editHomeTown();
                break;
            case 4:
                editYearOfBirth();
                break;
            case 5:
                editHobby();
                break;
        }
    } while (choice !== 0);
}
function editName(){
    let id = +input.question("Enter ID To Edit: ");
    let newName = input.question("Enter New Name: ");
    newLoverManage.editName(id,newName);
    console.log("-----Cập nhật thành công!-----");
}
function editZodiac(){
    let id = +input.question("Enter ID To Edit: ");
    let newZodiac = input.question("Enter New Zodiac: ");
    newLoverManage.editZodiac(id,newZodiac);
    console.log("-----Cập nhật thành công!-----");
}
function editHomeTown(){
    let id = +input.question("Enter ID To Edit: ");
    let newHomeTown = input.question("Enter New HomeTown: ");
    newLoverManage.editHometown(id,newHomeTown);
    console.log("-----Cập nhật thành công!-----");
}
function editYearOfBirth(){
    let id = +input.question("Enter ID To Edit: ");
    let newYear = +input.question("Enter New Year Of Birth: ");
    newLoverManage.editYearOfBirth(id,newYear);
    console.log("-----Cập nhật thành công!-----");
}
function editHobby(){
    let id = +input.question("Enter ID To Edit: ");
    let newHobby = input.question("Enter New Hobby: ");
    newLoverManage.editHobby(id,newHobby);
    console.log("-----Cập nhật thành công!-----");
}
main()