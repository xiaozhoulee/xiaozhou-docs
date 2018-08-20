## 第01章：原始类型与引用类型

### 一、原始类型与引用类型的基本概念

在JavaScript基础课程中我们学习了JavaScript有六种数据类型：

* 数值型
* 字符串型
* 布尔型
* Null
* Undefined
* 对象

我们可以把这六种数据类型按存储方式分为两类

* 原始类型（或叫值类型）：数值、字符串、布尔、Null、Undefined
* 引用类型：对象

原始类型赋值给变量，遍历存储的是这个值本身，而一你用类型赋值给变量，变量存储的是一个引用，这个引用会指向内存中的这个对象。

### 二、原始类型与引用类型的差异

接下来，我们在实际案例中展示一下原始类型与引用类型的区别：

**原始类型与引用类型赋值的区别**

实例代码（demo01.html）

``` js
var str1 = "hello world";
var str2 = str1;
str1 = "hello javascript";

console.log(str1);   //hello javascript
console.log(str2);   //hello world
```

字符串是原始类型，str1和str2两个变量存储的都是字符串类型的数据，所以对其中一个变量赋值不会影响第二个变量。

下面我们将程序中的字符串换成对象，再来看看这个例子（demo02.html）。

``` js
var obj1 = {name:'xiaoming'};
var obj2 = obj1; 
obj1.name = 'xiaohong';

console.log(obj1.name);    //xiaohong
console.log(obj2.name);    //xiaohong
```
程序最后输出的两个值是相同的，但是我们只是将obj1的name属性赋值为xiaohong，并没有将obj2的name属性赋值为xiaohong，为什么他们都变成了同一个值？这就是原始类型与引用类型的区别：变量存储的原始类型，仅仅是存储它的值，所以我们将存储原始类型的变量重新赋值，不会影响其他变量，但是变量存储引用类型的时候，情况有所改变，变量并不是存储这个对象本身，而是存储这个对象的引用，而这个引用可以指向这个变量本身，所以当我们将obj1赋值给obj2的时候，其实是让这两个变量的引用同时指向一个对象，这样当我们改变这个对象的时候，两个变量都会有变化。


**原始类型与引用类型比较的区别**

接下来我们来看一下原始类型与引用类型比较的时候有什么来区别（demo03.html）。

``` js
var str1 = 'hello world';
var str2 = 'hello world';
console.log(str1 == str2);     //true 

var obj1 = {name:'xiaoming'};
var obj2 = {name:'xiaoming'};
console.log(obj1 == obj2);     //false
```
在上面的代码中，两个字符串都是'hello world'他们比较后的返回值是true,但是两个对象name属性都是'xiaoming',比较后的返回值却是false，这也是原始类型与引用类型本质上的却别导致的，原始类型存的是值，比较的也是值，如果值相等，则返回true，如果值不等，则返回false，引用类型存的是应用，比较的也是引用，如果两个引用指向同一个对象，返回true，指向不同对象，则返回false，上面的例子中，两个对象虽然属性相同，但明显是不同的两个对象，他们就像两个重名的学生一样，即使有相同的名字，也不会是同一个人，所以返回值是false。

**原始类型与引用类型传参的区别**

下面我们分别将原始类型和引用类型当做参数传给一个函数，看看有什么样的区别（demo04.html）

``` js
var str = "hello world";
function fun(s){
    s = "hello javascript";
}

fun(str);
console.log(str);   //hello world
```
在上面的代码中我们将变量str传给函数fun，在fun内部将参数将另一个字符串赋值给参数，然后在函数外面输出str,发现str的值并没有变，然后我们再来看下面这个例子（demo05.html）
``` js
var obj = {name:'xiaoming'};
function fun(o){
    o.name = 'xiaohong'
}

fun(obj);
console.log(obj.name);  //xiaohong
```
将参数换成引用类型后，我们发现再次输出obj的时候，它的值已经变成了函数中赋的值，这是因为原始类型传参的时候，实参是形参的副本，改变形参的时候不会影响实参，而应用类型传参的时候，形参和实参的对象都指向一个引用，这样当我们修改形参的值的时候，其实是操作了内存中的对象，所以函数外部变量的值也就跟着变化了。

上面我们说了原始类型与引用类型的区别，在实际开发的过程中，有一种情况，我们需要得到一个对象的备份。例如我们有一个对象:
``` js
var student = {
    name:'xiaoming',
    age:2,
    sex:'male'
}
```

### 三、对象的浅度克隆

现在希望或得一个student对象的克隆对象，这两个对象所有属性都相同，我们修改其中一个对象的时候不会影响另一个对象。我们来编写一个函数，参数是一个对象，返回值是这个对象的克隆对象。

我们首先需要了解一下for...in语句（demo06.html）
``` js
var student = {name:'xiaoming',age:2,sex:'male'};
for(var i in student){
    console.log("属性"+i);
    console.log("值"+student[i]);
}
```
我们通过for...in语句可以遍历对象中的属性和属性值，这样我们就可以很容易地实现对象克隆的功能（demo07.html）。
``` js
var student1 = {name:'xiaoming',age:2,sex:'male'};

function clone(obj){
    var newobj = {};    //创建一个新对象
    for(var i in obj){  //遍历传进来的参数对象
        newobj[i] = obj[i];  //将传进来的参数的属性和属性值赋值给新对象的同名属性。
    }
    return newobj;      //返回新创建的对象
}

var student2 = clone(student1);
student1.name = 'xiaohong';
console.log(student1.name);
console.log(student2.name);
```
在上面的代码中，我们成功复制了student1,当我们修改student1的时候，student2不会改变。但是在上面的例子中，对象的所有属性值都是原始类型，如果将对象换成下面的对象
``` js
var student = {
    name:'xiaoming',
    age:2,
    sex:'male',
    friends:["Lily","lucy"]
}
```
然后再用我们的clone方法克隆这个对象，就会发现，当我们改变friends属性的时候，两个对象都会改变。所以这样的clone方法只能叫“浅度克隆”，如果希望对象中所有属性都能被克隆，那么需要“深度克隆”，“深度克隆”我们会在下一章讲解。



