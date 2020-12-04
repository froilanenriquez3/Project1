AOS.init();

let logState = document.getElementById("logState").innerHTML;

if(logState== "logged"){
    // Recomerçem
    let recomerçem= document.getElementsByClassName("recomerçem")[0]
    recomerçem.style.width= "calc(100% - 100px)";
    recomerçem.style.marginLeft= "100px";

    // Sections
    let sections= document.querySelectorAll("section");
    sections.forEach(element => {
        element.style.width= "calc(100% - 100px)";
        element.style.position="relative";
        element.style.marginLeft= "100px";
    });
}
