# 第04章：css选择器和常用属性


### 一、css概述

**css基本语法**

css(层叠样式表)控制着网页的样式，例如希望将一段文字设置成红色，或者设置一个图片的宽度和高度，都需要使用css。css有多种引入方式，我们今天讲的是嵌入式的css，讲css的代码写在head标签内的style标签中，css的基础语法如下所示：
``` html
<style>
    selector{
        property:value;
    }
</style>
```
* selector:选择器，选择器用来找到html中的指定元素；
* property:属性，设置我们希望改变元素的属性，比如颜色或宽度；
* value:属性值，设置我们改变属性的值，比如red(红色)；
* 选择器后是一对花括号；属性后用冒号；属性值后用分号

**css演示**

在下面的示例中，将使用css将h1标签中的文字设置成红色(demo01.html)

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        h1{       
            color:red;
        }
    </style>
</head>
<body>
    <h1>hello css</h1>
</body>
</html>
```
在上面的代码中，style标签中的h1是选择器，它找到了body内的h1标签，color指定了属性为文字颜色,red将color属性设置成红色。关于css的详细使用方法，我们后续课程会深入讲解。

### 二、css选择器
在上一节中已经对选择做了初步的讲解，我们可以通过选择器找到html元素，然后设置它的css属性，那么常用的选择器有哪些呢。

* **元素选择器**:找到html标签中的所有指定元素(同demo01.html)

``` css
h1{
    color:red;
}
```

* **类选择器**：通过html元素的class属性找到元素(demo02.html)

``` css
.info{
    color:red
}
```

* **id选择器**：通过html元素的id属性找到元素(demo03.html)

``` css
#info{
    color:red;
}
```
* **通配符选择器**：找到html元素中的所有元素(demo04.html)

``` css
* {
    color:red;
}
```

* **层级选择器**：找到指定html元素内的某个元素(demo05.html)

``` css
.sport li{
    color:red
}
```

### 三、css常用属性

css定义了大量的属性，我们不必记住所有的属性，只需要掌握常用的属性，上一节已经多次使用了color属性，本节我们继续学习更多的css属性。

**border属性**

* border-width
* border-style
* border-color

``` css
h1{
    border-width: 1px;   
    border-style: solid;
    border-color: red;
}
```


上面的代码分别设置了三个border属性(demo06.html),我们也可以简便地通过一行代码设置border的三个属性(demo07.html).


``` css
h1{
    border:1px solid red;
}
```

**其他属性**

通过上面两个例子大家可以看到h1的边框占满了整个浏览器宽度，为什么宽度不是文字的宽度的，这个在后续“元素的分类”章节会进一步讲解。

* 宽度和高度：可以通过width和height属性设置元素的宽度和高度
* 文字水平居中：text-align:center;
* 文字垂直居中：将行高line-height设置成元素高度，
* 设置背景色：backgroud-color属性可以设置元素背景色

实例代码如下(demo08.html)

``` css
h1{
    border:1px solid red;
    width:500px;   /*设置宽度*/
    height:300px;  /*设置高度*/
    text-align:center;    /*文字水平居中*/
    line-height: 300px;   /*文字垂直居中*/
    background-color: yellow;  /*设置背景色*/
}
```

### 三、授课说明
* 需要让学员熟练掌握本节列出的常用css选择器
* 需要让学员熟练掌握本节列出的常用css属性
