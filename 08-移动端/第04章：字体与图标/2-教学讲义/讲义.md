# 第04章：字体与图标

### 一、概述

我们在学习css的课程中知道，如果希望设置元素的字体，可以使用font-family属性，但是并不是我们将font-family设置成什么，就会显示什么样的字体，其他我们使用的操作系统中已经自带了很多字体，font-family属性只是制定了一个我们操作系统中字体的其中一个，但是如何才能让网页引入更多更漂亮的字体呢，本节我们就来讲解字体和图标的引入。

### 二、字体

使用@font-face可以引入并定义新的字体，实例代码如下所示（demo01.html）

``` css
@font-face{
    src:url("./font/wawa.ttf");
    font-family: wawa;
}
```

在上面的代码中，我们在网页中引入了一个路径为"./font/wawa.ttf"的字体，这个字体文件是在网上下载得到的，通过上面的设置我们就可以使用font-family后面定义的wawa这个字体了。

``` css
p{
    font-family: wawa;
}
```

通过一个简单的设置，我们就将网页中的p标签设置成了wawa字体，可以看一下，效果是不是相对于前古板的字体，更有趣了一些呢。


### 二、图标

我们不仅可以下载字体，还可以下载图标。本章的内容使用的是“阿里图标”，下载之后，将图标放在了fonts目录中。

**unicode图标**

unicode图标网页端最原始的应用方式，特点是：

* 兼容性最好，支持ie6+，及所有现代浏览器。
* 支持按字体的方式去动态调整图标大小，颜色等等。
* 但是因为是字体，所以不支持多色。只能使用平台里单色的图标，就算项目里有多色图标也会自动去色。

实例代码如下所示（demo02.html）

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        @font-face {
            font-family: 'iconfont';
            src: url('./fonts/iconfont.eot');
            src: url('./fonts/iconfont.eot?#iefix') format('embedded-opentype'),
            url('./fonts/iconfont.woff') format('woff'),
            url('./fonts/iconfont.ttf') format('truetype'),
            url('./fonts/iconfont.svg#iconfont') format('svg');
        }
        .iconfont{
            font-family:"iconfont" !important;
            font-size:16px;font-style:normal;
            -webkit-font-smoothing: antialiased;
            -webkit-text-stroke-width: 0.2px;
            -moz-osx-font-smoothing: grayscale;
        }
        .big{
            font-size: 50px;
        }
    </style>
</head>
<body>
    <i class="iconfont">&#xe60e;</i>
    <i class="iconfont big">&#xe600;</i>
    <i class="iconfont">&#xe611;</i>
    <i class="iconfont">&#xe616;</i>
</body>
</html>
```

**font-class图标**

font-class是unicode使用方式的一种变种，主要是解决unicode书写不直观，语意不明确的问题，与unicode使用方式相比，具有如下特点：

* 兼容性良好，支持ie8+，及所有现代浏览器。
* 相比于unicode语意明确，书写更直观。可以很容易分辨这个icon是什么。
* 因为使用class来定义图标，所以当要替换图标时，只需要修改class里面的unicode引用。
* 不过因为本质上还是使用的字体，所以多色图标还是不支持的。

实例代码如下所示（demo03.html）

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="./fonts/iconfont.css">
    <style>
        .big{
            font-size: 50px;
        }
    </style>
</head>
<body>
    <i class="iconfont icon-rectangle390"></i>
    <i class="iconfont icon-taobao"></i>
    <i class="iconfont icon-caipiao"></i>
    <i class="iconfont icon-diandian big"></i>
    <i class="iconfont icon-lingshi"></i>
</body>
</html>
```

**svg图标**

这是一种全新的使用方式，应该说这才是未来的主流，也是平台目前推荐的用法。相关介绍可以参考这篇文章 这种用法其实是做了一个svg的集合，与另外两种相比具有如下特点：

* 支持多色图标了，不再受单色限制。
* 通过一些技巧，支持像字体那样，通过font-size,color来调整样式。
* 兼容性较差，支持 ie9+,及现代浏览器。
* 浏览器渲染svg的性能一般，还不如png。

实例代码如下所示（demo04.html）

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="./fonts/iconfont.js"></script>
    <style type="text/css">
        .icon {
           width: 100px;
           height:100px;
           vertical-align: -0.15em;
           fill: currentColor;
           overflow: hidden;
           color:red;
        }
    </style>
</head>
<body>
    <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-taobao"></use>
    </svg>
    <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shejiao"></use>
    </svg>
    <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-lingshi"></use>
    </svg>
</body>
</html>
```

### 三、练习

下面我们结合图标的内容，用font-class图标制作一个简易的图标按钮，实例代码如下所示（demo05.html）

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="./fonts/iconfont.css">
    <style>
        .big{
            font-size: 50px;
        }
    </style>
</head>
<body>
    <button>
        <i class="iconfont icon-taobao big"></i>
    </button>
</body>
</html>
```


### 四、授课说明

* 在工作环境中，字体一般不需要web开发人员自己手动下载，因为UI涉及人员既然在设计稿中有这个字体，他也一定会有字体的源文件，向UI要就可以了。
* 关于图标和字体的使用，可以在实践课中练习。