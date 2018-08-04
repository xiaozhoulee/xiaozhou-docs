## 第02章：事件绑定

### 一、事件概述

**事件的基本概念**

上一章我们讲解了使用jQuery选择器获取元素，并通过一些方法来操作元素，本章我们讲解事件的概念，通过事件我们可以加强用户与浏览器的交互性，例如可以实现当用户点击某个元素的时候，对元素做一些操作，或是移动鼠标，对元素做一些操作。

**事件的分类**

事件主要可以分为以下几类：

* 鼠标事件
* 键盘事件
* 文档事件
* 表单事件
* 触摸时间
* 自定义事件

本章我们主要讲解鼠标事。

### 二、鼠标单击事件

我们先来将最常用的鼠标单击事件click，jQuery的基本语法如下所示：

``` js
$("selector").click(function(){
    //事件触发执行的代码
})
```

我们先通过$("selector")选择器获取元素，然后通过click为元素定义事件，这样当我们用鼠标单击这个元素的时候，就会执行花括号中的代码。

**输出文字**

我们现在实现一个功能，当我们点击一个按钮的时候，在控制台输出"hello world",代码如下所示（demo01.html）

``` html
<body>
	<button>按钮</button>
	<script src="script/jquery.js"></script>
	<script>
		$("button").click(function(){
			console.log("hello world");
		})
	</script>
</body>
```

**切换图片**

结合我们上一章的内容，来实现一个功能，当我们点击按钮的时候，将一张图片切换成另一张图片，代码如下所示（demo02.html）

``` html
<body>
	<img src="images/0.jpg">
	
	<script src="script/jquery.js"></script>
	<script>
		$("img").click(function(){
			$(this).attr("src","images/1.jpg")
		});
	</script>
</body>
```

 在上面的代码中，$(this)对应的就是我们点击的这个元素，也就是img标签，当我们点击img标签的时候，使用attr方法将其src属性设置成另一张了图片的地址，这样就实现了图片的切换。

**获取索引**

接下来我们要实现一个更复杂的效果：点击一个数字列表来实现切换图片的功能，列表有三个数字，对应着三张不同的图片。

要实现这样的功能，很多同学会想到，给数字列表分别绑定事件，每一个事件都对应不同的图片就可以了，虽然这样可以实现我们要的功能，但是如果需求又增加了两张图片，那我们就又要多定义两个事件，所以这个方案是不合理的。

我们需要的是用一个选择器找到所有的数字列表，让后统一绑定一个事件，然后在点击数字列表的时候，让程序找到我们点击的是第几个，然后切换到对应的图片，就可以了。下面的代码可以让我们判断是第几个元素触发了事件（demo03.html）。

``` html
<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul> 
    <script src="script/jquery.js"></script>
    <script>
        $("li").click(function(){
            var i = $(this).index();
            console.log(i);
        })
    </script>  
</body>
```

* 在上面的代码中，index方法可以获取元素的索引，索引就是当前元素在其同级的元素中排第几个，从0开始计数。
* 我们将index获取到的索引值赋值给变量i，并输出i就看到了这个元素的索引。

**切换图片**

找到了路缘石的索引，我们下一步就要实现图片切换的功能了，首先我们需要了解数组的概念，数组是一个集合，我们将3章图片的路径放到了数组中，这样我们就可以通过数组的下标来获取到数组的元素了。

``` js
var arr = ["images/0.jpg","images/1.jpg","images/2.jpg"];
arr[0]  //images/0.jpg
arr[1]  //images/0.jpg
arr[2]  //images/0.jpg
```

上面的代码可以了解到，我们可以通过数组的下标来获取数组中的元素。

接下来，我们结合之前学过的方法来实现一个图片切换的效果（demo04.html）

``` html
<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul> 
    <img src="images/0.jpg">
    <script src="script/jquery.js"></script>
    <script>
        var arr = ["images/0.jpg","images/1.jpg","images/2.jpg"];
        $("li").click(function(){
            var i = $(this).index();
            var url = arr[i];  //获取图片的地址
            $("img").attr("src",url);  //将图片的src属性设置成数组中指定的图片地址
        })
    </script>  
</body>
```

这样，当我们点击数字列表的时候，就可以实现图片切换的功能了。


### 三、其他鼠标事件

上一节我们说了鼠标单击事件，其实鼠标事件还有很多，这节我们讲解鼠标移入，移出和移动事件。

**鼠标移入移出改变样式**

鼠标的移入和一出事件分别是mouseenter和mouseleave。我们来实现一个功能，当我们的鼠标移入一个div的时候，让其变为红色，移出的时候，让其变为绿色，代码如下：（demo05.html）

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        .box{
            width:100px;
            height:100px;
            background-color:green;
        }
        .bg{
            background-color: red
        }
    </style>
</head>
<body>
    <div class="box"></div>
    <script src="script/jquery.js"></script>
    <script>
        $(".box").mouseenter(function(){
            $(this).addClass("bg");
        }).mouseleave(function(){
            $(this).removeClass("bg");
        })
    </script>  
</body>
</html>
```

这里我们使用了链式操作，用一个选择器，绑定两个属性。

鼠标移入和移出事件可以简写成一个hover事件，上面的代码可以简写如下所示（demo06.html）

``` js
$(".box").hover(function(){
    $(this).addClass("bg");
},function(){
    $(this).removeClass("bg");
})
```

hover有方法有两个参数，都是函数，分别对应着mouseenter和mouseleave的事件，这样写的效果与上面完全相同。


**鼠标移动获取坐标**

鼠标在元素上移动的时候也会触发事件，下面我们来实现一个功能，当鼠标移动到一个div的时候，获取鼠标在网页页面上的坐标（demo07.html）

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        .box{
            width:300px;
            height:300px;
            border:1px solid red;
        }
    </style>
</head>
<body>
    <div class="box"></div>
    <script src="script/jquery.js"></script>
    <script>
        $(".box").mousemove(function(e){
            var x = e.pageX;
            var y = e.pageY;
            console.log("x轴的坐标是"+x);
            console.log("y轴的坐标是"+y);
        })
    </script>  
</body>
</html>
```
* 在上面的代码中e是事件对象，我们可以通过它获取到x轴和y轴的坐标。
* 然后通过console.log()方法在控制台输出x坐标和y坐标。

