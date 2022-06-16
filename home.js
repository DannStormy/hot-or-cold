// I had to comment this part first because I kept getting an error that states document is not defined. I dont understand the error, but I'm sure in the morning, we'll be able to figure it out

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    //selectors for html elements
    //let resetButton = document.getElementById("reset-button");
    let infoBox = document.getElementById("info");
    //let userChoice = document.getElementById("user-choice");
    //computer commentary
    // var commentary = [
    //   "You're Burning Up!",
    //   "You're Hot!",
    //   "You're Cold",
    //   "You're Freezing!",
    //   "You Guessed Right!"
    // ];
    //computer choice
    let randCompChoice = computerChoice();
    console.log(randCompChoice);

    //let userPrompt = 0;

    resetButton.addEventListener("click", function () {
      //randCompChoice = computerChoice()
      infoBox.textContent = "Game has started"
      startButton.textContent = "END GAME"
      console.log("Game Started");
    });
    //prompt computer to choose a random number between 1 - 20
    function computerChoice() {
      return Math.floor(Math.random() * 21);
    }

    // userChoice.addEventListener("click", () => {
    //   console.log("I was clicked")
    //   switch (userPrompt) {
    //     case userPrompt == 0:
    //       console.log("correct")
    //   };
    // })

  }, false);
})()
