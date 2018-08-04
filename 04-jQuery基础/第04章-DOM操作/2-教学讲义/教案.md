## 第04章：DOM操作

### 一、DOM操作概述

DOM节点可以分为三类：元素节点、文本节点和属性节点。我们说的DOM操作其实就是操作者三种节点。比较常用的操作有添加节点和删除节点。我们先来看两个简单的例子来操作属性节点和文本节点。

**属性节点操作**

在第一章我们已经讲解了属性操作，常用的属性节点操作方法如下所示：

* attr
* addClass
* removeClass

我们再来做一个例子来获取input的value属性值（demo01.html）

``` html
<body>
	<input type="text">
	<button>获取并输出value</button>
	<script src="script/jquery.js"></script>
	<script>
		$("button").click(function(){
			var value = $("input").val();  //获取input的value属性值，并赋值给value变量。
			console.log(value);  
		})
	</script>
</body>
```


在上面的代码中，点击按钮时，使用val方法获取input标签的value属性值，然后在控制台输出。

val方法不仅可以获取元素的value属性值，还可以用来设置属性值（demo02.html）

``` html
<body>
	<input type="text">
	<button>设置value</button>
	<script src="script/jquery.js"></script>
	<script>
		$("button").click(function(){
			var value = $("input").val("hello world");  //将input的value属性值设置为"hello world"
		})
	</script>
</body>
```

当点击按钮的时候，我们可以把input的标签的value属性值设置成val方法的参数。

**文本节点操作**

有两个方法可以获取和设置文本节点

* text方法：可以获取和设置文本节点
* html方法：可以获取元素中的所有内容，包括文本节点和其他html标签的文本。本章我们主要讲解text方法

如案例demo03.html所示，当点击按钮的时候，输出h1标签的文本内容

``` html
<body>
	<h1>hello world</h1>
	<button>获取文本节点</button>
	<script src="script/jquery.js"></script>
	<script>
		$("button").click(function(){
			var text = $("h1").text();
			console.log(text)
		})
	</script>
</body>
```


### 二、添加和删除元素节点

**结尾位置添加**

我们可以使用append方法在元素中追加新的元素，实例代码如下（demo04.html）

``` html
<body>
	<ul class="fruits">
		<li>香蕉</li>
		<li>苹果</li>
		<li>鸭梨</li>
	</ul>
	<script src="script/jquery.js"></script>
	<script>
		$(".fruits").append("<li>菠萝</li>")
	</script>
</body>
```
在上面的代码中，html中的列表只有三个元素，页面上看到的第四个元素是我们使用append方法添加到列表元素中的。

**删除元素**

我们可以使用remove方法将元素删除，实例代码如下所示（demo05.html）

``` html
<body>
	<ul class="fruits">
		<li>香蕉</li>
		<li>苹果</li>
		<li>鸭梨</li>
	</ul>
	<script src="script/jquery.js"></script>
	<script>
		$(".fruits li").click(function(){
			$(this).remove();
		})
	</script>
</body>
```

在上面的案例中，我们通过remove方法实现：当点击列表的时候，删除当前列表元素。


### 三、综合练习

**添加和删除水果列表**

结合本章的知识点，我们实现一个水果列表的案例（demo06.html）

``` html
<body>
	<input type="text">
	<button>添加</button>
	<ul class="fruits">
		<li>香蕉</li>
		<li>苹果</li>
		<li>鸭梨</li>
	</ul>
	<script src="script/jquery.js"></script>
	<script>
		$("button").click(function(){
			var val = $("input").val();
			var newli = "<li>"+val+"</li>";
			$(".fruits").append(newli);
		})
		$(".fruits li").click(function(){
			$(this).remove();
		})
	</script>
</body>
```

在上面的例子中，我们使用表单元素在列表中添加元素，当单击元素时候，可以通过remove方法删除元素，但是我们并不能正确地将后添加的元素删除，这是因为后添加的元素未能绑定鼠标单击事件，所以当我们点击后添加的元素列表的时候，不能成功删除元素，为了正确的删除元素，我们需要使用事件委托方法delegate。

**事件委托**

我们使用delegate方法给ul元素绑定事件，这样时间就能作用在ul元素下的所有子元素了，这样就能实现让后添加的元素也具有删除的功能(demo07.html)。

``` js
<body>
	<input type="text">
	<button>添加</button>
	<ul class="fruits">
		<li>香蕉</li>
		<li>苹果</li>
		<li>鸭梨</li>
	</ul>
	<script src="script/jquery.js"></script>
	<script>
		$("button").click(function(){
			var val = $("input").val();
			var newli = "<li>"+val+"</li>";
			$(".fruits").append(newli);
		})
		$(".fruits").delegate("li","click",function(){
			$(this).remove();
		})
	</script>
</body>
```

在上面的代码中,delegate方法有三个参数，第一个参数是选择器，找到所有.furits元素下的所有li元素，第二个参数是事件名称，说明我们用事件委托处理click事件，第三个参数是当click事件触发时执行的之间监听函数。

通过事件委托，可以将子元素的事件委托给父级元素处理，关于事件委托的理论基础，会在JavaScript课程中了讲解。

