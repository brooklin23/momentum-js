const title = document.querySelector(".target");

function handleTitleClick() {
  title.classList.toggle("colorChange");
}

title.addEventListener("click", handleTitleClick);
