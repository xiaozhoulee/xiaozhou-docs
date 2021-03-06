# html与css入门

## 前言

学习前端当然要从html和css开始，但是对零基础的同学来说，学html和css绝对不要用太久的时间，五天就刚刚好，五天之后要把学习重心放到JavaScript上，等JavaScript的学习初见成效之后，再回头看html和css的问题，学习效率会更高。

最初学习html和css，一定要学最基础、最常用的知识点，把那些枝枝叶叶零散的内容都放一边。新手学习效率低，很大程度就是被哪些零散的知识点和数不胜数的坑搞得焦头烂额。前五天的学习任务如下所示：

第一天：熟悉html标签和css样式的基本概念
第二天：掌握盒子模型
第三天：掌握浮动布局
第四天：掌握定位
第五天：学会如何切图和还原设计稿
接下来我们就一起说说每一天的学习内容和学习方法，让广大的新手朋友少走一些弯路。



一、html基础
首先看最基本的html代码：

<!DOCTYPE html>
<html lang="en">
<head> <meta charset="UTF-8"> <title>Document</title>
</head>
<body>

</body>
</html>

看到上面这一堆代码您能想到什么问题？
什么是文档声明？
什么是编码？
不同版本的html都该如何声明？
文档声明不同对浏览器解析html有何影响？
新手根本不用花费时间去解决上面这几个问题。不是因为这几个问题不用掌握，而是这些问题不必占用您正规的学习时间。在您认真学习一个月之后，这些问题可以在地铁上、公交上、甚至是临睡前的床上来解决，用手机查查就好了，何必一本正经对着电脑查这些东西，简直就是浪费时间（更何况有些过时的问题，说不定过几个月都已经不是问题了）。

上面的问题不用考虑，那考虑什么？

对于第一天的学习，您只要知道下面的内容就足够了。

html元素由开始标签和结束标签组成（部分元素只有开始标签）
在开始标签中可以给元素添加属性
标签之间可以嵌套再一起，有些可以作为容器，有些用来显示内容。
我们在网页中的看到的内容，都在body标签之内。
记住常用的八个标签就足够做网页了，没错，前期的学习就用八个标签。
上面都是html最基本的概念，接下来我们看一下要掌握哪八个标签：

<h*></h*>：标题标签，h1~h6,我们暂且当做一个标签看待。
<p></p>:段落标签
<ul></ul>：无序列表
<li></li>：列表元素
<a></a>：超链接，href属性可以指定跳转的位置
<img>：图卡，src属性可以设置图片源文件
<div></div>：容器，了解css后在进一步理解容器的概念。
<span></span>：容器，了解css后在进一步理解容器的概念。
市面上看到的大部分网页效果，都可以用这八个标签来实现，所以不要去尝试了解更多的标签，那样只会让自己的学习进度陷入泥潭。

这里需要特别说一下表单元素和表格元素：

表单元素：用于提交数据
表格元素：用于显示数据（古老的html有用表格布局的，现在已经淘汰多年了）
关于数据，又是一个长长的话题，新手第一天就不要碰表单和表格了。很多知识点都是学着学着就水到渠成，特意去学反而会影响进度。

现在开始动手做了，把这八个标签堆到一个网页里，看看他们都是什么样的，关注点如下：

标题标签h1~h6有何区别
段落和列表是如何显示内容的
如何让一个a标签跳转到指定网站
如何显示一张图片
再看看div和span长什么样
第一天html的学习就结束了，就是这么简单。

如果自己写遇到困难，可以关注微信公众号：晓舟报告，下载案例源码，里面有注释的哟！



二、css基础
学习css，我们通过以下几个问题，一步一步的入门css。

1、css写在什么位置？

答：第一天，css就写在html页面中head标签内的style标签里，不要考虑外部样式和内联样式，如果您不知道什么是外部样式和内联样式，那也无所谓，反正和今天的学习没关系。

<!DOCTYPE html>
<html lang="en">
<head> <meta charset="UTF-8"> <title>Document</title> <style> /* css就写这里 */ </style>
</head>
<body>

</body>
</html>

2、css的语法是什么样的？
选择器{ 属性名:属性值; 属性名:属性值; 属性名:属性值;
}

语法就像上面写的这样，很简单。
3、css选择器是什么

我们用css为html元素添加样式，选择器就是为了明确我们要给哪一个原指定样式。

css的选择器有很多（css2本来就很多，css3又加了很多），但是对于广大新人朋友，第一天记住三个足矣，他们分别是：

类选择器：".class"
元素选择器: "element"
层级选择器: "selector1 selector2"
（如果对选择器有疑惑，可以下载源码查看案例）

对于css属性，我们也不必掌握太多以下几个就够了

color
background-color
width
height
font-size
text-align
border
(如果您还未掌握上面的内容，案例源码中仍然有css属性的详细说明)



三、总结
第一天的任务，记住7个html标签、3个css选择器和7个css属性。

零基础的朋友可能真的需要一整天的时间，将所有的内容亲自写一遍，而有一定基础的人，用十分钟的时间扫一遍这个大纲就都掌握了，所以，学习时间是因人而异的，我主要目的就是帮助迷茫的新人规划处一套详细、并且可执行的学习路径，不管它是不适合您，如果您读了，我都希望您能在这里有所收获。

您可能说这是一篇教程，但是更确切第说，它是学习内容和学习方法的总结，它的主旨在于提升您的学习效率，把握学习重点。让广大的新手朋友知道该学什么，不该学什么，学到什么程度。

自学碰到坑是难免的，有什么问题可以关注我的微信公众号：晓舟报告，有问题可以留言，一般我都会回复，同时也感谢您的关注。而且关注公众号也可以下载配套的联系内容源码。



四、资料
如果您在练习的过程中经常出现问题，可以关注微信公众号：晓舟报告，获取案例源码（有注释）和学习素材，以便于您更高效地学习，本期为您准备的案例源码有如下7个：

demo01:标题标签
demo02:段落标签
demo03:超片接
demo04:图片
demo05:列表
demo06:css选择器
demo07:常用的css属性


五、尾声
看懂和掌握是两个概念，如果您真的希望掌握一个知识，千万不要停留在能看懂，一定要自己动手把它写出来！这是非常重要的。

如果您觉得有收获，请不要吝惜一个小小的【赞】，如果喜欢类似的文章，可以关注微信公众号：晓舟报告，第一时间获取文章。

（下一篇我们将介绍“盒子模型”）