function search (phone: string): string
{
    let vina = ['091','087']
    let mobi = ['076','075']
    let viet = ['098','097']
    if (vina.indexOf(phone.substring(0,3))) {
        return 'Số điện thoại thuộc nhà mạng Vina'
    }
    else if (mobi.indexOf(phone.substring(0,3))) {
        return 'Số điện thoại thuộc nhà mạng Mobi'
    }
    else  (viet.indexOf(phone.substring(0,3)))
    {
        return 'Số điện thoại thuộc nhà mạng Viettel'
    }
}

console.log(search('0973664515'))