document.querySelectorAll(".piano button").forEach(button => {
  button.addEventListener("click", () => {
    let key = button.dataset.key.replace(/[0-9]/g, ''); // handles A2, A3
    let sound = document.getElementById(key);
    if (sound) {
      sound.currentTime = 0; // rewind to start
      sound.play();
    }
  });
});

document.addEventListener("keydown", (e) => {
  let key = e.key.toUpperCase();
  let sound = document.getElementById(key);
  if (sound) {
    sound.currentTime = 0;
    sound.play();
    const btn = [...document.querySelectorAll('button')].find(b => b.dataset.key.startsWith(key));
    if (btn) btn.classList.add('active');
  }
});

document.addEventListener("keyup", (e) => {
  let key = e.key.toUpperCase();
  document.querySelectorAll("button").forEach(btn => {
    if (btn.dataset.key.startsWith(key)) {
      btn.classList.remove('active');
    }
  });
});

document.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();
  const audio = document.getElementById('runaway');
  const runawayKey = document.getElementById('runaway-key');

  if (key === 'r') {
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
    if (runawayKey) {
      runawayKey.classList.add('pressed');
      setTimeout(() => {
        runawayKey.classList.remove('pressed');
      }, 150);
    }
  }

  if (key === 's') {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  }
});
