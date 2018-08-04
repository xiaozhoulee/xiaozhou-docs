## 第10章：原型对象

### 一、构造函数

说构造函数的概念之前我们应该先了解类的概念，类与对象的概念息息相关，我们在讲对象的概念的时候说过，一只猫是一个对象，一个人是一个对象，一章桌子也是一个对象，那么我们平时说的猫，人，桌子在没有特定指出是哪一个对象的时候，我们其实说的就是类。我们身边有人类，猫也是一个类，任何有相同属性和方法的对象我们都可以称他们为一个类。

在很多面向对象语言中都有类的概念，但是在JavaScript（ES5）中没有类，而我们可以通过构造函数来模拟一个类的概念，下面我们来模拟一个猫类（demo01.html）。

``` js
function Cat(){
    this.name = "miaomiao";
}
var cat = new Cat();
console.log(cat.name);

```

构造函数的函数名首字母大写（后续的描述中，类和构造函数代表相同的意思），可以通过在函数中的this为类设置属性和方法，我们在上面的代码中为猫这个类定义了一个name属性，并赋值为"miaomiao"，类创建完成后，我们可以通过new关键字创建这个类的实例。例如cat这个变量就是Cat类的一个实例。

我们可以通过传参的方式，在实例化对象的时候为对象设置属性（demo02.html）

``` js
function Cat(name,age){
    this.name = name;
    this.age = age;
}
var cat = new Cat("miaomiao",2);
console.log(cat.name);
console.log(cat.age);
```

我们还可以给类添加方法（demo03.html）

``` js
function Cat(name,age){
    this.name = name;
    this.age = age;
    this.sayName = function(){
        console.log("我是"+this.name);
    }
}
var cat = new Cat("miaomiao",2);
cat.sayName();
```

### 二、原型对象

每一个构造函数都有一个prototype属性，这个属性指向一个原型对象，这个原型对象上的所有属性和方法都可以被这个构造函数的实例使用（demo04.html）。

``` js
function Cat(name,age){
    this.name = name;
    this.age = age;
}

Cat.prototype.sayName = function(){
    console.log("我是"+this.name);
}

var cat = new Cat("miaomiao",2);
cat.sayName();
```

像sayName这样的方法，我们一般把他写在原型对象上，而不是直接写在构造函数上。

### 三、基于原型的继承 

我们可以定义两个类，一个是父类，一个是子类，子类的实例可以使用父类所有属性和方法，这就是基于原型的继承，代码如下（demo05.html）

``` js
function Animal(){}

Animal.prototype.sayName = function(){
    console.log('我是'+this.name);
}

function Cat(name,age){
    this.name = name;
    this.age = age;
}

Cat.prototype = new Animal();

var cat = new Cat("miaomiao",2);
cat.sayName();
```