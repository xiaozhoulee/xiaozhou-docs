var express = require("express");  
var app = express();               

app.get("/data",function(req,res){  
    res.jsonp(" hello jsonp");   //使用jsonp方法返回数据（其实是返回一个函数）
})

app.listen(8080,function(){           
    console.log("server is running");
})
