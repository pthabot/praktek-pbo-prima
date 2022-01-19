/*
    INPUT 'jari' dengan number
    INPUT 'P1' dengan 3.14
    COMPUTE 'keliling lingkaran' 
    DISPLAY hasil keliling lingkaran
    END
*/

let jariLingkaran = 7;
let pi = 3.14;

function kelilingLingkaran(r,p) {
    return 2 * p * r;
}

let hasil = kelilingLingkaran(jariLingkaran,pi);
console.log (`hasil keliling lingkaran ${hasil}`);