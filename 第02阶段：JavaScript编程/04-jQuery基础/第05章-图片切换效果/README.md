## 第06章：图片切换效果

### 一、复习简单的图片切换

在之前的课程中，我们实现了点击数字列表切换图片的案例，具体代码如下所示（demo01.html）：

``` html
<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
    </ul> 
    <img src="images/0.jpg">
    <script src="script/jquery.js"></script>
    <script>
        var arr = ["images/0.jpg","images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg"];
        $("li").click(function(){
            var i = $(this).index();
            var url = arr[i];  //获取图片的地址
            $("img").attr("src",url);  //将图片的src属性设置成数组中指定的图片地址
        })
    </script>  
</body>
```

今天我们继续完善这个例子，让他的数字列表有更丰富的表现形式。

### 二、数字列表样式

**显示列表**

首先我们需要设置数字列表的样式，代码如下所示（demo02.html）：

``` css
*{
    margin:0px;
    padding:0px;
}
.nav li{
    list-style: none;
    float: left;
    width:30px;
    height:30px;
    line-height: 30px;
    text-align: center;
    border:1px solid blue;
}
```

将数字列表横向排列

**点击变色**

样式调整好之后，我们需要让列表在点击之后变色，我们先定义一个.active的样式,代码如下所示（demo03.html）：

``` css
.active{
    background-color: red;
    color:#fff;
}
```

然后当点击数字列表的时候，使用addClass方法为当前数字添加样式，代码如下所示：

``` js
$("li").click(function(){
    var i = $(this).index();
    var url = arr[i];  //获取图片的地址
    $("img").attr("src",url);  //将图片的src属性设置成数组中指定的图片地址
    $(this).addClass("active"); //改变背景颜色和字体
})
```



### 三、完善样式

**获取同级其他元素**

到目前为止，我们的效果已经有了一个雏形，但是数字列表仍然存在问题，我们希望点击数字的时候，当前数字变色，其他数字恢复到默认样式，要完成这样的功能，我们需要学习一个新的方法，siblings，代码如下所示（demo04.html）：

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
	<ul>
		<li>香蕉</li>
		<li>苹果</li>
		<li>鸭梨</li>
	</ul>
	<script src="script/jquery.js"></script>
	<script>
		$("li").click(function(){
			$(this).addClass("active").siblings().removeClass("active");
		})
	</script>
</body>
</html>
```

siblings方法可以获取同级的其他元素，这样我们就可以继续完善我们图片切换的效果了。


**控制列表其他元素样式**

使用siblings方法可以获取同级的其他元素，这样我们就可以改变我们没点击的数字列表的样式了，代码如下所示（demo05.html）。

``` js
$("li").click(function(){
    var i = $(this).index();
    var url = arr[i];  //获取图片的地址
    $("img").attr("src",url);  //将图片的src属性设置成数组中指定的图片地址
    $(this).addClass("active").siblings().removeClass("active"); //改变背景颜色和字体
})
```

这样我们就完成了图片切换效果的制作。