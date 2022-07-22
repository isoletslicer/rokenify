// Function untuk ganti halaman
let pagesId = ["homepage", "data-diri", "tes-paru", "result-final"];

function changePage(id) {
  for (let i = 0; i < pagesId.length; i++) {
    if (id === pagesId[i]) {
      document.getElementById(pagesId[i]).classList.add("d-none");
      document.getElementById(pagesId[i + 1]).classList.remove("d-none");
    }
  }
}

// Function untuk dapat input
let isiUsia = false;

function cekUsia() {
  if (document.getElementById("usia").value === "") {
    alert("Isi dulu bosku");
  } else {
    isiUsia = true;
  }
}

let trayOfInput = {};
let getUsia = "",
  getAktifMerokok = "",
  getOlahraga = "";

function startCheckup() {
  isiUsia = true;

  if (isiUsia) {
    changePage("data-diri");

    let usia = document.getElementById("usia").value;
    let isAktifMerokok = document.getElementById("is-aktif-merokok").value;
    let isOlahraga = document.getElementById("is-olahraga").value;

    if (isAktifMerokok === "aktif") {
      getAktifMerokok = true;
    } else {
      getAktifMerokok = false;
    }

    if (isOlahraga === "iya") {
      getOlahraga = true;
    } else {
      getOlahraga = false;
    }

    getUsia = usia;

    console.log(usia);
    console.log(isAktifMerokok);
    console.log(isOlahraga);

    // get the values from the form with DOM. SAVE AS LOCALSTORAGE
    localStorage.setItem("trayOfInput", JSON.stringify(trayOfInput));

    return trayOfInput;
  }
}

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
let sum = 0;
let totalAverage = 0;

function stopCount() {
  clearTimeout(t);
  timer_is_on = 0;
  document.getElementById("txt").value = c - 1;

  if (c === 0) {
    data.push(c);
  } else {
    data.push(c - 1);
  }

  for (let i = 0; i < data.length; i++) {
    if (data[i]) {
      sum = data.reduce((partialSum, a) => partialSum + a, 0);
      document.getElementById(`time-${i}`).innerText = data[i];
      totalAverage = sum / data.length;
      document.getElementById("avg").innerText = totalAverage.toFixed(2);
    }
  }

  resetCount();
}

function resetCount() {
  c = 0;
  document.getElementById("txt").value = c;
}

