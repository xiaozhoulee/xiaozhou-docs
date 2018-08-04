# 第11章：鸡兔同笼（实践课）

### 一、题目

有若干只鸡和兔子放在一个笼子中，从上面数有35个头，从下面数有94只脚，问笼子中有多少只鸡和多少只兔子。

* 请用JavaScript编写一个函数，计算鸡和兔子的个数
* 头的个数和脚的个数是参数，修改个数同样可以用这个函数计算出鸡和兔子的个数。

### 二、题目分析

我们已知的是鸡和兔子都有一个头，鸡有两只脚，兔子有四只脚，我们本章列举两种算法结算鸡和兔子的个数。

* 假设鸡有n个，从1到35（头的个数）遍历n的值，直到找到正确的个数位置。
* 先让鸡和兔子都抬起两只脚，剩下的所有脚就是兔子的两只脚，剩下的脚的个数除以2就是兔子的个数，进而在计算鸡的个数。

### 三、代码演示

**第一种方法**

我们先用第一种方法计算鸡和兔子的个数，代码如下（demo01.html）

``` js
function getNumber(heads,foots){
    var result = {
        chickNumber:0,
        rabitNumber:0
    }
    var chickNumber = 0;   //鸡的个数
    var rabitNumber = 0;   //兔子的个数
    while(chickNumber < heads){  //如果鸡的个数小于头的个数，从0开始遍历
        rabitNumber = heads - chickNumber;   //头的个数减去鸡的个数就是兔子的个数
        if(chickNumber * 2 + rabitNumber * 4 === foots){  //如果脚的数量与鸡和兔子的数量相匹配，则结果正确，结束循环。
            break;
        }
        chickNumber++;
    }
    result.chickNumber = chickNumber;
    result.rabitNumber = rabitNumber;
    return result;
}    

console.log(getNumber(35,96))
```

我们在用第二种方法来计算鸡和兔子的个数，代码如下所示（demo02.html）

``` js
function getNumber(heads,foots){
    var result = {
        chickNumber:0,
        rabitNumber:0
    }
    var chickNumber = 0;
    var rabitNumber = 0;

    //鸡和兔子都抬起两只脚，剩余的就是所有兔子的另外两只脚。
    var rabitFoots = foots - heads * 2;
    
    //计算兔子的个数
    rabitNumber = rabitFoots / 2;

    //计算鸡的个数
    chickNumber = heads - rabitNumber;

    result.chickNumber = chickNumber;
    result.rabitNumber = rabitNumber;

    return result;
}

console.log(getNumber(35,96))    
```

显然，第二种计算方法效率更高。