## 第01章：jQuery插件的使用（实践课）

### 一、案例目标

* 使用cycle插件完成一个轮播图的效果
* 点击数字列表可以切换图片
* 点击上一章和下一章可以切换图片
* 学会掌握插件的使用
* 学习查阅文档
* cycle插件文档地址：http://jquery.malsup.com/cycle/options.html


### 二、思路解析

* 了解cycle插件api
* cycle方法可以让一个普通图片列表编程一个幻灯片效果
* cycle方法传递索引可以切换到指定图片，传递"next"或"prev"可以切换至上一章和下一章

### 三、开发过程

* 具体布局和样式：

``` html
<div id="picBox">
    <ul id="picList">
        <li><img src="images/pic01.jpg" alt="" /></li>
        <li><img src="images/pic02.jpg" alt="" /></li>
        <li><img src="images/pic03.jpg" alt="" /></li>
        <li><img src="images/pic04.jpg" alt="" /></li>
        <li><img src="images/pic05.jpg" alt="" /></li>
    </ul>
    <ul id="numList">
        <li class="active">1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
    </ul>
</div>
<input type="button" id="prev" value="上一张">
<input type="button" id="next" value="下一张">
```

``` css
#picBox{
position: relative;
    width:670px;    
}
#picList{
    list-style: none;
}
#numList{
    position: absolute;
    right: 20px;
    bottom: 20px;
    z-index: 99;
}
#numList li{
    list-style: none;
    float: left;
    width:20px;
    height:20px;
    text-align: center;
    line-height: 20px;
    background-color: #eee;
    cursor: pointer;
    border:1px solid #666;
}
#numList .active{
    background-color: #f00;
}
```

* 引用插件和调用接口的方法如下所示

``` js
$("#picList").cycle({
//当图片自动播放时，切换数字列表的背景色
before:function(){
    var index = $(this).index();
    $("#numList li").eq(index).addClass("active").siblings().removeClass("active");
}
});

//点击数字列表，切换到指定的图片
$("#numList li").click(function(){
var index = $(this).index();
$("#picList").cycle(index);
$(this).addClass("active").siblings().removeClass("active");
})

//点击切换至上一张图片
$("#prev").click(function(){
    $("#picList").cycle("prev");
});

//点击切换至下一章图片
$("#next").click(function(){
    $("#picList").cycle("next");
});
```