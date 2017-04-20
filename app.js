var express=require('express');
var app=express();

app.get('/',function(request,response){
  response.sendFile(__dirname+'/index.html');
});

var port = process.env.PORT || 3002;

var server=app.listen(port,function(req,res){
    console.log("Catch the action at http://localhost:"+port);
});
