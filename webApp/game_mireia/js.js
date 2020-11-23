let character = { x: 50, y: 180 };
let products = [{ name: "Harina", img: "img/Harina.png", x: 410, y: 27 },
{name: "Masa pastel", img: "img/Masa pastel.png", x: 540, y: 29}, {name:"Azúcar", img: "img/Azúcar.png", x: 420, y: 94},
{name:"Huevos", img: "img/Huevos.png", x: 515, y: 108}, {name: "Salsa de tomate", img:"img/Salsa de tomate.png", x: 660, y: 38},
{name:"Galletas", img: "img/Galletas.png", x: 800, y: 102}, {name:"Polvorones", img:"img/Polvorones.png", x: 660, y: 98},
{name: "Láminas para canelones", img: "img/Láminas para canelones.png", x: 725, y: 42}, {name: "Galets", img:"img/Galets.png", x:817, y: 38},
{name: "Miel", img:"img/Miel.png", x:495, y: 169}, {name: "Ketchup", img:"img/Ketchup.png", x:565, y: 164},
{name: "Mermelada", img:"img/Mermelada.png", x:415, y: 174}, {name: "Té", img:"img/Té.png", x:675, y: 151},
{name: "Café", img:"img/Café.png", x:820, y: 162}, {name: "Vino Blanco", img:"img/Vino Blanco.png", x:430, y: 313},
{name: "Vino Tinto", img:"img/Vino Tinto.png", x:385, y: 313}, {name: "Cava", img:"img/Cava.png", x: 485, y:314},
{name: "Cola", img: "img/Cola.png", x: 537, y:313}, {name: "Limonada", img:"img/Limonada.png", x: 575, y: 315},
{name: "Naranjada", img: "img/Naranjada.png", x: 628, y: 315}];
let lady = document.getElementById("lady");
let interior = document.getElementById("interior");
let list= document.getElementById("list");

let productsToFind=[];
let randomNum;
let productsLength= products.length;
let isSame;



//Main

drawAll();
drawLady();
generateProductsToFind();


list.addEventListener("click", ()=>{document.querySelector(".divList").classList.toggle("noVisible")});

//Draw all draggable objects
function drawAll() {
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        image = document.createElement("img");
        image.setAttribute("id", product.name);
        image.setAttribute("src", product.img);
        image.style.position = "absolute";
        image.style.top = product.y + "px";
        image.style.left = product.x + "px";
        dragElement(image);
        image.addEventListener("mouseover", makeBigger);
        image.addEventListener("mouseout", makeSmaller);
        interior.appendChild(image);
    }
}

//Draw lady
function drawLady(){
    lady.style.top= character.y+"px";
    lady.style.left= character.x+"px";
}

//Character movement
window.addEventListener("keydown", function (button) {
    let key = button.keyCode;
    if (key == 37 && character.x > 50) {
        // RIGHT
        //if going right, turn left
        if (lady.getAttribute("src") == "img/ladyLeft.png" || lady.getAttribute("src") == "img/ladyLeft2.png") {
            lady.setAttribute("src", "img/ladyRight.png");
        }
        //Change picture every 20px
        if (character.x % 20 === 0) {

            if (lady.getAttribute("src") == "img/ladyRight.png") {
                lady.src = "img/ladyRight2.png"
            } else {
                lady.setAttribute("src", "img/ladyRight.png");
            }
        }
        character.x-=5;
        lady.style.left= character.x+"px";
        if(character.x == 500){
            document.getElementById("speak").style.display= "none";
        }
    } else if (key == 39 && character.x < 530) {
        console.log(character.x);
        //LEFT
        if (lady.getAttribute("src") == "img/ladyRight.png" || lady.getAttribute("src") == "img/ladyRight2.png") {
            lady.setAttribute("src", "img/ladyLeft.png");
        }

        if (character.x % 20 === 0) {
            if (lady.getAttribute("src") == "img/ladyLeft.png") {
                lady.src = "img/ladyLeft2.png";
            } else {
                lady.setAttribute("src", "img/ladyLeft.png");
            }

        }
        character.x+=5;
        lady.style.left= character.x+"px";
        if(character.x == 500){
            document.getElementById("speak").style.display= "inline";
        }

    }
});

//Make products bigger when mouseover and smaller when mouseout
function makeBigger(){
    this.style.transform= "scale(1.1)";
}

function makeSmaller(){
    this.style.transform= "scale(1)";
}



//Functions to draw the objects
function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      elmnt.onmousedown = dragMouseDown;
     
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;

      //put element in front of others;
      elmnt.style.zIndex= 1;
      // set the element's new position:
      //1000 = interior width / 500 = interior height / 60 && 75 = max products width and height
        if(elmnt.offsetTop - pos2 > 0 && elmnt.offsetLeft - pos1 > 0 && elmnt.offsetTop -pos2 +60 < 500 && elmnt.offsetLeft - pos1 +75 < 1000){
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    // //410 && 925 is basket position
    //     if(pos3 > 375 && pos4 >825){
    //         debugger;
    //         listElemements= document.querySelectorAll("li");
    //         console.log(listElemements);
    //         listElemements.forEach(element => {
                
    //             if(element.innerHTML === elmnt.id){
    //                 element.style.textDecoration= "line-through";
    //             }
    //         });
    //     }

    }
  
    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
      //If it is not in the bag, it returns to its place:
      elementInProducts= products.find(el => el.name== elmnt.id);
            elmnt.style.top = elementInProducts.y +"px";
            elmnt.style.left = elementInProducts.x +"px";
    
    }
  }

  //Generate Random products
  function generateProductsToFind(){
    for(let i=0; i<5; i++){
        if(i===0){
            randomNum= Math.floor(Math.random() * productsLength); 
        } else {
        do{
        randomNum= Math.floor(Math.random() * productsLength);
        isSame= false;
        for(let y= 0; y < productsToFind.length; y++){
            if(randomNum == productsToFind[y]){
                isSame= true;
            }
        }
        }while(isSame);
        }
        productsToFind.push(randomNum);  
    }

    //Create elements in shop list
    productsToFind.forEach(element => {
        let listEl= document.createElement("li");
        listEl.textContent= products[element].name;
        document.querySelector("div > ul").appendChild(listEl);
    });
    
    console.log(productsToFind);
    }