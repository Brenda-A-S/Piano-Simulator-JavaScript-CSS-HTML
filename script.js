const keys = document.querySelectorAll('.key');
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");

let mapedKeys = [];
let audio = new Audio("sounds/a.wav");

const playTune = (key) => {
  audio.src = `sounds/${key}.wav`;
  audio.play();
  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

keys.forEach((key) => {
  key.addEventListener("click", () => playTune(key.dataset.key));
  mapedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (e) => {
  if (mapedKeys.includes(e.key)) {
    playTune(e.key);
  }
});

const handleVolume = (e) => {
  audio.volume = e.target.value;
};

const showHideKeys = () => {
  keys.forEach((key) => key.classList.toggle("hide"));
};

volumeSlider.addEventListener("input", handleVolume);

keysCheck.addEventListener("click", showHideKeys);