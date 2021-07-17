import Swal from 'sweetalert2';

const inputEl = document.querySelector('#date-selector');
const timerBtnEl = document.querySelector('[data-start-timer]');

let isActive = false;

timerBtnEl.addEventListener('click', onTimerStart);

class Timer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    this.selector = selector;

    this.refs = {
      days: document.querySelector(`${this.selector}, [data-days]`),
      hours: document.querySelector(`${this.selector}, [data-hours]`),
      minutes: document.querySelector(`${this.selector}, [data-minutes]`),
      seconds: document.querySelector(`${this.selector}, [data-seconds]`),
    };
  }

  getMs() {
    const targetDate = Date.parse(this.targetDate);
    const currentDate = Date.now();
    return targetDate - currentDate;
  }

  timerStart() {
    this.intervalId = setInterval(() => {
      const diffMs = this.getMs();
      if (diffMs <= 0) {
        this.timerStop();
        return;
      }
      const { days, hours, minutes, seconds } = convertMs(diffMs);
      this.renderTimerData({ days, hours, minutes, seconds });
    }, 1000);
  }

  timerStop() {
    Swal.fire({
      title: 'Error!',
      text: 'Please choose a date in the future',
      icon: 'error',
      confirmButtonText: 'Cool',
    });
    isActive = false;
    clearInterval(this.intervalId);
  }

  renderTimerData({ days, hours, minutes, seconds }) {
    this.refs.days.textContent = days;
    this.refs.hours.textContent = pad(hours);
    this.refs.minutes.textContent = pad(minutes);
    this.refs.seconds.textContent = pad(seconds);
  }
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function pad(value) {
  return String(value).padStart(2, 0);
}

function getTargetDate() {
  return inputEl.value.split('-').join(',');
}

function onTimerStart() {
  if (isActive) {
    return;
  }
  isActive = true;
  const targetDate = getTargetDate();
  const timer = new Timer({ selector: '#timer', targetDate });
  timer.timerStart();
}
