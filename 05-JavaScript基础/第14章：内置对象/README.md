## 第20章：内置对象

### 一、内置对象概述
javascript为我们提供了很多内置对象，这些内置对象为我们提供了很多语言的基本功能。我们之前学过的数组就是JavaScript的内置对象，除了数组我们还应该了解的内置对象有：Math、Date、RegExp。

需要说明的是document对象是DOM提供的对象，不属于JavaScript内置对象，window对象是BOM中的对象，同样不属于JavaScript内置对象。

### 二、Math
Math对象不像数组那样需要我们手动去创建，我们在JavaScript程序中直接写Math代表的就是Math对象。我们可以通过Math对象直接获取圆周率（demo01.html）。
``` js
var pi = Math.PI;
console.log(pi);
```
Math对象提供了很多方法来简化我们的数学运算，下面简单列举几个方法（demo02.html）
``` js
var pi = Math.PI;   
var num1 = Math.floor(pi);  //向下取整
var num2 = Math.ceil(pi);   //向上取整
var num3 = Math.round(pi);  //四舍五入
var num4 = Math.abs(-pi);   //获取绝对值
var num5 = Math.random();   //获取0~1之间的随机数
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
```
在Math对象的方法中，floor和random两个方法比较常用，我们可以通过这两个方法获取我们想要的随机数范围。例如我们想要1~10的十个随机数，代码如下（demo03.html）
``` js
var number = Math.floor(Math.random()*10 + 1);
console.log(number);
```

下面我们来实现一个猜数字的游戏，JavaScript随机生成一个1~100之间的数字，我们通过文本输入框输入我们所猜的数字，猜的数字不管是大于结果，还是小于结果，还是等于结果，都会有相应的提示，代码如下（demo04.html）
``` html
<input type="text" id="number">
<button id="guess">猜数字</button>
<script>
    var target = Math.floor(Math.random()*100+1); //生成1~100的随机数。
    var btn = document.querySelector("#guess");
    var number = document.querySelector("#number");
    btn.onclick = function(){
        var value = Number(number.value);
        if(value > target){
            alert("大于结果");
        }else if(value < target){
            alert("小于结果");
        }else if(value === target){
            alert("回答正确");
        }
    }
</script>
```

### 三、Date
Date对象是JavaScript用于处理日期和时间的对象，我们可以通过Date对象获取当前的时间，需要说明的是Date对象获取的时间是本机的时间（demo05.html）。
``` js
var dateNow = new Date();
var year = dateNow.getFullYear();    //获取年，不能用getYear()方法，此方法已经被废弃
var month = dateNow.getMonth();      //获取月份 从0开始，一月份返回的值是0
var date = dateNow.getDate();        //获取日期
var hours = dateNow.getHours();      //获取小时
var minutes = dateNow.getMinutes();  //获取分钟
var seconds = dateNow.getSeconds();  //获取秒
var day = dateNow.getDay();          //获取星期
console.log(year);
console.log(month);
console.log(date);
console.log(hours);
console.log(minutes);
console.log(seconds);
console.log(day);
```
我们可以通过JavaScript将当前的时间显示在网页上（demo06.html）
``` js
var h1 = document.querySelector("h1");
var dateNow = new Date();
var hours = dateNow.getHours();      
var minutes = dateNow.getMinutes();  
var seconds = dateNow.getSeconds(); 
var strTimeNow = hours + ":" + minutes + ":" + seconds;
h1.innerHTML = strTimeNow;
```
上面的例子我们成功将当前的日期显示在h1标签中，但是我们显示的时间是获取的那个时间点，显示的时间是静止不动的，我们可以通过计时器方法让我们显示的时间与实际时间同步（demo07.html）。
``` js
var h1 = document.querySelector("h1");
function getTime(){     
    var dateNow = new Date();
    var hours = dateNow.getHours();      
    var minutes = dateNow.getMinutes();  
    var seconds = dateNow.getSeconds(); 
    var strTimeNow = hours + ":" + minutes + ":" + seconds;
    h1.innerHTML = strTimeNow;
}
getTime();
setInterval(getTime,1000);
```
我们将过去时间的代码放到了一个函数中，然后通过计时器方法每秒执行一次这个函数，这样我们显示出来的日期就想电子钟一样每秒与真实事件同步一次。

我们还可以通过参数创建一个指定时间的日期对象，我们修改一下demo05的代码（demo08.html）
``` js
var dateNow = new Date("2017-5-1 17:30:20");  //创建指定日期和时间的对象
var year = dateNow.getFullYear();   
var month = dateNow.getMonth();     
var date = dateNow.getDate();       
var hours = dateNow.getHours();      
var minutes = dateNow.getMinutes(); 
var seconds = dateNow.getSeconds(); 
var day = dateNow.getDay();
```

我们在编写程序的时候，有的时候会希望获取一个唯一的时间点，我们可以使用getTime方法或得。

``` js
var dateTarget = new Date("2017-5-1 17:30:20");
var dateNow = new Date();
var target = dateTarget.getTime();
var now = dateNow.getTime();
console.log(target);
console.log(now);
```
通过getTime方法可以获取时间戳，时间戳是指格林威治时间1970年01月01日00时00分00秒(北京时间1970年01月01日08时00分00秒)起至现在的总毫秒数，我们可以用时间戳表示一个不会重复的时间点。