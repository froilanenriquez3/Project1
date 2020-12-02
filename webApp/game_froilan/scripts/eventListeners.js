var dragged;

/* events fired on the draggable target */
document.addEventListener("drag", function (event) {

}, false);

document.addEventListener("dragstart", function (event) {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.style.backgroundColor = "transparent";
}, false);

document.addEventListener("dragend", function (event) {
  // reset the transparency
  event.target.style.backgroundColor = "transparent";
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", function (event) {
  // prevent default to allow drop
  event.preventDefault();
}, false);



//Drop Zone event listeners

/* document.addEventListener("dragenter", function (event) {
  // highlight potential drop target when the draggable element enters it
  if (event.target.className == "dropzone hat") {
    event.target.style.background = "";
  }
}, false);

document.addEventListener("dragleave", function (event) {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.className == "dropzone hat") {
    event.target.style.background = "";
  }

}, false);
 */

//Event lisetener for dragging items
document.addEventListener("drop", function (event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target
  if ((event.target.classList.contains("dropzone") && event.target.classList.contains("hat") && dragged.classList.contains("dragHat"))
    || (event.target.classList.contains("dropzone") && event.target.classList.contains("shirt") && dragged.classList.contains("dragShirt"))
    || (event.target.classList.contains("dropzone") && event.target.classList.contains("pants") && dragged.classList.contains("dragPants"))
    || (event.target.classList.contains("dropzone") && event.target.classList.contains("shoes") && dragged.classList.contains("dragShoes"))

  ) {
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged);
  }
  event.target.style.background = "";
}, false);

//Event listener for dragging items over occupied squares
document.addEventListener("drop", function (event) {

  event.preventDefault();

  if ((event.target.classList.contains("dragHat") && dragged.classList.contains("dragHat"))
    || (event.target.classList.contains("dragShirt") && dragged.classList.contains("dragShirt"))
    || (event.target.classList.contains("dragPants") && dragged.classList.contains("dragPants"))
    || (event.target.classList.contains("dragShoes") && dragged.classList.contains("dragShoes"))
  ) {

    let destination = locateDestination(event.target);
    if (event.target.parentNode.parentNode.classList.contains("center")) {


      if (!dragged.parentNode.parentNode.classList.contains("center")) {
        console.log(dragged.parentNode);
        dragged.parentNode.removeChild(dragged);
        console.log("success removal1");
      }

      event.target.parentNode.appendChild(dragged);
      console.log("success appending1");
      event.target.parentNode.removeChild(event.target.parentNode.childNodes[0]);
      console.log("success removal2");
      document.querySelector('#' + destination + "").appendChild(event.target);
      console.log("success appending2");

    }

  }

  event.target.style.background = "";
}, false);

//Find original location of clothing that is being dragged over
function locateDestination(replaced) {
  let zone = replaced.classList;
  let zoneStr;
  let location;

  //Find the zone
  if (zone.contains("dragHat")) {
    zoneStr = "hatzone";
  }
  if (zone.contains("dragShirt")) {
    zoneStr = "shirtzone";
  }
  if (zone.contains("dragPants")) {
    zoneStr = "pantszone";
  }
  if (zone.contains("dragShoes")) {
    zoneStr = "shoeszone";
  }


  //Find the number
  if (replaced.id.includes("1")) {
    location = zoneStr + "1";
  }
  if (replaced.id.includes("2")) {
    location = zoneStr + "2";
  }
  if (replaced.id.includes("3")) {
    location = zoneStr + "3";
  }
  if (replaced.id.includes("4")) {
    location = zoneStr + "4";
  }
  if (replaced.id.includes("5")) {
    location = zoneStr + "5";
  }
  if (replaced.id.includes("6")) {
    location = zoneStr + "6";
  }


  return location;
}