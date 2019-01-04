## 第05章：原生ajax


### 一、什么是ajax

**复习http协议**
在前几章的学习中，我们已经掌握了http协议的基本概念，用最简单的话来描述http协议，就是客户端发送请求，服务器给予响应。

关于http协议，我们还需要掌握如下内容：

* 请求的方法get与post的区别。
* 状态码404和200分别代表什么意思。
* 如何通过chrome的调试工具抓取请求和相应的内容。

我们已经掌握了使用表单发送get请求和post请求，这里的服务器响应的数据可以是简单的字符串，也可以是html代码，但是我们之前接触的所有响应，需要整体刷新页面才能获取到，今天我们就来讲解不刷新页面的情况下向服务器请求数据。

**ajax的基本概念**

ajax用最简单的话聊描述ajax就是：在不刷新页面的情况下，向服务器获取数据。

### 二、XMLHttpRequest对象

如果不使用任何库或框架，我们需要使用一个名为XMLHttpRequest的对象来帮我们发送请求和获取响应，一下我们简称xhr对象。

**创建XMLHttpRequest对象**

我们可以通过XMLHttpRequest()这个构造函数来创建xhr对象，代码如下所示;

``` js
var xhr = new XMLHttpRequest();

```

**初始化请求**

有了这个对象之后，我们可以使用它的open方法来初始化一个请求，初始化请求的时候，我们需要将请求方法和url作为参数传递给open方法，代码如下所示：

``` js
xhr.open("get","/data");
```

**发送请求**

通过open方法初始化请求之后，我们需要使用send方法发送请求：

``` js
xhr.send();
```

**获取响应**

发送请求之后，我们就可以等待服务器接收到请求，并给予响应了。那么现在有一个问题，我们是如何判断http响应已经完全接受了呢？

这里我们可以监听xhr对象的readyState属性变化来实现获取响应的内容。readyState属性的值变化如下所示：

* 值为0：初始化状态。XMLHttpRequest 对象已创建。
* 值为1：open() 方法已调用，但是 send() 方法未调用。请求还没有被发送。
* 值为2：Send() 方法已调用，HTTP 请求已发送到 Web 服务器。未接收到响应。
* 值为3：所有响应头部都已经接收到。响应体开始接收但未完成。
* 值为4：HTTP 响应已经完全接收。

获取服务器响应的代码如下所示：

``` js
xhr.onreadystatechange = function(){ //readyState值改变，事件会被触发
    if(xhr.readyState === 4 && xhr.status === 200){ //判断readyState属性和status属性是否符合要求
        alert(xhr.responseText);   //提示框弹出响应的内容
    }
}
```

### 三、ajax实践

**获取字符串**
理解了ajax的基本概念与核心代码，我们现在来做一个简单的ajax实例，通过xhr对象向后台发送请求，后台接到请求之后返回一个字符串"hello ajax"，浏览器使用alert方法显示响应的数据"hello ajax"。后台我们使用http-server启动，数据为静态文件data.txt（demo01）。html代码如下所示：

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <button>获取数据</button>
    <script>
        var xhr = new XMLHttpRequest();
        document.querySelector("button").onclick = function(){
            xhr.open("get","/data.txt");
            xhr.send();
            xhr.onreadystatechange = function(){
                if(xhr.readyState===4 && xhr.status === 200){
                    alert(xhr.responseText);
                }
            }
        }
    </script>
</body>
</html>
```



**json数据格式**
json是一种数据格式，它的全称是：JavaScript Object Notation, JS 对象表示法。也就是说他是用js对象的格式来表示数据的，例如下面格式的数据就是一个json格式的数据。

``` json
{
    "name":"xiaoming",
    "age":2,
    "friends":[
        "Lily",
        "lucy"
    ]
}
```

在真正的项目开发中，前后台数据一般用json格式传递。我们一起做一个请求json格式数据的实例，

* demo02中添加了data.json
* 客户端请求这个数据

大家可以看到响应的内容是一个字符串，我们为了留在前端更方便的操作数据，可以使用JSON.parse()方法，将json格式的字符串解析成一个js的对象，代码如下所示。

``` js
var xhr = new XMLHttpRequest();
document.querySelector("button").onclick = function(){
    xhr.open("get","/data.json");
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState===4 && xhr.status === 200){
            var obj = JSON.parse(xhr.responseText);  //解析json字符串
            alert(obj.name);  //输出对象的属性
            alert(obj.friends); //输出对象的属性
        }
    }
}
```

这样前端就成功获取到了json格式的数据（demo02）

### 四、授课说明
* 如果学员http协议的基本概念不清楚，需要在客气着重讲解一边。
* 原生的ajax在生产环境中并不常用，所以xhr对象要求了解即可。


