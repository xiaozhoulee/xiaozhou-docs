# 第05章：自定义音乐播放器

### 一、概述

本章我们将使用之前学过的知识完成一个音乐播放器的效果，效果如（demo05.html）所示（在调试工具中设置成移动端页面展示）

* 有一个圆形的唱片，当音乐播放的时候，唱片旋转，当音乐暂停的时候，唱片停止旋转。
* 有两个按钮，一个播放音乐，一个停止播放音乐。
* 该页面适用于移动端设备。

### 一、页面制作

我们使用rem布局完成最初的页面布局，实例代码如下所示（demo01.html）

``` html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
	<script src="script/fontsizeset.js"></script>
	<style>
		*{
			margin:0px;
			padding:0px;
		}
		body{
			background-color: #eee;
		}
		.disk{
			width:3.6rem;
			margin:0 auto;
		}
		.disk img{
			width:3.6rem;
			height:3.6rem;
			border-radius: 50%;
		}
		.btn{
			font-size: 30px;
			text-align: center;
		}
	</style>
</head>
<body>
	<div class="music-box">
		<div class="disk">
			<img src="images/disk.png" alt="">
		</div>
		<div class="btn">
			<button>开始</button>
			<button>暂停</button>
		</div>
	</div>
</body>
</html>
```

基本布局已经完成，接下来为图片添加一个旋转的效果，让其看起来像唱片一样，实例代码如下所示（demo02.html）

``` css
@keyframes around{
    from{
        transform: rotate(0deg);
    }
    to{
        transform:rotate(360deg);
    }
}

.disk img{
    width:3.6rem;
    height:3.6rem;
    border-radius: 50%;
    animation: around 5s linear infinite;
}
```

然后给按钮添加点击事件，让其可以控制图片的旋转和暂停，实例代码如下所示（demo03.html）

``` css
.disk .stop{
    animation-play-state: paused;
}
```

``` js
$(".start").click(function(){
    $(".disk img").removeClass("stop");
})

$(".stop").click(function(){
    $(".disk img").addClass("stop");
})
```

这样我们就实现了控制图片的旋转和暂停，然后为了美观，我们将两个按钮更换成图标，实例代码如下所示（demo04.html）

``` js
<button class="start"><i class="iconfont icon-playfill"></i></button>
<button class="stop"><i class="iconfont icon-stop"></i></button>
```

上面的图标仍然是在阿里图标中下载的。

最后，我们在网页中添加音乐标签audio，并使用js控制器播放和停止,最终的代码如下所示(demo05.html)。

``` html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="./fonts/iconfont.css">
	<script src="script/fontsizeset.js"></script>
	<style>
		*{
			margin:0px;
			padding:0px;
		}
		body{
			background-color: #eee;
		}
		.disk{
			width:3.6rem;
			margin:0.5rem auto;
		}
		.disk img{
			width:3.6rem;
			height:3.6rem;
			border-radius: 50%;
            animation: around 5s linear infinite;
		}
		.btn{
			font-size: 30px;
			text-align: center;
		}

        @keyframes around{
            from{
                transform: rotate(0deg);
            }
            to{
                transform:rotate(360deg);
            }
        }

        .disk .stop{
            animation-play-state: paused;
        }

        .iconfont{
            font-size: 0.5rem;
        }
	</style>
</head>
<body>
	<div class="music-box">
        <audio src="media/music.mp3" autoplay></audio>
		<div class="disk">
			<img src="images/disk.png" alt="">
		</div>
		<div class="btn">
			<button class="start"><i class="iconfont icon-playfill"></i></button>
			<button class="stop"><i class="iconfont icon-stop"></i></button>
		</div>
    </div>
    
    <script src="script/jquery.js"></script>
    <script>
        var audio =  document.querySelector("audio");
        $(".start").click(function(){
            $(".disk img").removeClass("stop");
            audio.play();   //播放音乐
        })
        $(".stop").click(function(){
            $(".disk img").addClass("stop");
           audio.pause();   //停止播放音乐
        })

    </script>
</body>
</html>
```