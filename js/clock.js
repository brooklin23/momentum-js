const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = addZero(date.getHours());
  const minutes = addZero(date.getMinutes());
  const seconds = addZero(date.getSeconds());
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function addZero(input) {
  if (input < 10) {
    input = "0" + input;
  }
  return input;
}

function pmMaker(input) {
  if (input > 12) {
    input = input - 12;
  }
  return input;
}

getClock();
setInterval(getClock, 1000);
