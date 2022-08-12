(function () {
  //check if DOM elements are loaded
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');

    document.addEventListener('submit', function (event) {
      event.preventDefault();

      let user = document.querySelector("#name").value
      console.log(user);
      // alert(user);
      window.localStorage.setItem('name', user);
      // window.open("./index.html");
      window.location.replace("/home.html");
    });
  }, false);
})();
