## 第02章：变量与数据类型

### 一、变量的基本概念
代码如下所示（demo01.html）:
``` js
var n = 100;
var s = "hello world";
```

变量可以理解为是存储数据的容器。如代码所示，我们可以通过var声明一个变量，var后面的英文字母就是变量名，变量名是自定义的，在一定的规则下我们可以随意命名（下一部分我们来讲命名规则）。

“=”在编程语言中不是等于的意思，而是赋值的意思，也就是把“=”右侧的数据赋值给左侧的变量；简单的说，就是把“=”右侧的值装到左侧的容器里。
每行结尾的分号并不是必须写的，但是为了代码更加规范，我们要求每行代码的结尾都要写分号，用以表示本行结束（注意必须是英文半角的分号）。
在代码中，第一行的数据没有引号，第二行的数据有引号，为什么存在这样的差异，我们在下一节数据类型中会详细讲解。

### 二、变量的命名规范
代码如下所示（demo02.html）:
``` js
var age = 17;
var num1 = 198;
var num2 = 200;
var price = 25.6;
var _name = "小明";
var $fruit = "苹果";
var firstName = "Lily";
var message = "I love javascript";
```

* 变量名只能包括字母、数字、下划线和美元符号，切不能以数字开头。若以数字开头或包含其他特殊符号，系统会报错。
* 变量首字母小写，且要有语义，如右图所示，年龄用age，价格用price，消息用message。随意命名变量虽然不会报错，但会严重影响代码的可读性。
* 推荐使用驼峰命名，如果变量名由多个单词组成，则第二个单词开始首字母大写。

### 三、输出变量的值
代码如下所示（demo03.html）:
``` js
var number = 100;
var message = "hello world";
console.log(number);
console.log(message);
```

通过var定义变量后，再次使用变量名，代表的就是变量中存储的值，我们可以通过console.log将变量的值在控制台输出。注意：输出的数字在控制台是蓝色，输出的字符在控制台是黑色，那么在程序中，数字和字符有什么区别？这就是下一节要讲的数据类型。

### 四、数据类型
代码如下所示（demo04.html）:
``` js
var number = 100;
var string = "hello world";
var boolean = true  //false;
var n = null;
var u = undefined;
var obj = {};
```

在之前的学习中我们接触到了数值和字符串，他们的区别是数据类型不同。
在JavaScript语言中共有六种数据类型，分别是数字、字符串、布尔、null（空）、undefined（未定义），还有对象。

|类型名称 |值|说明|
|---------|------|----------------|
|数值     |100;3.14  |不管是整数还是小数，都是数值型。|
|字符串   |"hello";"100"  |双引号或单引号中的值是字符串。|
|布尔     |true;false  |布尔值只有两个值，代表真和假。|
|空       |null|空值只有null，后续讲解。|
|未定义   |undefined  |未定义值只有undefined，后续讲解|
|对象     |{}  |后续讲解|

### 五、四则运算
在四则运算中，需要特别注意的，乘法在代码中用的是“*”，除法在代码中用的是“/”。我们将运算的结果分别赋值给了四个变量，并在控制台输出,示例代码如下（demo05.html）。

``` js
var num1 = 10 + 20;
var num2 = 10 - 20;
var num3 = 10 * 20;
var num4 = 10 / 20;
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
```

我们可以直接用数字做四则运算，也可以将数字赋值给变量，再对变量进行运算操作，得到的结果和上一个案例相同，示例代码如下（demo06.html）。

``` js
var num1 = 10;
var num2 = 20;
var result1 = num1 + num2;
var result2 = num1 - num2;
var result3 = num1 * num2;
var result4 = num1 / num2;
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
```


### 六、字符串链接

又用到了“+”运算符，但是和之前不同，之前“+”左右两边是数值，可以通过“+”计算数值的结果，这个例子“+”两边是字符串，那么将会将两个字符串连接，然后赋值给str3,示例代码如下（demo07.html）。

``` js
var str1 = "hello";
var str2 = "world";
var str3 = str1 + str2;
console.log(str3)
```

