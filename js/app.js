const title = document.querySelector(".title__container");
const body = document.querySelector("body");

title.innerText = "hello";

function changeColor() {
  title.style.color = "blue";
}

function changeBackgrounColor() {
  body.style.backgroundColor = "tomato";
}

function changeTextIn() {
  title.innerText = "Mause is Here~";
}

function changeTextOut() {
  title.innerText = "Mouse has Gone!!";
}

function changeWholeColor() {
  document.body.style.backgroundColor = "tomato";
}

function handleCopy() {
  alert("Copier!");
}

function handleWindowOffline() {
  alert("Wifi disconnected!!!");
}

function handleWindowOnline() {
  alert("All Goooood~");
}

title.addEventListener("mouseenter", changeTextIn);
title.addEventListener("mouseleave", changeTextOut);

window.addEventListener("resize", changeWholeColor);

window.addEventListener("copy", handleCopy);

window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
