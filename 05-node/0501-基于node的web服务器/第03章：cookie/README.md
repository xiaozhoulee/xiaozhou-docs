# 第04章：cookie

### 一、cookie的基本概念

在学习cookie之前，我们先来考虑一个问题：如果想完成一个web应用，如何保持用户的登录状态？

我们知道http协议是没有状态的，通过向服务器发送请求可以获取到服务器的数据，但是服务器并不知道我们这次请求和下次请求有怎么样的关系，那如果这个网页是一个电商网站，开发人员如何让用户看到的购物车就是他自己的购物车呢，这就需要在浏览器中保存一个登陆状态，让用户每次向服务器发送请求的时候都带着这个状态，这样我们就可以区分不同用户了，这个状态就是cookie。

cookie是服务器发送给浏览器并存储在浏览器中的信息，存储之后浏览器再次向这个服务器发送请求，就会带着这个cookie，服务器可以通过cookie区分是哪个客户端发送的请求。

### 二、cookie的应用

**保存数据**

cookie以键值对的形式在浏览器中存储数据，先来看一个简单的例子（server01.js）

``` js
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
```

我们在控制台中执行node server01.js开启服务器，然后通过下面的步骤访问：

* 访问/home，可以看到页面显示“欢迎访问home页面！”然后在控制台的network中查看cookie，发现并没有cookie。
* 然后我们访问/set，可以在控制台中看到Response Cookies中显示username的值是xiaoming。说明服务器已经成功将cookie写入客户端。
* 最后我们再次访问/home，可以看到这次访问中请求是带着username:xiaoming这个cookie的。

从上面的例子中我们可以看到，当执行res.cookie()方法之后，浏览器就存储了cookie值，这样当浏览器再次访问这个网站的任意一个页面的时候，都可以带着这个cookie值。

**基于cookie的计数器**

我们可以利用cookie实现一个记录访问次数的功能，代码如下所示（demo02.html）

``` js
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());
app.get('/', function (req, res) {
    // 如果请求中的 cookie 存在 isVisit, 则输出 cookie
    // 否则，设置 cookie 字段 isVisit, 并设置过期时间为1分钟
    if (req.cookies.isVisit) {
        let count = ++req.cookies.isVisit;
        res.cookie('isVisit', count);
        res.send(`欢迎第${count}次访问！`);
    } else {
        res.cookie('isVisit', 1);
        res.send("欢迎第1次访问！");
    }
});
app.listen(3000, function () {
    console.log("server is running!");
})
```

在上面的代码中，第一次访问页面我们在客户端存入一个cookie:isVisit，再次访问的时候，我们给之前的isVisit值加一，这样就能实现一个记录放完次数的功能了，我们可以不断的刷新页面，每次刷新，访问次数都会加一。


### 三、保持登录状态

通过上面的学习，我们已经基本掌握了cookie的用法，那么现在来做一个保持登录状态的联系，示例代码如下所示（demo03.html）

``` js
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
```

在上面的代码中，我们设置了三个路径分别可以跳转到首页、登录页和电影页，页面对应的代码如下所示

``` pug
//- layout.pug
<!DOCTYPE html>
html(lang="en")
    head
        meta(charset="UTF-8")
        meta(name="viewport", content="width=device-width, initial-scale=1.0")
        meta(http-equiv="X-UA-Compatible", content="ie=edge")
        title Document
    body
        h3 欢迎#{user}
        block content
```


``` pug
//- home.pug
extends layout

block content
    h1 网页内容：首页
```


``` pug
//- login.pug
<!DOCTYPE html>
html(lang="en")
    head
        meta(charset="UTF-8")
        meta(name="viewport", content="width=device-width, initial-scale=1.0")
        meta(http-equiv="X-UA-Compatible", content="ie=edge")
        title Document
    body
        form(action="/login",method="post")
            input(type="text",name="username",placeholder="用户名")
            input(type="password",name="password",placeholder="密码")
            input(type="submit",value="登录")
```

``` pug
//- movie.pug
extends layout

block content
    h1 网页内容：电影
```

当我们最初访问首页和电影页的时候，并没有显示用户名称，当我们在登录页完成登录之后，就可以在主页和电影页看到我们的用户名了，这里程序内置的用户名和密码分别是

* 用户名：xiaoming
* 密码：aaa

用户名和密码可以再server03.js中修改，如果是真正的项目，用户输入的用户名和密码会和数据库中的用户名和密码进行比对，并且密码还需要加密，不能存储为明码，这里不做过多的说明。



