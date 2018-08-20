# 第01章：html5新增布局标签与媒体标签

### 一、html5概述

html5是超文本标记语言（html）的第五次重大修改，可以简单的理解为是html的第五个大版本。我们平时所说的html5其实是包含了html5，css3的新特性，以及新增的JavaScript接口。

本节的主要内容是讲解html5中新增加的布局标签和媒体标签。

### 二、html5布局标签

在之前学习的html中，主要使用div布局，代码如下所示（demo01.html）

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        *{
            margin:0px;
            padding:0px;
            box-sizing: border-box;
        }
        .header{
            width:1000px;
            height:200px;
            margin:0 auto;
            background-color: #eee;
        }
        .banner{
            width:1000px;
            height:300px;
            margin:0 auto;
            background-color: #aaa;
        }
        .container{
            width:1000px;
            height:500px;
            margin:0 auto;
            background-color: #f00;
        }
        .footer{
            width:1000px;
            height:50px;
            margin:0 auto;
            background-color: #0f0;
        }
    </style>
</head>
<body>
    <div class="header">header</div>
    <div class="banner">banner</div>
    <div class="container">container</div>
    <div class="footer">footer</div>
</body>
</html>
```

我们通过给div指定class名来区分div的不同作用，在html5中，我们可以使用更多有语义的布局标签，而不是全都使用div来完成布局，html5为我们提供了以下布局标签：

* header
* nav
* aside
* article
* section
* footer

我们使用header和nav标签来做一个简单的例子，代码如下所示（demo02.html）

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        *{
            margin:0px;
            padding:0px;
        }
        header{
            height:300px;
            border:1px solid red;
            width:1000px;
            margin:0 auto;
        }
        nav li {
            list-style: none;
            width: 80px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            float: left;
            border: 1px solid blue;
        }

        a {
            text-decoration: none;
            color: #666;
        }
    </style>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li>
                    <a href="#">首頁</a>
                </li>
                <li>
                    <a href="#">游戏</a>
                </li>
                <li>
                    <a href="#">视频</a>
                </li>
                <li>
                    <a href="#">动画</a>
                </li>
                <li>
                    <a href="#">音乐</a>
                </li>
            </ul>
        </nav>
    </header>
</body>
</html>
```

通过上面的代码可以看到，header标签和nav标签的作用与之前的div的作用完全相同，只不过标签的名字具有语义化而已。

### 三、html5媒体标签

在html之前的版本中，如果我们需要在网页中插入音频或是视频，需要安装额外的插件，但是从html5版本之后，我们就可以直接通过一个标签来实现音频和视频的展示功能。

**音频标签**

通过audio标签，我们可以直接在在网页中嵌入音乐播放器，audio标签的src属性可以指定音乐文件，代码如下所示：

``` html
<audio src="media/music.mp3"></audio>
```

但是上诉代码并不能直接播放音乐，为了让网页打开的时候同时播放音乐，我们可以为audio标签添加一个autoplay属性，代码如下所示（demo03.html）

``` html
<audio src="media/music.mp3" autoplay></audio>
```

打开上面的网页，我们就可以听到来自源文件media/music.mp3的音乐了，我们又遇到了新的问题，如何对音乐播放器做进一步的设置呢，例如停止音乐，或者设置音量。我们可以为audio标签添加一个controls属性，就可以在网页中看到这个音乐播放器的控制页面了，代码如下所示（demo04.html）

``` html
<audio src="media/music.mp3" autoplay controls></audio>
```

通过audio标签，我们可以很方便地在网页中嵌入音乐播放器，如果掌握了JavaScript，我们还可以利用JavaScript调用audio标签的接口，来实现我们的自定义音乐播放器。

**视频标签**

掌握了音频标签，再来看视频标签（video）就十分简单了，我们可以在网页中添加video标签来为网页嵌入视频。代码如下所示（demo05.html）

``` html
<video src="media/video.mp4" controls autoplay></video>
```

通过上面的代码我们可以看到，video标签同样可以使用controls属性设置播放器的控制器，通过autoplay属性控制其自动播放。

我们还可以通过样式控制视频播器放尺寸，代码如下所示（demo06.html）

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        video{
            width:50%;
        }
    </style>
</head>
<body>
    <video src="media/video.mp4" controls autoplay></video>
</body>
</html>
```

### 四、授课说明

* html5的概念有的时候被用来表示成web开发，有的时候被表示成移动端开发，有的时候被表示成web开发的新特性，不管在什么场景提到html5，都要确保让学员知道html5有哪些新的特性。
* 在实际生产环境中，有语义的布局标签并不是被经常使用。
* 本章的重点是媒体标签的使用