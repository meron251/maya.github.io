
var name = "Meh"
alert("DONT CLICK " + name);

alert("You clicked-.__- "+ name);*/

var dog= "Beagle";
alert("Hello "+ dog);*/

function showAlert() {

  alert("WOOF 🐶");

}

showAlert();
var button = document.querySelector("button");
var outputDiv = document.querySelector(".output");

// start count at 0
var count = 0;

button.addEventListener("click", function(event) {
  // increase the count variable
  count = count + 1;

  // update the HTML with new count
  outputDiv.innerHTML = count;

});
