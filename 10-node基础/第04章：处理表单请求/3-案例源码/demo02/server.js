var express = require("express");
var app = express();
app.use(express.static("public"));

//引入body-parser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));

app.get("/username",function(req,res){
    var name = req.query.usr;  //获取get请求的参数
    res.send("您提价的名字是："+name);
})


app.post("/username",function(req,res){
    var name = req.body.usr;  //获取post请求的参数
    res.send("您提价的名字是："+name);
})

app.listen(3000,function(){
    console.log("server is running");
});