let character = { x: 50, y: 140 };
let productsGrocery = [{ name: "Harina", img: "img/Grocery/Harina.png", x: 395, y: 6 },
{ name: "Masa pastel", img: "img/Grocery/Masa pastel.png", x: 535, y: 7 }, { name: "Azúcar", img: "img/Grocery/Azúcar.png", x: 415, y: 76},
{ name: "Huevos", img: "img/Grocery/Huevos.png", x: 485, y: 113 }, { name: "Salsa de tomate", img: "img/Grocery/Salsa de tomate.png", x: 673, y: 41 },
{ name: "Galletas", img: "img/Grocery/Galletas.png", x: 763, y: 88 }, { name: "Polvorones", img: "img/Grocery/Polvorones.png", x: 665, y: 82 },
{ name: "Láminas para canelones", img: "img/Grocery/Láminas para canelones.png", x: 720, y: 45 }, { name: "Galets", img: "img/Grocery/Galets.png", x: 820, y: 29 },
{ name: "Miel", img: "img/Grocery/Miel.png", x: 505, y: 157 }, { name: "Ketchup", img: "img/Grocery/Ketchup.png", x: 567, y: 152 },
{ name: "Mermelada", img: "img/Grocery/Mermelada.png", x: 835, y: 255}, { name: "Té", img: "img/Grocery/Té.png", x: 668, y: 163 },
{ name: "Café", img: "img/Grocery/Café.png", x: 822, y: 139 }, { name: "Vino Blanco", img: "img/Grocery/Vino Blanco.png", x: 440, y: 277 },
{ name: "Vino Tinto", img: "img/Grocery/Vino Tinto.png", x: 392, y: 272 }, { name: "Cava", img: "img/Grocery/Cava.png", x: 490, y: 278 },
{ name: "Cola", img: "img/Grocery/Cola.png", x: 535, y: 282 }, { name: "Limonada", img: "img/Grocery/Limonada.png", x: 580, y: 284 },
{ name: "Naranjada", img: "img/Grocery/Naranjada.png", x: 631, y: 285 }, { name: "Mayonesa", img: "img/Grocery/mayonesa.png", x: 412, y: 255 }, 
{name: "Aceite", img: "img/Grocery/Aceite.png", x: 640, y: 200}, {name: "Cacao en polvo", img: "img/Grocery/Cacao en polvo.png", x: 715, y: 245},
{name: "Olivas", img: "img/Grocery/Olivas.png", x: 567, y: 237}, {name: "Leche", img: "img/Grocery/Leche.png", x: 470, y: 225},
{name: "Panettone", img: "img/Grocery/Panettone.png", x: 390, y: 128}];

let productsFruit = [{ name: "Manzana", img: "img/Fruits/Manzana.png", x: 760, y: 325 }, { name: "Uva", img: "img/Fruits/Uva.png", x: 690, y: 260 },
{ name: "Plátanos", img: "img/Fruits/Plátanos.png", x: 625, y: 256 }, { name: "Pera", img: "img/Fruits/Pera.png", x: 700, y: 190 }, { name: "Mandarina", img: "img/Fruits/Mandarina.png", x: 820, y: 250 },
{ name: "Zanahoria", img: "img/Fruits/Zanahoria.png", x: 810, y: 75 }, { name: "Cebolla", img: "img/Fruits/Cebolla.png", x: 810, y: 160 },
{ name: "Ciruela", img: "img/Fruits/Ciruela.png", x: 870, y: 100 }, { name: "Pimiento", img: "img/Fruits/Pimiento.png", x: 740, y: 140 },
{ name: "Tomate", img: "img/Fruits/Tomate.png", x: 865, y: 198 }, {name: "Berenjena", img: "img/Fruits/Berenjena.png", x: 230, y: 265}, 
{ name: "Piña", img: "img/Fruits/Piña.png", x: 423, y: 142}, {name: "Granada", img: "img/Fruits/Granada.png", x: 505, y: 280}, { name: "Limón", img: "img/Fruits/Limón.png", x: 740, y: 220} 
];

