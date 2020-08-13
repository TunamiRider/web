function validate(){
  var username = document.getElementById("uname").value;
  var password = document.getElementById("psw").value;
  
  if( username == "yuki" && password == "123" ){
    alert("Login successfully");
    return false;
  }
  else{
    alert("Login failed");
  }
  
}
