# 第07章：元素的分类

### 一、元素类别概述

**特性展示**

在之前的课程中，我们已经掌握了常用的html标签和css属性，但是还有一个问题我们并没有讨论，就是html元素的分类。我们用第二章所学的标签为例，h1标签、img标签还有a标签，他们有什么区别呢？我们通过下面的代码来展示他们的区别（demo01.html）

``` html
<div>
    <h1>我是一个标题</h1>
    <h1>我是一个标题</h1>
</div>
<div>
    <img src="images/logo.png" alt="">
    <img src="images/logo.png" alt="">
</div>
<div>
    <a href="#">链接</a>
    <a href="#">链接</a>
</div>
```

从上面的代码我们可以看到，每一个h1标签可以独占一行，但是img标签和a标签，可以与其他标签在同一行显示。

我们再来通过给这三个标签设置样式来区分他们（demo02.html）

``` css
h1,img,a{
    width:500px;
    height:50px;
    border:1px solid red;
}
```

我们给h1标签，img标签和a标签都置顶了相同的样式，得到的结果是：

* h1和img标签的宽度和高度成功被设置成了500*50。
* a标签的宽度和高度并没有改变，仍然是默认样式。
* h1仍然独占一行。

**分类总结**

通过上面的测试，我们可以大体了解了h1标签，img标签和a标签之间的区别，他们分别代表着三类元素，块元素、行内块元素（或叫内联块元素）和行内元素（或叫内联元素），他们的特性如下所示：

* 块元素：独立占据一行，并且可以设置宽高。
* 行内块元素（内联块元素）：不独立占据一行，并且可以设置宽高。
* 行内元素（内联元素）：不独立占据一行，并且不可以设置宽高。

**元素归类**

我们将之前学过的元素按上述类别分类：

* 块元素：h*、div、ul、li、p、form
* 行内块元素（内联块元素）：img、input
* 行内元素（内联元素）：a、span


### 二、元素浮动

在我们实际开发工作中，需要用div将网页拆分成一个个盒子，但是问题是，而我们一定需要让两个div在同一行显示，div又是块元素，那如何让块元素在同一行显示呢，这就需要元素的浮动属性了，实例代码如下所示（demo03.html）：

**float属性**

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        .box1{
            width:200px;
            height:200px;
            background-color: #f00;
            float:left;
        }
        .box2{
            width:200px;
            height:200px;
            background-color: #0f0;
            float:left;
        }
    </style>
</head>
<body>
    <div class="box1"></div>
    <div class="box2"></div>
</body>
</html>
```

float属性可以让块元素与其他元素在同一行显示，我们将两个div元素都设置float:left;属性，这样两个div就可以在同一行显示了。

**制作导航栏**

我们可以用同样的原理在制作一个网页的导航栏（demo04.html）

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        .nav li{
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
    </style>
</head>
<body>
    <div class="nav">
        <ul>
            <li><a href="#">首頁</a></li>
            <li><a href="#">游戏</a></li>
            <li><a href="#">视频</a></li>
            <li><a href="#">动画</a></li>
            <li><a href="#">音乐</a></li>
        </ul>
    </div>
</body>
</html>
```

这样我们就利用float属性完成了我们的网页导航效果；

**元素类型转换**

通过display属性，可以将元素的类型转换成其他类型，例如如下的css样式；

``` css
a{
    display:block;
}
```

就可以将a标签转黄成块元素，然后就可以对其指定宽度和高度了。


### 三、清楚浮动

我们继续再demo04代码中，nav的下方添加一个网页的内容，如下所示（demo05.html）

``` html
<div class="nav">
    <ul>
        <li><a href="#">首頁</a></li>
        <li><a href="#">游戏</a></li>
        <li><a href="#">视频</a></li>
        <li><a href="#">动画</a></li>
        <li><a href="#">音乐</a></li>
    </ul>
</div>
<h2 class="content">网页内容</h2>
```

可以看到h2元素的边框与菜单重叠，并且h2的文本内容并没有在菜单下方显示，而是在菜单的右侧显示。这是因为浮动元素会脱离整个html文档流，导致其自身不占位，所有h2标签会与整个菜单重叠显示，为了解决这个问题，我们需要掌握清楚浮动的方法，本章我们讲解两种方法：空div清楚浮动和伪元素清楚浮动。

**空div清楚浮动**

我们在菜单和h2之间添加一个空的div标签，并且为其制定样式。

``` html
<div class="nav">
    <ul>
        <li><a href="#">首頁</a></li>
        <li><a href="#">游戏</a></li>
        <li><a href="#">视频</a></li>
        <li><a href="#">动画</a></li>
        <li><a href="#">音乐</a></li>
    </ul>
</div>
<div class="clear"></div>
<h2 class="content">网页内容</h2>
```

``` css
.clear{
    clear:both;
}
```

通过为空div指定clear:both属性，可以清除其上方菜单浮动导致的页面不良营销，使浮动元素后面的内容可以按正常的文档流布局，这样我们就可以看到h2标签成功第在菜单的下方显示了。

**伪元素清楚浮动**

在上面的案例中，我们使用了一个空的div来清除浮动，很方便地解决了清除浮动的问题，但是html标签毕竟是为了布局而存在的，我们随意添加一个标签来处理样式，从html存在的意义来考虑，这个解决方案并不是特别理想，所以我们接下来的这个方案可以完全在css的层面解决清楚浮动的问题，代码如下所示（demo07.html）

``` html
<div class="nav clear">
    <ul>
        <li><a href="#">首頁</a></li>
        <li><a href="#">游戏</a></li>
        <li><a href="#">视频</a></li>
        <li><a href="#">动画</a></li>
        <li><a href="#">音乐</a></li>
    </ul>
</div>
<h2 class="content">网页内容</h2>
```

``` css
.clear::before,.clear::after{
    content:"";
    display: block;  /*将伪元素增加的内容设置成块元素*/
    clear:both;
}
```

通过伪元素清楚浮动的方式，我们不需要增加任何新的标签，只需要在浮动元素父级容器设置上述属性即可，这样网页的任何位置需要清除浮动，只需要给元素添加一个class名，既方便有实用。不管是日后的练习还是工作，都建议大家用伪元素来清除浮动。


### 四、授课说明
* 在使用float：left属性是，可以展示float：right的效果。
* float并不一定要在块元素中指定，也可以在行内元素或行内款元素中指定，例如可以让一个图片再屏幕最右侧显示，可以float：right
* 清楚浮动是难点，需要让学员反复理解。


