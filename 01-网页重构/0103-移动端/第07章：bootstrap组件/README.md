# 二、bootstrap组件

### 一、图标

在之前的课程中，我们已经讲解了如何使用图标。bootstrap中的图标与之前使用的阿里图标的font-class图标用法是相同的，实例代码如下所示（demo01.html）

``` html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
	<link rel="stylesheet" href="css/bootstrap.css">
	<style>
		span{
			font-size: 100px;
		}
		i{
			font-size:50px;
		}
	</style>
</head>
<body>
	<span class="glyphicon glyphicon-search"></span>
	<i class="glyphicon glyphicon-search"></i>
</body>
</html>
```

只要我们正确地引入bootstrap的css样式，并且项目中包含fonts目录，那么不管是使用span标签还是i标签，都能正常地使用图标。我们同样可以通过font-size设置图标的尺寸。

### 二、按钮组

bootstrap为我们提供了按钮组的功能，与之前的按钮样式不同，按钮组可以让多个按钮并列形成一个整体，示例代码如下所示（demo02.html）

``` html
<div class="btn-group" role="group" aria-label="...">
    <button type="button" class="btn btn-default">Left</button>
    <button type="button" class="btn btn-default">Middle</button>
    <button type="button" class="btn btn-default">Right</button>
</div>
```

### 三、分页

``` html
<nav aria-label="Page navigation">
    <ul class="pagination">
        <li>
            <a href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
            </a>
        </li>
        <li>
            <a href="#">1</a>
        </li>
        <li>
            <a href="#">2</a>
        </li>
        <li>
            <a href="#">3</a>
        </li>
        <li>
            <a href="#">4</a>
        </li>
        <li>
            <a href="#">5</a>
        </li>
        <li>
            <a href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
            </a>
        </li>
    </ul>
</nav>
```

### 四、导航

``` html
<nav class="navbar navbar-default">
    <div class="container-fluid">
        <div class="navbar-header">
            <a class="navbar-brand" href="#">首页</a>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li class="active">
                    <a href="#">电影</a>
                </li>
                <li>
                    <a href="#">游戏</a>
                </li>
            </ul>
            <form class="navbar-form navbar-left">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="搜索">
                </div>
                <button type="submit" class="btn btn-default">提交</button>
            </form>
            <ul class="nav navbar-nav navbar-right">
                <li>
                    <a href="#">论坛</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
```

### 五、警告框

``` html
<div class="alert alert-success">警告框-成功</div>
<div class="alert alert-info">警告框-消息</div>
<div class="alert alert-warning">警告框-警告</div>
<div class="alert alert-danger">警告框-危险</div>
```

### 六、授课说明

本章的重点是进一步让学员了解bootstrap的内容，与上一章一样，所有的用法都不需要完全背诵下来，使用的时候知道在文档的什么位置查找即可。