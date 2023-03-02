import {Queue1} from "./Kiểm tra chuỗi đối xứng sử dụng Queue 2";
import {stack1} from "./Kiểm tra chuỗi đối xứng sử dụng Queue";

//let kytu = 0;
function main() {
    for (let i = stack1.size() - 1; i >=0; i--) {
        let count = stack1.size()[i];
        let id = Queue1.dequeue()
        if (count !== id) {
            console.log('không phải đối xứng')
           // kytu ++;
            break;
        }
    }
}

 //function check(){
//     if (kytu === 0) {
//         console.log('là đối xứng')
//     }
//     else {
//         console.log('không đỗi xứng')
//     }
// }
main()
//check()
