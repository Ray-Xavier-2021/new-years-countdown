const title = document.querySelector('.title')
const counter = document.querySelector('.counter')
const daysContainer = document.querySelector('.days')
const hoursContainer = document.querySelector('.hours')
const minutesContainer = document.querySelector('.minutes')
const secondsContainer = document.querySelector('.seconds')

const newYearsDay = new Date('Jan 1, 2024 00:00:00').getTime()

const now = new Date().getTime()

const timeUntilNewYear = newYearsDay - now

console.log(newYearsDay)
console.log(now)
console.log(timeUntilNewYear)

const days = Math.floor(timeUntilNewYear / (1000 * 60 * 60 * 24));

const hours = Math.floor((timeUntilNewYear % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

const minutes = Math.floor((timeUntilNewYear % (1000 * 60 * 60)) / (1000 * 60 ));

const seconds = Math.floor((timeUntilNewYear % (1000 * 60)) / 1000);

// console.log(days, 'd')
// console.log(hours, 'h')
// console.log(minutes, 'm')
// console.log(seconds, 's')

// Countdown Function 
const countDown = setInterval(function() {
  const now = new Date().getTime()

  const timeUntilNewYear = newYearsDay - now

  const days = Math.floor(timeUntilNewYear / (1000 * 60 * 60 * 24));

  const hours = Math.floor((timeUntilNewYear % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  const minutes = Math.floor((timeUntilNewYear % (1000 * 60 * 60)) / (1000 * 60 ));

  const seconds = Math.floor((timeUntilNewYear % (1000 * 60)) / 1000);

  daysContainer.innerHTML = days +'d'
  hoursContainer.innerHTML = hours + 'h'
  minutesContainer.innerHTML = minutes + 'm'
  secondsContainer.innerHTML = seconds +'s'

  if (timeUntilNewYear <= 0) {
    clearInterval()

    // Remove counter
    counter.style.display = 'none';

    // Modify title
    title.style.margin = 'auto';
    title.innerHTML = "HAPPY NEW YEAR'S";
  }
})