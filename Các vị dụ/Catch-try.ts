function Isnum(number:number) {
    if (number < 1) {
        throw new Error("Sai rồi")
    }
    return true
}

//console.log(Isnum(0))
try {
    console.log(Isnum(0));
}
catch (e:any) {
    console.log("message");
}
finally {
    console.log("Chưa thấy đúng tí nào");
}