let productsExtra = ["Turrón artesano", "Mazapán casero", "Jamón Ibérico"];


let lady = document.getElementById("lady");
let interior = document.getElementById("interior");
let list = document.getElementById("list");
let pointsText = document.querySelector("#interior > p");
let pointsForObject= Number(document.getElementById("pointsForObject").innerHTML);
let pointsRest= Number(document.getElementById("pointsRest").innerHTML);
let speak1= document.getElementsByClassName("sp1")[0];
let speak2= document.getElementsByClassName("sp2")[0];
let speak3= document.getElementsByClassName("sp3")[0];
let myMusic;
let paused= false;

const TOTALPRODUCTS = 8;
let productsFound, points, finished, extraProduct, minutes, seconds, clock, productsToFind, hasExtra, shop;

//Game events
addCharacterMovement();
list.addEventListener("click", () => { document.querySelector(".divList").classList.toggle("noVisible") });
basket.addEventListener("animationend", () => {
    if (basket.classList.contains("animationClassGreen")) {
        basket.classList.remove("animationClassGreen");
    } else {
        basket.classList.remove("animationClassRed");
    }
});

let conversations= document.querySelectorAll(".speak");
conversations.forEach(element => {
    element.addEventListener("click", createText);
});
document.getElementById("play").addEventListener("click", startGame);
document.getElementById("shop").addEventListener("click", changeShop);
document.getElementById("music").addEventListener("click", musicControl);



function startGame() {
    //ocult instructions or afterGame & show interior
    document.querySelector("#background > #instructions").style.display = "none";
    document.querySelector("#background > #afterGame").style.display = "none";
    document.querySelector("#background > #interior").style.display = "inline";
    //reset some variables
    productsToFind = [];
    eraseList();
    productsFound = [];
    points = 0;
    extraProduct= "";
    hasExtra= false;
    // reset time
    minutes = 1;
    seconds = 0;
    pointsText.innerHTML = "Puntos: " + points;
    time.innerHTML = "0" + minutes + ":" + seconds;

    //Draw objects of first shop & character
    drawAll(productsGrocery);
    document.getElementById("gameBack").setAttribute("src", "img/background.png");
    drawLady();
    shop= 1;

    //Control the conversation icons & text
    checkConversationWhenChanges();
    speak1.setAttribute("data-text","¡Hola Teresa! ¿Como va todo? ¿Y tu família? ¡Hemos guardado el * que nos pediste! Aquí tienes");


    //Generate random list of products
    generateProductsToFind(productsGrocery, 4);
    generateProductsToFind(productsFruit, 3);
    generateRandomExtra();
    productsToFind.sort(function (a, b) { return 0.5 - Math.random() });
    createList();

    //set Time
    time();

    //Play music
    window.myMusic = new sound("mp3/Lay Low.mp3");
    if(!paused){
        window.myMusic.play();
    }
}


// Functions to control the game time
function time() {
    time.innerHTML = "0" + minutes + ":" + seconds;
    clock = setInterval(passTime, 1000);
}

function passTime() {
    let secondsView;
    if (seconds > 0) {
        seconds--;
    }
    if (seconds == 0) {
        if (minutes > 0) {
            minutes--;
            seconds = 59;
        } else {
            endGame();
        }
    }

    if (seconds < 10) {
        secondsView = "0" + seconds;
        document.getElementById("time").innerHTML = "0" + minutes + ":" + secondsView;
    } else {
        document.getElementById("time").innerHTML = "0" + minutes + ":" + seconds;
    }
}

//Draw all draggable objects
function drawAll(products) {
    let isInList;
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        isInList = productsFound.includes(product.name);
        if (!isInList) {
            // If is not still found we draw it
            image = document.createElement("img");
            image.setAttribute("id", product.name);
            image.setAttribute("src", product.img);
            image.style.position = "absolute";
            image.style.top = product.y + "px";
            image.style.left = product.x + "px";
            image.style.transform= "scale(0.5)";
            dragElement(image, products);
            image.addEventListener("mouseover", makeBigger);
            image.addEventListener("mouseout", makeSmaller);
            interior.appendChild(image, products);
        }
    }
}

