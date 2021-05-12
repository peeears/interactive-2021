// first you need to create an element
var overlay = document.createElement("div");
overlay.id = "overlay";

// Then use appendChild to append the element to the body.
document.body.appendChild(overlay);


const body = document.querySelector("body")
const el = document.querySelector("#overlay")

body.addEventListener("mousemove", (e) => {
  let left = e.clientX - window.innerWidth;
  let top = e.clientY - window.innerHeight;
  el.style.left = left + "px";
  el.style.top = top + "px";
});

// hiding cursor


var style = window.getComputedStyle(body, null).getPropertyValue("font-size");

var fontSize = parseFloat(style) * 2.5;

console.log(fontSize);

// document.getElementById("overlay").style.maskImage = fontSize;

var style = "-webkit-mask-image: radial-gradient(" + fontSize + "px at 50% 50% , transparent 35%, black 100%)";

// document.getElementById("overlay").style.maskImage = size;
document.getElementById("overlay").setAttribute("style", style);