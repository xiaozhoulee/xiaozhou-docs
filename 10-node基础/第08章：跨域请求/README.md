## 第08章：跨域请求

### 一、概述

**跨域请求的基本概念**

两个不同的域之前发送请求并响应数据，就叫跨域请求。协议、域名（或ip）、端口，之中有一个不同，就叫跨域。下面我们来用几个不同的url做对比，看看哪些是跨域，哪些不是跨域。

* 示例一：

站点A的地址：http://192.168.1.1:8080

站点B的地址：https://192.168.1.1:8080

A向B发送请求，协议不同，是跨域。

* 示例二：

站点A的地址：http://192.168.1.1:8080

站点B的地址：http://192.168.1.100:8080

A向B发送请求，IP不同，是跨域。

* 示例三：

站点A的地址：http://192.168.1.1:8080

站点B的地址：http://192.168.1.1:80

A向B发送请求，端口不同，是跨域。

* 示例四：

站点A的地址：http://192.168.1.1:8080/index.html

站点B的地址：http://192.168.1.1:8080/getdata

A向B发送请求：协议、ip、端口都相同，不是跨域请求。


**跨域的解决方案**

我们不能直接使用ajax跨域异步获取数据，默认的情况下，ajax是不能跨域的，但是可以让被访问的服务器设置成允许ajax跨域请求数据，关于服务器的设置，这里我们不做讨论。

通常我们使用jsonp来实现跨域请求。

### 二、jsonp原理

**json与jsonp没有关系？** 

我们可以把jsonp理解成一个协议。

我们知道图片的src属性是可以跨域的，我们可以跨域获取其他网站上的图片，同理，script标签的src属性也是可以跨域的，我们可以获取其他服务器上的js代码。

jsonp就是利用这样的特性，两个不同域的站点，其中一个通过script标签的src属性获取另一个站点的js代码，数据就存放在js代码中，这样就实现了跨域请求。

**通过程序模拟jsonp**

* 建两个静态服务器A和B，目标是让A跨域请求B的数据。
* A定义一个js脚本jsonp.js,在jsonp.js中定义一个函数fun，fun中有一个形参。
``` js
//jsonp.js
function fun(data){
    alert(data);
}
```
* B在js脚本中引入jsonp.js,然后调用fun（引入外部脚本当然可以调用里面的函数啦）;
``` js
fun("我是数据");
```

这样，数据就成功的通过函数从B传递到了A中的函数，A也跨域获取到了数据。这就是jsonp的原理了。

练习：创建两个服务器，模拟上面代码的功能。

### 三、jQuery封装的jsonp

**服务器代码**

因为要模拟一个跨域的环境，所以我们要启动两个服务器

* server1：端口3000，我们的html文件运行在这里
* server2：端口8080，在server2中，我们处理请求，并用jsonp响应数据

server1.js的代码如下所示：

``` js
var express = require("express");  
var app = express();               
app.use(express.static("public"));
app.listen(3000,function(){           
    console.log("server is running");
})


```

server2.js的代码如下所示：

``` js
var express = require("express");  
var app = express();               

app.get("/data",function(req,res){  
    res.jsonp(" hello jsonp");   //使用jsonp方法返回数据（其实是返回一个函数）
})

app.listen(8080,function(){           
    console.log("server is running");
})

```

**前端代码**

我们使用jQuery为我们封装的jsonp方法来获取数据，代码如下所示：

``` js
<body>
    <button>发送jsonp请求</button>
    <script src="script/jquery.js"></script>
    <script>
        $("button").click(function(){
            $.ajax({
                url:"http://127.0.0.1:8080/data",
                dataType:"jsonp"
            }).done(function(res){
                alert(res);
            })
        })
    </script>
</body>
```

这样，我们就可以成功地跨域实现数据的交互了，功能实现之后大家可以查看chrome调试工具中的network，查看一下请求和响应的内容，可以发现响应的内容并不是数据本身，而是一个回调函数。

### 四、授课说明
本章要求学员掌握跨域请求的基本概念，并了解jsonp的原理即可。

