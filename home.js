(function () {
  //check if DOM elements are loaded
  document.addEventListener('DOMContentLoaded', function () {
    let pointerAnimation = document.querySelector(".pointerAnimation")

    //const el = document.querySelector(".clock");
    const bell = document.querySelector("audio");

    let perc;

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
    //get current time
    const hour = new Date().getHours();
    let greeting = '';
    //logic for greeting
    if (hour < 12) greeting = 'Good morning';
    else if (hour < 18) greeting = 'Good afternoon';
    else greeting = 'Good evening';



    function getName() {
      return window.localStorage.getItem('name');
    }
    //selectors for html elements
    let resetButton = document.getElementById("reset-btn");
    let guessBtn = document.querySelector(".guess-btn")
    let welcomeUser = document.querySelector(".welcome")
    welcomeUser.textContent = `${greeting}, ${getName()}`
    let result = document.querySelector(".result")
    let comment = document.querySelector(".comment")

    //computer commentary
    let commentary = [
      "You're Burning Up! 🔥🔥",
      "You're Hot! 🔥",
      "You're Cold 🥶",
      "You're Freezing! 🥶🥶",
      "You're Icy Cold! 🥶🥶❄️",
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
        seconds--;
        document.getElementById("count").innerHTML = seconds;

        if (seconds < 10) {
          circle.classList.add("danger");
        }

        if (seconds === 1) {
          bell.play();
        }

        if (seconds === 0) {
          guessBtn.style.transform = "scale(0)";
          comment.textContent = `Game Over!`
          result.textContent = `Answer: ${randCompChoice}, Number of tries: ${tryCount}`
          comment.style.color = "rgb(223, 84, 84)";
          result.style.color = "rgb(223, 84, 84)";
          result.style.border = "none";
        }

        return setTimeout(decrement, 1000);
      }

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
        result.style.color = "rgb(223, 84, 84)";
      } else if (difference >= 6 && difference <= 10) {
        result.textContent = `${commentary[1]}`
        pointerAnimation.style.transform = "rotate(50deg)"
        result.style.color = "rgb(223, 84, 84)";
      } else if (difference >= 11 && difference <= 15) {
        result.textContent = `${commentary[2]}`
        pointerAnimation.style.transform = "rotate(-50deg)"
        result.style.color = "lightblue";
      } else if (difference >= 16 && difference <= 20) {
        result.textContent = `${commentary[3]}`
        pointerAnimation.style.transform = "rotate(-75deg)"
        result.style.color = "lightblue";
      } else if (difference > 20) {
        result.textContent = `${commentary[4]}`
        pointerAnimation.style.transform = "rotate(-135deg)"
        result.style.color = "lightblue";
      } else if (difference === 0) {
        seconds = 0;
        guessBtn.disabled = true;
        guessBtn.style.display = 'none';
        comment.textContent = `${commentary[5]}`
        result.textContent = `Number of tries: ${tryCount}`
        comment.style.color = "lightblue";
        result.style.color = "lightblue";
        result.style.border = "none";
        pointerAnimation.style.transform = "rotate(139deg)"
      }
    })

  }, false);
})();
