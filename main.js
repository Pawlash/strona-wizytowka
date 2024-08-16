function changeImage(newSrc) {
  document.querySelector("#header-image").src = newSrc;
}

function resetImage() {
  document.querySelector("#header-image").src = 'images/caracal.avif';
}

document.querySelector("#discord-link").addEventListener('click', function(event) {
  event.preventDefault();
  changeImage('images/discord.avif');
  document.querySelector("#name").textContent = 'Hi, my name is pawlash.';
});