## 第一章 jQuery基础

### 一、jQuery概述

**什么是jquery**

jQuery是JavaScript的一个库，我们在做网站或web应用的过程中，需要用JavaScript为我们完成一些用户与页面的交互效果，jQuery库可以让我们用更少的JavaScript代码完成工多的功能。


**jQuery的优势与劣势**
    
几年前的web开发，浏览器兼容是一个非常重要的问题，前端工程师为了让自己的程序在多个浏览器中正确运行，常常需要编写更多的代码来解决浏览器兼容问题，jQuery出现之后，它为前端工程师们解决了大量的JavaScript兼容问题，并且封装了大量的DOM接口和动画效果，让我们可以用更少的代码实现更多的功能并且保持良好的兼容性，jQuery因此迅速成为了世界上最流行的JavaScript库。

jQuery的流行还有一个原因就是因为它简单、易上手。很多人在不熟悉JavaScript的情况下，仍然可以使用jQuery完成各种页面效果。

随着时间的推移，浏览器的兼容问题越来越少，css3也解决了大量的页面动画效果，jQuery的优势渐渐没有那么突出了，但是它仍然是当前被使用了最多的JavaScript库，是前端工程师必须掌握的技能。


#### 二、jQuery代码的编写

**引入jQuery**

要使用jQuery，首先我们需要下载和引入jQuery，我们可以到[jquery官网](http://jquery.com)下载jQuery文件，然后在html页面中添加script标签引入jQuery。

我们将jQuery放在一个名为script的目录中，然后用下面的代码引入jQuery（demo01.html）

``` html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<script src="script/jquery.js"></script>
	<script>
		//这里可以编写jQuery代码
	</script>
</body>
</html>
```

**引入jQuery的注意事项**

* 如果要编写jQuery的代码，一定要用两个script标签，一个用来引入jQuery，一个用来编写代码，且不可将jQuery的代码卸载第一个script标签当中，这样编写的代码将没有任何想过。
* 一定要在第一个script引入jQuery，上面的script标签编写代码，下面的script引入jQuery，程序不能正常运行。

#### 三、jQuery选择器

刚刚学习jQuery的时候，可以与css做比较：css使用【选择器】查找元素，使用【属性名：属性值】改变元素样式。jQuery与之类似，可以使用【jQuery选择器】查找元素，然后使用【jQuery方法】操作元素。这里的操作不只可以操作元素的样式，还可以添加和删除元素，或者获取元素的属性和文本等等功能。

**改变元素样式**

jQuery选择器和css选择器很类似（其实可以理解为jQuery选择器扩展了css选择器，在$()中添加css选择器就能找到我们想要的元素），下面我们使用jQuery选择器和css方法来改变一个元素的样式（demo02.html）。

``` html
<body>
	<h1>hello jquery</h1>
	<script src="script/jquery.js"></script>
	<script>
		$("h1").css("color","red");  //将选择器$("h1")找到的元素的样式color设置成红色
	</script>
</body>
```

* 在上面的例子中$("h1")是选择器，我们可以在双引号内插入各种css选择器，jQuery就会找到响应的元素。
* css称作jQuery方法，我们可以用jQuery方法来操作元素，这里面的css方法可以设置元素的样式，后续我们还会讲解其他的方法。
* 使用方法的时候需要在方法名的后面添加一个括号,括号内可以添加参数，用来进一步描述方法的作用。


**获取元素文本**

上个例子中我们使用了一个jQuery的元素选择器和css方法实现了改变元素样式，接下来我们使用类选择器和text方法获取元素文本。代码如下所示（demo03.html）

``` html
<body>
	<h1 class="title">hello jquery</h1>
	<script src="script/jquery.js"></script>
	<script>
		var txt = $(".title").text();
		console.log(txt);
	</script>
</body>
```

* 在上面的代码中使用$(".title")选择器找到class值为title的元素，让后通过text方法获取元素的文本。
* var可以声明一个变量，“=”可以将获取的文本赋值给txt变量。
* 使用console.log()可以在控制台输出文本的内容。


**设置元素属性**

我们还可以通过jQuery的attr方法来设置元素的属性，下面的例子我们使用attr方法将img标签的src属性指定成一张图片的路径（demo04.html）

``` html
<body>
	<img class="pic" src="">
	<script src="script/jquery.js"></script>
	<script>
		$(".pic").attr("src","images/0.jpg");
	</script>
</body>
```

* 在上面的代码中，html标签img并没有设置src属性，我们通过jQuery的attr方法设置了img标签src属性。
* attr方法可以设置两个参数，第一个参数是要设置的属性名，第二个参数是属性值。

**添加和删除class**

在说添加和删除class之前，我们先来看一个略复杂的选择器（demo05.html）：

``` html
<body>
	<ul class="nav">
		<li>香蕉</li>
		<li>苹果</li>
		<li>鸭梨</li>
	</ul>
	<script src="script/jquery.js"></script>
	<script>
		$(".nav li:eq(1)").css("background-color","red");
	</script>
</body>
```

上面的选择器$(".nav li:eq(1)")我们可以将其拆分来理解

*  ".nav"可以找到class名为nav的元素
*  ".nav li"可以找到class名为nav中的所有li元素
*  ".nav li:eq(1)"可以找到class名为nav中，左右li的第二个元素，这里需要注意的是元素的索引（编号）从0开始，所以1代表第二个元素。

在上面的代码中，我们将第二个li元素北京设置成了红色。

我们经常会使用jQuery操作元素的样式，上面我们已经学习了css方法，但是在实际开发中，css方法并不常用，我们更多的是使用addClass和removeClass方法来操作元素的样式，示例代码如下所示（demo06.html）

``` html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
    <title>Document</title>
    <style>
        .active{
            background-color: red;
        }
    </style>
</head>
<body>
	<ul class="nav">
		<li>香蕉</li>
		<li>苹果</li>
		<li>鸭梨</li>
	</ul>
	<script src="script/jquery.js"></script>
	<script>
		$(".nav li:eq(1)").addClass("active");
	</script>
</body>
</html>
```

* 通过addClass方法，我们可以给元素添加一个class名active，这样style标签中定义的样式就会作用于这个元素。
* 同理，removeClass方法可以删除元素的class名，我们会在后续的课程中讲解。







