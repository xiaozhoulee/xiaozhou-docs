## 第14章：事件流

### 一、绑定事件
想要给一个元素绑定事件，我们有两种方法：使用内联事件或事件监听器。在之前的课程中，我们一直使用的是内联事件来为元素绑定事件，例如一个按钮的点击事件，代码如下。
``` js
btn.onclick = function(){}   //绑定鼠标单击事件
```

我们还可以用使用事件监听器为元素绑定事件，代码如下
``` js
btn.addEventListener("click",function(){});
```
下面我们用两种方法为按钮绑定事件（demo01.html）

``` html
<button id="btn1">按钮1</button>
<button id="btn2">按钮2</button>
<script>
    var btn1 = document.querySelector("#btn1");
    var btn2 = document.querySelector("#btn2");

    btn1.onclick = function(){
        console.log("我是按钮1");
    }

    btn2.addEventListener("click",function(){
        console.log("我是按钮2");
    })
</script>
```
两种方法都能实现相同的效果，能成功的为按钮绑定了点击事件，但区别是使用addEventLitener可以无限制第为元素绑定事件，而内联事件后面的会覆盖前面的（demo02.html）

``` js
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");

btn1.onclick = function(){
    console.log("我是按钮1");
}
btn1.onclick = function(){
    console.log("我是按钮1,第二次绑定");
}

btn2.addEventListener("click",function(){
    console.log("我是按钮2");
})

btn2.addEventListener("click",function(){
    console.log("我是按钮2,第二次绑定");
})
```

第一个按钮第二次绑定的事件覆盖了第一次绑定的事件，第二个按钮两次绑定的事件都能被触发。

### 二、事件冒泡与事件捕获
接下来我们用事件监听器为三个div元素绑定点击事件，最外层的div宽高是300px，中间的div宽高都是200px，最内层的div宽高都是100px，那么思考一下，点击最内层的div，事件会如何触发，是只触发最内层的div，还是从内到外依次触发，还是从外到内依次触发（demo03.html）。
``` html
<div class="box1">
    <div class="box2">
        <div class="box3"></div>
    </div>
</div>
```

``` css
.box1{
    width:300px;
    height:300px;
    background-color: yellow;
}
.box2{
    width:200px;
    height:200px;
    background-color: blue;
}

.box3{
    width:100px;
    height:100px;
    background-color: red;
}
```

``` js
var box1 = document.querySelector(".box1");
var box2 = document.querySelector(".box2");
var box3 = document.querySelector(".box3");

box1.addEventListener("click",function(){
    console.log("我是box1")
})
box2.addEventListener("click",function(){
    console.log("我是box2")
})
box3.addEventListener("click",function(){
    console.log("我是box3")
})
```
通过上面的例子我们可以看到，事件是从最内层开始触发，然后依次向外，输出的顺序是box3-box2-box1。导致这种顺序的原因是因为：事件流有事件捕获阶段和事件冒泡阶段，事件捕获阶段是从最外层元素开始一层一层进入到事件目标（也就是我们点击的那个元素），到达事件目标后，进入事件冒泡阶段，事件从最内层流向最外层，事件默认情况下在冒泡阶段触发，所以我们看到的是先输出box3,最后输出box1。

我们也可以将事件设置为捕获阶段触发，代码如下（demo04.html）
``` js
box1.addEventListener("click",function(){
    console.log("我是box1")
},true)
box2.addEventListener("click",function(){
    console.log("我是box2")
},true)
box3.addEventListener("click",function(){
    console.log("我是box3")
},true)
```
只要在添加事件方法中添加第三个参数为true,事件就会在捕获阶段被触发，这样输出的顺序就变成了box1-box2-box3。但是在日常开发中，我们几乎不用做此修改，让事件在冒泡阶段触发就可以了。

### 三、事件委托
利用事件流的原理，我们可以实现事件委托，事件委托可以简单第理解为将子集的事件委托给父级来处理，我们先来看一个简单的例子（demo05.html）
``` html
<div class="btnBox">
    <button class="btn1">按钮1</button>
    <button class="btn2">按钮2</button>
</div>
```
网页中有两个按钮，他们的父级是一个div标签，现在我们希望给这两个按钮绑定事件，当我们点击按钮的时候输出按钮的文本内容，按照我们之前学过的知识，可以有如下写法
``` js
//第一种写法
var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
btn1.addEventListener("click",function(){
    console.log(this.innerHTML)
})
btn2.addEventListener("click",function(){
    console.log(this.innerHTML)
})
```
这种方法简单易懂，但是存在重复，两个按钮触发事件执行的代码完全一样，我们可以过去到所有按钮，再通过遍历绑定事件
``` js
var btnArray = document.querySelectorAll("button");
for(var i = 0;i<btnArray.length;i++){
    btnArray[i].addEventListener("click",function(){
        console.log(this.innerHTML)
    })
}
```
通过遍历我们优化了代码，但是仍然存在问题，首先，如果按钮的数量特别多，每一个按钮都绑定依次事件会非常影响程序的性能，其次，就算不考虑性能，通过这种方法绑定事件，如果使用js新增了一个按钮，这个按钮因为初始化的时候没有绑定事件，所以无法点击。为了解决上述问题，我们可以使用事件委托的方式来实现上面的功能（demo06.html）。
``` js
var btnBox = document.querySelector(".btnBox");
btnBox.addEventListener("click",function(event){
    var target = event.target;    //通过事件对象获取事件目标
    console.log(target.innerHTML);
})
```
在事件监听函数中，我们可以在形参的位置获取到事件对象event，事件对象中包含了事件相关的信息，通过event.target可以获取到我们的事件目标，在这个例子中事件目标就是我们点击的按钮，而我们事件绑定的是按钮的容器，这样就可以将自己元素的事件委托给父级来处理。

