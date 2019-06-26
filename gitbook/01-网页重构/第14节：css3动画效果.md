# 第04章：css3动画效果

### 一、css3动画效果概述

上一章我们讲解了过渡效果，通过transition属性可以设置元素从一个状态以动画的形式过渡到另一个状态，但是这样的效果只能实现简单的动画，我们今天讲的css3动画，可以通过css3的@keyframes设置更为复杂的动画效果。

### 二、动画效果的实现

**定义动画**

我们先通过@keyframes定义一个简单的动画，让其在页面加载的时候直接动起来，示例代码如下所示（demo01.html）

``` css
.box {
    width: 200px;
    height: 200px;
    background-color: #00f;
    animation: anim 5s linear 0.5;
}

@keyframes anim{
    0%{
        transform: translate(0px,0px)
    }
    100%{
        transform: translate(900px,100px)
    }
}
```

在上面的代码中，我们可以了解到css3动画的基本语法：

* 首先，我们需要用@keyframes定义一个动画，在上面的代码中，我们定义的动画名字为anim。
* 然后在花括号中定义动画的具体细节，0%位起始状态，100%为结束状态，我们也可以用其他的百分比定义动画在不同阶段的不同状态。
* 最后，需要在元素选择器中调用这个动画，animation属性可以调用动画，第一个值是动画名称，后面的三个值分别是动画的时间，动画函数和延时时间，这个与我们之前学的过渡效果设置方法很类似。

**设置动画**

在上面的代码中，元素运行到100%的位置就会直接直接回到0%的位置，这样看起来效果很不平滑，为了让效果更连贯，我们可以让0%和100%的样式是相同的，代码如下所示（demo02.html）

``` css
.box {
    width: 200px;
    height: 200px;
    background-color: #00f;
    animation: anim 10s;
}

@keyframes anim {
    0% {
        transform: translate(0px, 0px)
    }
    25%{
        transform: translate(500px, 0px)
    }
    50%{
        transform: translate(500px, 500px)
    }
    75%{
        transform: translate(0px, 500px)
    }
    100%{
        transform: translate(0px, 0px)
    }
}
```

**让动画更连贯**

在上面的代码中，元素经过了四次运动，最终回到了起始位置，我们还可以继续修改案例，让元素的动画效果更佳丰富。示例代码如下所示（demo03.html）

``` css
.box {
    width: 200px;
    height: 200px;
    background-color: #00f;
    animation: anim 10s linear;
}

@keyframes anim {
    0% {
        transform: translate(0px, 0px) rotate(0);
    }
    25% {
        transform: translate(500px, 0px) rotate(360deg);
    }
    50% {
        transform: translate(500px, 500px) rotate(720deg);
    }
    75% {
        transform: translate(0px, 500px) rotate(1080deg);
    }
    100% {
        transform: translate(0px, 0px) rotate(1440deg);
    }
}
```

**循环动画**

我们还可以通过设置animation-iteration-count属性设置动画播放的次数，如果值为infinite，则动画不断地循环播放。示例代码如下所示（demo04.html）

``` css
.box {
    width: 200px;
    height: 200px;
    background-color: #00f;
    animation: anim 10s linear;
    animation-iteration-count:infinite;
}
```

**停止动画**

我们还可以通过设置animation-play-state属性让动画停止，代码如下所示（demo05.html）

``` css
.box {
    width: 200px;
    height: 200px;
    background-color: #00f;
    animation: anim 10s linear;
    animation-iteration-count: infinite;
}
.box:hover{
    animation-play-state: paused;
}
```

这样当我们鼠标悬浮在元素之上的时候，动画就会停下来，当我们鼠标离开元素，动画又会开始运行。


### 三、授课说明

* 如果动画只有0%和100%，那么就可以使用from和to代替百分比，可以让学员作为扩展练习。