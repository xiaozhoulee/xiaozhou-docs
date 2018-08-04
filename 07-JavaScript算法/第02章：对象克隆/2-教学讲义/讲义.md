# 第03章：对象克隆

### 三、对象的浅度克隆

现在希望或得一个student对象的克隆对象，这两个对象所有属性都相同，我们修改其中一个对象的时候不会影响另一个对象。我们来编写一个函数，参数是一个对象，返回值是这个对象的克隆对象。

我们首先需要了解一下for...in语句（demo01.html）
``` js
var student = {name:'xiaoming',age:2,sex:'male'};
for(var i in student){
    console.log("属性"+i);
    console.log("值"+student[i]);
}
```
我们通过for...in语句可以遍历对象中的属性和属性值，这样我们就可以很容易地实现对象克隆的功能（demo02.html）。
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
然后再用我们的clone方法克隆这个对象，就会发现，当我们改变friends属性的时候，两个对象都会改变。所以这样的clone方法只能叫“浅度克隆”，

### 二、对象的深度克隆


如果克隆的对象所有属性值都是原始类型，这样的方法是没有问题的，但是如果对象的属性有引用类型，那么我们克隆的对象属性值存储的引用是指向同一个对象的，这样就没有完全实现对象的克隆，两个对象仍然存在关系，我们可以通过递归函数来实现对象的深度克隆（demo03.html）

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

### 三、授课说明