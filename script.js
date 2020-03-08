const magnifyIngGlass = document.querySelector("#circle");
const clipCircle = document.querySelector("#clipcircle");
const clippedImage = document.querySelector("#clipped-image");
const smallImage = document.querySelector(".waldo");
const svg = document.querySelector("svg");



svg.addEventListener("mousemove", moveCircle);

function moveCircle(event) {


  magnifyIngGlass.setAttribute("cx", event.pageX / window.innerWidth * 500);
  magnifyIngGlass.setAttribute("cy", event.pageY / window.innerHeight * 500 * (window.innerHeight / window.innerWidth));
  clipCircle.setAttribute("cx", event.pageX / window.innerWidth * 500);
  clipCircle.setAttribute("cy", event.pageY / window.innerHeight * 500 * (window.innerHeight / window.innerWidth));


  let imageCoordinateX = (event.pageX * -1 / window.innerWidth) * 500;
  let imageCoordinateY = ((event.pageY * -1) / window.innerHeight) * 500 * window.innerHeight / window.innerWidth;
  clippedImage.setAttribute("x", imageCoordinateX);
  clippedImage.setAttribute("y", imageCoordinateY);
}