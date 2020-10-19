class Timer {
  constructor(durationInput, playBtn, pauseBtn) {
    this.durationInput = durationInput;
    this.playBtn = playBtn;
    this.pauseBtn = pauseBtn;

    this.playBtn.addEventListener("click", this.start);
  }

  start() {
    console.log("start the timer");
  }
}

const durationInput = document.getElementById("duration");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const timer = new Timer(durationInput, startBtn, pauseBtn);
