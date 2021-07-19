const refs = {
  bodyEl: document.querySelector('body'),
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.btnStart.addEventListener('click', onBtnStartClick);

function onBtnStartClick() {
  color = setInterval(() => {
    return (refs.bodyEl.style.backgroundColor = getRandomHexColor());
  }, 1000);

  if (refs.btnStart) {
    refs.btnStart.removeEventListener('click', onBtnStartClick);
    refs.btnStart.disabled = true;
  }
}

refs.btnStop.addEventListener('click', () => {
  clearInterval(color);
  if (refs.btnStop) {
    refs.btnStart.addEventListener('click', onBtnStartClick);
    refs.btnStart.disabled = false;
  }
});
