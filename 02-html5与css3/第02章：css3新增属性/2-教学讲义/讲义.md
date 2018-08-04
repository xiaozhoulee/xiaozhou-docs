# 第02章：css3新增属性

### 一、css3新增属性概述

在此前我们讲解的css课程中，课程内容是以css2版本为基础的，本章开始我们讲解css3版本的新新特性。

在css2的时代，由于css的功能局限性，我们制作的很多网页效果都是利用一些取巧的方法，例如实现一个圆角的页面，我们需要把圆角的部分用图片代替，而制作动画效果，都需要使用JavaScript来完成的，这不仅增加了代码编写的难度，还降低了web开发人员的工作效率。

在css3中我们可以使用大量新增的属性，例如圆角，阴影，动画，形变等等，这让web开发便得更加简单。

### 二、边框的新特性

**圆角**

通过border-radius属性，我们可以为一个元素设置圆角，代码如下所示（demo01.html）

``` css
.box{
    width:200px;
    height:200px;
    border:1px solid red;
    border-radius: 10px;
}
```

在上面的代码中，我们为一个宽度和高度都是200px的div设置了一个圆角效果，border-radius的值是圆角的半径。

我们可以将圆角的半径设置为50%，这样一个正方形的div元素就变成了一个圆形，如果是长方形的元素，就会变成椭圆形。（demo02.html）

``` css
.box {
    width: 200px;
    height: 200px;
    border: 1px solid red;
    border-radius: 50%;
}
```

可以使用四个值分别指定元素四个角的圆角半径，代码如下所示（demo03.html）

``` css
.box {
    width: 200px;
    height: 200px;
    border: 1px solid red;
    border-radius: 10px 20px 30px 40px;
}
```

通过上面的代码，可以直观地看出，圆角设置的四个值分别对应的是左上，右上，右下，左下。


**阴影** 

通过box-shadow属性，我们可以设置元素的阴影，代码如下所示（demo04.html）

``` css
.box {
    width: 200px;
    height: 200px;
    border: 1px solid red;
    box-shadow: 10px 20px 10px blue;
}
```

从上面的代码我们可以看到box-shadow属性可以设置四个值，第一个值是阴影x轴的长度，第二个值是阴影y轴的长度，第三个值是阴影的模糊半径，第四个值是阴影的颜色。


### 三、形变

css3提供了让元素形变的属性(transform)，在transform后面添加不同的形变函数，就能实现不同的形变效果，常用的形变包括：旋转、缩放、位移；

**旋转**

通过rotate()函数可以实现元素形变的效果，示例代码如下所示（demo05.html）

``` css
.box{
    width:200px;
    height:200px;
    margin:100px auto;
    transform: rotate(45deg);
    background-color: #00f;
}
```

在上面的代码中，我们通过rotate函数让元素顺时针旋转了45度（deg单位表示度）。我们也可以设置负的度数，例如：

``` css
.box{
    transform: rotate(-45deg);
}
```

上面的代码可以让元素逆时针旋转45度。

**缩放**

通过scale()函数可以实现元素的缩放，示例代码如下所示（demo06.html）

``` css
.box {
    width: 200px;
    height: 200px;
    margin: 100px auto;
    transform: scale(1.5);
    background-color: #00f;
}
```

我们可以在scale函数中设置元素缩放的比例，1.5就是原基础之上1.5倍，原宽高是200px，缩放之后呈现出来的尺寸就是300px。

**位移**

通过translate()函数可以实现元素的位移，示例代码如下所示（demo07.html）

``` css
.box {
    width: 200px;
    height: 200px;
    margin: 100px auto;
    transform: translate(100px,200px);
    background-color: #00f;
}
```

在translate()函数中，我们可以设置元素位移的x轴距离和y轴距离。

我们可以利用位移，将元素放置在页面水平和垂直居中的位置，代码如下所示（demo08.html）

``` css
.box {
    width: 200px;
    height: 200px;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    background-color: #00f;
}
```

这样通过绝对定位，配合位移，就可以将元素放置在水平和垂直都居中的位置上了。

### 四、授课说明

* 关于圆角，可以留一个思考题，如果设置两个值，分别设置的是哪个，如果是三个值，分别是哪个。
* 关于阴影，可以有更多的设置方法，本章内容并未一一讲解，可以让学员课后扩展。
* 关于形变，需要考虑如何在一个元素上使用多个形变函数。