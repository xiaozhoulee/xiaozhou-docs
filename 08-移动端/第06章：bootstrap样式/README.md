# 第06章：bootstrap样式

### 一、bootstrap概述

bootstrap是一个UI框架，简单地理解就是它为web工程师定义了很多漂亮的组件和插件，我们在不需要单独写任何样式，只要引入bootstrap的样式，并且在我们标签的class属性设置成对应的值，就能让我们的按钮，表格，表单的html元素变得很漂亮。我们讲解bootstrap的过程，把他拆分成三部分：

* 样式
* 组件
* 插件

本章我们开始讲解bootstrap样式相关的内容。

在使用bootstrap之前，我们需要先下载bootstrap，可以在官网直接下载，或者使用npm下载（《node基础》科目中讲解了如何使用npm下载模块），我们打开文件的dist目录，里面有三个目录：

* css：存放bootstrap的样式
* fonts：存放bootstrap的字体和图标
* js：存放bootstrap的js文件

如果我们使用bootstrap的样式和组件的页面效果，是不需要引入js文件的，如果要使用bootstrap的插件或是一些类似于下拉框，弹出框这种交互效果，需要引入bootstrap的js文件。

不管是js文件和css文件，都有一个min文件，这个min文件是压缩文件，在生产环境中需要使用压缩之后的文件。

### 二、内置样式

**按钮**

bootstrap提供了一系列漂亮的按钮，实例代码如下所示（demo01.html）

``` html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
	<link rel="stylesheet" href="css/bootstrap.css">
</head>
<body>
	<button class="btn btn-default">默认样式</button>
	<button class="btn btn-primary">首选项</button>
	<button class="btn btn-success">成功</button>
	<button class="btn btn-info">一般信息</button>
	<button class="btn btn-warning">警告</button>
	<button class="btn btn-danger">危险</button>
	<button class="btn btn-link">链接</button>
</body>
</html>
```

在上面的代码中我们可以看到，我们首先需要引入bootstrap的样式，然后通过定义button的class值就能让按钮带有不同的样式。我们还可以通过class值定义按钮的尺寸（demo02.thml）

``` html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
	<link rel="stylesheet" href="css/bootstrap.css">
</head>
<body>
	<button class="btn btn-primary btn-lg">大按钮</button>
	<button class="btn btn-primary">默认尺寸</button>
	<button class="btn btn-primary btn-sm">小按钮</button>
	<button class="btn btn-primary btn-xs ">超小按钮</button>
</body>
</html>
```

我们不仅可以给button标签设置成bootstrap的按钮，还可以将其他元素设置成bootstrap的按钮，比较常用的就是a标签，例如我们制作一个首选项按钮，点击的时候跳转到百度，实例代码如下所示（demo03.html）

``` html
<a href="http://baidu.com" class="btn btn-primary">百度</a>
```

这个a标签看起来和button标签的按钮是一模一样的，但是功能和a标签一样，点击的时候可以成功跳转到百度。

**表格**

html自带的表格是没有样式的，我们可以通过设置table标签的class属性值，很方便地设置表格样式，实例代码如下所示（demo04.html）

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="css/bootstrap.css">
</head>
<body>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>姓名</th>
                <th>性别</th>
                <th>年龄</th>
                <th>成绩</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>小明</td>
                <td>男</td>
                <td>510</td>
                <td>100</td>
            </tr>
            ...
        </tbody>
    </table>
</body>
</html>
```

在上面的代码中，table-bordered可以让表格中的每一个单元格都是有边框的。我们还可以给表格的class名设置成多个值，让其具有多种效果，实例代码如下所示（demo05.html）

``` html
<table class="table table-bordered table-striped table-hover">
```

* table-striped可以让表格的行之间具有斑马线的效果
* table-hover可以让鼠标悬浮在行的时候，有一个悬浮效果。


**表单**

bootstrap为我们提供了大量表单样式，我们展示一个简单的例子（demo06.html）

``` html
<form>
	<div class="form-group">
		<label for="exampleInputEmail1">Email address</label>
		<input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
	</div>
	<div class="form-group">
		<label for="exampleInputPassword1">Password</label>
		<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
	</div>
	<div class="form-group">
		<label for="exampleInputFile">File input</label>
		<input type="file" id="exampleInputFile">
		<p class="help-block">Example block-level help text here.</p>
	</div>
	<div class="checkbox">
		<label>
			<input type="checkbox"> Check me out
		</label>
	</div>
	<button type="submit" class="btn btn-default">Submit</button>
</form>
```

上面的代码是文档中的一个例子，如果在工作中需要用到bootstrap的表单样式，在bootstrap的文档中找到适合自己的表单即可。


### 三、授课说明

* 本章概述了bootstrap的常用样式，除了本章介绍的内容以外，bootstrap还内置了大量的样式，具体可以查阅文档。
* 不要让学员去背哪些class名，只要让学员知道文档中有什么就行，在工作中如果需要用某些样式或组件，可以直接去文档中查阅。
* 推举让学员自行查阅文档。
* 本章重点在于让学员知道bootstrap能做什么，如何做，而不是让学员记住哪些class名称。