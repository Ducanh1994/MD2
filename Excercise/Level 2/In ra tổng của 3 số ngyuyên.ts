let n = 2;
let s = 2;
for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
        for (let k = 0; k <= n; k++) {
            if (i + j + k === s){
                console.log(i + '' + j + '' + k);
            }
        }
    }
}

