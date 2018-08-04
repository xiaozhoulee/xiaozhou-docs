## 第02章：数据操作

在上一章中我们讲解了绑定文本、绑定属性、绑定事件，本章我们进一步学习vue的基本概念。

### 一、数据的双向绑定

**数据绑定**

上一章我们已经了解了如何将数据绑定到文本节点和属性节点。本节我们要实现数据的双向绑定，让data中的数据与文本框中的数据同步（demo01.html）。
``` html
<body>
    <div id="app">
        <h1>数据绑定：{{message}}</h1>
        <input type="text" v-model="message">
    </div>
    <script src="../../script/vue.js"></script>
    <script>
        new Vue({
            el:"#app",
            data:{
                message:""
            }
        })
    </script>
</body>
```

可以通过v-model实现数据的双向绑定，当文本框中的数据发生变化的时候，v-model对应的值会跟着改变，在上面的程序中，我们将h1标签中的文本节点与message绑定，所以当文本框的内容改变，h1中的文本也会跟着改变。

**添加元素**

我们可以利用v-model来实现添加列表元素的功能（demo02.html）:
``` html
<body>
    <div id="app">
        <input v-model="newFruit" type="text">
        <button v-on:click="insert">添加</button>
        <ul>
            <li v-for="fruit in fruits">{{fruit}}</li>
        </ul>
    </div>
    <script src="../../script/vue.js"></script>
    <script>
        new Vue({
            el:"#app",
            data:{
                fruits:["香蕉","苹果","鸭梨"],
                newFruit:""
            },
            methods:{
                insert:function(){
                    this.fruits.push(this.newFruit);
                }
            }
        })
    </script>
</body>
```

下面做一个练习，结合上一章的内容，将添加元素和删除元素功能添加到一个文件中（demo03.html）

``` html
<body>
	<div id="app">
		<input v-model="newFruit" type="text">
		<button v-on:click="insert">添加</button>
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
				},
				insert:function(){
					this.fruits.push(this.newFruit);
				}	
			}
		})
	</script>
</body>
```

### 二、提交表单
在上个例子中，我们通过一个文本框和一个按钮实现了在列表中添加元素的功能，但是正常的开发工作中，我们不应该用这种方式提交数据，而是应该用提交表单的方式提交数据，下面我们在body中添加一个表单，并使用vue获取表单中的数据（demo04.html）。
``` html
<!-- 变更的代码如下 -->
<form v-on:submit="insert">
    <input v-model="newFruit" type="text">
    <input type="submit" value="添加">
</form>
```

如上面的代码所示，我们不在使用按钮click事件来添加元素，而是使用表单的submit事件，其他的代码完全一样。运行程序后，发现新增的元素闪了一下就消失了，这是因为提交表单会重新加载页面，而我们的数据当页面刷新后就会消失，所以如果不阻止提交表单后页面重新加载，那么就需要阻止表单提交的默认行为。可以使用事件修饰符来实现这个功能（demo05.html）。

``` html
<form v-on:submit.prevent="insert">
    <input v-model="newFruit" type="text">
    <input type="submit" value="添加">
</form>
```

在submit后面添加事件修饰符“.prevent”，可以阻止submit事件触发后重新加载页面。

### 三、事件修饰符详解
上一节我们已经初步了解了事件修饰符，本章我们进一步讲解常用的事件修饰符，常用的事件修饰符如下所示：

* .prevent
* .stop
* .once

上一节我们已经讲解了如何使用.prevent事件修饰符，本节我们通过两个例子讲解.stop和.once。

在JavaScript基础课程中，我们讲解了事件流的概念，事件有捕获和冒泡两个阶段，在默认情况下，事件在冒泡阶段被触发，如果希望阻止事件冒泡可以使用stopPropagation()，如果在vue中希望实现阻止事件冒泡的功能，可以使用事件修饰符.stop（demo06.html）

``` css
.big{
    width:200px;
    height:200px;
    background-color: yellow;
}

.small{
    width:100px;
    height:100px;
    background-color: red;
}
```

``` html
<body>
    <div id="app">
        <div v-on:click="bigEvent" class="big">
            <!-- 去掉.stop，事件会冒泡，添加.stop可以阻止事件冒泡 -->
            <div v-on:click.stop="smallEvent" class="small"></div>
        </div>
    </div>
    <script src="../../script/vue.js"></script>
    <script>
        new Vue({
            el:"#app",
            methods:{
                bigEvent:function(){
                    console.log("点击big div");
                },
                smallEvent:function(){
                    console.log("点击small div");
                }
            }
        })
    </script>
</body>
```

在学习jQuery的时候，我们可以通过one来绑定事件，当事件触发一次后将不再触发，在vue中我们可以使用事件修饰符.once实现相同的功能（demo07.html）

``` html
<body>
    <div id="app">
        <!-- 因为添加了.once，所以事件被触发一次后，将不会再次触发 -->
        <button v-on:click.once="myEvent">按钮</button>
    </div>
    <script src="../../script/vue.js"></script>
    <script>
        new Vue({
            el:"#app",
            methods:{
                myEvent:function(){
                    alert("只能弹出一次");
                }
            }
        })
    </script>
</body>
```


### 四、在表格中添加和删除数据
下面我们来做一个练习，功能如下（demo08.html）：

* 页面分成两部分，左侧是一个表单，右侧是一个表格
* 当提交表单的时候可以将数据添加到表格中
* 表格的最后一列是删除按钮，点击可以删除当前行。

``` html
<body>
	<div id="app">
		<div class="col-md-3">
			<h2>表单</h2>
			<form v-on:submit.prevent="insert">
				<div class="form-group">
					<label for="name">姓名</label>
					<input v-model="student.name" type="text" class="form-control" id="name" placeholder="姓名">
				</div>
				<div class="form-group">
					<label for="age">年龄</label>
					<input v-model="student.age" type="text" class="form-control" id="age" placeholder="年龄">
				</div>
				<div class="form-group">
					<label for="sex">性别</label>
					<select v-model="student.sex" class="form-control" name="" id="sex">
						<option value="男">男</option>
						<option value="女">女</option>
					</select>
				</div>
				<button type="submit" class="btn btn-default">Submit</button>
			</form>
		</div>
		<div class="col-md-9">
			<h2>学生列表</h2>
			<table class="table table-bordered">
				<thead>
					<th>姓名</th>
					<th>年龄</th>
					<th>性别</th>
					<th>删除</th>
				</thead>
				<tbody>
					<tr v-for="(val,index) in students">
						<td>{{val.name}}</td>
						<td>{{val.age}}</td>
						<td>{{val.sex}}</td>
						<td>
							<button v-on:click="del(index)" class="btn btn-default">删除</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	<script src="../../script/vue.js"></script>
	<script>
		new Vue({
			el:"#app",
			data:{
				student:{},
				students:[]
			},
			methods:{
				insert:function(){
					//浅克隆一个对象
					var newStu = {};
					for(var i in this.student){
						newStu[i] = this.student[i];
					}
					this.students.push(newStu);
				},
				del:function(i){
					this.students.splice(i,1)
				}
			}
		})
	</script>
</body>
```

（为了效果美观，示例代码引入了bootstrap的样式，课堂练习可以视情况而定是否使用bootstrap）

### 五、授课说明
* 本章需要学员熟练掌握事件流的相关课程内容，事件冒泡，阻止事件冒泡，阻止事件默认行为这些概念，若学员已经遗忘，需要在相关章节授课前复习。