## 第09章：ES2015（二）

### 一、模板字符串

模板字符串是增强版的字符串，使用反引号表示，它可以当做普通的字符串使用，也可以定义多行字符串或者字符串中嵌入变量。

**多行字符串**

用单引号或是双引号表示的字符串在编辑的过程中只能在一行显示，若要在多行显示需要在每一行结尾添加一个斜杠，这样的编辑方式对开发者显然不够友好，我们可以使用模板字符串的功能换行编辑字符串，代码如下所示（demo01.html）

``` js
let str = `hello
world`;
console.log(str);
```

因为使用了末班字符串，所以hello world如上所示并没有报错。

**字符串中定义变量**

我们在开发的过程中经常会遇到在字符串中嵌入变量的情况，以往我们都是使用字符串连接的方式。有了模板字符串，我们可以在字符串中添加变量或对象的属性，代码如下所示（demo02.html）

``` js
const student = {
    name:"小明",
    age:2
}
console.log(`我是${student.name}，我今年${student.age}岁了`);
```

这样的表达方式可以更友好地将代码呈现给开发者。

**模板字符串调用函数**

我们不仅可以将变量和对象的属性嵌入模板字符串，还可以将还是嵌入模板字符串，并显示出函数的返回值，代码如下所示（demo03.html）

``` js
let x = 'hello';
let y = 'world';
function fn(x,y){
    return x + y;
}
console.log(`程序员最常用的一句话是${fn(x,y)}`);
```

如果模板字符串中嵌入的值是需要通过计算而得到的，我们就可以使用上面的方法来完成这个功能。

### 二、函数

在ES2015中扩展了很多函数的功能，我们在本节讲解两个最常用的功能：

* 设置函数参数默认值
* 箭头函数

**参数默认值**

在ES2015版本之前，我们可以通过下面的方法设置函数参数的默认值，代码如下所示（demo04.html）

``` js
//es5设置默认值
function fun1(x,y){
    x = x || 100;
    y = y || 200;
    return x + y;
}
console.log(fun1())
```

如果逻辑或运算符的左侧是undefined，那么表达式的值就是右侧的值，如果左侧不是undefined，那么表达式的值就是左侧的值，我们可以通过这种方法设置函数参数的默认值，但是这种方法看上去并不是那么友好，所以ES2015为函数增加了设置默认值的功能。代码如下所示（demo05.html）

``` js
//es6设置默认值
function fun2(x=100,y=200){
    return x + y;
}
console.log(fun2(1000,2000))
```

这样设置默认值更加直观，让代码更加容易让人理解。

**箭头函数**

在ES2015中增加了箭头函数的语法，我们可以使用=>来定义函数，而不必每次都要写一个function。具体写法如下所示（demo06.html）

``` js
var fun = x=>x*x;
console.log(fun(6));
```

箭头的前面是函数的参数，箭头的后面是函数的返回值，程序运行后会在控制台输出36。

如果函数没有参数，并且函数体不止一行代码，可以用如下的代码表示（demo07.html）

``` js
let fun = ()=>{
    let x = 10;
    let y = 20;
    return x + y;
}
console.log(fun());
```
如上面的代码所示，箭头的左侧我们添加一个小括号，箭头的右侧用一个花括号表示一个代码块。如果程序有多个参数，我们同样可以将多个参数卸载箭头右侧的小括号中。

**箭头函数进阶**

箭头函数不仅简化了函数的写法，让函数中的this指针变得更人性化。我们来看下面的例子（demo08.html）

``` js
const person = {
    firstName:"lee",
    sing:function(){
        console.log(this.firstName)
    },
    singDelay:function(){
        setTimeout(function(){
            console.log(this.firstName);
        },2000)
    }
}

person.sing();
person.singDelay();
```

在上面的代码中，我们可以看到第一个输出的名字是lee，第二个输出的名字是undefined。因为setTimeout参数中定义的函数是window对象调用的，setTimeout参数中的回调函数里面的this指向的是window对象，所示this.firstName的值是undefined。如果希望上面的代码能正常输出两个lee，可以如下所示（demo09.html）

``` js
const person = {
    firstName: "lee",
    sing: function () {
        console.log(this.firstName)
    },
    singDelay: function () {
        let self = this
        setTimeout(function () {
            console.log(self.firstName);
        }, 2000)
    }
}

person.sing();
person.singDelay();
```

在上面的代码中，我们定义了一个变量self用来存储指向person的this，这样我们就可以正确地输出lee。但是这样的写法看起来有给我们增加了一些复杂度，我们可以用箭头函数来结局额这个问题，代码如下所示（demo10.html）

``` js
const person = {
    firstName: "lee",
    sing: function () {
        console.log(this.firstName)
    },
    singDelay: function () {
        setTimeout(() => {
            console.log(this.firstName);
        }, 2000)
    }
}

person.sing();
person.singDelay();
```

在上面的代码中，成功地输出了两个lee，这是因为箭头函数中的this，不是调用函数时的this指向的对象，而是定义函数时this指向的对象，定义函数的时候，this指向的是person而不是window，所以这里可以正确地输出结果。

### 三、授课说明

* 模板字符串是一个非常实用的功能，易学易用。
* 本章的难点是箭头函数关于this的知识点，需要教师详细地讲解。





