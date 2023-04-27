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
  pomodoroButton.style.color ="white";
});

pomodoroButton.addEventListener('mouseleave', ()=>
{
  pomodoroButton.style.color ="#ccba78";
});

tenMinuteButton.addEventListener('click', ()=>{
  startTimer (10*60);

})

tenMinuteButton.addEventListener('mouseenter', ()=>{
  tenMinuteButton.style.color="white";
})

tenMinuteButton.addEventListener('mouseleave', ()=>{
  tenMinuteButton.style.color="#ccba78";
})


fiveMinuteButton.addEventListener('click', ()=>{
  startTimer (5*60);
  fiveMinuteButton.style.color = "white";
})

fiveMinuteButton.addEventListener('mouseenter', ()=>{
  fiveMinuteButton.style.color="white";
})

fiveMinuteButton.addEventListener('mouseleave', ()=>{
  fiveMinuteButton.style.color="#ccba78";
})

//audioplayer features
//const audioPlayer=document.getElementById('audio-player');
const playButton=document.getElementById('play-btn');
const pauseButton = document.getElementById('pause-btn');
const nextButton = document.getElementById ('next-btn');
let currentSongIndex = 0;

playButton.addEventListener('mouseenter', ()=>{
  playButton.style.color = "white";
})
playButton.addEventListener('mouseleave', ()=>{
  playButton.style.color = "#ccba78";
})
nextButton.addEventListener('mouseenter', ()=>{
  nextButton.style.color = "white";
})
nextButton.addEventListener('mouseleave', ()=>{
  nextButton.style.color = "#ccba78";
})

pauseButton.addEventListener('mouseenter', ()=>{
  pauseButton.style.color = "white";
})

pauseButton.addEventListener('mouseleave', ()=>{
  pauseButton.style.color = "#ccba78";
})


fetch ('http://localhost:3000/moneymusic')
.then(response => response.json ())
.then(data => {
  const audioContainer = document.getElementById("audio-container");
for (let i = 0; i < data.moneymusic.length; i++) {
  const track = data.moneymusic[i];
  const audioPlayer = document.createElement("audio");
  audioPlayer.src = track.url;
  audioContainer.appendChild(audioPlayer);
}

  
  console.log(data);
})
.catch(error =>{
  console.log(error);
})

