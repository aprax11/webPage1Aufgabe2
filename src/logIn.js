var attempt = 3;
var attempt2 = 3;

function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "a" && password == "a"){
alert ("Login successfully");
window.location = "success.html";
return false;
}
else{
attempt --;
alert("Login Credentials Incorrect. You have left "+attempt+" attempt;");
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
function validate2(){
    var username2 = document.getElementById("username2").value;
    var password2 = document.getElementById("password2").value;
    if ( username2 == "a" && password2 == "a"){
        alert ("Login successfully");
        window.location = "staffLogin.html";
        return false;
    }
    else{
        attempt2 --;
        alert("Login Credentials Incorrect. You have left "+attempt2+" attempt;");

        if( attempt2 == 0){
            document.getElementById("username2").disabled = true;
            document.getElementById("password2").disabled = true;
            document.getElementById("submit2").disabled = true;
            return false;
        }
    }
}

