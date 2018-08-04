## 第16章：计时器方法

### 一、计时器方法概述
计时器方法可以实现在指定的时间过后，单词或重复调用函数的功能，setTimeout可以实现函数在指定毫秒数后单词执行，setInterval可以实现函数在指定毫秒数后重复执行，语法如下所示：
``` js
setTimeout(function(){
    //一秒后执行
},1000);

setInterval(function(){
    //一秒后执行，并且每隔一秒重复执行
},1000)
```

### 二、setTimeout
下面我们来实现一个效果，页面加载3秒后在控制台输出hello world（demo01.html）
``` js
setTimeout(function(){
    console.log("hello world");
},3000)
```

当计时器开始计时后，我们可以使用clearTimeout方法让计时器停下来，下面我们来定义一个按钮，当页面加载后，如果我们在3秒钟之内点击按钮，计时器会停止，不会输出hello world，如果不点击按钮，3秒钟之后就会输出hello world（demo02.html）。

``` js
var btn = document.querySelector("button");
var t = setTimeout(function(){
    console.log("hello world");
},3000)
btn.onclick = function(){
    clearTimeout(t);
}
```

setTimeout方法会返回一个整数类型的值，通过这个值，我们可以停止计时器。我们将setTimeout方法的返回值赋值给一个变量，当点击按钮的时候，使用clearTimeout方法，传入t，这样计时器就会停止，hello world就不会在控制台输出。

### 三、setInterval
setInterval的用法与setTimeout的用法非常类似，都是传入两个参数，第一个参数是计时器执行的函数，第二个参数是毫秒数。下面我们来实现一个效果，每3秒钟在控制台输出依次hello world（demo03.html）
``` js
setInterval(function(){
    console.log("hello world");
},3000)
```
从代码可以看出，setInterval与setTimeout完全相同，区别在于setInterval参数中的函数没个指定毫秒数后都会重复执行。当我们不希望计时器重复执行的时候，就可以使用clearInterval方法来停止计时器（demo04.html）。
``` js
var btn = document.querySelector("button");
var t = setInterval(function(){
    console.log("hello world");
},3000)
btn.onclick = function(){
    clearTimeout(t);
}
```
下面我们来实现一个效果，让控制台输出每隔1秒按顺序输出正整数，从数字1开始输出（demo05.html）
``` js
var n = 1;
function showNumber(){
    console.log(n);
    n++;
}
setInterval(showNumber,1000);
showNumber();    //调用函数，可以在页面加载时直接输出1。
```
上面的代码与之前有一点区别，我们并没有直接给setInterval传递一个匿名函数，而是先定义了一个函数showNumber，然后将showNumber传递给setInterval，这两种写法效果是一样的，但是如果将匿名函数传入setInterval，这个函数将不能被调用。

在上面代码的结尾，我们在页面加载之后调用了一次showNumber，目的是为了让页面加载的时候就输出1，否则我们将要等待一秒之后才能看到控制台输出1。

这个案例会一直输出数字，下面我们来改进这个例子，当数字为10的时候就停止，效果看起来有些想之前讲过的for循环输出数字，但用计时器输出可以实现每个1秒输出一个数字，而不是连续的输出（demo06.html）。
``` js
var n = 1,t=0;
function showNumber(){
    console.log(n);
    if(n === 10){
        clearInterval(t);
    }
    n++;
}
t=setInterval(showNumber,1000);
showNumber(); 
```
我们通过一个if语句判断n的值，当n到达10的时候，就停止计时器，这样计时器就不会再继续输出数字了。

我们还可以继续用按钮控制计时器，这次我们定义一个h1标签存放数字，再用两个按钮来实现“开始计数”和“停止计数”功能（demo07.html）。

``` html
    <h1>0</h1>
    <button id="start">开始计数</button>
    <button id="stop">停止计数</button>
    <script>
        var btnStart = document.querySelector("#start");
        var btnStop = document.querySelector("#stop");
        var h1 = document.querySelector("h1");
        var t;
        btnStart.onclick = function(){
            clearInterval(t);                       //防止连续点击开始计时，导致创建多个计时器
            t = setInterval(function(){
                var number = Number(h1.innerHTML);  //将h1的文本节点转换成数字
                number++;
                h1.innerHTML = number;
            },300); 
        }

        btnStop.onclick = function(){
            clearInterval(t);
        }
    </script>
```


在网页中我们经常会看到指定秒数跳转到其他网页，我们可以用计时器方法来实现这个功能（demo08.html）

``` html
<p><span class="seconds">5</span>秒后跳转到百度</p>
<script>
    var seconds = document.querySelector(".seconds");
    setInterval(function(){
        var s = Number(seconds.innerHTML);
        s--;
        seconds.innerHTML = s;
        if(s === 0){
            location.href = "http://baidu.com";  //location.href可以实现页面跳转
        }
    },1000)
</script>
```
