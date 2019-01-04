# 第03章：rem布局

### 一、移动端页面布局概述

在第一章课程中我们已经说过，移动端设备不能像PC端设备那样使用px单位设置固定的元素尺寸，因为设备尺寸的差异较大，我们使用百分比设置元素的尺寸才能更友好地将页面展示给用户。但是百分比布局会给开发人员带来很多额外的计算工作。

例如：web开发人员接接到设计稿之后，发现设计稿的宽度为720px，那么在开发的过程中，我们量尺的每一个元素都要除以720，然后计算出百分比再写入元素的样式中，那么一个页面有几十甚至几百个需要计算宽度的元素，我们就需要计算几十甚至几百次，这样无形中给web开发人员增加了工作量，为了解决这个问题，我们可以使用rem布局作为单位。

### 二、rem概述

rem是CSS3中新增的元素，我们现在看一下css中有哪些常用的单位：

* px
* em
* rem

px使我们此前最常用的单位，这里不做特殊讲解，我们接下来用两个例子说一下em和rem的区别，实例代码如下所示（demo01.html）。

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
			/* 修改box的font-size可以影响子元素的em值 */
			font-size: 50px;
		}
		.box .test1{
			font-size: 1em;
		}
		.box .test2{
			font-size: 0.5em;
		}
	</style>
</head>
<body>
	<div class="box">
		<p class="test1">测试文字1</p>
		<p class="test2">测试文字2</p>
	</div>
</body>
</html>
``` 

在上面的代码中，p元素的父级是div元素，我们将p元素的字体设置成1em和0.5em，当div元素的font-size值发生变化的时候，就会影响两个p元素的字体大小，说明em是一个相对单位，它参照的是父级元素的font-size值。

我们在来看rem的例子，实例代码如下所示（demo02.html）

``` html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
	<style>
		html{
			/* 修改html的font-size可以影响子元素的em值 */
			font-size: 50px;
		}
		.box .test1{
			font-size: 1rem;
		}
		.box .test2{
			font-size: 0.5rem;
		}
	</style>
</head>
<body>
	<div class="box">
		<p class="test1">测试文字1</p>
		<p class="test2">测试文字2</p>
	</div>
</body>
</html>
```

在上面的代码中，我们将两个p元素设置成rem单位，这样我们通过修改html元素的font-size值，就能影响两个p元素的字体大小，这说明rem也是一个相对的单位，它参照的是html元素的font-size值。

### 三、rem布局

我们已经了解了rem的基本概念，再来看看如何利用rem单位制作出可以适应不同尺寸设备的页面。首先考虑一个问题，rem的参照物是html元素的font-size属性，那么如果html的font-size属性不变的话，我们使用的rem单位仍然是一个固定的单位，所以我们需要做的是让html元素的font-size属性在不同的设备中设置不同的值，这就需要一段js代码了，代码如下所示（fontsizeset.js）

``` js
(function (doc, win) {
var docEl = doc.documentElement,
  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
  recalc = function () {
    var clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    docEl.style.fontSize = 100 * (clientWidth / 720) + 'px';
    //640是设计图的宽度,50是一个基准宽度(html的font-size值)
  };
if (!doc.addEventListener) return;
win.addEventListener(resizeEvt, recalc, false);
doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
```

我们并不需要理解上面的这段代码是如何执行的，只需要知道这段代码可以检测设备的尺寸，并通过设备的尺寸设置html元素的font-size值。我们做一个简单的测试，实例开吗如下所示（demo03.html）

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="fontsizeset.js"></script>
</head>
<body>
    
</body>
</html>
```

这段代码仅仅是引入了fontsizeset.js文件，然后我们打开这个页面，用调试工具查看页面html元素的样式，可以看到，当我们调整窗口宽度的时候，页面html标签的font-size属性是会一直变化的。这样我们第一步就完成了，让html元素的font-size属性根据不同的设备尺寸展示不同的值。

接下来，我们用rem来定义元素的尺寸，示例代码如下所示（demo04.html）

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="fontsizeset.js"></script>
    <style>
        *{
            margin:0px;
            padding:0px;
        }       
        .box{
            width: 3.6rem;
            height:3.6rem;
            background-color: red;
        } 
    </style>
</head>
<body>
    <div class="box">

    </div>
</body>
</html>
```

在上面的代码中，我们将div的宽和高都设置成了3.6rem，用浏览器打开，发现元素宽度与高度相同，并且宽度始终是窗口宽度的50%。这说明rem布局与百分比布局能实现相同的效果。

### 四、设计稿量尺

我们再重web开发流程的角度来看，为什么rem布局比百分比布局更加简便，使用rem布局的流程如下所示：

* 首先，我们拿到设计师的设计稿，通常设计稿的宽度为640px或720px。
* 然后再来看看我们的fontsizeset.js文件中的一段代码，第二个数字720就是设计稿的宽度，如果设计稿是360px，我们需要将fontsizeset.js中的720改成360。

``` js
docEl.style.fontSize = 100 * (clientWidth / 720) + 'px';
```

* 最后量尺的时候，如果设计稿中的元素尺寸为x，那么元素的尺寸我们就可以设置成x/100rem（这个100就是上面代码中的第一个数字）。

上一个案例中，我们引入的js文件是720px的设计稿，那么假如设计稿中有一个360px的元素，则该元素广告就是原设计稿的一半，这样我们通过换算可以得到这个元素在网页中的尺寸是3.6rem，所以当我们设置成3.6rem的时候，不管视窗的尺寸如何变化，元素的宽度始终都是整个页面的50%。

通过上述的方法，就可以很容易制作出按百分比排列的页面布局了，这就是rem布局的优势。


 

