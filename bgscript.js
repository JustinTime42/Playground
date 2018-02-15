var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("submit");


function setGradient() {
	var direction = document.getElementById("direction").value;
	body.style.background = 
	"linear-gradient(" + direction + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
	console.log(direction);
}

button.addEventListener("click", setGradient);


// color2.addEventListener("input", setGradient);