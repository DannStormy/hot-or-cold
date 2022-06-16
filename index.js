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
