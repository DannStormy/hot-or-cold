function getName() {
	let playerName = document.getElementById("myForm").elements[0].value;
	if (playerName.length !== 0) {
		console.log(playerName);
		alert(playerName);
		// window.open("./index.html");
    window.location.replace("http://127.0.0.1:5500/home.html");
	} else {
		alert("Input a username to continue");
	}
}


// (function () {
//   document.addEventListener('DOMContentLoaded', function () {
//     let startButton = document.getElementById("start-button");

//     let randCompChoice = 0;

//     startButton.addEventListener("click", function () {
//       randCompChoice = computerChoice()
//       startButton.textContent = "END GAME"
//       console.log(randCompChoice);
//       console.log("Game Started");

//       //prompt computer to choose a random number between 1 - 20
//       function computerChoice() {
//         return Math.floor(Math.random() * 21);
//       }

//     });
//   }, false);
// })()
