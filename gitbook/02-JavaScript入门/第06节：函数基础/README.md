## 第07章：函数基础

#### 一、函数的基本概念
函数是一个可执行的语句块，定义的时候不执行，调用的时候执行，使用"函数名()"的形式可以调用函数，语法如下所示：
``` js
function fun(){   //定义函数,函数名为fun
    //函数体
}
fun();            //调用函数
```
我们先来编写第一个最简单的函数，当这个函数执行的时候会在控制台输出"hello function"(demo01.html)
``` js
function fun(){
    console.log("hello function")
}
fun(); 
fun(); 
```
在上面的代码中我们定义了一个函数，并调用了两次，这样就会在控制台输出两次“hello function”。我们在编程的过程中，很多代码是需要多次使用的，我们可以把它们写在一个函数中，这样我们每次希望执行这些代码的时候，只需要调用这个函数，而不是复制-粘贴多次代码。


#### 二、传递参数
下面编写一个函数sum,输出10和20两个数之和，示例代码如下（demo02.html）
``` js
function sum(){
    var num1 = 10;
    var num2 = 20;
    var result = num1 + num2;
    console.log(result);
}
sum();
```

在上面例子中我们调用sum函数，可以成功在控制台输出计算结果，但是函数内部的代码是固定的，虽然可以多次使用，但是每次使用输出的都是10和20的加和，为了让函数更加灵活，我们希望实现一个函数可以计算任意两个数的加和，那么我们就需要了解函数是如何传递参数的。

下面一个简单的例子演示函数如何传递参数（demo03.html）。
``` js
function fun(str){
    console.log("hello" + str);
}
fun("world");
```
在定义函数的括号中，我们添加了一个参数str,这个参数叫做形参。它在函数内部像一个变量一样。但是在函数调用之前他是没有值的。当调用函数的时候，调用函数的括号中我们也添加了一个参数"world"，这个参数叫做实参，他可以是任意数据类型的值。函数被调用后，形参str被赋予了实参"world"的值，然后执行console.log便会在控制台输出"helloworld"

上面的函数有一个形参和一个实参，函数可以传递多个参数，用逗号间隔，代码如下（demo04.html）
``` js
function sum(num1,num2){
    console.log(num1 + num2);
}
sum(10,20);
```
当我们调用函数的时候，实参和形参是一一对应的，10对应的是num1,20对应的是num2,函数执行后会在控制台输出10和20的加和。

下面我们来编写一个函数，它有一个正整数参数n，当我们调用函数时，函数会输出包括n在内，1~n所有正整数的加和（demo05.html）
``` js
function sum(n){
    var sum = 0;
    for(var i = 0;i<=n;i++){
        sum += i;
    }
    console.log(sum);
}
sum(100);
sum(567);
```
我们通过一个函数规定了一种计算方式，我们使用函数的只要输入一个值，函数就会计算出一个准确的结果。

#### 三、函数的返回值
在上面的例子中，我们输入了一个参数，函数就可以在控制台输出我们希望得到的结果，但是在实际开发中，很多情况我们要的不是在控制台输出得到的结果，而单纯的只是为了获取这个值，那么我们就需要用到函数的返回值。

在函数中，我们可以通过return关键字指定一个返回值，函数有了return，当函数被调用的时候就可以把调用的结果赋值给另一个变量了。（demo06.html）。
``` js
function fun1(){
    
}

function fun2(){
    return "hello fun";
}

var str1 = fun1();
var str2 = fun2();

console.log(str1);  //输出undefined
console.log(str2);  //输出"hello fun"
```
在上面的例子中，函数fun1没有返回值，所有将fun1调用的结果赋值给str1,str1的值为undefined，函数fun2有返回值，返回值是"hello fun"，所以当fun2被调用后，将函数运行的结果赋值给str2,str2的值就是"hello fun"

下面我们来编写一个函数，让函数来计算四则运算的结果（demo07.html）

``` js
function count(num1,sign,num2){
    var result = 0;
    switch(sign){
        case "+":result = num1 + num2;break;
        case "-":result = num1 - num2;break;
        case "*":result = num1 * num2;break;
        case "/":result = num1 / num2;break;
        default:console.log("请输入真确的操作符")
    }
    return result;
}
console.log(count(10,"*",20));
```

