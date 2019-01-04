# 第01章：vue的基本概念

### 一、vue概述

为了让本文档的内容更为简介，这里就不再复述vue的基本概念和作用了。大家只要知道两点：

1. 在真正的项目开发过程中，我们通常把项目代码写在.vue和.js文件中，然后通过webpack打包我们的代码。
2. 对于初学者打包的过程会引入额外的复杂度。所以为了让我们更容易入门，可以暂时先在html文件中引入vue.js文件，这样可以让我们更简洁地了解vue的基础特性。

### 二、下载vue

``` bash
cnpm install vue
```

node_modules > vue > dist > vue.js

找到vue.js文件之后，我们可以像引入jQuery一样引入vue。

``` html
<!-- demo02 -->
<body>
    <div id="app">
        <h1>{{message}}</h1>
    </div>
    <script src="../../script/vue.js"></script>
    <script>
        new Vue({
            el:"#app",
            data:{
                message:"hello world"
            }
        })
    </script>
</body>
```
虽然使用vue完成这个例子，代码相对于jQuery会多一些，但是随着web应用功能的增加，数据会越来越复杂，数据操作的频率越来越好，jQuery的代码就会越来越难以维护（因为我们布置要管理数据，还要操作DOM），而vue会让这一切变得简单，因为使用vue开发web应用，我们关注点主要放在数据上，不必关注如何操作DOM。

我们再来看一下demo2中的代码，这是包含了一个vue程序最基本的结构：
* 在html中需要有一个div作为一个容器，我们在这里将他的id设置成了"app"方便选择。
* 在html中使用“双大括号”语法绑定数据。
* 在js中，使用new Vue()创建一个vue的实例，这里的Vue()构造函数是vue库中提供的。
* 在构造函数Vue中，我们需要传入一个“选项对象”来进一步描述vue实例的行为。
* el属性是选择器，对应html中的容器
* data属性是数据，可以指定vue实例中的数据，并将其绑定到html中

### 二、vue的基本功能

**绑定属性**

在上面的例子中，我们将vue中的数据绑定在html的文本节点上，我们其实还可以绑定html的属性节点，代码如下（demo03.html）:
``` html
<body>
    <div id="app">
        <p title="未绑定的title属性">我的title属性没有绑定数据</p>
        <p v-bind:title="tit">我的title属性绑定了数据</p>
    </div>
    <script src="../../script/vue.js"></script>
    <script>
        new Vue({
            el:"#app",
            data:{
                tit:"绑定的title属性"
            }
        })
    </script>
</body>
```

* 通过v-bind可以将data中的数据绑定到html元素属性上
* 【v-bind：】冒号后面可以设置需要绑定的属性，我们可以使用它绑定任何属性。

下面我们做一个练习，用v-bind设置img标签的src属性（demo04.html）。

**绑定事件**

我们可以通过vue为元素绑定事件，方法如下（demo05.html）
``` html
<body>
    <div id="app">
        <button v-on:click="myEvent">按钮</button>
    </div>
    <script src="../../script/vue.js"></script>
    <script>
        new Vue({
            el:"#app",
            methods:{
                myEvent:function(){
                    alert("hello world")
                }
            }
        })
    </script>
</body>
```

* 在html中，为需要绑定事件的元素添加【v-on:click=""】可以为元素绑定点击事件。
* 如果感觉这样写比较麻烦，可以简写成【@click=""】，效果与上面相同。

下面我们来做一个练习，让页面上有一个按钮和一张图片，当点击这个按钮的时候，图片切换成另一张图片（这里需要一个小提示，在事件的函数中，通过this.dataName可以获取和设置数据）（demo06.html）。

``` html
<body>
	<div id="app">
		<button v-on:click="changeImg">切换图片</button>
		<div>
			<img v-bind:src="imgSrc">
		</div>
	</div>
	<script src="../../script/vue.js"></script>
	<script>
		new Vue({
			el:"#app",
			data:{
				imgSrc:"../../images/img1.jpg"
			},
			methods:{
				changeImg:function(){
					this.imgSrc = "../../images/img2.jpg";
				}
			}
		})
	</script>
</body>
```

