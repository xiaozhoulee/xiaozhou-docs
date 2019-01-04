# 第03章：css3过渡效果

### 一、过渡效果概述

在css2版本中，如果我们希望让一个元素动起来，就要使用JavaScript来控制元素的样式，到了css3版本，我们可以很方便地利用过渡属性和动画属性让元素动起来，本章的内容讲解利用过渡属性实现元素的动态展示效果。

### 二、过渡属性

通过transition属性，可以设置元素的过渡效果，当某个属性被设置成过渡属性之后，这个属性的值如果发生变化，就会以动画的形式从初始状态过渡到结束状态，代码如下所示（demo01.html）

``` css
.box {
    width: 200px;
    height: 200px;
    margin: 100px auto;
    background-color: #00f;
    transition: width 1s;
}
.box:hover{
    width:300px;
}
```

在上面的代码中，我们通过transition属性将width设置为过渡属性，然后在伪类选择器中定义当鼠标悬浮的时候，元素的宽度变为300px，这样当鼠标悬浮的时候，元素就会以动画的形式变成width值为300px的元素。同时，transition属性指定了过渡时间为1s，所以元素从200px过渡到300px，需要使用1秒的时间。

我们还可以进步设置过渡效果属性值，代码如下所示（demo02.html）

``` css
.box {
    width: 200px;
    height: 200px;
    margin: 100px auto;
    background-color: #00f;
    transition: width 2s linear 0.5s;
}
.box:hover {
    width: 300px;
}
```

在上面代码中，我们为transition设置了四个值：
* 第一个值是设置过渡属性;
* 第二个值是设置过渡时间;
* 第三个值是设置过渡函数，这个函数可以设置过渡效果是以怎么样的方式运动，linear表示运输运动。
* 第四个值表示延时时间，在上面的例子中，鼠标悬浮后经过0.5秒后元素才开始运动。

过渡效果可以设置多个过渡属性，示例代码如下所示（demo03.html）

``` css
.box {
    width: 200px;
    height: 200px;
    margin: 100px auto;
    background-color: #00f;
    transition: width 2s linear 0.5s,height 3s linear 0.2s;
}

.box:hover {
    width: 300px;
    height:500px;
}
```

在上面的代码中，我们给transition属性设置了两个过渡属性，这样当鼠标悬浮的时候，宽度和高度都能实现过渡效果。


### 三、动态的形变

结合我们上一章讲解的形变，将形变的属性设置成过渡属性，代码如下所示（demo04.html）

``` css
.box {
    width: 200px;
    height: 200px;
    margin: 100px auto;
    background-color: #00f;
    transition: transform 3s;
}

.box:hover {
    transform: rotate(360deg);
}
```

通过将transform指定为过渡属性，就可以实现形变的过渡效果，我们也可以添加多个形变函数，代码如下所示（demo05.html）

``` css
.box {
    width: 200px;
    height: 200px;
    margin: 100px auto;
    background-color: #00f;
    transition: transform 3s;
}

.box:hover {
    transform: rotate(360deg) scale(2); 
}
```

可以在transform属性后面添加两个形变函数，使用空格分开，且不可写两个transform属性，两个相同的css属性，下面值的会覆盖上面的值。

### 四、授课说明

* 通过transform-origin属性可以设置元素形变的原点，可以作为课后扩展题。

