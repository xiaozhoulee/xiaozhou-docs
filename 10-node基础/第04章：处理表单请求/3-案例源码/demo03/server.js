var express = require("express");
var app = express();
app.use(express.static("public"));

//引入body-parser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));

var user = {username:"xiaoming",password:"aaaaaa"}  //用户名和密码

app.post("/login",function(req,res){
    var usr = req.body;

    //前端输入的用户名和密码与后台规定的相同，响应“登录成功”,否则响应“登录失败”
    if(usr.username === user.username && usr.password === user.password){
        res.send("登录成功");
    }else{
        res.send("登录失败");
    }
    
})

app.listen(3000,function(){
    console.log("server is running");
});