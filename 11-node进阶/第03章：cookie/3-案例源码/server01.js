const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());
app.get("/set",function (req,res) {
    if(!req.cookies.username){     //读取cookie，判断cookie中的username键是否有值
        res.cookie("username","xiaoming"); //如果cookie中username没有值，则将username设置成xiaoming
        res.send("欢迎访问set页面！")
    }
})

app.get("/home",function (req,res) {  
    res.send("欢迎访问home页面！")
})

app.listen(3000,function(){
    console.log("server is running!");
})