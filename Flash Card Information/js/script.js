var inputBox = document.getElementById("chatinput");

inputBox.onkeyup = function () {
  document.getElementById("card").innerHTML = inputBox.value;
};
