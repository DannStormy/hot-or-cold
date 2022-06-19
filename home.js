(function () {
  //check if DOM elements are loaded
  document.addEventListener('DOMContentLoaded', function () {

    let pointerAnimation = document.querySelector(".pointerAnimation")

    //const el = document.querySelector(".clock");
    const bell = document.querySelector("audio");


    let initial, perc, mins;

    let seconds = 30;
    let totalsecs = 30;

    // animate the circle
    const circle = document.querySelector(".progress-ring-circle");
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;

    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference;

    function setProgress(percent) {
      const offset = circumference - (percent / 100) * circumference;
      circle.style.strokeDashoffset = offset;
    }

    function getName() {
      return window.localStorage.getItem('name');
    }
    //selectors for html elements
    let resetButton = document.getElementById("reset-btn");
    let guessBtn = document.querySelector(".guess-btn")
    let welcomeUser = document.querySelector(".welcome")
    welcomeUser.textContent = `Welcome ${getName()}`
    //let infoBox = document.getElementById("info");
    let result = document.querySelector(".result")

    //computer commentary
    let commentary = [
      "You're Burning Up! 🔥🔥",
      "You're Hot! 🔥",
      "You're Cold 🥶",
      "You're Freezing! 🥶🥶",
      "You're Purple Cold! 🥶🥶❄️",
      "Game Won! You're Awesome! 🎉🎉"
    ];

    let tryCount = 0;
    //computer choice
    let randCompChoice = computerChoice();
    console.log(randCompChoice);

    //reloads page, thereby reseting all values
    function resetGame() {
      window.location.replace("http://127.0.0.1:5500/home.html");
    }

    resetButton.addEventListener("click", function () {
      resetGame()
    });

    //prompt computer to choose a random number between 1 - 20
    function computerChoice() {
      return Math.floor(Math.random() * 21);
    }

    let isTimerActive = false;

    function decrement() {
      isTimerActive = true;

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
        // clearTimeout(initial)

        if (seconds < 10) {
          circle.classList.add("danger");
        }

        if (seconds === 0) {
          guessBtn.style.transform = "scale(0)";
          result.textContent = `Game Over, after ${tryCount} tries, the answer is ${randCompChoice}`
          bell.play();
        }

        return setTimeout(decrement, 1000);
      }

      //startTimerBtn.style.transform = "scale(1)";
      isTimerActive = false;
    }

    guessBtn.addEventListener("click", function (e) {
      e.preventDefault()
      if (!isTimerActive) decrement();
      //counts number of tries
      tryCount += 1;

      //selects user-input value from html
      let userInput = document.querySelector("#user-input").value;

      //Compare both Results and returns its absolute value
      let difference = Math.abs(randCompChoice - userInput);

      //conditional logic
      if (difference >= 1 && difference <= 5) {
        result.textContent = `${commentary[0]}`
        pointerAnimation.style.transform = "rotate(75deg)";
        pointerAnimation.style.borderBottomColor = "darkred";
        result.style.color = "rgb(223, 84, 84)";
        console.log("You're burning up")
      } else if (difference >= 6 && difference <= 10) {
        result.textContent = `${commentary[1]}`
        pointerAnimation.style.transform = "rotate(50deg)"
        pointerAnimation.style.borderBottomColor = "red"
        result.style.color = "rgb(223, 84, 84)";
        console.log("you're hot")
      } else if (difference >= 11 && difference <= 15) {
        result.textContent = `${commentary[2]}`
        pointerAnimation.style.transform = "rotate(-50deg)"
        pointerAnimation.style.borderBottomColor = "blue"
        result.style.color = "lightblue";
        console.log("you're cold")
      } else if (difference >= 16 && difference <= 20) {
        result.textContent = `${commentary[3]}`
        pointerAnimation.style.transform = "rotate(-75deg)"
        pointerAnimation.style.borderBottomColor = "rgb(21, 21, 165)"
        result.style.color = "lightblue";
        console.log("you're freezing")
      } else if (difference > 20) {
        result.textContent = `${commentary[4]}`
        pointerAnimation.style.transform = "rotate(-130deg)"
        pointerAnimation.style.borderBottomColor = "purple"
        result.style.color = "lightblue";
        console.log("you're purple cold")
      } else if (difference === 0) {
        seconds = 0;
        result.style.color = "lightblue";
        guessBtn.disabled = true;
        guessBtn.style.display = 'none';
        result.textContent = `${commentary[5]} in ${tryCount} tries`
        pointerAnimation.style.transform = "rotate(130deg)"
        pointerAnimation.style.borderBottomColor = "darkred"
      }
    })

  }, false);
})();
