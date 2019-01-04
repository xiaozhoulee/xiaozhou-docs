var express = require("express"); //引入express
var app = express();   //创建一个应用的实例
app.get("/",function(req,res){  //设置首页的响应内容
    res.send("hello express");
})
app.listen(3000);   //监听3000端口