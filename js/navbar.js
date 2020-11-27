
let as= document.querySelectorAll(".sidebar > ul a");
as.forEach(element => {
    element.addEventListener('mouseover', animationLeft);
    element.addEventListener('mouseout', animationRight);
});


function animationLeft(){
    let li= this.parentElement;
    let p= this.children[1];
    li.style.width = "280px"; 
    setTimeout(function(){ p.style.display= "inline" }, 300);
}



function animationRight(){
    let li= this.parentElement;
    let p= this.children[1];
    p.style.display="none";
    li.style.width = "100px";
}