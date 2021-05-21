var input= document.querySelector("#input");
var text= document.querySelector("#text");
function showText(){
    input.value =="" ? text.innerHTML="No Text inputted" :  text.innerHTML= input.value;
    input.value="";
}


input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("submit").click();
    }
  });