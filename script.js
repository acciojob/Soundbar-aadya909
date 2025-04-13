const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');

let currentAudio = null;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const sound = button.getAttribute('data-sound');
    const audio = new Audio(`sounds/${sound}.mp3`);

    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    currentAudio = audio;
    currentAudio.play();
  });
});

stopButton.addEventListener('click', () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
});

