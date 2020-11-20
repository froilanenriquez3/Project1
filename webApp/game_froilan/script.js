
let hat;
let shirt;
let pants;
let shoes;

newCombo();

//Function to check selected clothes items
function checkCombo() {
  
  let text = "";

  if (document.querySelector(' #hathole').firstChild.id == window.hat) {
    text += "This hat is hitting it. <br>";
  } else {
    text += "This hat sucks. <br>";
  }


  if (document.querySelector(' #shirthole').firstChild.id == window.shirt) {
    text += "This shirt is shuper. <br>";
  } else {
    text += "This shirt sucks. <br>";
  }

  if (document.querySelector(' #pantshole').firstChild.id == window.pants) {
    text += "These pants are the cat's pajamas! Well, not literally. <br>";
  } else {
    text += "These pants suck. <br>"
  }

  if (document.querySelector(' #shoeshole').firstChild.id == window.shoes) {
    text += "These shoes are shpectacular!";
  } else {
    text += "I am not wearing these shoes.";
  }

  document.querySelector('#feedback').innerHTML = text;
}

//Function to generate new outfit
function newCombo() {
  let hatNum = Math.floor((Math.random() * 5) + 1);
  let shirtNum = Math.floor((Math.random() * 5) + 1);
  let pantsNum = Math.floor((Math.random() * 5) + 1);
  let shoesNum = Math.floor((Math.random() * 5) + 1);

  switch (hatNum) {
    case 1:
      window.hat = "draghat1";
      break;
    case 2:
      window.hat = "draghat2";
      break;
    case 3:
      window.hat = "draghat3";
      break;
    case 4:
      window.hat = "draghat4";
      break;
    case 5:
      window.hat = "draghat5";
      break;
    case 6:
      window.hat = "draghat6";
      break;
    default:
      break;
  }

  switch (shirtNum) {
    case 1:
      window.shirt = "dragshirt1";
      break;
    case 2:
      window.shirt = "dragshirt2";
      break;
    case 3:
      window.shirt = "dragshirt3";
      break;
    case 4:
      window.shirt = "dragshirt4";
      break;
    case 5:
      window.shirt = "dragshirt5";
      break;
    case 6:
      window.shirt = "dragshirt6";
      break;
    default:
      break;
  }

  switch (pantsNum) {
    case 1:
      window.pants = "dragpants1";
      break;
    case 2:
      window.pants = "dragpants2";
      break;
    case 3:
      window.pants = "dragpants3";
      break;
    case 4:
      window.pants = "dragpants4";
      break;
    case 5:
      window.pants = "dragpants5";
      break;
    case 6:
      window.pants = "dragpants6";
      break;
    default:
      break;
  }


  switch (shoesNum) {
    case 1:
      window.shoes = "dragshoes1";
      break;
    case 2:
      window.shoes = "dragshoes2";
      break;
    case 3:
      window.shoes = "dragshoes3";
      break;
    case 4:
      window.shoes = "dragshoes4";
      break;
    case 5:
      window.shoes = "dragshoes5";
      break;
    case 6:
      window.shoes = "dragshoes6";
      break;
    default:
      break;
  }






}







var dragged;

/* events fired on the draggable target */
document.addEventListener("drag", function (event) {

}, false);

document.addEventListener("dragstart", function (event) {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.style.backgroundColor = "blue";
}, false);

document.addEventListener("dragend", function (event) {
  // reset the transparency
  event.target.style.backgroundColor = "rgb(0, 174, 255)";
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", function (event) {
  // prevent default to allow drop
  event.preventDefault();
}, false);



//Drop Zone event listeners

//HAT event listeners

document.addEventListener("dragenter", function (event) {
  // highlight potential drop target when the draggable element enters it
  if (event.target.className == "dropzone hat") {
    event.target.style.background = "grey";
  }

}, false);

document.addEventListener("dragleave", function (event) {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.className == "dropzone hat") {
    event.target.style.background = "";
  }

}, false);

document.addEventListener("drop", function (event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target
  if (event.target.className == "dropzone hat" && dragged.className == "dragHat") {
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged);
  }
  event.target.style.background = "";
}, false);


//SHIRT event listeners

document.addEventListener("dragenter", function (event) {
  // highlight potential drop target when the draggable element enters it
  if (event.target.className == "dropzone shirt") {
    event.target.style.background = "grey";
  }

}, false);

document.addEventListener("dragleave", function (event) {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.className == "dropzone shirt") {
    event.target.style.background = "";
  }

}, false);

document.addEventListener("drop", function (event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target
  if (event.target.className == "dropzone shirt" && dragged.className == "dragShirt") {
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged);
  }
  event.target.style.background = "";
}, false);


//PANTS event listeners

document.addEventListener("dragenter", function (event) {
  // highlight potential drop target when the draggable element enters it
  if (event.target.className == "dropzone pants") {
    event.target.style.background = "grey";
  }

}, false);

document.addEventListener("dragleave", function (event) {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.className == "dropzone pants") {
    event.target.style.background = "";
  }

}, false);

document.addEventListener("drop", function (event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target
  if (event.target.className == "dropzone pants" && dragged.className == "dragPants") {
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged);
  }
  event.target.style.background = "";
}, false);


//SHOES event listeners

document.addEventListener("dragenter", function (event) {
  // highlight potential drop target when the draggable element enters it
  if (event.target.className == "dropzone shoes") {
    event.target.style.background = "grey";
  }

}, false);

document.addEventListener("dragleave", function (event) {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.className == "dropzone shoes") {
    event.target.style.background = "";
  }

}, false);

document.addEventListener("drop", function (event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target
  if (event.target.className == "dropzone shoes" && dragged.className == "dragShoes") {
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged);
  }
  event.target.style.background = "";
}, false);