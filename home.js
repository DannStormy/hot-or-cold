(function () {
  //check if DOM elements are loaded
  document.addEventListener('DOMContentLoaded', function () {

    let timer = document.querySelector(".timer")
    let countdown;
    let timeleft = 10;
    //<progress value="0" max="10" id="progressBar"></progress>

    //timer countdown
    function timerCountdown() {
      countdown = setInterval(function () {
        if (timeleft === 1) {
          guessBtn.disabled = true
          clearInterval(countdown);

          result.textContent = `Game Over, after ${tryCount} tries, the answer is ${randCompChoice}`

        }
        // timer - timeleft;
        timeleft -= 1;
        timer.textContent = timeleft
        //console.log(timeleft)
      }, 1000);
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

    guessBtn.addEventListener("click", function () {
      timerCountdown()
      //counts number of tries
      tryCount += 1;
      console.log("You've tried " + tryCount + " times")

      //selects user-input value from html
      let userInput = document.querySelector("#user-input").value;
      //console.log(userInput);

      //Compare both Results and returns its absolute value
      let difference = Math.abs(randCompChoice - userInput);
      //console.log(difference);

      //conditional logic
      if (difference >= 1 && difference <= 5) {
        result.textContent = `${commentary[0]}`
        result.style.color = "rgb(223, 84, 84)";
        console.log("You're burning up")
      } else if (difference >= 6 && difference <= 10) {
        result.textContent = `${commentary[1]}`
        result.style.color = "rgb(223, 84, 84)";
        console.log("you're hot")
      } else if (difference >= 11 && difference <= 15) {
        result.textContent = `${commentary[2]}`
        result.style.color = "lightblue";
        console.log("you're cold")
      } else if (difference >= 16 && difference <= 20) {
        result.textContent = `${commentary[3]}`
        result.style.color = "lightblue";
        console.log("you're freezing")
      } else if (difference > 20) {
        result.textContent = `${commentary[4]}`
        result.style.color = "lightblue";
        console.log("you're purple cold")
      } else if (difference === 0) {
        clearInterval(countdown);
        guessBtn.disabled = true
        result.textContent = `${commentary[5]} in ${tryCount} tries`
      }
    })

  }, false);
})();
