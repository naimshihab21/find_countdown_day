let dateEl = document.querySelector('.date')
const monthEl = document.querySelector('.month')
const yearEl = document.querySelector('.year')
const btn = document.querySelector('.btn')

function countdown () {
  const acquireInput = `${dateEl.value} ${monthEl.value} ${yearEl.value}`
  const setDate = new Date(acquireInput)
  const currentDate = new Date()
  const totalSeconds = (setDate - currentDate) / 1000

  const days = Math.floor(totalSeconds / 24 / 3600)
  const hours = Math.floor(totalSeconds / 3600) % 24
  const minutes = Math.floor(totalSeconds / 60) % 60
  const seconds = Math.floor(totalSeconds) % 60

  const changeDays = document.querySelector('.count__days-h2')
  const changeHours = document.querySelector('.count__hours-h2')
  const changeMinutes = document.querySelector('.count__minutes-h2')
  const changeSeconds = document.querySelector('.count__seconds-h2')

  changeDays.innerHTML = days
  changeHours.innerHTML = formatTime(hours)
  changeMinutes.innerHTML = formatTime(minutes)
  changeSeconds.innerHTML = formatTime(seconds)
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time
}

btn.addEventListener('click', () => setInterval(countdown, 1000))
