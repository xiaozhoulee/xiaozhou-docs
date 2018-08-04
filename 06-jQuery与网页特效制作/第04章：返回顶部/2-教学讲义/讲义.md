## 第01章：返回顶部（实践课）

### 一、案例目标

* 页面在顶部的时候，隐藏【返回顶部】按钮
* 当页面滚动条向下滚动的时候，显示【返回顶部】按钮
* 当点击【返回顶部】按钮的时候，网页以滚动的形式返回页面顶部。

### 二、思路解析

* 首先定义网页的基本结构：header、banner、container、footer
* 让网页的整体高度高于浏览器可以显示的高度
* 在网页的右下方用固定定位定义一个【返回顶部】的按钮，初始状态隐藏。
* 当scrollTop值大于0的时候，按钮显示。
* 点击按钮的时候，网页以动画的形式让scrollTop值变为0。

### 三、开发过程

* 布局和样式：

``` html
<div class="header">
    <h1>网页头部</h1>
</div>
<div class="banner">
    <h1>网页banner</h1>
</div>
<div class="container">
    <h1>网页内容</h1>
</div>
<div class="footer">
    <h1>网页底部</h1>
</div>
```

``` css
*{
    margin:0px;
    padding:0px;
}
.header{
    width:1000px;
    height:300px;
    background-color:#aaa;
    margin:0 auto;
}
.banner{
    width:1000px;
    height:500px;
    background-color:#eee;
    margin:0 auto;
}
.container{
    width:1000px;
    height:800px;
    background-color:#bbb;
    margin:0 auto;
}
.footer{
    width:1000px;
    height:200px;
    background-color:#777;
    margin:0 auto;
}
/* 按钮的默认样式 */
.to-top{
    position: fixed;
    width:80px;
    height:80px;
    bottom:20px;
    right:20px;
    display: none;
}
/* 显示按钮 */
.to-top-show{
    display: inline-block;
}
```

*  页面滚动和按钮事件如下所示：

``` js
// 绑定网页滚轮滚动事件
$(window).scroll(function(){
    // 如果网页滚轮滚动，显示返回顶部
    if($(this).scrollTop() > 0){
        $(".to-top").addClass("to-top-show");
    }else{
        $(".to-top").removeClass("to-top-show");
    }
})
// 点击返回顶部按钮时，页面动态滚动到页面最上方。
$(".to-top").click(function(){
    $("html,body").animate({
        scrollTop:0
    },500)
})
```