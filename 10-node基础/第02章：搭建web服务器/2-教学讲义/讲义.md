## 第02章：搭建web服务器

### 一、node模块
在node中，我们可以使用require方法引入模块，node中有三种模块，他们分别是：

* 核心模块：node自带的模块，我们可以直接
* 第三方模块：使用npm下载的模块，需要下载之后才能引用
* 自定义模块：自己编写的模块，用过相对路径引入指定文件。

本章我们会接触到核心模块和第三方模块。

### 二、搭建web服务器

**http模块搭建web服务器**

上一章我们使用http-server模块搭建了一个静态web服务器，今天我们使用node的核心模块，用最简单的代码搭建一个原生的node服务器，代码如下所示（server1.js）：

``` js
var http = require("http");  // 引入http模块

//http的createServer方法可以创建一个web服务器
var httpServer = http.createServer(function(req,res){
    res.end("hello node");
});

//web服务器监听3000端口
httpServer.listen(3000);
```

在上面的代码中，我们使用require方法引入了node的核心模块-http模块，通过这个模块的createServer方法可以创建一个web服务器，在createServer方法中我们指定了响应的内容是一个字符串"hello node"，最后一个行，我们使用listen方法监听3000端口。这样我们就完成了一个原生node的web服务器，执行下面命令启动服务器：

``` js
node server1.js
```

使用浏览器访问：http://127.0.0.1:3000 就能看到我们的页面，当然，页面只现实一个字符串"hello world"。


**express搭建web服务器**

一般情况下，我们不会使用原生的node开发我们的web服务器，因为现在已经有了很多非常完善的web开发框架，express就是一个非常优秀的框架，接下来我们就用express完成一个最简单的web服务器。

* 首先下载express

``` bash
npm install express
```

* 创建一个服务器文件server2.js，利用express完成一个与server1.js功能相同的服务器,代码如下：

``` js
var express = require("express"); //引入express
var app = express();   //创建一个应用的实例
app.get("/",function(req,res){  //设置首页的响应内容
    res.send("hello express");
})
app.listen(3000);   //监听3000端口
```

在上面的代码中，我们使用require引入express，大家可以看到，引入第三方模块与引入和新模块很类似，都不必谢路径。接下来使用express方法创建一个web应用的实例app，然后用app.get方法处理浏览器访问web服务器首页，响应"hello express",最后坚挺3000端口，代码量和内容看起来还是和使用http模块创建服务器很类似的，但是随着后台逻辑的增多，express将变得更容易编写和维护，所以在后续的课程中，我们都用express作为我们的服务器端框架。


**使用express创建静态服务器**

使用express也可以创建静态服务器，我们在server3目录中，使用express将public设置成为一个静态文件目录，server3/app.js代码如下所示：

``` js
var express = require("express"); //引入express
var app = express();   //创建一个应用的实例
app.use(express.static("public"));//将public目录设置为静态文件目录
app.listen(3000);   //监听3000端口
```

启动服务器后，我们访问：http://127.0.0.1:3000 就能浏览public中的index.html页面了。

**处理静态页面菜单的请求**

我们继续修改上面的案例，让web服务器可以响应多个页面的请求，代码如下（server4）

``` html
<!-- index.html -->
<ul>
    <li><a href="/movies">电影</a></li>
    <li><a href="/games">游戏</a></li>
</ul>
```

``` js
var express = require("express"); //引入express
var app = express();   //创建一个应用的实例
app.use(express.static("public")); //将public目录设置为静态文件目录

app.get("/movies",function(req,res){
    res.send("您访问的是电影页面")
})

app.get("/games",function(req,res){
    res.send("您访问的是游戏页面")
})

app.listen(3000);   //监听3000端口
```

我们在静态html页面中添加了两个链接，一个url跳转到"/movies"，另一个url跳转到"/games"，然后在app.js中设置了这两个请求，分别响应段话，这样就完成了一个最简单的动态服务器。

### 三、总结
* 本章需要掌握使用http模块搭建一个web服务器
* 可以使用express创建静态文件目录
* 可以使用express处理不同url的请求。




