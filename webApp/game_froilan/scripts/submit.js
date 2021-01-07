//Function to redeem points at the end of game, takes the dataset attribute value for points and submits it to form
function savePoints(){
    let points = document.querySelector('#counter').dataset.points;
    document.querySelector('#finalPoints').value = points;
    document.querySelector('#gameForm').submit();

}