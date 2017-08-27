console.log('hello');

function setDate() {
  const now = new Date ();

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
