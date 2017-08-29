
const audio = new Audio('sounds/Alarm-tone.mp3')
const now = new Date ();

function setDate() {
  const secondHand = document.querySelector('.sec');
  const seconds = now.getSeconds();
  const secDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = (`rotate(${secDegrees}deg)`)

  const minHand = document.querySelector('.min');
  const min = now.getMinutes();
  const minDegrees = ((min / 60) * 360) + 90;
  minHand.style.transform = (`rotate(${minDegrees}deg)`);

  const hourHand = document.querySelector('.hour');
  const hour = now.getHours();
  const hourDegree = ((hour / 12) * 360) + 90;
  hourHand.style.transform = (`rotate(${hourDegree}deg)`);
};

setInterval(setDate, 1000)

function buttonClick () {
  console.log('clicky');
  let el = document.querySelector('.start_end')
  audio.play();

  if (el.innerHTML == 'Start') {
    el.innerHTML = 'Stop';
    console.log(now.getMinutes());

  } else {
    el.innerHTML = 'Start';
  }
}

function snooze () {
  console.log('mo sleep');
  audio.pause();
  audio.currentTime = 0;
}
