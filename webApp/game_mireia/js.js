let character = { x: 50, y: 140 };
let productsGrocery = [{ name: "Harina", img: "img/Grocery/Harina.png", x: 385, y: -1 },
{ name: "Masa pastel", img: "img/Grocery/Masa pastel.png", x: 510, y: -1 }, { name: "Azúcar", img: "img/Grocery/Azúcar.png", x: 390, y: 64 },
{ name: "Huevos", img: "img/Grocery/Huevos.png", x: 482, y: 76 }, { name: "Salsa de tomate", img: "img/Grocery/Salsa de tomate.png", x: 630, y: 9 },
{ name: "Galletas", img: "img/Grocery/Galletas.png", x: 760, y: 71 }, { name: "Polvorones", img: "img/Grocery/Polvorones.png", x: 640, y: 70 },
{ name: "Láminas para canelones", img: "img/Grocery/Láminas para canelones.png", x: 689, y: 9 }, { name: "Galets", img: "img/Grocery/Galets.png", x: 790, y: 7 },
{ name: "Miel", img: "img/Grocery/Miel.png", x: 470, y: 138 }, { name: "Ketchup", img: "img/Grocery/Ketchup.png", x: 535, y: 134 },
{ name: "Mermelada", img: "img/Grocery/Mermelada.png", x: 388, y: 144 }, { name: "Té", img: "img/Grocery/Té.png", x: 645, y: 121 },
{ name: "Café", img: "img/Grocery/Café.png", x: 790, y: 132 }, { name: "Vino Blanco", img: "img/Grocery/Vino Blanco.png", x: 400, y: 275 },
{ name: "Vino Tinto", img: "img/Grocery/Vino Tinto.png", x: 355, y: 275 }, { name: "Cava", img: "img/Grocery/Cava.png", x: 455, y: 276 },
{ name: "Cola", img: "img/Grocery/Cola.png", x: 505, y: 275 }, { name: "Limonada", img: "img/Grocery/Limonada.png", x: 545, y: 277 },
{ name: "Naranjada", img: "img/Grocery/Naranjada.png", x: 599, y: 277 }, { name: "Mayonesa", img: "img/Grocery/mayonesa.png", x: 370, y: 213 }, 
{name: "Aceite", img: "img/Grocery/Aceite.png", x: 585, y: 190}, {name: "Cacao en polvo", img: "img/Grocery/Cacao en polvo.png", x: 680, y: 221},
{name: "Olivas", img: "img/Grocery/Olivas.png", x: 535, y: 215}, {name: "Leche", img: "img/Grocery/Leche.png", x: 440, y: 213}, {name: "Panettone", img: "img/Grocery/Panettone.png", x: 783, y: 191}];

let productsFruit = [{ name: "Manzana", img: "img/Fruits/Manzana.png", x: 730, y: 300 }, { name: "Uva", img: "img/Fruits/Uva.png", x: 650, y: 240 },
{ name: "Plátanos", img: "img/Fruits/Plátanos.png", x: 592, y: 222 }, { name: "Pera", img: "img/Fruits/Pera.png", x: 648, y: 170 }, { name: "Mandarina", img: "img/Fruits/Mandarina.png", x: 800, y: 240 },
{ name: "Zanahoria", img: "img/Fruits/Zanahoria.png", x: 760, y: 55 }, { name: "Cebolla", img: "img/Fruits/Cebolla.png", x: 770, y: 120 },
{ name: "Ciruela", img: "img/Fruits/Ciruela.png", x: 810, y: 60 }, { name: "Pimiento", img: "img/Fruits/Pimiento.png", x: 700, y: 110 },
{ name: "Tomate", img: "img/Fruits/Tomate.png", x: 820, y: 150 }, {name: "Berenjena", img: "img/Fruits/Berenjena.png", x: 200, y: 225}, 
{ name: "Piña", img: "img/Fruits/Piña.png", x: 420, y: 135}
];

let productsExtra = ["Turrón artesano", "Mazapán casero", "Jamón Ibérico"];


