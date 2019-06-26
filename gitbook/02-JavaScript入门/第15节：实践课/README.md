## 第19章：实践课-倒计时效果

### 一、倒计时效果需求分析
在电商网站中我们经常会遇到倒计时抢购的网页效果，在页面中会有一个倒计时的始终，当时间距离目标时间越近，时钟的时间就越小。需要统计日、时、分、秒。当最后一秒结束后，一个抢购按钮从不可点击变成可点击。

### 二、需求分析
通过需求的描述，我们知道程序中有两个时间，一个是当前时间，一个是目标时间，当前时间是不断变化的，目标时间不会变化。倒计时始终记录的是当前时间和目标时间的时间差。那么如何计算两个时间的时间差呢，我们可以通过时间戳来实现（demo01.html）。
``` js
var target = new Date("2017-8-5 22:30");
var targetTime = target.getTime();

function getTimeNow(){      
    var now = new Date();
    var nowTime = now.getTime();
    console.log(targetTime - nowTime);
}

setInterval(getTimeNow,1000);
```

我们已经输出了距离目标时间的时间戳，现在我们需要一个函数将毫秒数转换成天、小时、分钟和秒（demo02.html）。

``` js
var ms = 17420000;      //定义一个毫秒数
function getResultTime(ms){
    var days = Math.floor(ms / (24 * 60 * 60 * 1000));  //计算出天数
    var ms1 = ms % (24 * 60 * 60 * 1000); //计算出天后还剩多少毫秒
    var hours = Math.floor(ms1 / (60 * 60 * 1000)); //计算出小时
    var ms2 = ms % (60 * 60 * 1000); //计算出小时候还有多少毫秒
    var minutes = Math.floor(ms2 / (60 * 1000)); //计算出分钟
    var ms3 = ms % (60 * 1000); //计算出分钟后还有多少毫秒
    var seconds = Math.floor(ms3 / 1000); //计算出秒数
    return {                               //返回值是一个对象，这个对象包括了日、小时、分钟、秒
        days:days,
        hours:hours,
        minutes:minutes,
        seconds:seconds
    }
}
var time = getResultTime(ms);
console.log(time.days);
console.log(time.hours);
console.log(time.minutes);
console.log(time.seconds);
```

下面我们可以通过这个行数，将我们得到的距离目标时间的毫秒数，计算出距离目标时间的天、小时、分钟和秒，并将时间更新到页面上。
``` html
<h1></h1>
<script>
    var h1 = document.querySelector("h1");
    var target = new Date("2017-8-5 22:30");
    var targetTime = target.getTime();
    var ms;
    function getTimeNow(){      
        var now = new Date();
        var nowTime = now.getTime();
        ms = targetTime - nowTime;
        var time = getResultTime(ms);
        var timeResult = time.days + "天" + time.hours + "小时" + time.minutes + "分钟" + time.seconds + "秒";
        h1.innerHTML = timeResult;
    }

    setInterval(getTimeNow,1000);

    function getResultTime(ms){
        var days = Math.floor(ms / (24 * 60 * 60 * 1000));  
        var ms1 = ms % (24 * 60 * 60 * 1000); 
        var hours = Math.floor(ms1 / (60 * 60 * 1000)); 
        var ms2 = ms % (60 * 60 * 1000); 
        var minutes = Math.floor(ms2 / (60 * 1000)); 
        var ms3 = ms % (60 * 1000); 
        var seconds = Math.floor(ms3 / 1000); 
        return {                               
            days:days,
            hours:hours,
            minutes:minutes,
            seconds:seconds
        }
    }
    
</script>
```