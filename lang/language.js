let textArray = document.querySelectorAll('.translate');

function changeLangEsp(){
    let lang=esp;
    
    for (const textItem of textArray) {
        changeText(textItem.id, lang);
    }
}

function changeLangEng(){
    let lang=eng;

   for (const textItem of textArray) {
       changeText(textItem.id, lang);
   }

}

function changeLangCat(){
    let lang=cat;

   for (const textItem of textArray) {
       changeText(textItem.id, lang);
   }

}

function changeLangFr(){

    let lang=fr;

    for (const textItem of textArray) {
        changeText(textItem.id, lang);
    }

}

function changeText(stringID, lang){
    console.log('change text running');
    console.log(stringID);
    console.log(lang);
    console.log(document.getElementById(stringID).innerHTML);
    console.log(lang.stringID);
    document.getElementById(stringID).innerHTML = lang[stringID];
}