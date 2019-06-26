## 第01章：锚点跳转（实践课）

### 一、案例目标

* 在网页的header内有一个菜单。
* 菜单不管页面如何滚动，都置顶显示。
* 当点击菜单的时候，页面会跳转到菜单对应的内容

### 二、思路解析

* 菜单需要设置固定定位，让其一直处在页面最顶端。
* 每一个菜单的a标签设置锚点为网页指定内容的ID。
* 点击菜单时，获取指定内容的scrollTop值，然后将页面滚动到该内容的位置。


### 三、开发过程

* 样式和布局：

``` html
<div id="header">
    <ul id="nav">
        <li><a href="#header">header</a></li>
        <li><a href="#banner">Banner</a></li>
        <li><a href="#container">Container</a></li>
        <li><a href="#footer">Footer</a></li>
    </ul>
</div>
<div id="banner">
    <h1>banner</h1>
</div>
<div id="container">
    <h1>container</h1>
</div>
<div id="footer">
    <h1>footer</h1>
</div>
```

``` css
*{
    margin:0px;
    padding:0px;
}
#header{
    height:500px;
    background-color: #eee;
}
#header #nav{
    height:30px;
    list-style: none;
    position: fixed;
    top:0px;
}
#header #nav li{
    height: 30px;
    border: 1px solid red;
    float: left;
    text-align: center;
    padding:0 20px;
    line-height: 30px;
}
#banner{
    height:800px;
    background-color: #999;
}
#container{
    height: 800px;
    background-color: #ccc;
}
#footer{
    height: 800px;
    background-color: 999;
}
```

* 菜单的点击事件内容如下所示：

``` js
//添加全屏滚动的效果
$("#nav li a").click(function(){
    // 获取a标签对应内容的id
    var href = $(this).attr("href");
    // 获取菜单对应的元素
    var $elem = $(href);
    if($elem[0]){
        //获取容器元素距离顶部的距离
        var offsetTop = $elem.offset().top;
        //通过容器元素距离网页顶部的距离，设置滚动位置。
        $("html,body").animate({scrollTop:offsetTop},500);
    }
    return false;
})
```
