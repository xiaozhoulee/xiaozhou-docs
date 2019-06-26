# 第06章：盒子模型

### 一、盒子模型概述

我们可以把一个网页分解成一个个区域，大的区域内部可以嵌套小的区域，网页中的这些区域就像一个个盒子一样，所以我们将这样的布局叫作网页的盒子模型，我们可以通过设置下列盒子模型的属性来控制网页的基本布局：

* margin：外边距
* padding：内边距
* border：边框，在我们之前的课程中已经有所了解

### 二、盒子模型属性讲解

**margin**

margin属性可以控制元素的外边距，简单的说就是设置margin的这个元素与其相邻的元素或外部容器元素的距离，对应有一下四个属性：

* margin-top:上外边距
* margin-bottom:下外边距
* margin-left:左外边距
* margin-right:右外边距

我们以margin-top属性为例，实例代码如下所示：

``` css
.box1{
    width:300px;
    height:300px;
    background-color: #f00;
}
.box2{
    width:300px;
    height:300px;
    background-color: #0f0;
    margin-top:50px;
}
```

如代码所示，box2因为设置了margin-top:50px;它与相邻的box1之间有了50px的距离。我们再来看下一个例子（demo02.html）

``` css
.box1{
    width:300px;
    height:300px;
    background-color: #f00;
}
.box2{
    width:100px;
    height:100px;
    background-color: #0f0;
    margin-left:50px;
}
```

在demo02中，我们将box2放在了box1内部，并设置margin-left:50px;可以看到box2距离其容器box1左边距有50px。

我们可以将demo02的margin-left改为margin-top,接货出乎意料，box2并没有与box1有50px的间距，而是box1与最外成的body标签有了50px的间距。box2的margin-top属性意外地作用在box1之上，遇到这种情况，我们可以在box1中添加一个属性overflow: hidden;便可解决这个问题，代码如下所示（demo03.html）

``` css
.box1{
    width:300px;
    height:300px;
    background-color: #f00;
    overflow: hidden;  /*添加overflow:hidden,否则box2的margin-top属性会作用在box1之上*/
}
.box2{
    width:100px;
    height:100px;
    background-color: #0f0;
    margin-top:50px;
}
```

**padding**

padding属性可以控制元素的内边距，简单的说就是控制容器与内部元素之间的距离，与margin一样，padding也有对应的四个属性分别表示上下左右

* padding-top:上内边距
* padding-bottom:下内边距
* padding-left:左内边距
* padding-right:右内边距

我们以padding-top为例，实例代码如下所示（demo04.html）：

``` css
.box1{
    width:300px;
    height:300px;
    background-color: #f00;
    padding-top:50px;
}
.box2{
    width:100px;
    height:100px;
    background-color: #0f0;
}
```

在上面的代码中，我们设置box1的属性padding-top:50px;可以看到box1和box2之间有一个50px的边距。但是同时大家也发现box1的宽度不再是width设置的300px，而是350px，为什么会出现这个问题呢，接下来我们来讨论元素的实际宽度和高度的计算。

**宽高的计算**

在我们之前学习的内容中了解到通过width和height属性可以设置元素的宽高，但元素的实际宽高可能与我们设置的width和height属性不同。因为在默认情况下：

* 元素的实际宽度 = border-left + border-right + width + padding-left + padding-right
* 元素的实际高度 = border-top + border-bottom + width + padding-top + padding-bottom

实例代码如下所示（demo05.html）

``` css
.box{
    width:300px;
    height:300px;
    background-color: #f00;
    padding-left:50px;
    border-right:50px solid blue;
}
```

我们可以看到，div元素的实际宽度是300+50+50=400px。

但是在实际开发中，为了方便计算，我们希望设置的width的值就是原生的实际宽度，不再希望考虑padding和border的加减运算，我们可以通过box-sizing属性实现这个功能，代码如下所示（demo06.html）。

``` css
.box{
    width:300px;
    height:300px;
    background-color: #f00;
    padding-left:50px;
    border-right:50px solid blue;
    box-sizing: border-box;  /*原生的实际宽度就是width的宽度*/
}
```

通过设置box-sizing: border-box; 元素的实际宽度就是width设置的宽度，而padding和border的值是显示在width值内部的。

其实在实际开发中，将元素设置box-sizing: border-box;确实会给开发带来便利，所以我们可以在元素初始化的时候，将box-sizing: border-box;赋值给所有元素。

``` css
*{
    margin:0px;
    padding:0px;
    box-sizing: border-box;
}
```

这样，我们既能清楚所有元素的默认边距，又能便利地设置元素的宽度和高度值。


### 三、授课说明
一下内容可以作为扩展讲解：

* margin或padding指定一个值：表示上下左右都是这个值。
* margin或padding指定两个值：第一个值表示上下，第二个值表示左右。
* margin或padding指定四个值：按上右下左的顺序分别指定。


