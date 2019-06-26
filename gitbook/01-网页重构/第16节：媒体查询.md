# 第02章：媒体查询

### 一、自适应页面概述

在我们之前学习的课程中，已经接触过了自适应的页面，简单地说就是页面会自适应窗口或设备的尺寸。之前接触过的内容如下：

* 通过百分比设置元素宽度，宽度可以适应窗口（或设备）尺寸
* 不设置元素高度，元素高度会适应内容高度。

在本章的课程中，我们讲解如何使用媒体查询来制作自适应的页面。

### 二、媒体查询的用法

**max-width**

媒体查询是CSS3中增加的新特性，可以使用@media来定义不同的条件和样式，窗口尺寸（或设备尺寸）满足指定条件的时候才会应用指定的样式，实例代码如下所示（demo01.html）

``` html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
	<style>
		.box{
			width:200px;
			height:200px;
			background-color: red;
		}
        /* 小于指定宽度，样式生效 */
		@media screen and (max-width:600px){
			.box{
				background-color: blue;
			}
		}
	</style>
</head>
<body>
	<div class="box"></div>
</body>
</html>
```

首先我们来看上面代码的效果，当全屏打开浏览器的时候（PC端的浏览方式），我们可以看到div元素的背景色为红色，当我们将浏览器的窗口缩小（移动端的浏览方式），当浏览器尺寸宽度小于600px的时候，元素的背景色会变成蓝色，这就是利用媒体查询实现的最基本的响应式页面，同一个文件，在不同设备上呈现着不同的样式。

在上面的代码中，max-width定义的就是标准，符合标准就会让下面的样式生效，max-width这个标准的意思就是：小于指定宽度，样式生效。

**min-width**

同样，我们也可以定义“大于指定宽度，样式生效”，实例代码如下所示（demo02.html）

``` css
@media screen and (min-width:600px){
    .box{
        background-color: blue;
    }
}
```

上述代码与demo01的效果刚好相反，PC端呈现蓝色，移动端呈现红色，min-width的意思是：大于指定宽度，样式生效。


**多个标准**

我们也可以给一个媒体查询定义多个标准，实例代码如下所示（demo03.html）

``` css
@media screen and (min-width:600px) and (max-width:900px){
    .box{
        background-color: blue;
    }
}
```

通过上面的方法，我们可以定义一个有多个标准的媒体查询，在上面的代码中，窗口大于600px并且小于900px的时候，样式生效，我们可以将浏览器窗口由大到小的收缩，可以看到元素颜色变化了两次。


### 三、响应式页面的制作

**响应式布局**

我们已经掌握了媒体查询的基本用法，接下来用媒体查询完成一个简单响应式页面，让这个页面在PC端和移动端呈现不同的样式，实例代码如下所示（demo04.html）

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        *{
            margin:0px;
            padding:0px;
        }
        .box{
            height:300px;
        }
        .red{
            background-color:red;
        }
        .yellow{
            background-color:yellow;
        }
        .blue{
            background-color:blue;
        }
        .green{
            background-color:green;
        }
        @media screen and (min-width:760px) {
            .box{
                float:left;
                width:25%;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box red"></div>
        <div class="box yellow"></div>
        <div class="box blue"></div>
        <div class="box green"></div>
    </div>
</body>
</html>
```

在上面的代码中，我们定义了两种布局，一种是移动端的布局，div宽度默认为100%，独立成行。如果窗口尺寸大于760px(PC端布局)，则元素浮动，且每个元素的宽度是25%，这样四个div元素就可以在同一行显示，呈现PC端页面的效果。

**响应式菜单**

我们再来完成一个响应式的菜单，在PC页面中，菜单水平展示，在移动页面中，菜单垂直展示，代码如下所示（demo05.html）

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        *{
            margin:0px;
            padding:0px;
        }
        nav ul li{
            list-style: none;
            width:80px;
            height:30px;
            line-height: 30px;
            text-align: center;
            border:1px solid red;
        }
        @media screen and (min-width:760px) {
            nav ul li{
                float:left;
            }
        }
    </style>
</head>
<body>
    <nav>
        <ul class="nav">
            <li><a href="#">主页</a></li>
            <li><a href="#">视频</a></li>
            <li><a href="#">电影</a></li>
            <li><a href="#">图片</a></li>
            <li><a href="#">游戏</a></li>
        </ul>
    </nav>
</body>
</html>
```

在媒体查询中，我们通过控制li元素的float属性，实现了响应式菜单的制作方法。

### 四、授课说明

* 课后可以让学员练习制作一个响应式菜单，当在移动端页面展示时菜单是隐藏的，通过一个按钮来切换其显示与隐藏的状态。
* 在实际开发中，移动端尽量不要使用PX作为单位。

