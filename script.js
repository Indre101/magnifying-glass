const magnifyIngGlass = document.querySelector("#circle");
const clipCircle = document.querySelector("#clipcircle");
const clippedImage = document.querySelector("#clipped-image");
const smallImage = document.querySelector(".waldo");
const svg = document.querySelector("svg");


let incrementX = 0;
let incrementY = 0;


svg.addEventListener("mousemove", moveCircle);

// window.addEventListener("keydown", moveByArrows)


// // down , right 68, up 87, left 65;


// function moveByArrows(event) {
//   switch (event.keyCode) {
//     case 83:
//       incrementY -= 0.1;
//       break;
//     case 68:
//       incrementX -= 0.1;
//       break;
//     case 87:
//       incrementY += 0.1;
//       break;
//     case 65:
//       incrementX += 0.1;
//       break;
//   }
//   moveCircle(event)
// }


function moveCircle(event) {

  // event.pageX = magnifyIngGlass.cx.baseVal.value
  // let coordinateX = (event.pageX / window.innerWidth * 1000);
  // event.pageY = magnifyIngGlass.cy.baseVal.value;
  // let coordinateY = (event.pageY / window.innerHeight * 1000 * (window.innerHeight / window.innerWidth));

  magnifyIngGlass.setAttribute("cx", event.pageX / window.innerWidth * 1000);
  magnifyIngGlass.setAttribute("cy", event.pageY / window.innerHeight * 1000 * (window.innerHeight / window.innerWidth));
  clipCircle.setAttribute("cx", event.pageX / window.innerWidth * 1000);
  clipCircle.setAttribute("cy", event.pageY / window.innerHeight * 1000 * (window.innerHeight / window.innerWidth));


  let imageCoordinateX = 650 - (event.pageX - window.pageXOffset);
  let imageCoordinateY = 350 - (event.pageY - window.pageYOffset);
  clippedImage.setAttribute("x", imageCoordinateX);
  clippedImage.setAttribute("y", imageCoordinateY);
}