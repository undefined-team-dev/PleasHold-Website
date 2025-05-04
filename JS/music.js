const img = document.getElementById("volume-icon");
let audio;

if (document.URL.toLocaleLowerCase().includes("main")) {
  audio = new Audio("Assets/Musics/PleaseHold_Theme_loop.mp3");
} else {
  audio = new Audio("Assets/Musics/MainGameMusic.wav");
}

audio.loop = true;
let musicOn = false

function switchMusic(){
  if (musicOn === true){
    musicOn = false;
    img.src = "Assets/SVG/volume_off.svg";
    audio.pause();
  }
  else {
    musicOn = true;
    img.src = "Assets/SVG/volume_up.svg";
    audio.play();
  }
}