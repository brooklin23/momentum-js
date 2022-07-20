const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

const chosenIamge = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `/img/${chosenIamge}`;

document.body.appendChild(bgImage);