//Draw lady
function drawLady() {
    lady.style.top = character.y + "px";
    lady.style.left = character.x + "px";
}

//Character movement

function addCharacterMovement() {
    window.addEventListener("keydown", function (e) {
        let key = e.keyCode;
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
            character.x -= 5;
            lady.style.left = character.x + "px";
            // Doing the speakIcons appear or disappear if necessary
            // Speak 1
            disappearSpeakIcon(1, 500, speak1);
            //Speak 2
            disappearSpeakIcon(2, 120, speak2);
            appearSpeakIcon(2, 350, speak2);
            // Speak 3
            disappearSpeakIcon(2, 440, speak3);

        } else if (key == 39 && character.x < 530) {
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
            character.x += 5;
            lady.style.left = character.x + "px";
             // Doing the speakIcons appear or disappear if necessary
            // Speak 1
            appearSpeakIcon(1, 500, speak1);
            //Speak 2
            appearSpeakIcon(2, 120, speak2);
            disappearSpeakIcon(2, 350, speak2);
            // Speak 3
            appearSpeakIcon(2, 440, speak3);

        }
    });
}

//Make products bigger when mouseover and smaller when mouseout
function makeBigger() {
    this.style.transform = "scale(0.7)";
}

function makeSmaller() {
    this.style.transform = "scale(0.5)";
}

//Change shop
function changeShop() {
    eraseProducts();
    let image= document.getElementById("gameBack");
    if (shop === 1) {
        image.setAttribute("src", "img/background2.png");
        drawAll(productsFruit);
        shop = 2;
    } else {
        image.setAttribute("src", "img/background.png");
        drawAll(productsGrocery);
        shop = 1;
    }

    checkConversationWhenChanges();
}

//Functions to drag the objects
function dragElement(elmnt, products) {
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

        //put element in front of others
        elmnt.style.zIndex = 1;
        // set the element's new position:
        if (elmnt.offsetTop - pos2 > 0 && elmnt.offsetLeft - pos1 > 0 && elmnt.offsetTop - pos2 + elmnt.clientHeight -20 < 450 && elmnt.offsetLeft - pos1 + elmnt.clientWidth < 895) {
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        checkBasket(elmnt, products);
    }


    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
        //If it is not in the bag, it returns to its place:
        elementInProducts = products.find(el => el.name == elmnt.id);
        elmnt.style.top = elementInProducts.y + "px";
        elmnt.style.left = elementInProducts.x + "px";
        document.onmousedown= null;
    }
}




//Check if element in basket is correct.
function checkBasket(elmnt, products) {
    let found = false;
    // -20 cause if it just desapears when collide it seems that is not still in the basket visually.
    if (elmnt.offsetTop + elmnt.clientHeight > basket.offsetTop && elmnt.offsetLeft + elmnt.clientWidth > basket.offsetLeft) {
        listElemements = document.querySelectorAll("li");
        listElemements.forEach(element => {
            if (element.innerHTML === elmnt.id) {
                element.style.textDecoration = "line-through";
                interior.removeChild(elmnt);
                found = true;
                points += pointsForObject;
                basket.classList.add("animationClassGreen");
                pointsText.innerHTML = "Puntos: " + points;
                productsFound.push(elmnt.id);
                if (productsFound.length == TOTALPRODUCTS) {
                    endGame();
                }
            }

        });

        if (!found) {
            elementInProducts = products.find(el => el.name === elmnt.id);
            elmnt.style.top = elementInProducts.y + "px";
            elmnt.style.left = elementInProducts.x + "px";
            basket.classList.add("animationClassRed");
            if (points >= pointsRest) {
                points -= pointsRest;
                document.onmouseup = null;
                document.onmousemove = null;
            } else {
                points= 0;
                document.onmouseup = null;
                document.onmousemove = null;
            }

            pointsText.innerHTML = "Puntos: " + points;
        }
    }
}

