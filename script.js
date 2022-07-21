// Function untuk dapat input

let trayOfInput = {};

function startCheckup() {
  let usia = document.getElementById("usia").value;
  let isAktifMerokok = document.getElementById("is-aktif-merokok").value;
  let isOlahraga = document.getElementById("is-olahraga").value;
  console.log(usia);
  console.log(isAktifMerokok);
  console.log(isOlahraga);

  trayOfInput = {
    usia: usia,
    isAktifMerokok: isAktifMerokok,
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

// {"usia":"12","isAktifMerokok":"aktif","isOlahraga":"iya"}

// !TODO : KONEKSIKAN KE QUERYTRAY AGAR WORKS

const { usia, isAktif, isOlahraga } = queryTray;

const valueOfAvg = document.getElementById("avg");

// !TODO : TOLONG JADIIN INI  FUNCTION UTK RETURN KATEGOTI
let kategori = "";

if (valueOfAvg) {
  if (valueOfAvg.innerText < 2) {
    kategori = "weak-lungs";
  } else if (valueOfAvg.innerText < 5) {
    kategori = "normal-lungs";
  } else if (valueOfAvg.innerText < 10) {
    kategori = "strong-lungs";
  }
}

// TODO : COBA KAITIN INI KE DOM HTML NYA. PNJNG EMANG

if (Number(usia) < 18) {
  if (
    isAktif === "aktif" &&
    isOlahraga === "iya" &&
    valueOfAvg === "weak-lungs"
  ) {
    let dariHTML = document.getElementById("result-final");
    let newEntryResult = document.createElement("div");
    newEntryResult.setAttribute("id", "weak-lungs");
    newEntryResult.innerText = "belajar dulu yang bener, jangan ngerokok terus";
    dariHTML.appendChild(newEntryResult);
  }

  if (
    isAktif === "aktif" &&
    isOlahraga === "iya" &&
    (valueOfAvg === "normal-lungs" || valueOfAvg === "strong-lungs")
  ) {
    let dariHTML = document.getElementById("result-final");
    let newEntryResult = document.createElement("div");
    newEntryResult.setAttribute("id", "not-weak-lungs");
    newEntryResult.innerText = "kurang2in rokok dek, kamu belum lulus SMA";
    dariHTML.appendChild(newEntryResult);
  }

  if (
    isAktif === "aktif" &&
    isOlahraga === "tidak" &&
    valueOfAvg === "weak-lungs"
  ) {
    let dariHTML = document.getElementById("result-final");
    let newEntryResult = document.createElement("div");
    newEntryResult.setAttribute("id", "weak-lungs");
    newEntryResult.innerText =
      "belajar dulu yang bener, biar bisa kerja dan bayar biaya RS";
    dariHTML.appendChild(newEntryResult);
  }

  if (
    isAktif === "aktif" &&
    isOlahraga === "tidak" &&
    (valueOfAvg === "normal-lungs" || valueOfAvg === "strong-lungs")
  ) {
    let dariHTML = document.getElementById("result-final");
    let newEntryResult = document.createElement("div");
    newEntryResult.setAttribute("id", "not-weak-lungs");
    newEntryResult.innerText =
      "kurang2in rokok dek, kamu belum lulus SMA, banyakin olahraga";
    dariHTML.appendChild(newEntryResult);
  }

  if (
    isAktif === "pasif" &&
    isOlahraga === "iya" &&
    (valueOfAvg === "normal-lungs" || valueOfAvg === "strong-lungs")
  ) {
    let dariHTML = document.getElementById("result-final");
    let newEntryResult = document.createElement("div");
    newEntryResult.setAttribute("id", "not-weak-lungs");
    newEntryResult.innerText = "selamat pola hidupmu sehat, masa depan cerah";
    dariHTML.appendChild(newEntryResult);
  }

  if (
    isAktif === "pasif" &&
    isOlahraga === "iya" &&
    valueOfAvg === "weak-lungs"
  ) {
    let dariHTML = document.getElementById("result-final");
    let newEntryResult = document.createElement("div");
    newEntryResult.setAttribute("id", "weak-lungs");
    newEntryResult.innerText = "banyakin olahraga, biar paru2mu kuat dek";
    dariHTML.appendChild(newEntryResult);
  }

  if (
    isAktif === "pasif" &&
    isOlahraga === "tidak" &&
    (valueOfAvg === "normal-lungs" || valueOfAvg === "strong-lungs")
  ) {
    let dariHTML = document.getElementById("result-final");
    let newEntryResult = document.createElement("div");
    newEntryResult.setAttribute("id", "not-weak-lungs");
    newEntryResult.innerText =
      "pertahankan gaya hidupmu dik, jangan coba2 rokok, olahraga lah dik";
    dariHTML.appendChild(newEntryResult);
  }

  if (
    isAktif === "pasif" &&
    isOlahraga === "tidak" &&
    valueOfAvg === "weak-lungs"
  ) {
    let dariHTML = document.getElementById("result-final");
    let newEntryResult = document.createElement("div");
    newEntryResult.setAttribute("id", "weak-lungs");
    newEntryResult.innerText =
      "olahraga dek, jangan main epep terus (kasih foto ambarita polisi)";
    dariHTML.appendChild(newEntryResult);
  }
}

if (Number(usia) > 18) {
  if (
    isAktif === "aktif" &&
    isOlahraga === "iya" &&
    valueOfAvg === "weak-lungs"
  ) {
    let dariHTML = document.getElementById("result-final");
    let newEntryResult = document.createElement("div");
    newEntryResult.setAttribute("id", "weak-lungs");
    newEntryResult.innerText =
      "MEROKOK DAPAT MENYEBABKAN OPERASI JANTUNG & PARU RP 500 JT, TAHLIHAN RP 10 JT, 40 HARI RP 3 JT";
    dariHTML.appendChild(newEntryResult);
  }

  if (
    isAktif === "aktif" &&
    isOlahraga === "iya" &&
    (valueOfAvg === "normal-lungs" || valueOfAvg === "strong-lungs")
  ) {
    let dariHTML = document.getElementById("result-final");
    let newEntryResult = document.createElement("div");
    newEntryResult.setAttribute("id", "not-weak-lungs");
    newEntryResult.innerText = `olahraga tidak mengurangi resiko merokok. \n MEROKOK DAPAT MENYEBABKAN OPERASI JANTUNG & PARU RP 500 JT, TAHLIHAN RP 10 JT, 40 HARI RP 3 JT`;
    dariHTML.appendChild(newEntryResult);
  }

  if (
    isAktif === "aktif" &&
    isOlahraga === "tidak" &&
    valueOfAvg === "weak-lungs"
  ) {
    let dariHTML = document.getElementById("result-final");
    let newEntryResult = document.createElement("div");
    newEntryResult.setAttribute("id", "weak-lungs");
    newEntryResult.innerText =
      "MEROKOK DAPAT MENYEBABKAN OPERASI JANTUNG & PARU RP 500 JT, TAHLIHAN RP 10 JT, 40 HARI RP 3 JT";
    dariHTML.appendChild(newEntryResult);
  }

  if (
    isAktif === "aktif" &&
    isOlahraga === "tidak" &&
    (valueOfAvg === "normal-lungs" || valueOfAvg === "strong-lungs")
  ) {
    let dariHTML = document.getElementById("result-final");
    let newEntryResult = document.createElement("div");
    newEntryResult.setAttribute("id", "not-weak-lungs");
    newEntryResult.innerText = `anda dikaruniai paru2 bagus, tetapi \n MEROKOK DAPAT MENYEBABKAN OPERASI JANTUNG & PARU RP 500 JT, TAHLIHAN RP 10 JT, 40 HARI RP 3 JT`;
    dariHTML.appendChild(newEntryResult);
  }

  if (
    isAktif === "pasif" &&
    isOlahraga === "iya" &&
    valueOfAvg === "weak-lungs"
  ) {
    let dariHTML = document.getElementById("result-final");
    let newEntryResult = document.createElement("div");
    newEntryResult.setAttribute("id", "weak-lungs");
    newEntryResult.innerText = "banyakin olahraga, biar paru2mu kuat!";
    dariHTML.appendChild(newEntryResult);
  }

  if (
    isAktif === "pasif" &&
    isOlahraga === "iya" &&
    (valueOfAvg === "normal-lungs" || valueOfAvg === "strong-lungs")
  ) {
    let dariHTML = document.getElementById("result-final");
    let newEntryResult = document.createElement("div");
    newEntryResult.setAttribute("id", "not-weak-lungs");
    newEntryResult.innerText = "selamat pola hidupmu sehat,semoga umur panjang";
    dariHTML.appendChild(newEntryResult);
  }

  if (
    isAktif === "pasif" &&
    isOlahraga === "tidak" &&
    valueOfAvg === "weak-lungs"
  ) {
    let dariHTML = document.getElementById("result-final");
    let newEntryResult = document.createElement("div");
    newEntryResult.setAttribute("id", "weak-lungs");
    newEntryResult.innerText =
      "banyakin olahraga bos biar dapat jodoh, umur gaada yang tau!";
    dariHTML.appendChild(newEntryResult);
  }

  if (
    isAktif === "pasif" &&
    isOlahraga === "tidak" &&
    (valueOfAvg === "normal-lungs" || valueOfAvg === "strong-lungs")
  ) {
    let dariHTML = document.getElementById("result-final");
    let newEntryResult = document.createElement("div");
    newEntryResult.setAttribute("id", "not-weak-lungs");
    newEntryResult.innerText =
      "anda dikaruniai paru2 bagus, tapi sebaiknya olahraga biar tambah sehat, kuat, aman, dan tentram";
    dariHTML.appendChild(newEntryResult);
  }
}

// kondisi:
// USIA < 18
// perokok && sport && weak => 'belajar dulu yang bener, jangan ngerokok terus'
// perokok && sport && normal/strong => 'kurang2in rokok dek, kamu belum lulus SMA'
// perokok && non-sport && weak => 'belajar dulu yang bener, biar bisa kerja dan bayar biaya RS'
// perokok && non-sport && normal/strong => 'kurang2in rokok dek, kamu belum lulus SMA, banyakin olahraga' -CLEAR

// bukan perokok && sport && normal/strong => 'selamat pola hidupmu sehat, masa depan cerah'
// bukan perokok && sport && weak => 'banyakin olahraga, biar paru2mu kuat dek!'
// bukan perokok && non-sport && weak => 'olahraga dek, jangan main epep terus (kasih foto ambarita polisi)'
// bukan perokok && non-sport && normal/strong => 'pertahankan gaya hidupmu dik, jangan coba2 rokok, olahraga lah dik' -CLEAR

// USIA > 18
// perokok && sport && weak => 'merokok dapat menyebabkan (tretan muslim)'
// perokok && non-sport && weak => 'merokok dapat menyebabkan (tretan muslim)'
// perokok && sport && normal/strong => 'olahraga tidak mengurangi resiko merokok (tretan muslim)'
// perokok && non-sport && normal/strong => 'anda dikaruniai paru2 bagus, tetapi merokok dapat dapat menyebabkan (tretan muslim)'

// bukan perokok && sport && normal/strong => 'selamat pola hidupmu sehat,semoga umur panjang'
// bukan perokok && sport && weak => 'banyakin olahraga, biar paru2mu kuat!'
// bukan perokok && non-sport && weak => 'banyakin olahraga bos biar dapat jodoh, umur gaada yang tau!'
// bukan perokok && non-sport && normal/strong => 'anda dikaruniai paru2 bagus, tapi sebaiknya olahraga biar tambah sehat, kuat, aman, dan tentram'
