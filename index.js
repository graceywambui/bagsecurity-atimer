//timer features
const pomodoroButton = document.querySelector('#pomodoro');
const tenMinuteButton = document.querySelector('#ten');
const fiveMinuteButton = document.querySelector('#five');
const timerDigits = document.querySelector('.timer__digits');
const timerDisplay = document.querySelector('.timer');

let timerId;
let timerLeft;

function startTimer(duration) {
  clearInterval(timerId); // Stop any running timer

timeLeft = duration;
updateTimerDisplay();

timerId = setInterval (()=>{
  timeLeft--;
  if (timeLeft < 0) {
    clearInterval(timerId);
    alert('Done');
  } else {
    updateTimerDisplay();
  }
  }, 1000);
}

function updateTimerDisplay(){
  const minutes = Math.floor(timeLeft/60);
  const seconds = timeLeft % 60;
  timerDigits.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

pomodoroButton.addEventListener('click', ()=>{
  startTimer (25*60);
    
}
);

pomodoroButton.addEventListener('mouseenter', ()=>
{
  pomodoroButton.style.color ="#f53192";
});

pomodoroButton.addEventListener('mouseleave', ()=>
{
  pomodoroButton.style.color ="black";
});

tenMinuteButton.addEventListener('click', ()=>{
  startTimer (10*60);
  tenMinuteButton.style.color = "black";

})

tenMinuteButton.addEventListener('mouseenter', ()=>{
  tenMinuteButton.style.color="#f53192";
})

tenMinuteButton.addEventListener('mouseleave', ()=>{
  tenMinuteButton.style.color="black";
})


fiveMinuteButton.addEventListener('click', ()=>{
  startTimer (5*60);
  fiveMinuteButton.style.color = "black";
})

fiveMinuteButton.addEventListener('mouseenter', ()=>{
  fiveMinuteButton.style.color="#f53192";
})

fiveMinuteButton.addEventListener('mouseleave', ()=>{
  fiveMinuteButton.style.color="black";
})



let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function(){
progress.max = song.duration;
progress.value = song.currentTime;

}

function playPause(){
  if(ctrlIcon.classList.contains("fa-pause")){
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  }
  else{
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  }
}

if(song.play()){
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

progress.onchange = function (){
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
}
//audioplayer features
//const audioPlayer=document.getElementById('audio-player');
const musicList = document.getElementById('musicList');
const playButton=document.getElementById('play-btn');
const pauseButton = document.getElementById('pause-btn');
const audioPlayer = document.getElementById('audioPlayer');
const nextButton = document.getElementById ('next-btn');

const ul = document.querySelector('ul');
//let currentSongIndex = 0;

fetch ('http://localhost:3000/moneymusic')
.then(response => response.json ())
.then(data => {
  

  ul.innerHTML = '';

data.forEach(data => {
  const li = document.createElement("li");
  li.classList.add("music", "item");
  li.textContent = `${data.title}-${data.artist}`;
  li.style.color = '#f53192';

  // Add event listener to play music on click
  li.addEventListener('click', () => {
  audioPlayer.src = data.url

  }); 


  ul.appendChild(li);

  

});



});





// playButton.addEventListener('mouseenter', ()=>{
//   playButton.style.color = "white";
// })
// playButton.addEventListener('mouseleave', ()=>{
//   playButton.style.color = "#ccba78";
// })
// nextButton.addEventListener('mouseenter', ()=>{
//   nextButton.style.color = "white";
// })
// nextButton.addEventListener('mouseleave', ()=>{
//   nextButton.style.color = "#ccba78";
// })

// pauseButton.addEventListener('mouseenter', ()=>{
//   pauseButton.style.color = "white";
// })

// pauseButton.addEventListener('mouseleave', ()=>{
//   pauseButton.style.color = "#ccba78";
// })

