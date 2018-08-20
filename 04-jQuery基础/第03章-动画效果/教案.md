## 第03章:动画效果

### 一、动画效果概述

**jQuery动画方法简介**

jQuery为我们提供了很多动画方法，这些动画效果虽然没有CSS3的动画效果平滑、简单，但是易用性和兼容性都大大提高。

**jQuery动画方法的优势**

在早期前端开发中，为了让代码支持低版本的IE浏览器，我们必须要用JavaScript来实现页面的动画效果（CSS3只支持IE9以上的浏览器），但是使用原生JavaScript代码量较大，兼容性也很差，所有jQuery的动画方法是非常常用的，本章我们就来讲解jQuery的动画方法。



### 二、隐藏和显示

**hide**

hide方法可以将元素隐藏，如果不设置参数，隐藏的元素会直接消失，如果设置参数，可以定义元素隐藏用的毫秒数，元素会至右下方到左上方逐渐消失，代码如下所示（demo01.html）

``` css
.box{
    width: 100px;
    height: 100px;
    background-color: #f00;
}
```
``` html
<button>隐藏</button>
<div class="box"></div>
```

``` js
$("button").click(function(){
    $(".box").hide(500);  // 500毫秒后隐藏
});
```

在上面的代码中，我们在hide方法的参数中设置500毫秒，当点击隐藏按钮的时候，div标签会由右下到左上经过500毫秒之后隐藏。

**show**

show方法与hide方法相反，元素会从隐藏的状态转换到显示状态，如果不设置参数，元素会瞬间出现，如果设置参数，元素会在指定的毫秒内从左上到右下逐渐显示出来，代码如下所示（demo02.html）

``` js
$("button").click(function(){
    $(".box").show(500);  // 500毫秒后隐藏
});
```

这里我们只写了js代码，在初始化css中，使用display:none让div在默认的情况下处于隐藏状态，然后当点击按钮的时候，执行show方法显示div。

### 三、上卷和下拉

**slideUp**

slideUp方法同样可以让元素隐藏，但是隐藏的方式是从下到上逐渐消失，代码如下所示（demo03.html）

``` js
$("button").click(function(){
    $(".box").slideUp(500);  // 500毫秒后隐藏
});
```

**slideDwon**

slideDown与slideUp相反，元素会从上到下逐渐显示出来，代码如下所示（demo04.html）

``` js
$("button").click(function(){
    $(".box").slideDown(500);  // 500毫秒后显示
});
```

### 四、渐出和渐入

**fadeOut**

fadeOut也可以让元素隐藏，元素在隐藏的过程中，会逐渐改变透明度，直到完全不可见，代码如下所示（demo05.html）

``` js
$("button").click(function(){
    $(".box").fadeOut(500);  // 500毫秒后隐藏
});
```

**fadeIn**

fadeIn与fadeOut想法，元素会以改变透明度的方式逐渐显示出来,代码如下所示（demo06.html）

``` js
$("button").click(function(){
    $(".box").fadeIn(500);  // 500毫秒后显示
});
```

### 五、自定义动画

**animate**

animate方法是自定义动画方法，我们可以通过设置样式来实现元素的动画效果，可以再animate的第一个参数设置一个样式，第二个参数设置毫秒数，元素会在指定的毫秒数，由当前的样式以动画的形式变为目标的样式，代码如下所示（demo07.html）

``` js
$("button").click(function(){
    $(".box").animate({marginLeft:"300px",marginTop:"100px"},500);  
});
```

### 六、综合练习

本章我们学习了jQuery中常用的动画方法，来实现两个简单的菜单效果

**混动菜单效果**

* 混动菜单效果需要实现的案例如demo08.html所示，首先我们需要完成html布局和css样式。
* 当鼠标移动到指定菜单的时候，我们让当前菜单的子菜单实现一个混动的效果，代码如下所示。


**下拉菜单效果**

* 下拉菜单效果需要实现的案例如demo09.html所示，首先我们完成html布局和css样式
* 当鼠标移动到指定菜单的时候，当前菜单的子菜单会以slideDown动画的形式出现，当鼠标离开菜单的时候，子菜单会以slideUp动画的形式隐藏。

