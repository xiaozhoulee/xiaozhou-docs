## 第09章：数组

#### 一、数组的基本概念
数组是一个特殊的对象，对象的概念是属性的集合，而数组是元素的有序集合。我们可以通过一个中括号来定义一个数组（demo01.html）。
``` js
var numlist = [1,3,5,7,9];
```

在上面的代码中我们定义了一个数组，数组有5个元素，五个元素多是数值型。我们可以通过数组的变量名配合中括号来获取数组的元素

``` js
var numlist = [1,3,5,7,9];
console.log(numlist[0]);   //输出数组的第一个元素
console.log(numlist[4]);   //输出数组的第五个元素
```

中括号中的数字叫做数组的下标，我们可以通过下标获取数组的元素，要注意的是下标是从零开始的。

数组是特殊的对象，它有自己的属性和方法，其中最常用的属性就是length，它可以获取数组元素的个数。

``` js
var numlist = [1,3,5,7,9];
console.log(numlist.length) // 输出5
```

数组中的元素可以是任意类型的，但是我们一般将数组中的元素设置成相同数据类型，下面是一个字符串类型的数组（demo02.html）,我们通过下标分别输出数组的所有元素。

``` js
var friends = ["小明","小亮","小红"];
console.log(friends[0]);  //小明
console.log(friends[1]);  //小亮
console.log(friends[2]);  //小红
console.log(friends.length);  //3
```


#### 二、遍历数组
数组中的元素可能很多，元素的个数也可能发生变化，所以需要输出数组所有元素的时候，手动用下标输出每一个值，我们需要一种更自动的方法来查询数组中的每一个元素，这就是遍历数组，我们可以使用for循环来遍历数组（demo03.html）。

``` js
var friends = ["小明","小亮","小红","张三","李四","王五"];
for(var i = 0;i<friends.length;i++){
    console.log(friends[i]);     //输出数组中的所有元素
}
```

使用for...in语句同样可以遍历数组（demo04.html）
``` js
var friends = ["小明","小亮","小红","张三","李四","王五"];
for(var i in friends){
    console.log(friends[i]);
}
```

#### 三、数组的常用方法

* 添加元素push（demo05.html）：
我们可以使用push方法想数组中追加元素
``` js
var friends = ["小明","小亮"];
friends.push("小红");
console.log(friends);   //输出["小明","小亮","小红"];
```

我们可以使用for语句循环箱数组中插入内容（demo06.html）：
``` js
var arr = [];
for(var i = 0;i<10;i++){
    arr.push(i);
}
console.log(arr);   //输出[0,1,2,3,4,5,6,7,8,9]
```

* 数组连接成字符串join（demo07.html）：
通过join方法可以将数组链接成一个字符串
``` js
var friends = ["小明","小亮","小红","张三","李四","王五"];
var str1 = friends.join();    //用逗号分隔
var str2 = friends.join("");  //没有分隔
var str3 = friends.join("+"); //用加号分隔
console.log(str1);
console.log(str2);
console.log(str3);
```


