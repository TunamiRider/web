function validate(){
  const username = String(document.getElementById("uname").value);
  const password = String(document.getElementById("psw").value);
  
  console.log(username +" "+password); 
  
  if( (username == "yuki" && password == "123") ||
      (username == "satoshi" && password == "456") ){
    
    //window.location.assign("./pages/twolinks.html");
    //document.location = './hello.html';
    //window.location.replace("../../hello.html");
    window.location.replace("https://tunamirider.github.io./web/hello.html");
    alert("Login successfully");
    
  }
  else{
    alert("Login failed");
  }
  return false;
}

function access_firebase(){
  const fs = require('fs');
  const connect = require('connect')
      , https = require('https');
  
  const options = {
    key:    fs.readFileSync('ssl/server.key'),
    cert:   fs.readFileSync('ssl/server.crt'),
    ca:     fs.readFileSync('ssl/ca.crt')
  };
  
  const app = connect();
  https.createServer(options,app).listen(3000);
}
