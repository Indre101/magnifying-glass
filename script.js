const magnifyIngGlass = document.querySelector("#circle");
const clipCircle = document.querySelector("#clipcircle");
const clippedImage = document.querySelector("#clipped-image");


magnifyIngGlass.addEventListener("mousemove", moveCircle)

function moveCircle(event) {
  event.target.setAttribute("cx", event.pageX / window.innerWidth * 1000);
  event.target.setAttribute("cy", event.pageY / window.innerHeight * 1000 * (window.innerHeight / window.innerWidth));
  clipCircle.setAttribute("cx", event.pageX / window.innerWidth * 1000);
  clipCircle.setAttribute("cy", event.pageY / window.innerHeight * 1000 * (window.innerHeight / window.innerWidth));

  let coordinateX = event.pageX / window.innerWidth;
  let coordinateY = event.pageY / window.innerHeight
  if (coordinateX * 1000 < 550 && coordinateY * 1000 < 300) {
    clippedImage.setAttribute("x", coordinateX += 220);
    clippedImage.setAttribute("y", coordinateY += 120);

  } else if (coordinateX * 1000 < 550 && coordinateY * 1000 > 300) {
    clippedImage.setAttribute("x", coordinateX += 220);
    clippedImage.setAttribute("y", coordinateY -= 120);

  } else if (coordinateX * 1000 > 550 && coordinateY * 1000 > 300) {
    clippedImage.setAttribute("x", coordinateX -= 220);
    clippedImage.setAttribute("y", coordinateY -= 120);

  } else if (coordinateX * 1000 > 550 && coordinateY * 1000 < 300) {
    clippedImage.setAttribute("x", coordinateX -= 220);
    clippedImage.setAttribute("y", coordinateY += 120);

  }
}