let time = 0;

let timer = setInterval(() => {
  time += 2;
  console.log(time + ' seconds have passed');
  if (time > 5) {
    clearInterval(timer);
  }
}, 2000);
