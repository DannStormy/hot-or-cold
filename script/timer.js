const el = document.querySelector(".clock");
const bell = document.querySelector("audio");

const startBtn = document.querySelector(".start");

let initial, perc, mins;

let seconds = 30;
let totalsecs = 30;


const circle = document.querySelector(".progress-ring-circle");
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}
// push

startBtn.addEventListener("click", function () {
	
  setTimeout(decrement(), 1000);

	startBtn.style.transform = "scale(0)";
	paused = false;
});

function decrement() {
	if (circle.classList.contains("danger")) {
		circle.classList.remove("danger");
	}

	perc = Math.ceil(((totalsecs - seconds) / totalsecs) * 100);
	setProgress(perc);

	if (seconds > 0) {
		// perc = Math.ceil(((totalsecs - seconds) / totalsecs) * 100);
		// setProgress(perc);
    seconds--;
    document.getElementById("count").innerHTML = seconds;
		
		initial = window.setTimeout("decrement()", 1000);

		if (seconds < 10) {
			circle.classList.add("danger");
		}

		if (seconds === 1) {
			bell.play();
		}
	} else {
		seconds = 0;

		startBtn.style.transform = "scale(1)";
	}
}
// push