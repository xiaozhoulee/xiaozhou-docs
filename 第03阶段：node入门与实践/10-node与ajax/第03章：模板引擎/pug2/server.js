var express = require("express");
var app = express();

app.set("view engine","pug"); 

//跳转至首页
app.get("/",function(req,res){
    res.render("home",{title:"首页"});  
})

//跳转至电影页
app.get('/movies',function(req,res){
    res.render("movies",{title:"电影"});
})

//跳转至视频页
app.get("/videos",function(req,res){
    res.render("videos",{title:"视频"});
});

//跳转至游戏页
app.get('/games',function(req,res){
    res.render("games",{title:"游戏"});
})


app.listen(3000);