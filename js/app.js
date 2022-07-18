const title = document.querySelector(".title__container");
const body = document.querySelector("body");

function changeColor() {
  let currentColor = title.style.color;
  if (currentColor === "blue") {
    console.log("it's blue");
    currentColor = "tomato";
  } else {
    currentColor = "blue";
    console.log("it's tomato");
  }
  title.style.color = currentColor;
}

title.addEventListener("click", changeColor);
