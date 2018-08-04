const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:false}));
app.set("view engine","pug");
app.post('/login', (req, res)=> {
    // 用户验证
    let username = req.body.username;
    let password = req.body.password;
    if(username === "xiaoming" && password === "aaa"){   //如果用户名和密码正确，则写入cookie，并跳转到首页。
        res.cookie('username', username);
        res.redirect("/");
    }else{
        res.send("用户名或密码错误！")
    }
});
app.get('/',(req,res)=>{  //访问首页
    res.render("home",{user:req.cookies.username});
})
app.get('/movie',(req,res)=>{   //访问电影哦页面
    res.render("movie",{user:req.cookies.username});
})
app.get('/login',(req,res)=>{   //访问登录页面
    res.render("login");
})
app.listen(3000, function () {
    console.log("server is running!");
})