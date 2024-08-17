const nameElement = document.querySelector("#name");

function changeImage(newSrc) {
  document.querySelector("#header-image").src = newSrc;
}

function resetImage() {
  const isDiscordShown = nameElement.textContent === 'Hi, my name is pawlash.';
  if (isDiscordShown) {
    document.querySelector("#header-image").src = 'images/discord.avif';
  } else {
    document.querySelector("#header-image").src = 'images/caracal.avif';
  }
}

document.querySelector("#discord-link").addEventListener('click', function(event) {
  event.preventDefault();

  const isDiscordShown = nameElement.textContent === 'Hi, my name is pawlash.';

  if (isDiscordShown) {
    changeImage('images/caracal.avif');
    nameElement.textContent = 'Hi, my name is Paweł.';
  } else {
    changeImage('images/discord.avif');
    nameElement.textContent = 'Hi, my name is pawlash.';
  }
});