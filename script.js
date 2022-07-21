// Function untuk dapat input

let trayOfInput = {};

function startCheckup() {
  let usia = document.getElementById("usia").value;
  let isAktifMerokok = document.getElementById("is-aktif-merokok").value;
  let isJenisPerokok = document.getElementById("is-jenis-perokok").value;
  let isOlahraga = document.getElementById("is-olahraga").value;
  console.log(usia);
  console.log(isAktifMerokok);
  console.log(isJenisPerokok);
  console.log(isOlahraga);

  trayOfInput = {
    usia: usia,
    isAktifMerokok: isAktifMerokok,
    isJenisPerokok: isJenisPerokok,
    isOlahraga: isOlahraga,
  };
  // console.log(usia);
  // get the values from the form with DOM. SAVE AS LOCALSTORAGE
  localStorage.setItem("trayOfInput", JSON.stringify(trayOfInput));

  // SET THE VALUE TO OUR LOGIC IN JS IF WE WANT TO USE SCRIPT ON IT
  let queryTray = JSON.parse(localStorage.getItem("trayOfInput"));

  return trayOfInput;
}
console.log(startCheckup());

// cara masukin object ke dalam localstorage
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// parsing aja
// SET THE VALUE TO OUR LOGIC IN JS IF WE WANT TO USE SCRIPT ON IT
let queryTray = JSON.parse(localStorage.getItem("trayOfInput"));

console.log(queryTray);
// Function untuk counter waktu
var c = 0;
var t;
var timer_is_on = 0;

function timedCount() {
  document.getElementById("txt").value = c;
  c += 1;
  t = setTimeout("timedCount()", 1000);
}

function doTimer() {
  if (!timer_is_on) {
    timer_is_on = 1;
    timedCount();
  }
}

let data = [];

function stopCount() {
  clearTimeout(t);
  timer_is_on = 0;
  document.getElementById("txt").value = c - 1;

  data.push(c - 1);

  for (let i = 0; i < data.length; i++) {
    if (data[i]) {
      let sum = data.reduce((partialSum, a) => partialSum + a, 0);
      document.getElementById(`time-${i}`).innerText = data[i];
      document.getElementById("avg").innerText = (sum / data.length).toFixed(2);
    }
  }
}

function resetCount() {
  c = 0;
  document.getElementById("txt").value = c;
}

// Kategori:
// 0-2 = kalau perokok => return id: weak-lungs & message: "Dikurangi rokoknya ya guys"
// 0-2 = tidak olahraga => return id: do-more-sports & message: "Ayuk olahraga "

// 2-5 = kalau perokok => return id: normal-lungs & message: "Dikurangi rokoknya ya guys"
// 2-5 = tidak olahraga => return id: do-more-sports & message: "Ayuk olahraga "

// 5-10 = kalau perokok => return id: strong-lungs & message: "Paru-paru kamu sehat tuh"
// 5-10 = tidak olahraga => return id: do-more-sports & message: "Ayuk olahraga"

// {"usia":"12","isAktifMerokok":"aktif","isJenisPerokok":"batangan","isOlahraga":"iya"}

// kondisi:
// USIA < 18
// perokok && sport && weak => 'belajar dulu yang bener, jangan ngerokok terus'
// perokok && non-sport && weak => 'belajar dulu yang bener, biar bisa kerja dan bayar biaya RS'
// perokok && sport && normal/strong => 'kurang2in rokok dek, kamu belum lulus SMA'
// perokok && non-sport && normal/strong => 'kurang2in rokok dek, kamu belum lulus SMA, banyakin olahraga'

// bukan perokok && sport && normal/strong => 'selamat pola hidupmu sehat, masa depan cerah'
// bukan perokok && sport && weak => 'banyakin olahraga, biar paru2mu kuat dek!'
// bukan perokok && non-sport && weak => 'olahraga dek, jangan main epep terus (kasih foto ambarita polisi)'
// bukan perokok && non-sport && normal/strong => 'pertahankan gaya hidupmu dik, jangan coba2 rokok, olahraga lah dik'

// USIA > 18
// perokok && sport && weak => 'merokok dapat menyebabkan (tretan muslim)'
// perokok && non-sport && weak => 'merokok dapat menyebabkan (tretan muslim)'
// perokok && sport && normal/strong => 'olahraga tidak mengurangi resiko merokok (tretan muslim)'
// perokok && non-sport && normal/strong => 'anda dikaruniai paru2 bagus, tetapi merokok dapat dapat menyebabkan (tretan muslim)'

// bukan perokok && sport && normal/strong => 'selamat pola hidupmu sehat,semoga umur panjang'
// bukan perokok && sport && weak => 'banyakin olahraga, biar paru2mu kuat!'
// bukan perokok && non-sport && weak => 'banyakin olahraga bos biar dapat jodoh, umur gaada yang tau!'
// bukan perokok && non-sport && normal/strong => 'anda dikaruniai paru2 bagus, tapi sebaiknya olahraga biar tambah sehat, kuat, aman, dan tentram'
