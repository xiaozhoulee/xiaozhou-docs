## 第02章：随鼠标显示大图（实践课）

### 一、案例目标

* 在页面中显示三张图片
* 当鼠标经过某一张图片的时候，显示图片大图
* 图片大图随鼠标的移动而移动

### 二、思路解析

* 鼠标事件可以分成三部分，移入、移动、移出
* 移入的时候，获取当前img的url，并在DOM中添加一个新的图卡，新的图片url与鼠标悬浮时图片的url相同。
* 鼠标移动的时候，新增大图绝对定位，并将top和left值设置成鼠标坐标位置（这里需要添加20px,否则忽悠bug）
* 鼠标移出时，删除后添加的元素。

### 三、开发过程

* 样式与布局

``` html
<ul class="pic-list">
    <li><img src="images/0.jpg" alt=""></li>
    <li><img src="images/1.jpg" alt=""></li>
    <li><img src="images/2.jpg" alt=""></li>
</ul>
```

``` css
*{
    margin:0px;
    padding:0px;
}
.pic-list li{
    list-style: none;
    float: left;
}
.pic-list img{
    width:300px;
}
/* 设置新图为绝对定位元素 */
.append-pic{
    position: absolute;
}
```

* 鼠标事件绑定

``` js
$(".pic-list li img").mouseenter(function(){
    var appendPic = $("<img class='append-pic'>"); //创建img标签
    var url = $(this).attr("src");  //获取原图url
    appendPic.attr("src",url);      //将新图url设置成与原图相同
    $("body").append(appendPic);    //将新图插入到body标签中
}).mousemove(function(e){
    var x = e.pageX;              //获取鼠标x坐标
    var y = e.pageY;			  //获取鼠标y坐标
    $(".append-pic").css({        //将新图的位置设置成与鼠标相同
        top:y+20,
        left:x+20
    })

}).mouseleave(function(){
    $(".append-pic").remove();    //当鼠标移出图片，删除新图。
})
```



