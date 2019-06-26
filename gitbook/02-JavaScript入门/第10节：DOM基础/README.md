## 第10章：DOM基础

#### 一、DOM的基本概念
* 文档对象模型
* 定义了树状结构
* 定义了接口，可以用来操作树状结构

#### 二、样式操作
我们可以通过DOM提供的querySelector方法来获取元素，然后进一步操作它的样式（demo01.html）;
``` html
<h1>DOM样式测试</h1>
<script>
    var h1 = document.querySelector("h1");  
    //querySelector的返回值是一个DOM对象，该方法可以通过选择器获取元素，若选择器找到多个元素，则返回第一个。
    h1.style.color = "red"; 
    //DOM对象的style属性可以设置元素内联样式。
</script>
```

若需要通过js设置多个元素的样式，可以使用querySelectorAll方法，代码如下（demo02.html）

``` html
<ul>
    <li>香蕉</li>
    <li>苹果</li>
    <li>鸭梨</li>
</ul>
<script>
    var ali = document.querySelectorAll("li");
    //querySelectorAll方法的返回值是一个类数组的集合，里面保存的是获取的所有元素，所以如果希望为每一个元素设置样式，需要遍历这个集合。
    for(var i = 0;i<ali.length;i++){
        ali[i].style.color = "red";
    }
</script>
```

#### 三、绑定事件
事件就是文档或者浏览器窗口发生的一些特定的交互瞬间，例如：用户点击网页会触发点击事件（click），用户在元素上移动会触发鼠标移动事件（mousemove）等。下面我们来定义一个点击事件，当我们点击一个按钮的时候，弹出"hello world"（demo03.html）
``` html
<button>按钮</button>
<script>
    var btn = document.querySelector("btn");
    btn.onclick = function(){
        console.log("hello world");
    }
</script>
```
我们将一个函数赋值给一个事件，当这个事件被触发的时候，这个函数就会被执行。

#### 四、操作属性
我们可以通过JavaScript获取和设置元素属性，例如input的value属性值，或者img的src属性。

首先我们来实现一个效果，在文本框中输入字符串，然后点击按钮用在控制台输出我们输入的字符串（demo04.html）
``` html
<input type="text">
<button>输出</button>
<script>
    var input = document.querySelector("input");
    var btn = document.querySelector("button");
    btn.onclick = function(){
        var text = input.value;    //获取input的value属性
        console.log(text);
    }
</script>
```
我们还可以通过赋值的方式为一个元素设置属性（demo05.html）。
``` html
<img src="images/img1.jpg" alt="">
<button>切换图片</button>
<script>
    var img = document.querySelector("img");
    var btn = document.querySelector("button");
    btn.onclick = function(){
        img.src = "images/img2.jpg";
    }
</script>
```
当点击按钮的时候，通过赋值的方式把另一张图片的地址赋值给img标签的src属性，就实现了图片切换的效果

#### 五、数学计算案例
下面我们来实现一个能完成数学计算的程序，页面有四个文本框和一个按钮，我们在第一个文本框输入一个数字，在第二个文本框输入一个操作符，第三个文本框再输入一个数字，然后当我们点击计算按钮的时候，会在第四个文本框计算出结果（demo06.html）,这个例子和我们学习switch语句的时候写的例子很像，但是那时候我们没有可操作的页面，现在我们把计算功能写在一个函数中。
``` html
    <input type="text" id="num1">
    <input type="text" id="sign">
    <input type="text" id="num2">
    <input type="text" id="result">
    <button>计算</button>
    <script>
        var num1 = document.querySelector("#num1");
        var sign = document.querySelector("#sign");
        var num2 = document.querySelector("#num2");
        var result = document.querySelector("#result");
        var btn = document.querySelector("button");
        btn.onclick = function(){
            var n = Number(num1.value);    //将字符串类型转换成数字类型
            var m = Number(num2.value);
            var r = count(n,sign.value,m);
            result.value = r;
        }
        function count(n,s,m){    //n是第一个数字，s是操作符，m是第二个数
            switch(s){
                case "+":return n+m;break;
                case "-":return n-m;break;
                case "*":return n*m;break;
                case "/":return n/m;break;
            }
        }
    </script>
```
