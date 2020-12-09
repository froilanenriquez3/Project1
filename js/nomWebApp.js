AOS.init();
<<<<<<< HEAD
=======

let logState = document.getElementById("logState").innerHTML;

if(logState== "logged"){
    // Recomerçem
    let recomerçem= document.getElementsByClassName("recomerçem")[0]
    recomerçem.style.width= "calc(100% - 100px)";
    recomerçem.style.marginLeft= "100px";

    // Images li
    let lis= document.querySelectorAll(".recomerçem > li");
    lis.forEach( element => {
        element.style.width= "calc(100% - 100px)"
        element.style.left= "100px";
    })

    // Button recomerçem
    let button= document.getElementById("recomerçButton")
    button.style.marginLeft= "50px";

    // Sections
    let sections= document.querySelectorAll("section");
    sections.forEach(element => {
        element.style.width= "calc(100% - 100px)";
        element.style.position="relative";
        element.style.marginLeft= "100px";
    });
}
>>>>>>> 6995cfd7c5a2f349657c6b3e4e2edb278f4af7f6
