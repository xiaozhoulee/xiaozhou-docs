## 第12章：DOM操作

#### 一、节点的分类
* 元素节点
* 属性节点
* 文本节点
上一节课我们讲解了获取元素节点，操作属性节点。本节课我们讲解添加和删除元素节点和编辑文本节点。

#### 二、文本节点
在html中我们有一个h1标签和一个按钮，h1标签内已经有了一段文本。当我们点击按钮的时候，在h1标签中插入“hello world”（demo01.html）
``` html
<h1>内容：</h1>
<button>添加文本节点</button>
<script>
    var h1 = document.querySelector("h1");
    var btn = document.querySelector("button");

    btn.onclick = function(){
        var textNode = document.createTextNode("hello world");
        //createTextNode方法可以创建一个文本节点
        h1.appendChild(textNode);
        //appendChild方法可以将textNode节点添加到h1标签中。
    }
</script>
```

在DOM种还有另一个属性可以更方便地获取和设置文本节点，这个属性是innerHTML,我们写一个简单的例子来测试innerHTML属性（demo02.html）

``` html
<h1>内容：</h1>
<button>添加文本节点</button>
<script>
    var h1 = document.querySelector("h1");
    var btn = document.querySelector("button");
    btn.onclick = function(){
        h1.innerHTML = "hello world";
        //设置h1的文本节点，innerHTML的内容会完全覆盖原节点的内容
    }
</script>
```

对比着两种方法，第一种方法需要创建文本节点，然后通过appendChild方法将节点追加到之前文本内容的后面，第二种方法则是直接用innerHTML覆盖之前文本节点的内容。如果要实现demo01的功能，需要改写一下事件内的代码（demo03.html）
``` js
var str = h1.innerHTML;//获取文本内容
h1.innerHTML =str + "hello world"; //原文本内容与新文本内容连接
```

#### 三、创建和添加元素节点
上一节我们讲解了如何获取和设置文本节点，本节讲解如何创建和添加元素节点。创建原始节点可以使用createElement方法，添加元素节点仍然可以用appendChild方法。接下来我们来一步一步完成一个任务列表的功能，html代码如下所示：
``` html
<button>添加节点</button>
<ul>
    <li>香蕉</li>
    <li>苹果</li>
    <li>鸭梨</li>
</ul>
```
我们要是先一个功能，当点击按钮的时候，在列表中添加一个li元素，代码如下（demo04.html）

``` js
var btn = document.querySelector("button");
var ul = document.querySelector("ul");
btn.onclick = function(){
    var li = document.createElement("li"); //创建一个元素节点，li元素
    ul.appendChild(li); //在ul元素中添加li元素
}
```
在这个案例中，我们已经成功地在ul标签中添加了li元素，但是li元素并没有文本节点，我们进一步改进点击事件中的内容（demo05.html）：

``` js
var li = document.createElement("li"); 
li.innerHTML = "鸭梨";
ul.appendChild(li); 
```
通过上面的代码，我们已经可以在ul中添加带有文本节点的li元素了，但是文本节点是固定的“鸭梨”，我们还可以进一步通过一个文本框，让用户自己填写要插入的内容（demo06.html）

``` js

```

#### 四、删除元素节点
我们可以通过removeChild方法删除元素,下面的例子我们来实现点击按钮，删除h1标签的效果（demo07.html）
``` html
<button>删除</button>
<div class="box">   
    <h1>待删除的内容</h1>
</div>
<script>
    var btn = document.querySelector("button");
    var box = document.querySelector(".box");
    var h1 = document.querySelector("h1");
    btn.onclick = function(){
        box.removeChild(h1);
    }
</script>
```
通过上面的代码可以知道，删除一个元素需要知道他的父级元素，然后通过父级元素的removeChild方法删除子集元素，那么如果不确定删除的元素的父级是哪有个元素，我们该如何获取元素的父级元素呢，可以使用parentNode方法，我们之前爱来改写上面的代码demo08.html

``` html
<button>删除</button>
<div>   
    <h1>待删除的内容</h1>
</div>
<script>
    var btn = document.querySelector("button");
    var h1 = document.querySelector("h1");
    btn.onclick = function(){
        var box = h1.parentNode;
        box.removeChild(h1);
    }
</script>
```



下面我们来实现一个删除水果列表中水果的功能，html代码如下（demo09.html）
``` html
<ul>
    <li><span>香蕉</span> <span class="del">删除</span></li>
    <li><span>苹果</span> <span class="del">删除</span></li>
    <li><span>鸭梨</span> <span class="del">删除</span></li>
    <li><span>芒果</span> <span class="del">删除</span></li>
    <li><span>草莓</span> <span class="del">删除</span></li>
</ul>
```

我们要实现点击删除按钮的时候，删除span父级的li元素

``` js
var aDel = document.querySelectorAll(".del");
for(var i = 0;i<aDel.length;i++){
    aDel[i].onclick = function(){
        var parent = this.parentNode
        parent.parentNode.removeChild(parent)
    }
}
```