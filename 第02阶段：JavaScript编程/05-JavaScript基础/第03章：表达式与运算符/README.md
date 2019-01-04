## 第03章：表达式与运算符

### 一、表达式的基本概念
表达式是JavaScript语言中的一个短语，就像我们自然语言中说的一个词或一句话一样。浏览器会将这个短语计算出一个结果，这个结果我们叫它表达式的返回值，下列代码列举了最简单的表达式
``` js
"hello";   //返回值是字符串类型 hello。
100;       //返回值是数值类型 100。
```

### 二、运算符的基本概念
运算符可以将简单的表达式连接成复杂的表达式，例如我们上节课学到的字符串连接就是一个带有“+”运算符的表达式。
``` js
"hello" + "world";  //返回值是字符串类型 hello world;
```

再次回顾上节课的代码，我们将上述表达式的值赋值给一个变量。
``` js
var str = "hello" + "world";  
/*
我们通过“=”（赋值运算符）将带有“+”的表达式的返回值赋值给了str。str的值就变成了 字符串“hello world”
*/
console.log(str);    //调用表达式，后续讲函数的时候会深入学习。
```

我们可以按运算符操作数进行分类，可以将运算符分为一元运算符、二元运算符、三元运算符，像加减乘除这些运算，将左右两边的简单表达式连接成一个略赋值的表单式，就是二元运算符。

我们还可以按照运算符的操作类型就行分类，可以分为算数运算符、比较运算符、逻辑运算符、赋值运算符等。下面分别进行介绍。

### 三、算数运算符

|运算符|操作|类型|
|------|----|--------|
|+|加|num,num=>num|
|-|减|num,num=>num|
|*|乘|num,num=>num|
|/|除|num,num=>num|
|%|求余|num,num=>num|
|++|自增1|num=>num|
|--|自减1|num=>num|

通过上面的表格我们可以了解到算数运算符的作用和返回值类型，其中加减乘除运算已经在前面的课程中有所了解，下面对求余、自增、自减进行讲解（demo01.html）

* 求余表达式的返回值是两个数相除的余数
``` js
var result = 10 % 3;  //10除以3，得3与1 所以10 % 3表达式的值是1；
console.log(result);  //输出结果为1
```

* 自增表达式可以使一个变量在原值的基础上加1
``` js
var num1 = 0;
num1++;  
console.log(num);

```

* 自减表达式可以使一个变量在原值的基础上减1
``` js
var num2 = 0;
num2--;
console.log(num2);
```

**自增运算符和自减运算符可以向上面的例子，写在变量的后面，也可写在变量的前面，写在前后意义不同（demo02.html）**

``` js
var num1 = 10;
var num2 = 10;
console.log(num1++);  //输出10
console.log(++num2);  //输出11
```

自增和自减运算符如果写在变量后面，那么表达式的返回值是变量本身，然后变量自增或自减，运算符写在变量前面，那么变大时的返回值直接就是变量自增或自减后的结果。



### 四、比较运算符
|运算符|操作|类型|
|------|----|--------|
|>|大于|num,num=>bool|
|>=|大于等于|num,num=>bool|
|<|小于|num,num=>bool|
|<=|小于等于|num,num=>bool|
|==|判断相等|any,any=>bool|
|!=|判断不等|any,any=>bool|
|===|判断恒等|any,any=>bool|
|!==|判断非恒等|any,any=>bool|

通过上面的表格我们可以了解到比较运算符的作用和返回值类型，如果比较成立，返回true，如果不成立返回false（demo03.html）。

``` js
console.log(10>20);
console.log(10>=20);
console.log(10<20);
console.log(10>=20);
console.log(10==20);
console.log(10!=20);
```

相等和恒等不同，当两个值的数据类型不相同的时候，他们可能相等，但不会恒等（demo04.html）。

``` js
console.log(10 == "10");  //true
console.log(10 === "10"); //false
```


### 五、逻辑运算符
|运算符|操作|类型|
|------|----|--------|
|&&|逻辑与|any,any=>any|
||||逻辑或|any,any=>any|
|!|逻辑非|bool,bool|

逻辑运算符进行布尔运算，经常和关系运算符一起配合使用，逻辑运算符将多个关系表达式组合起来组成一个更复杂的表达式。

* 逻辑与（&&）（demo05.html）
``` js
var x = 10;
var y = 20;
console.log(x>30 && y>30); //第一个表达式为false直接返回false
console.log(x<30 && y>30); //第一个表达式是true,第二个为false,返回false
console.log(x<30 && y<30); //第一个表达式是true,第二个也是true,返回true
```

* 逻辑或（||）（demo06.html）
``` js
var x = 10;
var y = 20;
console.log(x>30 || y>30); //第一个表达式为false,第二个也是false，则返回false
console.log(x<30 || y>30); //第一个表达式是true，直接返回true
console.log(x>30 || y<30); //第一个表达式是false,第二个也是true,返回true
```

* 逻辑非（!）（demo07.html）
``` js
var x = true;
var y = false;
console.log(!x);   //非真为假
console.log(!y);   //非假为真
```


### 六、赋值运算符
|运算符|操作|类型|
|------|----|--------|
|=|赋值|any,any=>any|
|+=|加并赋值|any,any=>any|
|-=|减并赋值|any,any=>any|
|*=|乘并赋值|any,any=>any|
|/=|除并赋值|any,any=>any|

在JavaScript中，我们已经熟悉了用“=”赋值，其他的赋值如代码所示（demo08.html）
``` js
var x = 10;
var y = 20;

x += y  //同x = x + y
x -= y  //同x = x - y
x *= y  //同x = x * y
x /= y  //同x = x / y
```

