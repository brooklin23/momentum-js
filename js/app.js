const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

function onLoginSubmit(event) {
  event.preventDefault();
  const userName = loginInput.value;
  loginForm.classList.add("hidden");
  greeting.classList.remove("hidden");
  localStorage.setItem("username", userName);
  greeting.innerText = `Hello ${userName}`;
  console.log(userName);
}

loginForm.addEventListener("submit", onLoginSubmit);
