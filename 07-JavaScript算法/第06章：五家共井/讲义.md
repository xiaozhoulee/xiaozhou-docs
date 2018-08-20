# 第01章：五家共井(实践课)

### 一、题目

现有五家共用一口井，每家都有一个绳子，绳子的长度如下所示：

* 第一家绳子的长度 * 2 + 第二家绳子的长度 = 井深
* 第二家绳子的长度 * 3 + 第三家绳子的长度 = 井深
* 第三家绳子的长度 * 4 + 第四家绳子的长度 = 井深
* 第四家绳子的长度 * 5 + 第五家绳子的长度 = 井深
* 第五家绳子的长度 * 6 + 第一家绳子的长度 = 井深

已知绳子长度和井的深度都是正整数，用JavaScript计算出井深最少是多少。

### 二、题目分析

首先我们假设井深为dep，五家的绳子长度分别为len1,len2,len3,len4,len5，可以得到如下等式

* len1 * 2 + len2 = dep
* len2 * 3 + len3 = dep
* len4 * 4 + len4 = dep
* len5 * 5 + len5 = dep
* len6 * 6 + len1 = dep

这是一个五元一次方程，我们先在等式中消去dep，可以得到等式

* len2+len3 / 2 = len1
* len3+len4 / 3 = len2
* len4+len5 / 4 = len3
* len5+len1 / 5 = len4

通过上面四个等式可以知道如下内容：

* len3是2的倍数
* len4是3的倍数
* len5是4的倍数
* len1是5的倍数

这样，我们就可以通过这些知识的条件来编写我们的JavaScript程序了。

### 三、代码演示

``` js
function getValue(){
    var dep = 0;
    var len1 = 0;
    var len2 = 0;
    var len3 = 0;
    var len4 = 0;
    var len5 = 0;

    len5 = 4;
    //循环增加len5的值
    while(true){
        len1 = 5;

        //循环增加len1的值
        while(true){
            
            len4 = len5 + len1 / 5;
            if(len4 % 3 !== 0){
                len1 += 5
                continue; //如果len4不是3的倍数，结束本次循环进入下一次循环
            }
            len3 = len4 + len5 / 4;
            if(len3 % 2 !== 0){
                len1 += 5
                continue; //如果len3不是2的倍数，结束本次循环进入下一次循环
            }
            len2 = len3 + len4 / 3;
            if(len2 + len3 / 2 === len1){
                dep = len1 * 2 + len2;
                return dep;
            }
            if(len2 + len3 / 2 < len1){
                break;   //len1的值过大，需要切换至外部循环
            }
            len1 += 5
        }
        len5 += 4;
    }
}

console.log(getValue())
```

代码解析：

* 我们用两层循环分别假设len1和len5的值，通过尝试找到最终的结果。
* 外层循环测试的是len5的值，内层循环测试的是len1的值。
* 有量两个只，我们就可以通过上一部分中的等式计算出井的深度

### 三、授课说明

* 本章为实践课，题目发给学员之后，需要给予学员充足的思考时间。
* 推导的过程很重要，最终的代码只是实现了推导的过程而已。