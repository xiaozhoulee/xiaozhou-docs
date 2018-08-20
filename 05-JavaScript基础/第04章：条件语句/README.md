## 第04章：条件语句

程序执行顺序有三种：按顺序执行、按条件执行、循环执行，之前我们课程中使用的示例代码都是按顺序执行的，本章我们讲解按条件执行的程序。

按条件执行的语句有if语句和switch语句，除此之外还有一个按条件执行运算符，本章也会讲解。

### 一、if语句
if语句是最基本的条件控制语句，它让JavaScript程序可以选择执行顺序，我们可以通过一个布尔值来控制一行语句是否执行，if语句有多种形式，下面我们一一介绍：
示例代码如下（demo01.html）
``` js
if(true)  
    console.log("执行代码");
```
在上面的代码中,if括号内的值如果是true,则执行第二行代码，如果是false，则不执行第二行代码。

if后面的括号内一般不会直接写一个布尔值，而是写一个表达式，示例代码如下（demo02.htl）

``` js
var num1 = 10;
var num2 = 20;
if(num1<num2)   //如果改成num1>num2,则不会输出下面的文字
    console.log("num1小于num2")
```

上面我们将的两个例子都是通过判断条件来执行一行代码，但是大多数情况，我们需要执行多行代码，那么我们需要在if后面加上一对花括号（demo03.html），并且，为了让代码块更直观，我们在以后的代码中，都会写if后面的花括号。

``` js
var num1 = 10;
var num2 = 20;
if(num1<num2){
    console.log("判断num1是否小于num2");
    console.log("num1小于num2");
} 
```

通过上面的例子，我们通过判断条件确定是否执行某一个代码块，下面我们通过if...else...语句实现：在两个代码块中，选择一个来执行（demo04.html）
``` js
    var num1 = 10;
    var num2 = 20;
    if(num1<num2){      
    //num1如果小于num2,表达式为true，输出if语句后的代码；num1如果大于num2,表达式为false,输出else语句后的内容
        console.log("num1小于num2");
    }else{
        console.log("num1大于num2");
    }
```

if...else语句可以判断两种情况下，需要执行哪些代码，如果需要判断的条件是三种情况，我们可以使用if...else if...语句(demo05.html)

``` js
var num1 = 10;
var num2 = 20;
if(num1<num2){
    console.log("num1小于num2");
}else if(num1>num2){
    console.log("num1大于num2");
}else if(num1===num2){
    console.log("num1等于num2");
}
```

我们可以通过修改num1和num2的值来判断输出哪一行语句。

**通过控制运算符来实现数学运算（demo06.html）**

``` js
var num1 = 10;
var num2 = 20;
var sign = "+";  //通过修改操作符，输出不同的结果
var result = 0;  //result用来存储计算的结果，现在设置一个初始值0
if(sign === "+"){
    result = num1 + num2;
    console.log(result)
}else if(sign === "-"){
    result = num1 - num2;
    console.log(result)
}else if(sign === "*"){
    result = num1 * num2;
    console.log(result)
}else if(sign === "/"){
    result = num1 / num2;
    console.log(result)
}else{
    console.log("请输入正确的运算符")
}
```

### 二、switch语句
if语句在程序执行的过程中创建一条分支，并且可以使用if...else if...语句来处理多条分支，然而当所有的分支都依赖于同一个表达式的值时，重复计算多条if语句中的条件是非常浪费时间的做法，switch语句正合适处理这种情况（demo07.html）。
```js
var num = 0;   //通过修改num的值控制执行哪行语句
switch(num){
    case 0:
        console.log("num的值是零");  //当n===0,执行
        break;
    case 1:
        console.log("num的值是一");  //当n===1,执行
        break;
    case 2:
        console.log("num的值是二");  //当n===2,执行
        break;
    case 3:
        console.log("num的值是三");  //当n===3,执行
        break;
    default:                         
        console.log("其他");         //当n的值不是0,1,2,3,执行
        break;
}
```

我们了解switch语句的语法，下面我们使用switch语句改写demo06,实现通过控制运算符来实现数学运算（demo08.html）。
``` js
var num = 0;   //通过修改num的值控制执行哪行语句
switch(num){
    case 0:
        console.log("num的值是零");  //当n===0,执行
        break;
    case 1:
        console.log("num的值是一");  //当n===1,执行
        break;
    case 2:
        console.log("num的值是二");  //当n===2,执行
        break;
    case 3:
        console.log("num的值是三");  //当n===3,执行
        break;
    default:                         
        console.log("其他");         //当n的值不是0,1,2,3,执行
        break;
}
```


### 三、条件运算符
如果是简单的判断，我们可以使用条件运算符

``` js
表达式?第一个值:第二个值
```

如果表达式为true,表达式的返回值是第一个值，如果表达式为false,那么表达式的返回值是第二个值,示例代码如下所示（demo09.html）

``` js
var num1 = 10;
var num2 = 20;
var result = num1 > num2 ? 100 : 200;
//如果num1大于num2，条件表达式的值为100，若num1小于等于num2时，条件表达式的值为200；
console.log(result);
```


