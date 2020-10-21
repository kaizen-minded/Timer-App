class Timer {
  constructor(durationInput, playBtn, pauseBtn, callbacks) {
    this.durationInput = durationInput;
    this.playBtn = playBtn;
    this.pauseBtn = pauseBtn;
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    this.playBtn.addEventListener("click", this.start);
    this.pauseBtn.addEventListener("click", this.pause);
  }

  start = () => {
    if (this.onStart) {
      this.onStart();
    }
    this.tick();
    this.interval = setInterval(this.tick, 1000);
  };
  pause = () => {
    clearInterval(this.interval);
  };

  tick = () => {
    if (this.timeRemaining <= 0) {
      if (this.onComplete) {
        this.onComplete();
      }
      this.pause();
    } else {
      if (this.onTick) {
        this.onTick();
      }
      this.timeRemaining = this.timeRemaining;
    }
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {
    this.durationInput.value = --time;
  }
}

const durationInput = document.getElementById("duration");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const timer = new Timer(durationInput, startBtn, pauseBtn, {
  onStart() {
    console.log("timer started");
  },
  onTick() {
    console.log("tick tok");
  },
  onComplete() {
    console.log("finished");
  },
});
