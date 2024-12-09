// preload all images, so hover effect will be smooth
window.addEventListener("load", () => {
  const images = [
    "images/discord.avif",
    "images/caracal.avif",
    "images/projects/currency-converter.avif",
    "images/projects/password-validator.avif",
    "images/projects/simple-calculator.avif",
    "images/projects/simple-todo-list.avif",
  ];

  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
});

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("mouseover", function () {
    const imageSrc = button.getAttribute("data-image");
    changeImage(imageSrc);
  });

  button.addEventListener("mouseout", function () {
    resetImage();
  });
});

const nameElement = document.querySelector("#name");
let isDiscordShown = false;

function changeImage(newSrc) {
  document.querySelector("#header-image").src = newSrc;
}

function resetImage() {
  changeImage(isDiscordShown ? "images/discord.avif" : "images/caracal.avif");
}

document
  .querySelector("#discord-link")
  .addEventListener("click", function (event) {
    event.preventDefault();

    if (isDiscordShown) {
      changeImage("images/caracal.avif");
      nameElement.textContent = "Hi, my name is Paweł.";
    } else {
      changeImage("images/discord.avif");
      nameElement.textContent = "Hi, my name is pawlash.";
    }

    isDiscordShown = !isDiscordShown;
  });