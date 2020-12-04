function savePoints(){
    let points = document.querySelector('#counter').dataset.points;
    document.querySelector('#finalPoints').value = points;
    document.querySelector('#gameForm').submit();

}