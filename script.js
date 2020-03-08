const magnifyIngGlass = document.querySelector("#circle");
const clipCircle = document.querySelector("#clipcircle");
const clippedImage = document.querySelector("#clipped-image");
const smallImage = document.querySelector(".waldo");
const svg = document.querySelector("svg");


svg.addEventListener("mousemove", moveCircle)


function moveCircle(event) {

  magnifyIngGlass.setAttribute("cx", event.pageX / window.innerWidth * 1000);
  magnifyIngGlass.setAttribute("cy", event.pageY / window.innerHeight * 1000 * (window.innerHeight / window.innerWidth));
  clipCircle.setAttribute("cx", event.pageX / window.innerWidth * 1000);
  clipCircle.setAttribute("cy", event.pageY / window.innerHeight * 1000 * (window.innerHeight / window.innerWidth));

  let coordinateX = 425 - (event.pageX - window.pageXOffset);
  let coordinateY = 150 - (event.pageY - window.pageYOffset);

  clippedImage.setAttribute("x", coordinateX);
  clippedImage.setAttribute("y", coordinateY);
}