# 第02章：查找算法

### 一、查找方法概述

查找算法简单地说就是在一个集合中查找指定的元素，本节我们主要讲解两种查找算法。

* 顺序查找
* 二分查找


### 二、顺序查找

顺序查找是最简单，最容易理解的查找算法，我们可以从集合的第一个原始开始遍历，直到找到指定元素为止，但是这种查找算法的确定就是循环次数过多，如果被查找的原始在集合的最后面，那么集合有多少个元素我们就将遍历多少次。

**查找指定元素**

首先我们用顺序查找完成一个查找指定元素的功能，我们首先定义一个数组，如下所示：

``` js
var arr = [3,5,8,12,15,11,20,6];
```

然后为在Array原型属性上添加一个search方法，参数就是我们要查找的值，如果找到指定元素，方法返回元素的索引，如果没有找到，返回-1，代码如下所示（demo01.html）

``` js
var arr = [3,5,8,12,15,11,20,6];
Array.prototype.search = function(val){
    for(var i = 0;i<this.length;i++){
        if(this[i] === val){
            return i
        }
    }
    return -1;
}

console.log(arr.search(12));
console.log(arr.search(100));
```

在上面的代码中，我们通过for循环遍历整个数组，我们也可以通过map方法遍历数组，代码如下所示（demo02.html）

``` js
var arr = [3, 5, 8, 12, 15, 11, 20, 6];
Array.prototype.search = function (val) {
    var result = -1;
    this.map(function(value,index){
        if(value === val){
            result = index;
        }
            
    })
    return result;
}

console.log(arr.search(12));
console.log(arr.search(100));
```

两种写法的思路完全相同，都没有正确地找到指定元素。

**查找最大值**

我们也可以利用顺序查找的方法找到集合中的最大值，代码如下所示（demo03.html）

``` js
var arr = [3, 5, 8, 12, 15, 11, 20, 6];
Array.prototype.searchMax = function(){
    var max = {             //初始化一个对象，value为最大值，index为最大索引，初始为第一个原始
        value: this[0],
        index:0
    }
    for(var i = 1;i<this.length;i++){
        if(this[i]>max.value){   //如果遍历的过程中发现更大的值，替换max
            max.value = this[i];
            max.index = i;
        }
    }
    return max;
}

console.log(arr.searchMax());
```

在上面的代码中，我们给Array的原型属性上添加了searchMax方法，调用这个方法就能找到集合中的最大值。

### 三、二分查找

在上一节中我们已经说了顺序查找的弊端，如果被查找的原始在集合的尾部，那么我们的算法效率将变得很低，接下来我们讲解二分查找，就可以很好地解决这个问题。

首先需要确定的是，二分查找只适用于已经排好顺序的集合中。二分查找代码如下所示（demo04.html）

``` js
var arr = [1, 3, 5, 7, 9, 15, 19, 21, 25, 55, 79];
Array.prototype.search = function (val) {
    var upperBound = this.length - 1;  //找到数组最高位索引
    var lowerBound = 0;                //找到数组最低位索引，初始状态为零
    while (lowerBound <= upperBound) { //如果低位索引小于等于高位索引
        var mid = Math.floor((upperBound + lowerBound) / 2); // 取低位与高位索引的中间值
        if (this[mid] < val) {
            lowerBound = mid + 1;      //重新设置低位索引
        }
        else if (this[mid] > val) {
            upperBound = mid - 1;      //重新设置高位索引
        }
        else {
            return mid;                //如果找到结果，返回当前原始的索引
        }
    }
    return -1;                         //如果没有找到，返回-1
}

console.log(arr.search(15));
console.log(arr.search(100));
```

在二分查找中，我们并不是遍历集合中的所有元素，而是找到集合中间的原始与指定元素对比，如果大于指定元素，则目标一定在集合的前半段，反之则在后半段，这样我们通过不断地将集合拆分成两部分与指定元素对比，大大减少了比较的次数。提高了代码运行效率。


### 四、授课说明

二分查找是本节的难点，需要教师详细地讲解代码执行的过程。

