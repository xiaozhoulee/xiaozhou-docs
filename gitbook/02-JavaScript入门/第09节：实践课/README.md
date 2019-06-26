## 第09章：实践课
本章将对之前的JavaScript理论课程的综合的练习

#### 一、弹出框方法
为了模拟客户端的输入和输出，我们在这里使用浏览器的弹出框。浏览器的弹出框方法有三个，分别是alert、prompt、confirm，我们来一个个学习。
* alert是最简单的弹出框，我们在之前的课程中使用过，它可以向用户显示一条消息，并等待用户关闭对话框（demo01.html）。
``` js
alert("hello world");
```

* confirm也会向用户显示一条消息，但是用户可以通过点击“确定”或“取消”按钮，并返回一个布尔值。
``` js
var result = confirm("点确定返回true,点取消返回false");
console.log(result);   //点击不同按钮，控制台输出结果不同
```

* prompt也可以像用户显示一条消息，等待用户输入字符串后，返回这个字符串，如果用户点击取消，则返回null。
``` js
var result = prompt("请输入你的名字：")
console.log(result);   
```

#### 二、数学计算
我们利用上面弹出框来实现一个数学计算的功能,步骤如下：
1. 弹出输入框，输入第一个数字
2. 弹出输入框，输入操作符
3. 弹出输入框，输入第二个数字
4. 弹出对话框，显示计算结果
5. 如果输入错误会有相应的错误提示

上面是我们的程序的需求，我们来一步步完成这个功能。首先，我们先实现弹出框的功能，为了确定我们输入的内容被成功获取，我们将输入的内容在控制台输出（demo04.html）。
``` js
var num1 = Number(prompt("请输入第一个数字"));   //为了方便计算，将获取的字符串转换成数值类型
var sign = prompt("请输入+-*/中的任意操作符");
var num2 = Number(prompt("请输入第二个数字"));
console.log(num1);
console.log(sign);
console.log(num2);
```

我们已经成功的获取到了需要计算的数字和操作符，下面我们要编写一个用来实现四则运算的函数帮助我们计算记过（demo05.html）。
``` js
var x = 10;
var y = 20;
var sign = "+";
var result;

function count(n,s,m){    //n是第一个数字，s是操作符，m是第二个数
    switch(s){
        case "+":return n+m;break;
        case "-":return n-m;break;
        case "*":return n*m;break;
        case "/":return n/m;break;
    }
}

result = count(x,sign,y);
console.log(result);
```
count函数就是我们要的函数，它可以实现通过两个数字和一个操作符作为参数，然后返回值是计算的结果。上面我们已经对函数进行了测试，可以实现计算功能。下一步，我们需要将函数放到我们提示框功能内。并通过它计算出结果（demo06.html）。
``` js
var num1 = Number(prompt("请输入第一个数字"));   //为了方便计算，将获取的字符串转换成数值类型
var sign = prompt("请输入+-*/中的任意操作符");
var num2 = Number(prompt("请输入第二个数字"));
var result;

function count(n,s,m){    //n是第一个数字，s是操作符，m是第二个数
    switch(s){
        case "+":return n+m;break;
        case "-":return n-m;break;
        case "*":return n*m;break;
        case "/":return n/m;break;
    }
}

result = count(num1,sign,num2);
alert(result);
```

上面我们已经实现了1~4的需求，但是现在的程序还很脆弱，如果我们随意输入的话，程序并不会给出友好的提示，所以我们需要为程序添加一些对错误输入的提示消息。

