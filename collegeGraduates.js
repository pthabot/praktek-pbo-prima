/* 
    INPUT 'nama' with any string
    INPUT 'skor' with any number

    READ 'nama','skor'
    IF skor >= 80 AND skor <= 100
    DISPLAY 'skor A'
    IF ELSE skor >= 65 AND skor <= 79
    DISPLAY 'skor B'
    IF ELSE skor >= 50 AND skor <= 64
    DISPLAY 'skor C'
    IF ELSE skor >= 35 AND skor <= 49
    DISPLAY 'skor D'
    IF ELSE skor >= 0 AND skor <= 34
    DISPLAY 'skor E'
    ELSE DISPLAY 'nilai invalid'
*/

let nama = 'asep';
let skor = 100;

if (skor >= 80 && skor <= 100) {
    console.log(`${nama} mendapatkan skor A`);
} else if (skor >= 65 && skor <= 79) {
    console.log(`${nama} mendapatkan skor B`);
} else if (skor >= 50 && skor <= 64) {
    console.log(`${nama} mendapatkan skor C`);
} else if (skor >= 35 && skor <= 49) {
    console.log(`${nama} mendapatkan skor D`);
} else if (skor >= 9 && skor <= 34) {
    console.log(`${nama} mendapatkan skor E`);
} else {
    console.log(`nilai invalid`);
}
