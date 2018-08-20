## 第05章：ES2015（三）

### 一、面向对象语法

**复习基于原型的对象**

在ES2015版本之前，JavaScript是没有类的概念的，我们可以使用构造函数来模拟一个类，这在我们之前的课程中已经讲解过了，这里我们简单复习一下。

创建一个猫的构造函数（demo01.html）

``` js
function Cat(name,age){
    this.name = name;
    this.age = age;
}

var cat = new Cat("miaomiao",2);
console.log(cat.name);
```

在上面的代码中，我们定义了一个构造函数Cat，通过new关键字创建了一个变量cat，cat有两个属性，name和age。我们可以直接输出cat.name;

我们可以通过原型属性为构造函数添加方法，例如我们给这个Cat添加一个shout方法，让这只猫可以叫。代码如下所示（demo02.html）

``` js
function Cat(name, age) {
    this.name = name;
    this.age = age;
}

Cat.prototype.shout = function(){
    console.log("喵喵喵！")
}

var cat = new Cat("miaomiao", 2);
cat.shout();
```

这样猫就有了shout方法，可以调用shout方法让猫叫。

通过上面的代码，我们可以模拟一个类的概念，但是这样的写法与真正面相对象语言的写法相比，确实更难以理解。所以ES2015中增加了类的概念。

**class**

我们可以用class来定义一个类，然后可以在这个类中定义构造函数，方法和属性。代码如下所示（demo03.html）

``` js
class Cat{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    shout(){
        console.log("喵喵喵");
    }
}

let cat = new Cat("miaomiao",2);
cat.shout();
```

demo03的这段代码与demo02的代码功能是完全一样的，但是通过class关键之定义一个猫的类，让这个类更像是一个整体，而非一个个零散的prototype组合起来的一个功能。


### 二、Promise

**基本语法**

Promise是ES2015新增加的一个类，我们可以使用new Promise创建一个promise对象。通过promise我们可以让异步的代码更像是同步的代码。我们先看看promise的基本语法（demo04.html）。

``` js
new Promise((resolve,reject)=>{
    if(/*如果异步执行成功*/){
        resolve();
    }else{
        reject();
    }
})
```

上面是一段伪代码，并不能正常运行，但是通过上面的代码可以看到，如果异步程序正确地执行，将会调用resolve,如果不能正确执行，将调用reject,我们结合实际的案例来看看promise的应用。


**实际应用**

我们仍然是编写一个person的对象，person有两个属性分别是firstName和age，person有两个方法分别是sayName和sayAge分别会输出自己的名字和年两，但是输出的过程中我们使用延时的方式输出，代码如下（demo05.html）

``` js
var person = {
    firstName: "小明",
    age: 10,
    sayName() {
        setTimeout(() => {
            console.log(this.firstName)
        }, 3000)
    },
    sayAge() {
        setTimeout(() => {
            console.log(this.age)
        }, 2000)
    }
}
person.sayName();
person.sayAge();
```

上面是一段最简单的异步代码，sayName会延时3秒，sayAge会延时两秒，虽然我们先调用了sayName但是因为延时的关系，我们先得到的是age属性，那么在实际开发当中，我们经常会遇到这种异步编程的问题，那么如何实现先输出name，后输出age呢，我们可以用promise来实现这个功能，代码如下所示（demo06.html）

``` js
var person = {
    firstName: "小明",
    age: 10,
    sayName() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(this.firstName)
                resolve();
            }, 3000)
        })
    },
    sayAge() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(this.age)
                resolve();
            }, 2000)
        })
    }
}


person.sayName().then(() => {
    person.sayAge();
});
```

我们让sayName和sayAge两个方法都返回一个promise对象，这样在调用sayName之后就可以使用promise的then方法再次调用sayAge,这样当sayName成功执行之后才会执行sayAge，异步的程序就像同步的程序一样，按照我们希望的顺序执行了。


### 三、授课说明

* 本节讲解了最基本的面相对象语法，由于学员对面相对象的程序设计并不了解，所以关于继承的相关内容，本节内容并没有涉及。
* promise是难点。
