function changeImage(newSrc) {
  document.querySelector("#header-image").src = newSrc;
}

function resetImage() {
  document.querySelector("#header-image").src = 'images/caracal.avif';
}

document.querySelector("#discord-link").addEventListener('click', function(event) {
  event.preventDefault();
  
  const name = document.querySelector("#name");
  const isDiscordShown = name.textContent === 'Hi, my name is pawlash.';

  if (isDiscordShown) {
    resetImage();
    name.textContent = 'Hi, my name is Paweł.';
  } else {
    changeImage('images/discord.avif');
    name.textContent = 'Hi, my name is pawlash.';
  }
});
