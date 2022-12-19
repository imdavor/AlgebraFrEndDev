var p = document.querySelector("p");
p.style.color = "red";

// document.querySelector("#cube").classList.add("cube");
var cube = document.querySelector("#cube");
cube.classList.add("cube");

var cubeStyles = window.getComputedStyle(cube);
// console.log(cubeStyles);
var cubeLeftPosition = cubeStyles.getPropertyValue("left");
console.log(cubeLeftPosition);
// console.log(cube.style.left)

var cubeLeftMargin = parseInt(cubeStyles.getPropertyValue("margin-left"));
// console.log(cubeLeftMargin);
var cubeWidth = parseInt(cubeStyles.getPropertyValue("width"));
var windowWidth = window.innerWidth;
var maxPosition = windowWidth - cubeWidth;

// console.log(windowWidth);

function animate() {
    if (cubeLeftMargin == maxPosition) {
        console.log("interval"); // provjera da li animate i dalje radi
        clearInterval(intID);
        return;
    }
    cube.style.marginLeft = cubeLeftMargin + "px";
    cubeLeftMargin++;
}

var intID = setInterval(animate, 10);

/** vježba */

var divText = document.querySelector("#cube + div");
// console.log(divText);
divText.classList.toggle("hide");
