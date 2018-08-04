## 第03章：闭包

### 一、作用域

JavaScript在浏览器中运行的时候，window对象是全局对象，也就是说script便签里的所有变量，函数，都是window对象的属性和方法。我们来看一个简单的例子（demo01.html）

``` js
var number = 100;
var fun = function(){
    return '我是一个函数'
};
console.log(window.number);  //100
console.log(window.fun());   //我是一个函数
```

在代码中，number是window对象的属性，fun是window对象的方法，我们称num和fun为全局变量，也就是说在程序的任何位置都能访问num和fun。他们在浏览器打开的时候就存在于内存中，直到浏览器关闭才会被销毁。

我们在开发的过程中很多时候会用到局部变量，这些变量只有在指定代码执行的时候它才存在，执行完之后就会被销毁（demo02.html）

``` js
function fun(){
    var number = 100;
    console.log(number);  //100
}
console.log(number);      //报错
```

在上面的代码中，函数内可以直接输出number变量，但是函数外部不能输出，因为函数中的变量是局部变量，只有在函数内可以被访问。在JavaScript中，只有函数有自己的作用域。

在很多编程语言中有块级作用域的概念,if语句，for语句这样的程序都会有自己的作用域，但是在JavaScript（ES5）中，没有块级作用域的概念。所有在if,for语句中的变量都是是全局变量。（demo03.html）

``` js
if(true){
    var number = 100;
}
console.log(number);  //100
for(var i = 0;i<10;i++){

}
console.log(i);       //10
```

在JavaScript中函数是可以嵌套函数的（demo04.html）

``` js
function outFun(){
    var n = 10;
    function inFun(){
        var m = 100;
        console.log(n)  //100
    }
    inFun();
    console.log(m)  //报错
}
outFun();
```

在函数嵌套的过程中，嵌套后会形成一个作用域链，内部函数可以访问外部函数的变量，而外部函数不能访问内部函数的变量。也就是说作用域链中，底层可以访问上层，上层不能访问底层。

虽然我们不能直接访问内部函数的变量，但是我们可以通过返回值的方式在函数外部得到函数内部的变量值（demo05.html）。

``` js
function fun(){
    var number = 100;
    return number;
}
console.log(fun());   //100
```

### 二、闭包的基本概念
闭包是指有权访问另一个函数作用域中的变量的函数，也就是说，当函数嵌套的时候，我们可以叫内部函数为闭包，利用闭包的特性,我们可以通过返回值的方式得到内部函数中的变量（demo06.html）。

``` js
function outFun(){
    var n = 10;        //外部不能访问
    function inFun(){
        var m = 100;
        return m;
    }
    return inFun();    //通过返回值的方式把内部函数中的变量暴露出去
}
console.log(outFun());  //100
```

上面的代码中，我们通过两个返回值把内部函数的变量暴露出来，让全局作用域可以获取到这个变量，我们还可以进一步改变代码，让内部函数暴露，而不是让内部函数中的变量暴露（deno07.html）。

``` js
function outFun(){
    var n = 10;
    function inFun(){
        var m = 100;
        return m;
    }
    return inFun;
}

var inf = outFun();   //将内部函数赋值给一个变量
console.log(inf());
```

我们将内部函数做为外部函数的返回值，然后调用外部函数，将返回值，也就是内部函数赋值给一个变量，这个这个变量就是内部函数，我们调用内部函数就可以或得内部函数中的变量。

### 三、立即执行函数
我们之前使用的函数都是先定义，后调用。在JavaScript中我们可以定义一个函数，让他在定义的时候直接调用，我们叫他立即执行函数（demo08.html）

``` js
(function(){
    var str = "hello world"
    console.log(str);
})()
```

在上面的代码中，我们创建了一个局部变量，并且利用立即执行函数直接输出这个变量。通过这样的方式，我们可以封装一段代码，让我们暴露需要暴露的变量和方法，将那些没有必要再全局获取的变量封装在立即执行函数中（demo09.html）

``` js
var module = (function(){
    var number1 = 100;
    var number2 = 10;

    var fun1 = function(){
        return '函数1'
    }

    var fun2 = function(){
        return '函数2'
    }

    return {
        number1:number1,
        fun1:fun1
    }
})()

console.log(module.number1);
console.log(module.number2);   //undefined
console.log(module.fun1()); 
console.log(module.fun2());    //报错
```

如上面代码所示，我们利用立即执行函数和闭包的特性将代码封装到了一个，立即执行函数中，并将返回值赋值给了module变量，然后分别输出module的属性和方法，可以看出，我们可以获取到立即执行函数暴露出来的值，不能获取到我们隐藏在立即执行函数中的值，我们可以称这个立即执行函数为一个模块，return的内容就是这个模块暴露出来的接口。

