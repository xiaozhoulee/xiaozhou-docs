## 第01章：选项卡（实践课）

### 一、案例目标

* 制作一个选项卡效果
* 有三个tab按钮
* 每当点击tab按钮的时候，对能显示对应的内宽

### 二、思路解析

* 初始状态显示三个tab按钮和第一个内容元素（content）
* 为三个tab按钮绑定点击事件
* 单击tab按钮的时候，让其对应的内容显示，其余内容隐藏

### 三、开发过程

* 首先需要完成选项卡效果的效果的样式和布局，代码如下所示

``` html
<div class="tab">
    <ul class="tab-btn clearFix">
        <li class="btn-active">标签一</li>
        <li>标签二</li>
        <li>标签三</li>
    </ul>
    <div class="content-box">
        <div class="content active">
            <h3>水果</h3>
            <p>香蕉、苹果、鸭梨</p>
        </div>
        <div class="content">
            <h3>运动</h3>
            <p>篮球、足球、羽毛球</p>
        </div>
        <div class="content">
            <h3>书籍</h3>
            <p>JavaScript高级程序设计，JavaScript权威指南</p>
        </div>
    </div>
</div>
```

``` css
*{
    margin:0px;
    padding:0px;
    box-sizing: border-box;
}

/* 清楚浮动 */
.clearFix::after,.clearFix::before{
    content:"";
    display: block;
    clear: both;
}

/* 定义选项卡内容的样式 */
.content{
    display: none;
    width:300px;
    height:200px;
    border:1px solid red;
    background-color:#aaa;
}

/* 显示激活的选项卡 */
.active{
    display:block
}

/* tab按钮样式 */
.tab-btn li{
    list-style: none;
    float: left;
    width:100px;
    height:30px;
    border:1px solid red;
    text-align: center;
    line-height: 30px;
    font-size: 14px;
}

/* 激活的按钮样式 */
.btn-active{
    background-color: yellow;  
}
```

* 编写tab按钮的事件

``` js
$(".tab-btn li").click(function(){
    //为按钮添加样式
    $(this).addClass("btn-active")
        .siblings()
        .removeClass("btn-active");

    //获取点击按钮的索引
    var index = $(this).index(); 

    //通过索引找到对应content，并显示；其他content隐藏。
    var jq = $(".content-box .content").eq(index)
        .addClass("active")
        .siblings()
        .removeClass("active")
})
```