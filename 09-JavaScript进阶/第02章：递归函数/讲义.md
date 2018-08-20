## 第02章：递归函数

### 一、递归函数
在学习递归函数之前，我们来做一个简单的练习，编写一个函数，参数是正整数n，调用这个函数时，倒序输出1~n之间所有的整数，包括n；例如输入5，会输出5,4,3,2,1。（demo01.html）
``` js
function showNumber(n){
    for(var i = n;i>=1;i--){
        console.log(i);
    }
}
showNumber(5);
```
这个例子和我们学习for语句的时候写的例子很像，当然，我们用while语句也很容易写出这个例子。示例代码的区别是在循环语句外面套了一层函数。那我们除了用循环语句，还有什么方法实现循环的效果呢，答案是递归函数，简单的说就是在函数体内再次调用这个函数（demo02.html）。
``` js
function showNumber(n){
    console.log(n);
    if(n > 1){
        showNumber(--n);
    }
}
showNumber(5);
```
首先我们在函数内输出n的值，然后判断n是否大于1，如果大于1，再次调用这个函数并把n-1的值传入函数，继续输出。这就是递归函数。在很多情况下，递归函数和循环语句可以解决相同的问题，但是某些特殊情况下，用递归解决问题更适合。

### 二、计算阶乘
下面我们编写一个函数，参数是一个正整数，返回值是计算这个正整数的阶乘，我们首先用循环语句解决这个问题，代码如下（demo03.html）。
``` js
function count(number){
    var result = 1;
    for(var i = 1;i<=number;i++){
        result *= i;
    }
    return result;
}
console.log(count(5));    //120
```
我们通过一个for循环计算出参数的阶乘，但是我们还可以通过递归函数来解决这个问题，而且使用递归递归函数会更简单（demo04.html）。
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

### 三、对象克隆
上一章我们讲解了对象的浅克隆，浅克隆函数代码如下
``` js
function clone(obj){
    var newobj = {};   
    for(var i in obj){ 
        newobj[i] = obj[i];  
    }
    return newobj;    
}

```
如果克隆的对象所有属性值都是原始类型，这样的方法是没有问题的，但是如果对象的属性有引用类型，那么我们克隆的对象属性值存储的引用是指向同一个对象的，这样就没有完全实现对象的克隆，两个对象仍然存在关系，我们可以通过递归函数来实现对象的深度克隆（demo05.html）
``` js
var student = {
    name:"xiaoming",
    age:12,
    friends:[{name:"小白"},{name:"小黑"}],
}
function cloneObj(obj){
    var newObj = obj instanceof Array?[]:{};
    for(var i in obj){
        if(obj[i] instanceof Object){
            newObj[i] = cloneObj(obj[i]);
        }else{
            newObj[i] = obj[i];
        }
    }
    return newObj;
}

var newStudent = cloneObj(student);
student.friends[0].name = "小兰";
console.log(newStudent);
console.log(student);
```
