# 第08章：bootstrap总结

### 一、bootstrap插件

boostrap插件的功能是基于jQuery的，所以在我们使用boostrap插件之前，必须要先引入jQuery。然后在其后面引入bootstrap的js文件，这样bootstrap插件才能被使用。

**模态框**

``` html
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
    弹出模态框
</button>

<div class="modal fade" id="myModal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title" id="myModalLabel">模态框标题</h4>
            </div>
            <div class="modal-body">
                模态框内容
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary">保存</button>
            </div>
        </div>
    </div>
</div>
```


**下拉菜单**

boostrap提供了下来菜单功能，我们在下面的例子中，使用上一章编写的导航，在导航中添加下来菜单的小姑，代码如下所示（demo02.html）

``` html
<ul class="nav navbar-nav">
    <li class="dropdown">
        <a id="drop1" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button">
            书籍
            <span class="caret"></span>
        </a>
        <ul class="dropdown-menu">
            <li>
                <a href="#">JavaScript高级程序设计</a>
            </li>
            <li>
                <a href="#">JavaScript权威指南</a>
            </li>
            <li>
                <a href="#">ES6标准教程</a>
            </li>
            <li role="separator" class="divider"></li>
            <li>
                <a href="#">大话数据结构</a>
            </li>
        </ul>
    </li>
</ul>
```

**弹出框**

``` html
<button 
    type="button" 
    class="btn btn-default" 
    data-container="body" 
    data-toggle="popover" data-placement="left" 
    data-content="这里是弹出框的内容，内容要在左侧弹出">
    左侧
</button>
```

``` js
$(function () {
    $('[data-toggle="popover"]').popover()
})
```

### 二、栅格系统

我们在此前已经学习了媒体查询，通过@media可以制作响应式的页面，让同一套页面代码可以在不同的终端设备上展现不同的样式，实现响应式的效果。bootstrap为我们提供了栅格系统，可以让我们更方便地实现响应式效果。

**响应式列**

我们先用一个例子来说明什么是栅格系统，实例代码如下所示（demo04.html）

``` html
	<div class="row">
		<div class="col-md-1 col">.col-md-1</div>
		<div class="col-md-1 col">.col-md-1</div>
		<div class="col-md-1 col">.col-md-1</div>
		<div class="col-md-1 col">.col-md-1</div>
		<div class="col-md-1 col">.col-md-1</div>
		<div class="col-md-1 col">.col-md-1</div>
		<div class="col-md-1 col">.col-md-1</div>
		<div class="col-md-1 col">.col-md-1</div>
		<div class="col-md-1 col">.col-md-1</div>
		<div class="col-md-1 col">.col-md-1</div>
		<div class="col-md-1 col">.col-md-1</div>
		<div class="col-md-1 col">.col-md-1</div>
	</div>
	<div class="row">
		<div class="col-md-8 col">.col-md-8</div>
		<div class="col-md-4 col">.col-md-4</div>
	</div>
	<div class="row">
		<div class="col-md-4 col">.col-md-4</div>
		<div class="col-md-4 col">.col-md-4</div>
		<div class="col-md-4 col">.col-md-4</div>
	</div>
	<div class="row">
		<div class="col-md-6 col">.col-md-6</div>
		<div class="col-md-6 col">.col-md-6</div>
	</div>
```

bootstrap的栅格系统是将一行用row表示，然后将行分成了12列，我们可以通过col-md-n来定义元素所占的列宽，其中md表示中等屏幕，除了md，还可以替换成xs\sm\lg。例如md，当终端设备变成了变成了小屏幕的设备，之前的每一个col就会占据100%显示，这样就实现了响应式的效果。

**列偏移**

在网页开发的过程中，可能我们的列并不是在最左侧开始排列的，而是有一定的偏移量，以前的布局方式我们使用margin-left来设置偏移量，如果是制作响应式的页面，可以使用col-md-offset-4来设置偏移量。

``` html
<div class="row">
    <div class="col-md-4 col col-md-offset-4">.col-md-4 .col-md-offset-4</div>
    <div class="col-md-4 col">.col-md-4</div>
</div>
```


### 三、授课说明

* bootstrap中提供的插件并不是特别简单易用，在工作中，如果项目整体是在bootstrap框架的基础上开发的，推荐使用这些插件，但是如果项目并不是以bootstrap为基础，那么可以选择更优秀，性能更好的插件。
* bootstrap是支持功能定制的，例如我们只需要使用某些特定的插件或是组件，可以仅生成必要的代码，所以并不是每次使用bootstrap都需要引入全部的css和js文件。
