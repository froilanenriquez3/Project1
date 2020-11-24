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

document.addEventListener("drop", function (event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target
  if ((event.target.classList.contains("dragHat") && dragged.classList.contains("dragHat"))
  || (event.target.classList.contains("dragShirt") && dragged.classList.contains("dragShirt"))
  || (event.target.classList.contains("dragPants") && dragged.classList.contains("dragPants"))
  || (event.target.classList.contains("dragShoes") && dragged.classList.contains("dragShoes"))
  ) {
    let previousParent = dragged.parentNode;
    if(!(dragged.parentNode == event.target.parentNode)){
      dragged.parentNode.removeChild(dragged);
    }

    event.target.parentNode.appendChild(dragged);
    event.target.parentNode.removeChild(event.target.parentNode.childNodes[0]);
    previousParent.appendChild(event.target);
 
  }
  event.target.style.background = "";
}, false);
