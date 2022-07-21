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
