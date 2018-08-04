## 第01章：图片轮播（实践课）

### 一、案例目标

* 制作一个滚动切换的效果
* 当点击数字列表的时候，图片列表以滚动的形式切换到指定图片
* 数字列表背景色需要改变

### 二、思路解析

* 将多张图片横向排列成一行。
* 用动画的形式改变图片列表的margin-left值，使其产生动画效果。
* 设置容器尺寸与一张图片尺寸相同，并且隐藏多于的图片。


### 三、开发过程

* 布局与样式：

``` html
<div class="box">
    <ul class="pic-list">
        <li><img src="images/0.jpg" alt=""></li>
        <li><img src="images/1.jpg" alt=""></li>
        <li><img src="images/2.jpg" alt=""></li>
        <li><img src="images/3.jpg" alt=""></li>
        <li><img src="images/4.jpg" alt=""></li>
    </ul>
</div>
<ul class="num-list">
    <li class="active">1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
</ul>
``` 

``` css
*{
    margin:0px;
    padding:0px;
}
.box{
    width:650px;
    height:420px;
    overflow: hidden;
}
.pic-list{
    list-style: none;
    width:3250px;
    height:420px;
}
.pic-list li{
    float: left;
}
.num-list li{
    float: left;
    width:20px;
    height:20px;
    border:1px solid #aaa;
    list-style: none;
    cursor: pointer;
    line-height: 20px;
    text-align: center;
}

.num-list .active{
    background-color:red;
}
```

* 点击数字列表时的事件

``` js
$(".num-list li").click(function(){
    var index = $(this).index(); //获取列表索引
    var marleft = -650 * index;  //计算需要移动的margin-left值
    $(this).addClass("active").siblings().removeClass("active");
    $(".pic-list").animate({
        "margin-left":marleft 
    },500)
})
```