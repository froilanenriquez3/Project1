let password = document.querySelector('#password').nodeValue;
let password2 = document.querySelector('#confpassword').nodeValue;

if(password != password2){
    document.querySelector('#adduser').disabled = true;
    alert("Passwords must match!");
}