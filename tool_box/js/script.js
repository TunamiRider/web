function validate(){
  var username = document.getElementById("uname").value;
  var password = document.getElementById("psw").value;
  
  console.log(username +" "+password); 
  
  if( username == "yuki" && password == "123" ||
      username == "satoshi" && password == "456" ){
    alert("Login successfully");
    
  }
  else{
    alert("Login failed");
  }
  return false;
}
