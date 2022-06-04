const btns = document.querySelectorAll(".tecla");

btns.forEach((btn) => {
  btn.addEventListener("click", () => playAudio(btn));
});

function playAudio(btn) {
  const audio = document.getElementById(btn.dataset.key);
  audio.currentTime = 0.2;
  audio.play();
}
