## 第08章：ES2015（一）

### 一、ECMAscript

ECMAscript简称ES，是JavaScript的标准，我们经常说的ES5，ES6等等，可以称作JavaScript的版本，我们在之前学过的所有JavaScript特性，都是基于ES5版本的，今天我们开始讲解的是ES6标准的特性。ES6已更名为ES2015，ES7等后续的版本，我们都可以统称为ES2015+。

### 二、变量和常量

我们之前一直使用var定义变量，在ES6版本中，我们可以使用let定义变量，下面我们来说说var与let的区别。

**块级作用域**

ES5只有全局作用域和函数作用域，没有块级作用域的概念，这带来了很多不合理的场景。看下面的代码（demo01.html）

``` js
for(var i = 0;i<10;i++){
    console.log(i); // 0-9
}
console.log(i);     // 10
```

因为没有块级作用域，所以我们在for语句的外面仍然能获取i的值，在实际开发中，这是一个不可理喻的场景，我们希望的是这个i只在for语句内有效，所以再ES6中添加了块级作用域的概念，我们可以用let声明变量，问题就解决了（demo02.html）。

``` js
for(let i = 0;i<10;i++){
    console.log(i); // 0-9
}
console.log(i);     // 报错 i is not defined
```

因为用let声明变量，变量只在块级作用域下有效，所以再for语句之外输出i会报错。

**不存在变量提升**

我们使用var定义变量会发生“变量提升”，我们来看下面的代码（demo03.html）

``` js
console.log(number);             //undefied
var number = 100;               

console.log(string);             //报错
let string = "hello world";
```

变量提升会导致我们在变量声明之前使用变量也不会报错，但是这个变量的值是undefined，这是不合理的，因为然我们要使用这个变量，那就应该提前声明，如果没有提前声明，就应该给予错误提示。所以再ES6中我们使用let声明变量，如果在声明变量前使用变量就会报错。

关于报错，有些同学会感觉不报错要比报错好，但实际开发中，如果程序运行与我们的语气不符，我们更希望看到错误信息，这样有利于我们更快地发现问题。

**不允许重复声明**

在ES5中，我们可以多次声明同一个变量（demo04.html）
``` js
var a = 10;
var a = 20;

let b = 10;
let b = 20;  //报错
```

但是多次声明是没有意义的，在ES6中，我们使用let声明变量限制了不能多次声明，如果多次声明同一个变量回报错。

**常量**

在ES6中，不仅有变量，还增加了常亮的概念，我们用const声明常亮，一旦声明，它的值就不能再改变（demo05.html）。

``` js
const PI = 3.1415926;
PI = 3                   //报错
```

我们说常亮不能再改变，说的是不能重新为这个常亮赋值，但是如果常亮存储的是一个对象，那我们是可以改变这个对象的属性的（demo06.html）。

``` js
const obj = {name:'小明'};
obj.name = '小红';
console.log(obj.name);   //小红
```


### 二、解构赋值

ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为结构赋值，解构赋值主要包括数组的结构赋值、对象的结构赋值、字符串的结构赋值、函数参数的结构赋值。

**数组的结构赋值**

代码如下（demo07.html）

``` js
//传统赋值
var num1 = 1;
var num2 = 2;
var num3 = 3;
//结构赋值
let [str1,str2,str3] = ["hello","world","javascript"];

console.log(str1);
console.log(str2);
console.log(str3);
```

**对象的结构赋值**

代码如下（demo08.html）
``` js
let {num1,num2} = {num1:100,num2:10};
console.log(num1);
console.log(num2);
```

**字符串的结构赋值**

代码如下（demo09.html）
``` js
let [a,b,c,d,e] = "hello";
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
```

**函数参数的结构赋值**

代码如下（demo10.html）

``` js
function fun([x,y]){
    return x + y;
}
var arr = [10,20];
console.log(fun(arr));
```

**调换两个元素**

代码如下（demo11.html）
``` js
let num1 = 10;
let num2 = 100;
[num1,num2] = [num2,num1];
console.log(num1);
console.log(num2);
```

### 三、授课说明

* 如果在开发的过程中使用ES2015标准，那么就可以彻底抛弃是用var来声明变量。
* 以前我们会将对象，或引入的模块声明为变量，若使用ES2015标准开发，则全部声明为常量。






