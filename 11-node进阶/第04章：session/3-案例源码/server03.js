const express = require('express');
var session = require("express-session");
const bodyParser = require('body-parser');
const app = express();
app.use(session({  
    "secret":"xxx",
    "cookie":{maxAge:50 * 1000}
}))
app.use(bodyParser.urlencoded({extended:false}));
app.set("view engine","pug");
app.post('/login', (req, res)=> {
    // 用户验证
    let username = req.body.username;
    let password = req.body.password;
    if(username === "xiaoming" && password === "aaa"){   //如果用户名和密码正确，则写入cookie，并跳转到首页。
        req.session.username = username;
        res.redirect("/");
    }else{
        res.send("用户名或密码错误！")
    }
});
app.get('/',(req,res)=>{  //访问首页
    res.render("home",{user:req.session.username});
})
app.get('/movie',(req,res)=>{   //访问电影哦页面
    res.render("movie",{user:req.session.username});
})
app.get('/login',(req,res)=>{   //访问登录页面
    res.render("login");
})
app.listen(3000, function () {
    console.log("server is running!");
})