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
