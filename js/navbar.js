
let as= document.querySelectorAll(".sidebar > ul > li");
as.forEach(element => {
    element.addEventListener('mouseenter', animationLeft);
    element.addEventListener('mouseleave', animationRight);
});


function animationLeft(){
    let li= this;
    let p= this.children[0].children[1];
    li.style.width = "280px"; 
    setTimeout(function(){ p.style.display= "inline"}, 300);
}


function animationRight(){
    let li= this;
    let p= this.children[0].children[1];
    p.style.display="none";
    li.style.width = "100px";
}