//Check if two passwords match when new user is registered
let password = document.querySelector('#password').value;
let password2 = document.querySelector('#confpassword').value;

function doubleCheckPass(){
    if(password != password2){
        document.querySelector('#adduser').disabled = true;
        alert("Passwords must match!");
    }
}