在methods中的changeImg方法内，我们可以使用this获取到vue实例，这样就可以进一步获取到vue实例的data，然后通过赋值的方式修改data的内容。这样就可以实现数据的变更，数据内容变更后，页面也会随之改变。

**总结**

通过上面的例子，我们可以很直观地观察到vue与jQuery的差异，在实现一个页面效果的时候，jQuery更倾向于操作DOM，而vue主要是通过操作数据来实现页面的变化。

其实vue相对于jQuery，更大的优势是组件化和模块化的开发，在后续的内容会进一步讲解。


### 三、列表

**显示列表**

在学习jQuery的时候，我们学习过水果列表的例子，如果忘记了，我们可以再练习写一下这个例子：有一个数组如下所示：

``` js
var fruits = ["香蕉","苹果","鸭梨"];
```

通过js，将数组中的所有元素在html的列表中显示，jQuery的代码这里不再演示。我们的目标是用vue来实现显示列表的功能，在vue中，fruits不再是一个变量，而是data中的一个属性（demo07.html）。

``` html
<body>
    <div id="app">
        <ul>
            <li v-for="fruit in fruits">{{fruit}}</li>
        </ul>
    </div>
    <script src="../../script/vue.js"></script>
    <script>
        new Vue({
            el:"#app",
            data:{
                fruits:["香蕉","苹果","鸭梨"]
            }
        })
    </script>
</body>
```

**获取索引**

* 通过v-for可以实现列表的显示
* v-for后面的值需要有in，in的后面是一个集合类型的数据，in前面的是集合中的每一个元素
* 在上面的例子中"fruit in fruits"中的fruit代表集合中的每个元素，集合中有多少个元素，就会有多少个li被生成，这些不用我们手动操作，vue都为我们做好了。

如果将代码改成下面的样子，我们还可以获取到数据元素的索引（demo08.html）
``` html
<div id="app">
    <ul>
        <li v-for="(val,index) in fruits">
            <p>水果名字是 {{val}}</p>
            <p>水果序号是 {{index}}</p>
        </li>
    </ul>
</div>
```

**列表操作**

在上一节的例子中，我们讲解了：

* 如何将数组中的元素在列表中显示
* 如何获取元素的所以

接下来我们要做一个例子，仍然是显示一个普通的水果列表，当我们点击水果列表中的元素时，可以在控制台输出这个元素的索引（demo09.html）
``` html
<body>
    <div id="app">
        <ul>
            <li 
                v-on:click="showIndex(index)" 
                v-for="(val,index) in fruits">
                    {{val}}
            </li>
        </ul>
    </div>
    <script src="../../script/vue.js"></script>
    <script>
        new Vue({
            el:"#app",
            data:{
                fruits:["香蕉","苹果","鸭梨"]
            },
            methods:{
                showIndex:function(index){
                    console.log(index);
                }   
            }
        })
    </script>
</body>
```

通过上面的例子我们可以知道v-onclick="showIndex(index)"代码中,事件是可以传递参数的，通过这种方式可以将数据元素的索引传递到methods中，再通过形参来获取这个索引，既然可以获取到数据元素的索引，那么我们就可以实现一个“删除列表元素的功能”（demo10.html）
``` html
<body>
    <div id="app">
        <ul>
            <li v-for="(val,index) in fruits">
                {{val}}
                <span v-on:click="del(index)">删除</span>
            </li>
        </ul>
    </div>
    <script src="../../script/vue.js"></script>
    <script>
        new Vue({
            el:"#app",
            data:{
                fruits:["香蕉","苹果","鸭梨"]
            },
            methods:{
                del:function(index){
                    this.fruits.splice(index,1);
                }   
            }
        })
    </script>
</body>
```

上面的例子在li中添加了另一个span元素，我们为span绑定单击事件，并添加了删除元素的功能。

在这里，我们不必考虑考虑如何删除DOM元素节点，如何操作DOM的文本节点，我们只需要将html的元素和属性与vue中的选项逐一对应，然后关注点放在数据上，就能实现我们需要的功能了。







