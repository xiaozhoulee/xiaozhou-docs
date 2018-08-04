# 第01章：移动前端开发概述

### 一、移动端页面开发与PC页面开发的差异

我们在之前的课程中学习的html、css、JavaScript都是在pc端运行的，那么如果希望开发一个移动端的web应用，在开发的过程中与PC端有哪些差异呢？我们先来总结两条比较重要的特性

* 在PC端开发页面，我们主要使用的单位是px，但是移动端设备（一手机为例），尺寸千差万别，如果使用px作为页面开发的单位，由于设备尺寸不同，我们的页面会变得非常不友好，所以在移动端开发的过程中，我们几乎不会使用px作为单位，更多地使用rem、百分比，还有媒体查询来实现我们的页面。
* 在PC端，我们经常会绑定各种鼠标事件，例如click、mouseover、mouseout等事件，但是在移动端，多用触屏事件。

我们本章就来概括性地讲解上面两点问题。

### 一、搭建临时服务器

在讲解移动端具体的知识点之前，我们需要搭建一个临时的服务器，这样就能真正用手机访问我们自己编写的页面了。在后续的课程中，我们可以先用chrome调试工具模拟移动设备进行调试，当调试完成够，再真正的移动端设备访问页面进行进一步测试。

搭建服务器的方法有很多，这里讲解用node中的http-server模块搭建服务器，这个在《node基础》科目中有详细的讲解，一下概述搭建步骤。

* 首先安装node。
* 然后执行npm install -g http-server全局安装http-server模块。
* 最后在需要开启服务器的目录中执行http-server，就可以把当前目录变成一个静态文件目录的服务器，然后便可以在局域网内通过ip和端口进行访问了。


### 二、移动端页面制作

在制作移动端的页面时，为了让页面可以正常显示，我们需要引入一个meta标签，代码如下所示（demo01.html）

``` html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<!-- 设置viewport -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
	<style>
		.box{
			width:100px;
			height:100px;
			background-color:red;
		}
	</style>
</head>
<body>
	<div class="box"></div>
</body>
</html>
```

大家可以看到在head标签中有一个meta标签定义的name为viewport，后续所有移动端页面的开发中，我们都要这样设置viewport。定义之后，我们使用移动端设备（或chrome调试工具模拟移动端设备）才能正常展示页面，这里我们可以测试一下有viewport和没有viewport之间的区别，可以看到如果没有设置viewport，移动端页面展示的元素会便得非常小。

在上面的案例中，meta标签的content属性定义的是具体viewport的设置值，我们还可以进一步设置，代码如下所示（demo02.html）

``` html
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
```

在移动设备浏览器上，通过为视口（viewport）设置 meta 属性为 user-scalable=no 可以禁用其缩放功能。这样禁用缩放功能后，用户只能滚动屏幕，就能让你的网站看上去更像原生应用的感觉。需要注意的是，这种方式我们并不推荐所有网站使用，还是要看你自己的情况而定！

### 三、移动端事件

**绑定事件**

上面我们已经提到，在PC端我们可以为元素绑定鼠标事件，但是在移动端并没有鼠标，我们可以为元素绑定触摸事件，经常用到的触摸事件有如下几个：

* touchstart:手指接触屏幕是触发
* touchmove:手指在屏幕上移动的时候触发
* touchend:手指在屏幕上抬起时触发

代码如下所示（demo03.html）

``` js
var box = document.querySelector(".box");
box.ontouchstart = function(){
	console.log("手指接触屏幕")
}
box.ontouchmove = function(){
	console.log("手指在屏幕上移动")
}
box.ontouchend = function(){
	console.log("手指在屏幕抬起")
}
```

我们可以在chrome浏览器中模拟移动端设备来测试上面的几个事件。

如果我们为元素绑定click事件，当用是指点击元素的时候，事件仍然可以被触发，实例代码如下所示（demo04.html）

``` js
var box = document.querySelector(".box");
box.onclick = function(){
	console.log("鼠标点击事件")
}
```

因此，我们使用移动端设备访问PC端的网页时，虽然页面看起来效果并不友好，但是我们仍然可以用手指触发click事件。但是，我们作为开发人员，如果web应用只针对移动端用户的话，不推荐使用click事件。

**事件对象**

我们在学习DOM的课程中已经了解了事件对象的概念，通过事件对象我们可以获取事件更详细的信息，触屏事件也是一样，在下面的例子中，我们就通过事件对象获取触摸点的坐标，代码如下所示（demo05.html）

``` js
var box = document.querySelector(".box");
box.ontouchstart = function(e){
	console.log(`X坐标：${e.targetTouches[0].pageX}`);
	console.log(`Y坐标：${e.targetTouches[0].pageY}`);
}
box.ontouchmove = function(e){
	console.log(`X坐标：${e.targetTouches[0].pageX}`);
	console.log(`Y坐标：${e.targetTouches[0].pageY}`);
}
```

在上面的代码中，e是事件对象，我们可以通过e.targetTouches属性找到事件目标元素触摸的X轴坐标和Y轴坐标。


### 四、授课说明

* 本节内容是移动端与PC端区别的概述，通过本章可以让学员了解移动端与PC端的差异。
* 关于知识点，并没有扩展过多的内容，例如viewport的更多设置，以及事件对象包含的更多信息，关于更多关于viewport和事件的内容，建议让学员课后自己查找并汇总。







