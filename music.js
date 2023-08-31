const songElement = document.getElementById("playingSong");
const songTitle = document.getElementById("songTitle");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const nextBtn = document.getElementById("nextSong");
const previousBtn = document.getElementById("previousSong");
const image = document.querySelector(".card-img-top");

//About volume
const muteBtn = document.getElementById("muteBtn");
const loudVolume = document.querySelector(".volumeIcon");
const volumeUpBtn = document.getElementById("volumeUpBtn");
const volumeDownBtn = document.getElementById("volumeDownBtn");
const volumePercentage = document.getElementById("volumePercentage");
const volumeSlider = document.getElementById("volumeSlider");

//About time
const durationSlider = document.getElementById("durationSlider");
const skipForward = document.getElementById("skipForward");
const skipBackward = document.getElementById("skipBackward");
const currentPlayingTime = document.getElementById("currentPlayingTime");

//playlist
const myPlaylist = document.getElementById("myPlaylist");
const giveLove = document.getElementById("giveLove");
const friend = document.getElementById("friend");
const dangerously = document.getElementById("dangerously");
const icecream = document.getElementById("icecream");
const some = document.getElementById("some");
const on = document.getElementById("on");
const psycho = document.getElementById("psycho");

const playlist = [
  giveLove.value,
  friend.value,
  dangerously.value,
  icecream.value,
  some.value,
  on.value,
  psycho.value,
];

myPlaylist.onchange = (event) => {
  songElement.src = `songs/` + event.target.value;
  songElement.play();
};

const songPhotos = [
  "giveLove",
  "ikon",
  "dangerously",
  "icecream",
  "some",
  "on",
  "psycho",
];

const names = [
  "Give love - AKMU",
  "Best Friend - iKON",
  "Dangerously - Ahyeon(cover)",
  "Icecream - Blackpink",
  "Some - BOL4",
  "ON - BTS",
  "Psycho - Red Velvet",
];

let currentImage = 0;
let currentSongName = 0;
let currentSongIndex = 0;

nextBtn.onclick = () => {
  currentImage++;
  currentSongName++;
  currentSongIndex++;
  image.src = `images/${songPhotos[currentImage]}.jpg`;
  songElement.src = "songs/" + playlist[currentSongIndex];
  songTitle.innerHTML = names[currentSongName];
  songElement.play();
};
previousBtn.onclick = () => {
  currentImage--;
  currentSongName--;
  currentSongIndex--;
  image.src = `images/${songPhotos[currentImage]}.jpg`;
  songElement.src = "songs/" + playlist[currentSongIndex];
  songTitle.innerHTML = names[currentSongName];
  songElement.play();
};

playBtn.onclick = () => {
  songElement.play();
};
pauseBtn.onclick = () => {
  songElement.pause();
};
songElement.addEventListener("timeupdate", () => {
  const second = parseInt(songElement.currentTime);
  const displayMinute = parseInt(second / 60);
  const displaySecond = parseInt(second % 60);
  const totalduration = parseInt(songElement.duration);
  const totalMinute = parseInt(totalduration / 60);
  const totalSecond = parseInt(totalduration % 60);
  currentPlayingTime.innerText = `0${displayMinute}:${displaySecond} / 0${totalMinute}:${totalSecond}`;
  durationSlider.value = songElement.currentTime;
});

muteBtn.onclick = () => {
  songElement.volume = 0;
  volumePercentage.innerText = `0%`;
  volumeSlider.value = 0;
};

loudVolume.onclick = () => {
  songElement.volume = 1;
  volumePercentage.innerText = `100%`;
  volumeSlider.value = 100;
};

volumeSlider.onchange = (event) => {
  const sliderVolume = event.target.value;
  songElement.volume = sliderVolume / 100;
  console.log(songElement.volume);
  volumePercentage.innerText = `${sliderVolume}%`;
};

window.onload = () => {
  durationSlider.max = songElement.duration;
};

durationSlider.onchange = (event) => {
  const sliderDuration = event.target.value;
  songElement.currentTime = sliderDuration;
  const second = parseInt(songElement.currentTime);
  const displayMinute = parseInt(second / 60);
  const displaySecond = parseInt(second % 60);
  const totalduration = parseInt(songElement.duration);
  const totalMinute = parseInt(totalduration / 60);
  const totalSecond = parseInt(totalduration % 60);
  currentPlayingTime.innerText = `0${displayMinute}:${displaySecond} / 0${totalMinute}:${totalSecond}`;
};

skipForward.onclick = () => {
  const totalSecond = parseInt(songElement.duration);
  const second = parseInt(songElement.currentTime);
  if (second < totalSecond) {
    songElement.currentTime = second + 10;
  }
};
skipBackward.onclick = () => {
  const second = parseInt(songElement.currentTime);
  songElement.currentTime = second - 10;
};
