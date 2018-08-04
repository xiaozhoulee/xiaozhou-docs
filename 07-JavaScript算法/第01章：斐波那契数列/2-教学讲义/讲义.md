# 第01章：斐波那契数列

### 一、斐波那契数列的基本概念

斐波那契数列是一组数字，这组数字第一个数字和第二个数字都是1，从第三个数字开始，每个数字都是其前两个数字的加和。具体数列如下所示：

**斐波那契数列：**1,1,2,3,5,8,13,21......

我们本章的内容就是利用JavaScript生成一个斐波那契数列。

### 二、递归函数

在学习斐波那契数列之前，我们首先需要学习一下递归函数。

首先我们做一个练习：编写一个函数，参数是正整数n，调用这个函数时，倒序输出1~n之间所有的整数，包括n；例如输入5，会输出5,4,3,2,1。

我们可以通过for循环来实现这个功能，代码如下所示（demo01.html）

``` js
function showNumber(n){
    for(var i = n;i>=1;i--){
        console.log(i);
    }
}
showNumber(5);
```

我们也可以通过递归函数实现这个功能，递归函数简单的说就是在函数体内调用它自己，代码如下所示（demo02.html）：

``` js
function showNumber(n){
    console.log(n);
    if(n > 1){
        showNumber(--n);
    }
}
showNumber(5);
```

递归函数非常常见的一个案例就是地酸阶乘，代码如下所示（demo03.html）;

``` js
function count(number){
    if(number === 1){
        return number;
    }else{
        return number * count(number-1)
    }
}
console.log(count(5))
```
我们通过上面的代码成功计算出了结果，为了更方便地理解函数计算的过程，我们来手工编写一下递归计算的过程。
``` 
count(5)
5 * count(4)
5 * 4 * count(3)
5 * 4 * 3 * count(2)
5 * 4 * 4 * 2 * count(1)
5 * 4 * 4 * 2 * 1
```
就这样，我们通过递归成功的得到了结果。

#### 三、计算斐波那契数列

掌握了递归函数，我们记下来用递归函数计算菲薄拿起数列某一位的值，代码如下所示（demo04.html）

``` js
function fibo(n){
    if(n===1 || n===2){
        return 1;
    }else{
        return fibo(n-2) + fibo(n-1);
    }
}    
console.log(fibo(6));
```

在上面的函数中，我们输入正整数n，就会输出斐波那契数列第n个数的值。

得到了斐波那契数列值后，我们再利用这个函数，输出整个斐波那契数列，代码如下所示（demo05.html）

``` js
function fibo(n){
    if(n===1 || n===2){
        return 1;
    }else{
        return fibo(n-2) + fibo(n-1);
    }
}    

function getFibo(n){
    var fiboList = [];
    for(var i = 1;i<=n;i++){
        fiboList.push(fibo(i));
    }
    return fiboList;
}

console.log(getFibo(8));
```

通过上面的代码，我们便可以成功第输出斐波那契数列了。

#### 四、授课说明

* 本科目内容难度有所提升，希望教师在授课的过程中，与学员多多交流。
* 最后一个案例，如果输入的参数过大（大于30），结算结果会相当耗时。所以建议输入30以内的数字。