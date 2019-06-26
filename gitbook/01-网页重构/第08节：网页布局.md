# 第08章：网页布局

### 一、树状结构

**树状结构概述**

在学习网页布局之前，我们需要先了解树状结构的基本概念。

在生活中，家谱就是一个最常见的树状结构，一个人可以有多个儿子，但是儿子只能有一个父亲，随着整个家庭一代代繁衍，整个家谱树也越来越根深叶茂。我们标签的html代码也是遵循这样的树状结构，所有的元素都在html标签之前，并且一层一层地嵌套。

**节点间的关系**

家谱中的每一个人都是这可树的节点，人与人之间是有关系的，有父子关系，有兄弟关系，html的树状结构也是一样，也会有很多节点，节点之间也是相互关联。我们来看一段html代码（demo01.html）

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <h1>水果列表</h1>
    <ul>
        <li id="banana">香蕉</li>
        <li>苹果</li>
        <li>鸭梨</li>
    </ul>
</body>
</html>
```

在上面的这段代码中，html标签是最外层的标签，没有父级，所以他是整个树状结构的根节点，body标签中有h1标签和ul标签，所有body是h1的父节点，h1是body的子节点，h1与ul是兄弟节点，又叫同级节点。在一棵树中，根节点只有一个，其他所有节点都是他的子节点或子孙节点。

抛开节点之间的关系，我们再给html节点分类，可以分成下面三类：

* 元素节点
* 文本节点
* 属性节点

在上面的代码中，每一个元素都是原始节点，第一个li中的“香蕉”两个字就是文本节点,id就是属性节点。


### 二、网页结构

**容器在页面居中**

我们先看演示稿1，网页内容在浏览器内居中显示，那我们就来实现一个容器居中的效果（demo02.html）

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        *{
            margin:0px;
            padding:0px;
            box-sizing: border-box;
        }
        .header{
            width:1000px;
            height:300px;
            background-color: #aaa;
            margin:0 auto; /*定宽块元素居中显示*/
        }
    </style>
</head>
<body>
    <div class="header"></div>
</body>
</html>
```

通过上面的代码，我们可以将一个容器居中显示，我们再来看演示稿2,网页的内容虽然也是居中显示，但是背景色是铺满整个屏幕的，我们可以用两个div嵌套的方式实现这种效果，代码如下所示（demo03.html）

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        *{
            margin:0px;
            padding:0px;
            box-sizing: border-box;
        }
        .header{
            height:300px;
            background-color: #aaa;
        }
        .header-content{
            width:1000px;
            height:300px;
            margin:0 auto;
            background-color: #0f0;
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="header-content">这里是网页内容</div>
    </div>
</body>
</html>
```

通过上面的布局方式，不管浏览器宽度是多少，灰色的区域都会占据100%的宽度，二绿色的内容一致处于居中的状态。


**基本布局**

我们可以把一个网页分成四个部分：

* header：网页头部
* banner：横幅展示区
* container：网页内容
* footer：网页页脚

实例代码如下所示（demo04.html）：

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        *{
            margin:0px;
            padding:0px;
            box-sizing: border-box;
        }
        .header{
            width:1000px;
            height:200px;
            margin:0 auto;
            background-color: #eee;
        }
        .banner{
            width:1000px;
            height:300px;
            margin:0 auto;
            background-color: #aaa;
        }
        .container{
            width:1000px;
            height:500px;
            margin:0 auto;
            background-color: #f00;
        }
        .footer{
            width:1000px;
            height:50px;
            margin:0 auto;
            background-color: #0f0;
        }
    </style>
</head>
<body>
    <div class="header">header</div>
    <div class="banner">banner</div>
    <div class="container">container</div>
    <div class="footer">footer</div>
</body>
</html>
```

这样我们就实现了网页最近本的布局。


**增加细节**

接下来我们用上一章的内容，在网页的header中添加一个菜单（demo05.html）。

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        *{
            margin:0px;
            padding:0px;
            box-sizing: border-box;
        }
        .header{
            width:1000px;
            height:200px;
            margin:0 auto;
            background-color: #eee;
        }
        .header .nav li{
            list-style:none; /*清除列表前面的点*/
            width:80px;
            height:30px;
            line-height: 30px;  /*垂直居中*/
            text-align: center; /*水平居中*/
            float:left;         /*菜单横向展示*/
            border:1px solid red;
        }

        a{
            text-decoration: none;  /*去掉a标签的下划线*/
            color:#666;
        }
        .banner{
            width:1000px;
            height:300px;
            margin:0 auto;
            background-color: #aaa;
        }

        
        .container{
            width:1000px;
            height:500px;
            margin:0 auto;
            background-color: #f00;
        }
        .footer{
            width:1000px;
            height:50px;
            margin:0 auto;
            background-color: #0f0;
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="nav">
            <ul>
                <li><a href="#">首頁</a></li>
                <li><a href="#">游戏</a></li>
                <li><a href="#">视频</a></li>
                <li><a href="#">动画</a></li>
                <li><a href="#">音乐</a></li>
            </ul>
        </div>
    </div>
    <div class="banner"></div>
    <div class="container"></div>
    <div class="footer"></div>
</body>
</html>
```

最后，根据上面的代码，画出对应的树状结构。

### 三、授课说明

* 学员需要根据树桩结构写出html文档
* 学员需要根据html文档画出树桩结构
* 最终目标是看到设计稿，先想到树状结构，然后在转换成html文档





