window.addEventListener('DOMContentLoaded', (event) => {
  const audio = document.getElementById('background-music');

  // Optional: Delay before playing music
  setTimeout(() => {
    audio.play();
  }, 1000); // Delay of 1 second
});
