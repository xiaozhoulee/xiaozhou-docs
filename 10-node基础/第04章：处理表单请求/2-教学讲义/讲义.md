## 第04章：处理表单请求

### 一、表单概述

**表单提交**

我们在学html基础的时候已经学习了表单的相关概念，但是以前接触的几乎都是表单的样式，今天我们来讲解使用表单向后台提交数据。我们先用代码演示一下如何提交表单，代码如下所示（demo01/form1.html）
``` html
<form>
    <button>提交表单</button>
    <input type="submit" value="提交表单">
</form>
```
我们在表单中添加了两个按钮，一个是button标签，一个是input标签，type的值是submit,这两个按钮都可以实现提交表单的功能，这是表单的默认行为，不需要我们编写任何代码，如果表单中有数据，点击这两个按钮，表单将会把数据传递给服务器。

**action属性**

点击submit按钮可以提交表单，那么我们将表单提交到哪里呢，这就需要我们使用action属性来设置向服务器发送请求的url。实例代码如下所示（demo01/form2.html）
``` html
<form action="/data">
    <button>提交表单</button>
    <input type="submit" value="提交表单">
</form>
```

在上面的代码中，当我们再次点击提交表单的时候，就会想服务器发送一个请求的相对路径就是"/data"。通过这个url，我们就可以正确地找到请求要发送的位置，服务器在接到这个请求之后，就会给予我们一个响应。

**method属性**

我们想服务器发送请求，通常用两种方法，

* get: 一般用来向服务器获取数据
* post:一般用来向服务器传递数据

关于get请求和post请求对比，我们说一个实际应用的例子

* 当我们使用百度搜索内容的时候，我们首先会将搜索关键字写在百度首页的表单中，然后提交，百度会根据我们要搜索的内容，给我我们返回搜索到的结果。像这样以过去内容为目的的请求，我们要使用get请求。
* 当我们登录一个网站的时候，会将我们的用户名和密码通过表单发送给服务器，如果正确我们才能登录成功，像这样以提交数据为目的的请求，我们要用post请求。

我们用表单向服务器发送请求，默认的情况下是使用get方法的，通过method属性可以将请求方法设置成post方法。

**name属性**

我们想服务器发送的请求是以键值对的形式发送的，表单组件中的name属性，就可以定义数据的键，我们在组件中添加或选中的内容就是数据的值，可以通过下面的代码来理解name属性（demo01/form3.html）

``` html
<form action="/login" method="post">
    <input type="text" name="username">
    <input type="password" name="password">
    <input type="submit" value="登录">
</form>
```

这是一个用户登录的表单，当我们点击登录的时候，就会将用户名和密码的值提交给服务器，这个格式有点像我们学习JavaScript中的对象：

``` json
{
    "username":"",
    "password":""
}

```
掌握了表单，接下来我们就要使用表单向后台提交数据了。



### 二、处理表单数据

**处理get请求**
我们先用node搭建一个简易的服务器来处理表单的get请求，代码如下所示（demo02）

``` html
<!-- 前端代码 -->
<form action="/username">
    <input type="text" name="usr">
    <input type="submit" value="提交名字"> 
</form>
```

``` js
//后台代码
var express = require("express");
var app = express();
app.use(express.static("public"));

app.get("/username",function(req,res){
    var name = req.query.usr;  //获取get请求的参数
    res.send("您提价的名字是："+name);
})

app.listen(3000,function(){
    console.log("server is running");
});
```
我们在上面的代码中，用表单向服务器发送了一个get请求，url为"/username",后台接受到请求之后，通过res.query属性获取请求的参数，然后在将这个参数返回可客户端。


**处理post请求**
上一个例子我们在后台的代码中，成功地获取了前端get请求的参数。现在我们继续来实现在后台获取post请求的参数，获取post请求需要下载一个第三方模块:

``` bash
npm install body-parser

```

模块成功下载之后，在后台中需要应用body-parser这个第三方模块。
``` js
//引入body-parser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
```

最后，在server.js中添加处理post请求的函数。

``` js
app.post("/username",function(req,res){
    var name = req.body.usr;  //获取post请求的参数
    res.send("您提价的名字是："+name);
})
```

这里需要注意的是

* post请求获取数据的方法是req.body
* get请求获取数据的方法是req.query


这样，当前端的表单向服务器发送post请求，url为"/username"的时候，就可以成功的响应数据了。


### 三、练习：登录验证功能

演示demo03：完成判断用户登录的功能。

在实际的开发中，用户登录并不是这么简单就能完成的，还需要各种输入的判断和密码的加密，我们在这里就不一一说明了，这里大家只要知道，如何向服务器发送get请求和post请求，后台如何响应数据就可以了。

### 四、授课说明
* 让学员初步有请求和相应的基本概念
* 关于http协议，后续可以慢慢深入讲解。

