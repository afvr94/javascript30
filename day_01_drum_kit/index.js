function playSound(event) {
  const keyPressed = event.keyCode;
  const audio = document.querySelector(`audio[data-key="${keyPressed}"]`);
  const key = document.querySelector(`div[data-key="${keyPressed}"]`);
  if (!audio) return;
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

function removeTransition(event) {
  if (event.propertyName !== "transform") return;
  event.target.classList.remove("playing");
}

const keys = Array.from(document.querySelectorAll(".key"));
console.log(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
