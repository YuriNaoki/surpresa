window.addEventListener("DOMContentLoaded", event => {
const audio = document.getElementById('myAudio');
  let count = 0;

  audio.onended = function() {
    count++;
    if (count < 5) {
      audio.play();
    }
  };

  audio.play();
});