const loadText = document.querySelector('.loading-text'),
      bg  = document.querySelector('.bg');

let load = 0,
    int = setInterval(blurring, 30)

const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function blurring() {
  load++;

  if(load > 99) {
    clearInterval(int);
    loadText.style.opacity = 0;
  }

  loadText.innerHTML = `${load}%`;
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}