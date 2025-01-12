// buttons functionality
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("mouseover", function () {
    const imageSrc = button.getAttribute("data-image");
    const imageAlt = button.textContent;
    changeImage(imageSrc, imageAlt);
  });

  button.addEventListener("mouseout", function () {
    resetImage();
  });
});

const nameElement = document.querySelector("#name");
let isDiscordShown = false;

function changeImage(newSrc, newAlt) {
  document.querySelector("#header-image").src = newSrc;
  document.querySelector("#header-image").alt = newAlt;
}

function resetImage() {
  const [image, altText] = isDiscordShown
    ? ["images/discord.avif", "Discord profile picture"]
    : ["images/caracal.avif", "Caracal photo"];

  changeImage(image, altText);
}
document
  .querySelector("#discord-link")
  .addEventListener("click", function (event) {
    event.preventDefault();

    if (isDiscordShown) {
      changeImage("images/caracal.avif", "Caracal photo");
      nameElement.textContent = "Hi, my name is Paweł.";
    } else {
      changeImage("images/discord.avif", "Discord profile picture");
      nameElement.textContent = "Hi, my name is pawlash.";
    }

    isDiscordShown = !isDiscordShown;
  });