//Generate Random products
function generateProductsToFind(products, numberOfProducts) {
    let isSame = false;
    let randomNum;
    for (let i = 0; i < numberOfProducts; i++) {
        if (i === 0) {
            randomNum = Math.floor(Math.random() * products.length);
        } else {
            do {
                randomNum = Math.floor(Math.random() * products.length);
                isSame = false;
                for (let y = 0; y < productsToFind.length; y++) {
                    if (products[randomNum].name == productsToFind[y]) {
                        isSame = true;
                    }
                }
            } while (isSame);
        }
        productsToFind.push(products[randomNum].name);
    }
}

// Generate Random Extra
function generateRandomExtra() {
    randomNum = Math.floor(Math.random() * 3);
    productsToFind.push(productsExtra[randomNum]);
    extraProduct= productsExtra[randomNum];
}

//Create List
function createList() {
    productsToFind.forEach(element => {
        let listEl = document.createElement("li");
        listEl.textContent = element;
        document.querySelector(".divList > ul").appendChild(listEl);
    });
}

//Erase List
function eraseList() {
    let listElement = document.querySelectorAll(".divList > ul> li");
    listElement.forEach(element => {
        document.querySelector(".divList > ul").removeChild(element);
    });
}

function appearSpeakIcon(shopNum, numPosition, element){
    if(shop === shopNum && character.x === numPosition){
        element.style.display= "inline";
    }
}

function disappearSpeakIcon(shopNum, numPosition, element){
    if(shop === shopNum && character.x === numPosition){
        element.style.display= "none";
    }
}

//Create conversation
function createText(e) {
    let text = document.getElementById("text");
    let divText = document.querySelector("#text > div")
    let newText= e.target.getAttribute("data-text");
    if(newText.includes("*")){
        newText = newText.replace("*", extraProduct.toLowerCase());
    }

    divText.innerHTML= newText;
    text.style.display= "inline";

    if(e.target.classList.contains("sp1")){
        if(!hasExtra){
            hasExtra= true;
            e.target.setAttribute("data-text", "¡Que pases muy buen día!");
            listElemements = document.querySelectorAll("li");
            listElemements.forEach(element => {
            if (element.innerHTML === extraProduct) {
                element.style.textDecoration= "line-through";
                productsFound.push(extraProduct);
            }});
        points += pointsForObject;
        pointsText.innerHTML = "Puntos: " + points;
        }
    }
}

//Close text
function closeText() {
    let text = document.getElementById("text");
    text.style.display = "none";
    if (productsFound.length == TOTALPRODUCTS) {
        endGame();
    }
}

// Display the conversation icons needed after restart or change shops
function checkConversationWhenChanges(){
    // Reseting all first
        speak1.style.display= "none";
        speak2.style.display= "none";
        speak3.style.display= "none";
    // Adding the ones who we need if character is near
        if(shop == 1){
        if(character.x > 500){
            speak1.style.display= "inline";
        }
    } else {
        if(character.x > 440){
            speak3.style.display= "inline";
        }

        if(character.x > 120 && character.x < 350){
            speak2.style.display= "inline";
        }
    }
}

function eraseProducts() {
    let productsImages = document.querySelectorAll("#interior > img:not(#basket):not(#list):not(#lady):not(.speak):not(#shop):not(#gameBack):not(#music)");
    productsImages.forEach(element => {
        interior.removeChild(element);
    });
}

// Display the endgame and & stop music and time
function endGame() {
    window.myMusic.stop();
    window.clearInterval(clock);
    interior.style.display = "none";
    eraseProducts();
    afterGame = document.getElementById("afterGame");
    afterGame.style.display = "inline-block";
    document.querySelector("#afterGame > h1").innerHTML = "¡Has conseguido " + points + " puntos!";
    document.getElementById("replay").addEventListener("click", startGame);
}

// Create music element
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
  }

// onClick icons
function musicControl() {
    let img= document.getElementById("music");
 if(paused){
     window.myMusic.play();
     paused= false;
     img.setAttribute("src", "img/moff.png");
 } else {
     window.myMusic.stop();
     paused= true;
     img.setAttribute("src", "img/mon.png");
 }
}

// Save points to database
function savePoints(){
    document.querySelector('#finalPoints').value = points;
    document.querySelector('#gameForm').submit();
}