function hitungDanUbah() {
  if (data.length === 3) {
    changePage("tes-paru");

    let kategori = "";

    if (totalAverage < 20) {
      kategori = "weak-lungs";
    } else if (totalAverage < 50) {
      kategori = "normal-lungs";
    } else if (totalAverage < 100) {
      kategori = "strong-lungs";
    }

    if (getUsia < 18) {
      if (getAktifMerokok && getOlahraga && kategori === "weak-lungs") {
        document.getElementById("summary-result").innerText =
          "Belajar dulu yang bener, jangan ngerokok terus!";
      }
      if (getAktifMerokok && getOlahraga && kategori !== "weak-lungs") {
        document.getElementById("summary-result").innerText =
          "Kurang-kurangin rokok dek, kamu belum lulus SMA";
      }
      if (getAktifMerokok && !getOlahraga && kategori === "weak-lungs") {
        document.getElementById("summary-result").innerText =
          "Belajar dulu yang bener, biar bisa kerja dan bayar biaya RS";
      }

      if (getAktifMerokok && !getOlahraga && kategori !== "weak-lungs") {
        document.getElementById("summary-result").innerText =
          "Kurang-kurangin rokok dek, kamu belum lulus SMA, perbanyak olahraga";
      }
      if (!getAktifMerokok && getOlahraga && kategori === "weak-lungs") {
        document.getElementById("summary-result").innerText =
          "Banyakin olahraga, biar paru-parumu kuat dek";
      }
      if (!getAktifMerokok && getOlahraga && kategori !== "weak-lungs") {
        document.getElementById("summary-result").innerText =
          "Selamat pola hidupmu sehat, masa depan cerah";
      }
      if (!getAktifMerokok && !getOlahraga && kategori !== "weak-lungs") {
        document.getElementById("summary-result").innerText =
          "Pertahankan gaya hidupmu dik, jangan coba2 rokok, olahraga lah dik";
      }
      if (!getAktifMerokok && !getOlahraga && kategori === "weak-lungs") {
        document.getElementById("summary-result").innerText =
          "Olahraga dek, jangan main epep terus";
      }
    }

    if (getUsia >= 18) {
      document.getElementById("img-result").src = "./img/tretan-muslim.gif";
      if (getAktifMerokok && getOlahraga && kategori === "weak-lungs") {
        document.getElementById("summary-result").innerText =
          "MEROKOK DAPAT MENYEBABKAN OPERASI JANTUNG & PARU RP 500 JT, TAHLIHAN RP 10 JT, 40 HARI RP 3 JT";
      }
      if (getAktifMerokok && getOlahraga && kategori !== "weak-lungs") {
        document.getElementById(
          "summary-result"
        ).innerText = `Olahraga tidak mengurangi resiko merokok. \n MEROKOK DAPAT MENYEBABKAN OPERASI JANTUNG & PARU RP 500 JT, TAHLIHAN RP 10 JT, 40 HARI RP 3 JT`;
      }
      if (getAktifMerokok && !getOlahraga && kategori === "weak-lungs") {
        document.getElementById("summary-result").innerText =
          "MEROKOK DAPAT MENYEBABKAN OPERASI JANTUNG & PARU RP 500 JT, TAHLIHAN RP 10 JT, 40 HARI RP 3 JT";
      }

      if (getAktifMerokok && !getOlahraga && kategori !== "weak-lungs") {
        document.getElementById(
          "summary-result"
        ).innerText = `Anda dikaruniai paru-paru bagus, tetapi \n MEROKOK DAPAT MENYEBABKAN OPERASI JANTUNG & PARU RP 500 JT, TAHLIHAN RP 10 JT, 40 HARI RP 3 JT`;
      }
      if (!getAktifMerokok && getOlahraga && kategori === "weak-lungs") {
        document.getElementById("summary-result").innerText =
          "Perbanyak olahraga, biar paru-parumu kuat!";
      }
      if (!getAktifMerokok && getOlahraga && kategori !== "weak-lungs") {
        document.getElementById("summary-result").innerText =
          "Selamat pola hidupmu sehat, semoga umur panjang";
      }
      if (!getAktifMerokok && !getOlahraga && kategori === "weak-lungs") {
        document.getElementById("summary-result").innerText =
          "Perbanyak olahraga bos biar dapat jodoh, umur gaada yang tau!";
      }

      if (!getAktifMerokok && !getOlahraga && kategori !== "weak-lungs") {
        document.getElementById("summary-result").innerText =
          "Anda dikaruniai paru-paru bagus, tapi sebaiknya olahraga ya biar tambah sehat, kuat, aman, dan tentram";
      }
    }
  } else {
    alert(
      "Silahkan lakukan pengukuran hingga tiga kali! Cek tabel hasil test di atas,"
    );
    data = [];
  }
}

// Kondisi:
// USIA < 18
// perokok && sport && weak => 'belajar dulu yang bener, jangan ngerokok terus'
// perokok && sport && normal/strong => 'kurang2in rokok dek, kamu belum lulus SMA'
// perokok && non-sport && weak => 'belajar dulu yang bener, biar bisa kerja dan bayar biaya RS'
// perokok && non-sport && normal/strong => 'kurang2in rokok dek, kamu belum lulus SMA, banyakin olahraga' -CLEAR

// bukan perokok && sport && normal/strong => 'selamat pola hidupmu sehat, masa depan cerah'
// bukan perokok && sport && weak => 'banyakin olahraga, biar paru-parumu kuat dek!'
// bukan perokok && non-sport && weak => 'olahraga dek, jangan main epep terus (kasih foto ambarita polisi)'
// bukan perokok && non-sport && normal/strong => 'pertahankan gaya hidupmu dik, jangan coba2 rokok, olahraga lah dik' -CLEAR

// USIA > 18
// perokok && sport && weak => 'merokok dapat menyebabkan (tretan muslim)'
// perokok && non-sport && weak => 'merokok dapat menyebabkan (tretan muslim)'
// perokok && sport && normal/strong => 'olahraga tidak mengurangi resiko merokok (tretan muslim)'
// perokok && non-sport && normal/strong => 'anda dikaruniai paru-paru bagus, tetapi merokok dapat dapat menyebabkan (tretan muslim)'

// bukan perokok && sport && normal/strong => 'selamat pola hidupmu sehat,semoga umur panjang'
// bukan perokok && sport && weak => 'banyakin olahraga, biar paru-parumu kuat!'
// bukan perokok && non-sport && weak => 'banyakin olahraga bos biar dapat jodoh, umur gaada yang tau!'
// bukan perokok && non-sport && normal/strong => 'anda dikaruniai paru-paru bagus, tapi sebaiknya olahraga biar tambah sehat, kuat, aman, dan tentram'
