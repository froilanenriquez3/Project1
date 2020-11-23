
let hat;
let shirt;
let pants;
let shoes;

let points;

newCombo();
initPoints();
document.querySelector('#counter').innerHTML = 'Score: ' + window.points;
console.log(window.points);




function initPoints(){
  window.points = 0;
}

function displayUpdateScore(){
  document.querySelector('#counter').innerHTML = 'Score: ' + window.points;
  console.log(window.points);
}

//Function to check selected clothes items
function checkCombo() {
  let checkHat = false;
  let checkShirt = false;
  let checkPants = false;
  let checkShoes = false;
  let text = "";
  let text2 = "Keep trying.";

  if (document.querySelector(' #hathole').firstChild.id == window.hat) {
    text += "Great hat! <br>";
    checkHat = true;
  } else {
    text += "This hat sucks. <br>";
  }

  if (document.querySelector(' #shirthole').firstChild.id == window.shirt) {
    text += "Great shirt! <br>";
    checkShirt = true;
  } else {
    text += "This shirt sucks. <br>";
  }

  if (document.querySelector(' #pantshole').firstChild.id == window.pants) {
    text += "Great pants! <br>";
    checkPants = true;
  } else {
    text += "These pants suck. <br>"
  }

  if (document.querySelector(' #shoeshole').firstChild.id == window.shoes) {
    text += "Great shoes! <br>";
    checkShoes = true;
  } else {
    text += "These shoes suck.";
  }

  if ( checkHat && checkShirt && checkPants && checkShoes){
    text2 = "You got me the perfect outfit!";
    window.points++;
    displayUpdateScore();
    document.querySelector('#next').disabled = false;
    document.querySelector('#check').disabled = true;
  }
  
  document.querySelector('#feedback').innerHTML = text;
  document.querySelector('#winner').innerHTML = text2;
}

//Function to generate new outfit
function newCombo() {
  let hatNum = Math.floor((Math.random() * 6) + 1);
  let shirtNum = Math.floor((Math.random() * 6) + 1);
  let pantsNum = Math.floor((Math.random() * 6) + 1);
  let shoesNum = Math.floor((Math.random() * 6) + 1);

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
  document.querySelector('#feedback').innerHTML = "";
  document.querySelector('#winner').innerHTML = "";
  console.log(hatNum + " " + shirtNum + " " + pantsNum + " " + shoesNum);
  document.querySelector('#next').disabled = true;
    document.querySelector('#check').disabled = false;

}







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

//HAT event listeners

document.addEventListener("dragenter", function (event) {
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
    event.target.style.background = "";
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
    event.target.style.background = "";
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
    event.target.style.background = "";
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