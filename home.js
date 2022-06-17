(function () {
  //check if DOM elements are loaded
  document.addEventListener('DOMContentLoaded', function () {

    function getName() {
      return window.localStorage.getItem('name');
    }
    console.log(getName())
    //selectors for html elements
    //let resetButton = document.getElementById("reset-button");
    let guessBtn = document.querySelector(".guess-btn")
    let welcomeUser = document.querySelector(".welcome")
    welcomeUser.textContent = `Welcome ${getName()}`
    //let infoBox = document.getElementById("info");
    let result = document.querySelector(".result")

    //computer commentary
    let commentary = [
      "You're Burning Up!",
      "You're Hot!",
      "You're Cold",
      "You're Freezing!",
      "You're Purple Cold!",
      "Game Won! You're Awesome"
    ];

    let tryCount = 0;
    //computer choice
    let randCompChoice = computerChoice();
    console.log(randCompChoice);


    // resetButton.addEventListener("click", function () {
    //   //randCompChoice = computerChoice()
    //   infoBox.textContent = "Game has started"
    //   startButton.textContent = "END GAME"
    //   console.log("Game Started");
    // });

    //prompt computer to choose a random number between 1 - 20
    function computerChoice() {
      return Math.floor(Math.random() * 21);
    }

    guessBtn.addEventListener("click", function () {
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
        result.textContent = `${commentary[5]}`
        console.log("Game Won! You're Awesome")
        console.log("You completed the game in " + tryCount + " tries")
      }
    })

  }, false);
})();
