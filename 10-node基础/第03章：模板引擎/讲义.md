## 第03章：模板引擎

### 一、模板引擎概述

**模板引擎的作用**

在上一节的课程中，我们使用静态页面的菜单发送请求，服务器响应字符串的方式实现了页面的跳转，但是如果我们希望实现一个真正的动态网站，只响应简单的字符串是不够的，应该响应大量的html代码才行，但是如果把html代码都写到字符串中，那样重复的工作量又太大，而且不利于网站的维护。因此，我们就需要用到模板引擎来解决上诉的问题。

通过模板引擎，我们可以直接生成html页面，可以实现后台数据到前台的传递，还可以实现模板的继承，这就是我们今天的课程内容。

**下载pug模板引擎**

模板引擎有很多种，我们今天讲一个名为pug的模板引擎，这是node服务器最常用的模板引擎之一，首先，我们要下载pug

``` bash
npm install pug
```

下载完成后，我们进入下一节，开始使用模板引擎。

### 二、pug模板引擎语法

**缩进来实现html的嵌套关系**
pug模板引擎用缩进的方式表示html元素的层级关系，例如一个列表，在html文件中代码如下：

``` html
<ul>
    <li>香蕉</li>
    <li>苹果</li>
</ul>
```

使用pug模板的代码如下所示：
``` pug
ul
    li 香蕉
    li 苹果
```

理解了pug模板的语法，下面我们用pug作为web服务器的首页（pug1），index.pug文件代码如下：
``` pug
<!DOCTYPE html>
html(lang="en")
    head
        meta(charset="UTF-8")
        title Document
    body
        h1 pug首页
```

我们还需要一个用于启动服务器和处理请求的js文件（server.js）,代码如下：
``` js
var express = require("express");
var app = express();

app.set("view engine","pug");  //将模板引擎设置成pug

app.get("/",function(req,res){
    res.render("index");  //使用render方法渲染pug文件，将模板文件转换成html并发送给客户端。
})

app.listen(3000);
```

在上面的代码中有两个新方法，app的set方法可以设置模板引擎，res的render方法可以将模板文件转换成html代码并发送给客户端。


**传递数据**

很多时候我们需要将后台的数据传递到html代码中，使用pug模板引擎可以很方便地实现数据的传递，我们在pug1项目中的views目录内添加一个data.pug文件，用它来显示后台的数据，代码如下：

``` pug
<!DOCTYPE html>
html(lang="en")
    head
        meta(charset="UTF-8")
        title Document
    body
        h1 #{data}
```

我们可以在pug文件中使用#{}获取后台的数据，后台代码如下所示：

``` js
//当访问/data 页面的时候，向pug模板传递数据
app.get("data",function(req,res){
    res.render("data",{data:"后台的数据"});
})
```
重新启动服务器，访问http://127.0.0.1:3000/data 的时候，就可以看到页面上显示”后台的数据“了

**显示列表**

很多时候，我们在html中显示的数据数量是不确定的，例如我们希望显示一个水果列表，这个列表中水果的个数取决于后台传递过来多少个水果，所以html标签中的li个数也是不确定的，这就需要使用模板引擎中的循环编列列表的动能。

我们在pug1项目中的views目录内添加一个fruitlist.pug文件，用它来显示水果列表，代码如下所示：

``` pug
<!DOCTYPE html>
html(lang="en")
    head
        meta(charset="UTF-8")
        title Document
    body
        ul
            each val,index in data
                li #{val}
```

使用each可以遍历后台传递过来的数据，in后面是一个后台传递过来的集合，val每个元素的值，index代表每个元素的索引，这样我们就可以用#{vak}将data中每个元素都显示在li中。

后台的代码如下所示：
``` js
//当访问/fruitlist的时候，将水果列表的数据传递给pug文件
var fruits = ["香蕉","苹果","鸭梨"];
app.get("/fruitlist",function(req,res){
    res.render("fruitlist",{data:fruits});
});

```

### 三、动态网站制作

**模板继承**
在同一个网站中，很多网页都是有相同内容的，例如一个论坛网站的主菜单有一下内容：

* 电影
* 视频
* 游戏

当我们点击每一个菜单的时候，网站的菜单和上面的logo等内容是不会改变的，改变的只有网站中间的内容部分，那我们是否需要将每一个页面的相同部分都复制、粘贴成相同的内容呢，如果这样做确实可以实现这样的功能，但是大家设想一下，如果真的这么做了，那网站的菜单如果变化，网站中有1000个页面我们就需要修改1000个页面，所以这么做肯定是不合理的。

模板继承可以解决这个问题，我们可以把网站的重复部分用单独一个模板文件编写，让其他的内容页面继承这个模板页面，所有页面的公众部分内容就相同了。如果需要修改，我们也仅仅只需要修改一个文件，如pug2项目中所示。

我们首先创建一个模板也，命名为layout.pug，代码如下所示：

``` pug
<!DOCTYPE html>
html(lang="en")
    head
        meta(charset="UTF-8")
        title Document
    body
        ul
            li
                a(href="/") 主页
            li
                a(href="/movies") 电影
            li
                a(href="/videos") 视频
            li
                a(href="/games") 游戏
        
        block content
```

在上面的代码中，block content就是集成模板后，其他页内容排放的位置。我们在编辑一个网站首页的内容部分home.pug，代码如下所示：

``` pug
extends layout

block content
    h1 网站首页
```
在home.pug中，通过extends可以设计home也所集成的模板，然后在block content后面编辑的就是首页的内容。


**动态网站的制作**
了解了模板继承的基本概念，接下来我们来利用模板继承实现一个最简单的动态网站，网站包括四个页面：

* 网站首页
* 电影页面
* 视频页面
* 游戏页面

功能如下所述：

* 每个页面都有菜单  
* 单击菜单可以在这四个页面间切换
* 切换到不同的页面时网页的title要实现当前页面的title

服务器端的代码如下所示：

``` js
var express = require("express");
var app = express();

app.set("view engine","pug"); 

//跳转至首页
app.get("/",function(req,res){
    res.render("home",{title:"首页"});  
})

//跳转至电影页
app.get('/movies',function(req,res){
    res.render("movies",{title:"电影"});
})

//跳转至视频页
app.get("/videos",function(req,res){
    res.render("videos",{title:"视频"});
});

//跳转至游戏页
app.get('/games',function(req,res){
    res.render("games",{title:"游戏"});
})


app.listen(3000);
```

模板页面与上一节的区别在于，需要将title设置成后台传递过来的数据，代码如下所示：

``` pug
<!DOCTYPE html>
html(lang="en")
    head
        meta(charset="UTF-8")
        title #{title}
    body
        ul
            li
                a(href="/") 主页
            li
                a(href="/movies") 电影
            li
                a(href="/videos") 视频
            li
                a(href="/games") 游戏
        
        block content
```

这样，我们就实现了一个最简单的动态网站。