let lady = document.getElementById("lady");
let interior = document.getElementById("interior");
let list = document.getElementById("list");
let pointsText = document.querySelector("#interior > p");
let pointsForObject= Number(document.getElementById("pointsForObject").innerHTML);
let pointsRest= Number(document.getElementById("pointsRest").innerHTML);


const TOTALPRODUCTS = 8;
let productsFound, points, finished, extraProduct, minutes, seconds, clock, productsToFind, hasExtra;

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

document.getElementById("speak").addEventListener("click", createText);
document.querySelector(".play > div >img").addEventListener("click", startGame);
document.getElementById("shop").addEventListener("click", changeShop);



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
    minutes = 1;
    seconds = 0;
    pointsText.innerHTML = "Puntos: " + points;
    time.innerHTML = "0" + minutes + ":" + seconds;


    //Draw objects & character
    drawAll(productsGrocery);
    document.getElementById("gameBack").setAttribute("src", "img/background.png");
    drawLady();

    //Generate list of products
    generateProductsToFind(productsGrocery, 4);
    generateProductsToFind(productsFruit, 3);
    generateRandomExtra();
    productsToFind.sort(function (a, b) { return 0.5 - Math.random() });
    createList();

    //set Time
    time();
}

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
            character.x -= 5;
            lady.style.left = character.x + "px";
            if (character.x == 500) {
                document.getElementById("speak").style.display = "none";
            }
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
            if (character.x == 500) {
                document.getElementById("speak").style.display = "inline";
            }

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
    let image = document.getElementById("gameBack");
    let shopUsed = image.getAttribute("src");
    console.log(shopUsed);
    if (shopUsed == "img/background.png") {
        image.setAttribute("src", "img/background2.png");
        drawAll(productsFruit);
    } else {
        image.setAttribute("src", "img/background.png");
        drawAll(productsGrocery);
    }
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
        //1000 = interior width / 500 = interior height / 60 && 75 = max products width and height
        if (elmnt.offsetTop - pos2 > 0 && elmnt.offsetLeft - pos1 > 0 && elmnt.offsetTop - pos2 + 60 < 500 && elmnt.offsetLeft - pos1 + 75 < 1000) {
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
    if (elmnt.offsetTop + 60 > basket.offsetTop && basket.offsetLeft < elmnt.offsetLeft + 60) {
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
            if (points > 0) {
                points -= pointsRest;
                pointsText.innerHTML = "Puntos: " + points;
                document.onmouseup = null;
                document.onmousemove = null;
            }
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
        console.log(listEl);
    });
}

//Erase List
function eraseList() {
    let listElement = document.querySelectorAll(".divList > ul> li");
    listElement.forEach(element => {
        document.querySelector(".divList > ul").removeChild(element);
    });
}

//Create conversation
function createText() {
    let text = document.getElementById("text");
    let divText = document.querySelector("#text > div")
    if (!hasExtra) {
        divText.innerHTML = "Hola Teresa! Como va todo? Y tu família? Hemos guardado el "+ extraProduct +" que nos pediste! Aquí tienes.";
        listElemements = document.querySelectorAll("li");
        listElemements.forEach(element => {
            if (element.innerHTML === extraProduct) {
                element.style.textDecoration= "line-through";
                productsFound.push(extraProduct);
            }});
        points += pointsForObject;
        pointsText.innerHTML = "Puntos: " + points;

    } else {
        divText.innerHTML = "Que pases muy buen día!";
    }
    text.style.display = "Inline";
}

//Close text
function closeText() {
    let text = document.getElementById("text");
    text.style.display = "none";
    if (productsFound.length == TOTALPRODUCTS) {
        endGame();
    }
}


function eraseProducts() {
    let productsImages = document.querySelectorAll("#interior > img:not(#basket):not(#list):not(#lady):not(#speak):not(#shop):not(#gameBack)");
    productsImages.forEach(element => {
        interior.removeChild(element);
    });
}


function endGame() {
    window.clearInterval(clock);
    interior.style.display = "none";
    eraseProducts();
    afterGame = document.getElementById("afterGame");
    afterGame.style.display = "inline-block";
    document.querySelector("#afterGame > h1").innerHTML = "Felicidades, Has conseguido " + points + " puntos!";
    document.getElementById("replay").addEventListener("click", startGame);
}