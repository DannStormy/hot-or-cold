// I had to comment this part first because I kept getting an error that states document is not defined. I dont understand the error, but I'm sure in the morning, we'll be able to figure it out

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    let startButton = document.getElementById("start-button");
    let infoBox = document.getElementById("info");

    let randCompChoice = 0;

    startButton.addEventListener("click", function () {
      randCompChoice = computerChoice()
      infoBox.textContent = "Game has started"
      startButton.textContent = "END GAME"
      console.log(randCompChoice);
      console.log("Game Started");

      //prompt computer to choose a random number between 1 - 20
      function computerChoice() {
        return Math.floor(Math.random() * 21);
      }

    });
  }, false);
})()
