window.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('background-music');
  audio.muted = true; // Start muted

  // Play the audio
  audio.play().catch((error) => {
    console.error('Playback failed:', error); // Log any errors
  });

  // Optional: Set a timeout to unmute after a certain period
  setTimeout(() => {
    audio.muted = false; // Unmute after 5 seconds (or adjust as needed)
  }, 5000); // Adjust the duration as needed
});
