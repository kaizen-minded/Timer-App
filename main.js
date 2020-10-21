const durationInput = document.getElementById("duration");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const circle = document.querySelector("circle");

const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);

let currentOffset = 0;
let duration;
const timer = new Timer(durationInput, startBtn, pauseBtn, {
  onStart(totalDuration) {
    duration = totalDuration;
  },
  onTick(timeRemaining) {
    circle.setAttribute(
      "stroke-dashoffset",
      (perimeter * timeRemaining) / duration - perimeter
    );
  },
  onComplete() {
    console.log("finished");
  },
});
