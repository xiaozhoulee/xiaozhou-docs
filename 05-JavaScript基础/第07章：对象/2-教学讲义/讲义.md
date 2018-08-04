## 第09章：对象

#### 一、对象的基本概念
在现实生活中，所有东西都可以看成对象，比如一台电脑，一个房子，一只猫，一个人，对象有他自己的属性，比如电脑有颜色，房子有尺寸，猫和人多有年龄。

在JavaScript中，对象是属性的集合，他也是一种数据类型。

#### 二、自定义对象
我们可以通过一对花括号来创建一个对象
``` js
var obj = {};
```

在花括号中，我们可以为对象定义属性，下面我们来写一个猫的对象（demo01.html）。
``` js
var cat = {               //定义一个对象cat,它有两个属性，name和age
    name:"喵喵",
    age:2
}
//有两种方法可以获取到对象的属性值：1、对象名.属性名；2、对象名["属性名"]
console.log(cat.name);    
console.log(cat["name"]);
```


#### 三、方法
通过上面的例子我们可以知道name的属性值是字符串类型，age的属性值是数值类型。其实对象的属性值可以是任何数据类型，甚至可以是函数，如果对象的属性值是函数，那么我们叫这个属性为这个对象的方法（demo02.html）。

``` js
var cat = {
    name:"喵喵",
    age:2,
    sayName:function(){
        console.log("我是喵喵");
    }
}
cat.sayName();
```

上面的代码可以在控制台输出“我是喵喵”，其中sayName是cat的方法。


#### 四、this关键字
在上面的例子中，我们可以给cat的那么属性重新赋值，代码如下（demo03.html）；
``` js
var cat = {
    name:"喵喵",
    age:2,
    sayName:function(){
        console.log("我是喵喵")
    }
}
cat.name = "小白";
console.log(cat.name);    //输出"小白"
cat.sayName();            //输出"我是喵喵"

```

因为猫的名字已经改变，但是sayName方法里面的名字并没有一同变化，我们可以通过this关键字实现修改了名字，方法里面的名字也会改变。

在对象的方法中使用this，可以指向这个对象本身，代码如下（demo04.html）
``` js
var cat = {
    name:"喵喵",
    age:2,
    sayName:function(){
        console.log("我是"+this.name)
    }
}
cat.sayName();            //输出“我是喵喵”
cat.name = "小白";
console.log(cat.name);    //输出"小白"
cat.sayName();            //输出“我是小白”
```

#### 五、方法传参
给对象的方法传递参数和给函数传递参数是一样的，下面我们来定义一个会算数的猫（demo05.html）

``` js
var cat = {
    name:"喵喵",
    age:2,
    sayName:function(){
        console.log("我是"+this.name)
    },
    count:function(num1,num2){
        console.log(num1+num2);
    }
}

cat.sayName();
cat.count(10,20);
```
我们在之前代码的基础上，有添加了一个count方法可以让猫可以计算两个数的加和，我们只要传入实参，猫就能计算结果。