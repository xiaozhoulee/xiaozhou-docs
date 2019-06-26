## 第05章：循环语句

条件语句的代码可以被想象成是一条条分支的路径，而循环语句的代码则是程序路径的一个回路，可以让一部分代码重复执行。JavaScript中的循环语句有for语句和while语句。

### 一、for语句
for语句的语法如下：
``` js
for(初始值;布尔值;计数器){
    //语句块
}
```
在for语句中，如果布尔值是true,就会一直执行语句块中的内容，为了防止死循环，需要有一个计数器，当数值达到指定值，布尔值就会变成false，循环便停止了，下面的示例代码使用for循环输出0~9九个数字（demo01.html）

``` js
for(var i = 0;i<10;i++){  
    // i的初始值是0
    // 判断i是否小于10，如果小于10则执行花括号中的代码
    // 每次执行完花括号中的代码后，i的值加1
    console.log(i);
}
```
通过上面的例子我们进一步理解了for语句的用法，下面我们来做一个联系，利用for循环语句输出100以内所有正整数的加和（demo02.html）

``` js
var sum = 0;                 //sum用来存储循环过程中正整数的加和
for(var i = 1;i<=100;i++){
    sum += i;
}
console.log(sum);
```


### 三、while语句
while语句语法如下所示：
``` js
while(bool){
    //bool为true,循环执行
}
```
当bool为true的时候，花括号中的内容会循环执行。为了防止死循环，需要在循环的过程实现类似for计数器的功能，让循环在有限的次数内定制，下面我们使用while语句输出0~9是个数字（demo03.html）
``` js
var n = 0;
while(n<10){
    console.log(n);
    n++;
}
```
在每次循环的过程中都会让n的值加1，这样当n的值等于10，循环便停止，下面我来使用while语句输出100以内所有正整数的加和（demo04.html）
``` js
var n = 0;
var sum = 0;
while(n<=100){
    sum += n;
    n++;
}
console.log(sum);
```


#### 四、continue
continue可以结束本次循环，直接进入到下一次循环，例如我们用for循环语句来实现输出0~5,7~9九个数字（跳过6）（demo05.html）
``` js
for(var i = 0;i<10;i++){
    if(i===6){
        continue;
    }
    console.log(i);
}
```
上面的代码通过判断，实现当i的值为6的时候，跳过本次循环，直接接入下一次循环。下面我们使用continue来实现计算100以内所有不能被7整除的正整数加和（demo06.html）
``` js
var sum = 0;
for(var i = 0;i<=100;i++){
    if(i%7===0){
        continue;
    }
    sum += i;
}
console.log(sum);
```

#### 五、break
在学switch语句中，我们已经解除到了break，它可以让分支语句在结束一个case之后，跳出switch语句，break同样可以用在循环语句当中，当代码执行到break时，直接结束循环（demo07.html）
``` js
for(var i = 0;i<10;i++){
    if(i===6){
        break;
    }
    console.log(i);
}
```
如上面的代码所示，当控制带输出5之后，循环结束。
