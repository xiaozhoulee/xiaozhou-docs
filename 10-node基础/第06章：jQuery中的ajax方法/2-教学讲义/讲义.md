## 第06章：jQuery中的ajax方法

### 一、概述

上一章我们将了使用XMlHttpRequest对象实现了原生的ajax，本节我们主要讲解jQuery为我们封装的ajax方法，并介绍两个专门为ajax封装的库：axios和fetch.

### 二、jQuery中的ajax方法
jQuery为我们封装了多个ajax方法，我们不必直接使用JavaScript原生的XMLHttpRequest来实现异步数据的获取。使用jQuery为我们提供的ajax方法，不但操作简单，而且不必考虑浏览器兼容性。今天我们来说四个非常常用的方法，他们分别是：get(),post(),load(),ajax();

**服务器代码**
首先，为了我们的ajax方法可以正确地获取后台数据，我们首先要创建一个服务器文件来处理ajax请求，服务器代码如下：

``` js
var express = require("express");  
var app = express();               
app.use(express.static("public"));
app.get("/data",function(req,res){    //接收get请求,url为：/data,响应"helolo get ajax"
    res.send(" hello get ajax");
})
app.post("/data",function(req,res){   //接收post请求，url为：/data,响应"helolo post ajax"
    res.send("hello post ajax")
})
app.get("/books",function(req,res){    //接收get请求，url为：/data,响应一个数组
    var books = ["JavaScript高级程序设计","JavaScript权威指南"];
    res.send(books);
})
app.listen(3000,function(){            //监听3000端口
    console.log("server is running");
})
```

我们在服务器代码中设置了三个路径来处理前端的请求，url分别是：

* get:/data
* post:/data
* get:/books

并且创建了静态文件目录:public，我们可以把html文件和js文件放在目录中。

**$.get()**
我们首先用jQuery中的$.get()方法获取后台数据，代码如下（demo01.html）：

``` html
<body>
    <button>get方法获取数据</button>
    
    <script src="script/jquery.js"></script>
    <script>
        $("button").click(function(){
            $.get("/data",function(res){
                alert(res);
            })
        })
    </script>   
</body>
```

当我们点击按钮时，使用$.get()方法向后台发送get请求，第一个参数是请求的url，第二个参数是一个回调函数，回调函数的形参就是我们获取的响应数据。


**$.post()**
$.post()方法与$.get()方法用法十分类似，唯一的区别就是向后台发送的是post请求，代码如下（demo02.html）。

``` html
<body>
    <button>post方法获取数据</button>
    
    <script src="script/jquery.js"></script>
    <script>
        $("button").click(function(){
            $.post("/data",function(res){
                alert(res);
            })
        })
    </script>   
</body>
```

**$.ajax()**
上面两部分我们分别讲解了$.get()和$.post()方法，其实这两个方法是$.ajax()方法的进一步封装，$.ajax()方法的用法为我们提供了更多的设置选项（第八章跨域请求会进一步使用$.ajax()方法），这里我们仍然举一个最简单的例子，用$.ajax()方法发送get请求向后台获取数据，代码如下（demo03.html）

``` html
<body>
    <button>ajax方法获取数据</button>
    
    <script src="script/jquery.js"></script>
    <script>
        $("button").click(function(){
            $.ajax({
                url:"/books",
                type:"get"
            }).done(function(res){
                alert(res);
            })
        })
    </script>   
</body>
```

大家可以看到，ajax的方法只有一个参数，这个参数是一个对象，我们可以通过设置这个对象来进一步描述要发送的请求，在上面的代码中，我们设置了url和请求的方法。ajax方法的返回值可以进一步调用done方法，来获取后台的数据，done方法有一个回调函数，回调函数的形参就是我们要获取的响应数据。


**$(selector).load()**

我们在上面讲的三个方法都是获取后台的数据，现在我们通过jQuery的load方法，可以直接将一段html代码加载到指定区域，代码如下（demo04.html）:

``` html
<body>
    <button>异步加载html</button>
    <div class="content">
        <!-- 内容加载区域 -->
    </div>
    <script src="script/jquery.js"></script>
    <script>
        $("button").click(function(){
            $(".content").load("list.html");
        })
    </script>   
</body>
```

当我们点击按钮的时候，jQuery使用load方法，将一个静态的html文件加载到了content中，这样我们就实现了异步加载页面的功能。


### 三、其他封装的ajax库简介
除了jQuery为我们封装了ajax方法外，还有其他的专门封装ajax方法的库，如果在做前端开发工作的时候并没有使用jQuery，那我们希望发送ajax请求，完全可以使用下面的两个库，实例代码如下：

**axios**

``` js
axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

**fetch**
``` js
fetch('/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Hubot',
    login: 'hubot',
  })
})
```

在组件化的开发中，我们会进一步应用axios这个ajax库，在本节不再做更多的讲解。

