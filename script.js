document.querySelector("#circle").addEventListener("mousemove", moveCircle)

function moveCircle(event) {
  event.target.setAttribute("cx", event.pageX / window.innerWidth * 1000);
  event.target.setAttribute("cy", event.pageY / window.innerHeight * 1000 * (window.innerHeight / window.innerWidth));
  document.querySelector("#clipcircle").setAttribute("cx", event.pageX / window.innerWidth * 1000);
  document.querySelector("#clipcircle").setAttribute("cy", event.pageY / window.innerHeight * 1000 * (window.innerHeight / window.innerWidth));

  let newCx = event.pageX / window.innerWidth;
  let newCY = event.pageY / window.innerHeight
  if (newCx * 1000 < 550 && newCY * 1000 < 300) {
    document.querySelector("#clipped-image").setAttribute("x", newCx += 220);
    document.querySelector("#clipped-image").setAttribute("y", newCY += 120);

  } else if (newCx * 1000 < 550 && newCY * 1000 > 300) {
    document.querySelector("#clipped-image").setAttribute("x", newCx += 220);
    document.querySelector("#clipped-image").setAttribute("y", newCY -= 120);

  } else if (newCx * 1000 > 550 && newCY * 1000 > 300) {
    document.querySelector("#clipped-image").setAttribute("x", newCx -= 220);
    document.querySelector("#clipped-image").setAttribute("y", newCY -= 120);

  } else if (newCx * 1000 > 550 && newCY * 1000 < 300) {
    document.querySelector("#clipped-image").setAttribute("x", newCx -= 220);
    document.querySelector("#clipped-image").setAttribute("y", newCY += 120);

  }




}