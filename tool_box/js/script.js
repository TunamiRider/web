function validate(){
  var username = document.getElementById("uname").value;
  var password = document.getElementById("psw").value;
  
  console.log(username +" "+password); 
  
  if( username == "yuki" && password == "123" ||
      username == "satoshi" && password == "456" ){
    window.location.assign("https://tunamirider.github.io/web/pages/twolinks.html");
    //document.location = '../../web/pages/twolinks.html';
    alert("Login successfully");
    
  }
  else{
    alert("Login failed");
  }
  return false;
}
function access_firebse(){
  var fs = require('fs');
  var connect = require('connect')
      , https = require('https');
  
  var options = {
    key:    fs.readFileSync('ssl/server.key'),
    cert:   fs.readFileSync('ssl/server.crt'),
    ca:     fs.readFileSync('ssl/ca.crt')
  };
  
  var app = connect();
  https.createServer(options,app).listen(3000);
}
