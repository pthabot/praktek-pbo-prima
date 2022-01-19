/*siapkan bahan*/
let nama = "asep";
let nilai = 100;
let absen = 1;


/*algoritma*/
if (nilai >= 70 && absen < 5) {
    console.log(`${nama} mendapatkan ${nilai} dan kehadiran ${absen}, jadi ${nama} sudah lulus`);
} else {
    console.log(`maaf, ${nama} tidak lulus`);
}

/* Pseucode
    INPUT 'nama' with any string
    INPUT 'nilai' with any number
    INPUT 'absent' with any number

    READ 'nama','nilai','absent'
    IF nilai >= 70 ADD absent < 5
    DISPLAY 'nama' 'lulus'
    ELSE DISPLAY 'nama' 'tidak lulus'
    END IF
 */