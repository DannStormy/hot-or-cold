(function () {
  document.addEventListener('DOMContentLoaded', function () {
    let startButton = document.getElementById("start-button");

    let randCompChoice = 0;

    startButton.addEventListener("click", function () {
      randCompChoice = computerChoice()
      startButton.textContent = "END GAME"
      console.log(randCompChoice);
      console.log("Game Started");

      //prompt computer to choose a random number between 1 - 20
      function computerChoice() {
        return Math.floor(Math.random() * 21);
      }

    });
  }, false);
})();
