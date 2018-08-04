# 第05章：session

### 一、session的基本概念

在上一章中我们已经使用cookie实现了保持用户登录状态的功能，但是有一个问题，我们将用户信息存储在客户端是非常不安全的，所以在实际的web项目中，并不会像上一章的练习那样将用户的数据直接存储在浏览器中，而是用session存储在服务器中，而cookie存储的仅仅是session对应的一个加密的识别码，这样安全性就高了很多。

用cookie和用session存储有什么不同呢，举一个现实中简单的例子，我们现在开了一家店铺，希望可以办理会员（会员对应的就是登陆用户），那么我们如何记录会员的身份呢？可以有两种方法：

* 给会员发一张卡片，在卡片上记录消费信息和充值信息，顾客来的时候带着这章卡片，就知道自己的余额是多少了（cookie验证）。
* 还有一种方法是给会员发一张磁卡，磁卡只有一个加密的序列号，像银行卡一样，里面不存储信息，而信息是存储在为我们自己的电脑里，这样会员来的时候，只要刷一下卡就能看到这个会员的余额了（session验证）

从上面两种验证会员方式可以看出，第一种方法是非常不安全的，客户很容易自己伪造卡片，但是第二种方式伪造的可能性就会大大降低。因为会员的信息是完全存储在我们自己的电脑中。这就是利用session实现用户状态保存的优点（缺点就是需要占用服务器资源，但是毕竟安全更重要）。

### 二、session的应用

**保存数据**

首先，我们来看如何在node中设置session，示例代码如下所示（demo01.js）

``` js
var express = require("express");
var session = require("express-session");
var app = express();
//设置session
app.use(session({  
    "secret":"xxx",
    "cookie":{maxAge:10 * 1000}
}))
app.get("/",(req,res)=>{
    if(req.session.isVisit){
        res.send("欢迎再次光临！");
    }else{
        req.session.isVisit = 1;
        res.send("欢迎光临！");
    }
})
app.listen(3000,()=>{
    console.log("ok")
})
```

运行上面的代码可以看到，我们首次访问网页的 时候显示“欢迎光临！”，刷新之后会变成“欢迎再次光临！”，因为我们在第一次访问的时候设置了session的值，服务器会向浏览器中写入一个cookie，但是这个cookie是加密的，通过调试工具可以看到，然后session就会在服务器中记录。

在代码中，我们需要引入模块express-session，然后通过设置session，设置设置中有两个参数，secret是加密字符串，我们这里可以随意写一个字符串，cookie后面可以设置cookie的国企时间，上面的例子中我们过期企时间设置成了10秒，这样十秒钟之后我们再次访问就可以看到原session已经清空了。

**基于session的计数器**

我们再来用session实现一个计数器的功能，实例代码如下所示（server02.js）

``` js
var express = require("express");
var session = require("express-session");
var app = express();
app.use(session({  
    "secret":"xxx",
    "cookie":{maxAge:10 * 1000}
}))
app.get("/",(req,res)=>{
    if(req.session.isVisit){
        req.session.isVisit++;
        var str = "欢迎第" + req.session.isVisit + "次访问";
        res.send(str);
    }else{
        req.session.isVisit = 1;
        res.send("欢迎第1次访问");
    }
})
app.listen(3000,()=>{
    console.log("ok")
})
```

代码的思路与上一章我们学习的cookie计数器完全一样，只是这次我们使用的是session，数字存储在服务器中，而不会保留在浏览器中。

### 三、保持用户登录状态

我们再来使用session完成保持用户登录的效果，实例代码如下所示（demo03.js）

``` js
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
```

在上面的代码中，我们将上一节课的设置cookie的方法改成了设置session的方法，功能与之前的功能完全一样，但是用户名存储在了服务器，提高了安全性。
