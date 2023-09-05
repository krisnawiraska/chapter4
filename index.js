console.log("======soal no 1======");

function kategoriUsia(usia) {
    if (typeof usia !== "number") {
        console.log("input harus number");
        return;
    }
    if (usia >= 0 && usia <= 12) {
        return "anak-anak";             
    }else if (usia >= 13 && usia <= 19) {
        return "remaja";
    }else if (usia >= 20 && usia <= 35) {
        return "dewasa"
    }else if (usia >=36) {
        return "lanjut usia"
    }
} console.log(kategoriUsia(8));
// Output: Anak-anak

console.log(kategoriUsia(15));
// Output: Remaja

console.log(kategoriUsia(25));
// Output: Dewasa

console.log(kategoriUsia(40));
// Output: Lanjut Usia

console.log("======= no 2========");
function hitungBiayaParkir(lamaParkir, hari,liburNasional) {
    hari = hari.toLowerCase();
    let validHari1 = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"]
    if (typeof lamaParkir !== "number") {
        
    }
    if (!validHari1.includes(hari)) {
        return 'Hari tidak valid';
    }
    let biaya = 0
    if (lamaParkir <= 1) {
        biaya = 10000
    } else {
        biaya = 10000 +(lamaParkir - 1)*5000
    }
    if (lamaParkir > 5) {
        biaya -= 10000        
    }
    if (hari === "minggu") {
        biaya += 5000
    }
    if (biaya >30000 && liburNasional) {
        biaya -=7000
    }
    return biaya;
}

console.log(hitungBiayaParkir(2, 'Satu', false));
// Output: Biaya Parkir: Rp15000.
console.log(hitungBiayaParkir(6, 'Minggu', true));
// Output: Biaya Parkir: Rp25000.


console.log("============ Soal Tiga ============");

function jadwalFestival(hari,cuaca, suhu, angin) {
    hari = hari.toLowerCase();
    cuaca = cuaca.toLowerCase();
    let validHari = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"]
    let validCuaca = ["hujan","cerah"]

    if (!validHari.includes(hari)) {
        return 'Hari tidak valid';
    } else if (!validCuaca.includes(cuaca)) {
        return 'Cuaca tidak valid';
    }else if ( typeof suhu !== "number" || typeof angin !== "number" ) {
        return "tipe data suhu salah";
    }else if (typeof angin !== "number") {
        return "tipe data angin salah";
    }

    let daftarAcara = []
    daftarAcara.push("Pameran Seni");
    if (angin > 20 && cuaca === "hujan") {
         "acara luar ruangan dibatalkan";
    } 
    if (angin <= 20 && cuaca === "hujan") {
        daftarAcara.push("Acara di luar ruangan dipindahkan ke dalam ruangan")
    }
    if (suhu < 5) {
        daftarAcara.push ("acara konser malam harus diganti dengan acara indoor")
    }
    if ( cuaca === "cerah" && suhu > 25) {
        daftarAcara.push ("Pesta Es Krim")
    }
    if (hari === "minggu" && cuaca === "cerah") {
        daftarAcara.push ("Maraton Senja")
    } 

        let output = "Daftar Acara: " + daftarAcara.join(", " );
        return output;
}
console.log(jadwalFestival('Sabtu', 'Hujan', 23, 30));
// // Output: Daftar Acara: Pameran Seni.
console.log(jadwalFestival('Sabtu', 'Hujan', 23, 10));
// // Output: Daftar Acara: Pameran Seni, Acara Dalam Ruangan.
console.log(jadwalFestival('Minggu', 'Cerah', 27, 8));
// // Output: Daftar Acara: Pameran Seni, Pesta Es Krim, Maraton Senja.