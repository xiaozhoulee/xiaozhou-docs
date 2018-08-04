## 第04章：组件

### 一、组件的基本概念

**什么是组件？**、

组件是vue最重要的功能之一，我们可以通过组件扩展html元素，或者说是可以自定义html元素。例如我们可以定义一个login元素，当我们在页面中引入这个元素的时候，他就可以自带登录功能，就像引入a标签可以实现页面跳转一样。

**注册一个组件**

可以通过Vue.component(tagName, options)方法来注册一个组件

* tagName:组件的名称（或者可以成为标签的名称）
* options:组件的设置选项

我们通过下面的例子来注册一个名字为hello的组件（demo01.html）

``` html
<body>
    <div id="app">
        <hello></hello>
    </div>
    <script src="../../script/vue.js"></script>
    <script>
        Vue.component("hello",{
            template:"<h1>我是一个组件</h1>"
        })

        new Vue({
            el:"#app"
        })
    </script>
</body>
```

如上面的代码所示，我们需要在new Vue()代码的上方注册这个组件，如果先创建实例在注册组件会报错，注册组件之后我们就可以像使用html标签一样使用我们的组件了。

组件的设置选项中，我们设置了template属性，可以指定组件的模板，简单的说就是template的内容是什么，组件就会显示什么样的内容。

组件可以重复使用，我们可以编写html代码（demo02.html）：
``` html
<div id="app">
    <hello></hello>
    <hello></hello>
    <hello></hello>
</div>
```

这个组件被使用了三次，页面也会出现三次组件的内容。

**设置组件选项**

在注册组件的时候可以通过Vue.component()方法的第二个参数设置组件的选项，设置的方法与之前学过的设置vue实例的方法很像，我们先来为组件绑定一个点击事件（demo03.html）
``` js
Vue.component("hello",{
    template:"<button v-on:click='showMessage'>按钮</button>",
    methods:{
        showMessage:function(){
            alert('hello component');
        }
    }
})
```

我们将组件中的template设置为一个button，然后为他绑定了点击事件，点击的时候在弹出框输出"hello component"，可以看出在组件中绑定事件和在实例中绑定事件的方法是一样的，下面我们再来为组件绑定数据（demo04.html）

``` js
Vue.component("hello",{
    template:"<h1>{{message}}</h1>",
    data:function(){
        return {
            message:"hello component"
        }
    }
})
```

绑定数据的写法与之前有些差异，在创建实例的选项中绑定数据，可以将data属性直接设置成一个对象，但是在组件中，需要将data的值设置成一个函数，真正的数据是这个函数的返回值。

### 二、组件嵌套
组件和html标签一样，也是可以嵌套使用的，我们在下面的例子中定义三个组件

* app(容器组件)
* tit(标题组件)
* list(内容列表)

我们嵌套使用者三个组件（demo05.html）：

``` html
<div id="app">
    <app></app>
</div>
```

``` js
Vue.component("app",{
    template:`
        <div>
            <tit></tit>
            <list></list>
        </div>
    `
})
```

``` js
Vue.component("tit",{
    template:`<h2>水果列表</h2>`
})
```

``` js
Vue.component("list",{
    template:`
        <ul>
            <li>香蕉</li>
            <li>苹果</li>
            <li>鸭梨</li>
        </ul>
    `
})
```

在上面的例子中，我们需要注意一下几点：

* 通过组件化的开发，我们在html中只放一个app组件，其他组件都是它的子孙组件。
* 为了方便换行，所有字符串的template属性，我们都用模板字符串（见es2015课程）来表示。
* template中的元素，不能直接暴露两个或两个以上并列的元素，如果有多个元素，需要放到一个容器中，例如下面的写法就会报错
``` js 
{
    template:`
        <h1>标题一</h1>
        <h2>标题二</h2>
    `
}
```
应该改成：
``` js
{
    template:`
        <div>
            <h1>标题一</h1>
            <h2>标题二</h2>
        </div>
    `
}
```

其实编写基于vue的应用程序主要的工作就是写组件，我们将应用拆分成一个个组件，然后将他们组合到一起就变成了我们的应用程序。

### 三、组件间传递数据

**使用props传递数据**

通过上面的学习我们知道了组件可以嵌套，并且每个组件都有自己的data，那么组件之间是如何通信的呢，本节我们讲解父级组件向子组件传递数据。

我们在demo05的基础上继续修改案例代码，让tit显示的标题内容是从app组件获取到的，代码如下（demo06.html）:

``` js
Vue.component("app",{
    template:`
        <div>
            <tit message="水果列表"></tit>
            <list></list>
        </div>
    `
})

Vue.component("tit",{
    props:["message"],     //获取tit标签的message属性
    template:`<h2>{{message}}</h2>`   //将message属性值绑定到h2的文本节点中
})
```

通过props属性，可以获取父级组件的数据，在上面的例子中，我们将"水果列表"直接赋值给mess属性，实现了父级向子级传递数据的功能。我们继续来修改这个案例，让子级组件可以获取到父级组件data中的数据（demo07.html）。

``` js
Vue.component("app",{
    template:`
        <div>
            <tit v-bind:message="mess"></tit>
            <list></list>
        </div>
    `,
    data:function(){
        return {
            mess:"水果列表"
        }
    }
})

Vue.component("tit",{
    props:["message"],
    template:`<h2>{{message}}</h2>`
})
```

通过v-bind将自定义的属性绑定为data中的值，我们就可以将父级组件data中的数据传递给子级组件了。

下面我们做一个练习，将app中的水果列表数据传递给list组件（demo08.html）:

**自定义事件**

上一节我们讲解了父级向子级传递数据，本节我们讲解子级向父级传递数据，学习子级向父级传递数据，首先要了解自定义事件的概念（demo09.html）。
``` js
Vue.component("app",{
    template:`<btn v-on:appEvent="showData"></btn>`,   //当appEvent事件被触发，执行showData函数
    methods:{
        showData:function(){
            alert('hello event');
        }
    }
})

Vue.component("btn",{
    template:`<button v-on:click="btnEvent">触发</button>`,   //点击按钮，执行btnEvent函数
    methods:{
        btnEvent:function(){
            this.$emit("appEvent")     //触发appEvent事件
        }
    }
})
```

通过自定义事件，我们可以让子级组件控制父级组件的行为，那么我们来做一个练习，实现一个计数器，但是计数器的两个按钮是子组件中的按钮（demo10.html）


上面的例子中，我们实现了通过子级组件触发自定事件的方式，让父级组件执行指定函数，如果我们在$emit方法后面加入参数，就可以实现子组件向父组件数据的传递了（demo11.html）

``` js
Vue.component("app",{
    template:`<btn v-on:appEvent="showData"></btn>`,   
    methods:{
        showData:function(data){
            alert(data);
        }
    }
})

Vue.component("btn",{
    template:`<button v-on:click="btnEvent">触发</button>`,   
    methods:{
        btnEvent:function(){
            this.$emit("appEvent",this.message)    
        }
    },
    data:function(){
        return {
            message:"子级的数据"
        }
    }
})
```


**非父子组件通信**

在了解非父子组件通信前，我们先来了解组件的生命周期函数概念，我们不必过于深入的了解生命周期函数，只需要知道，当组件被创建，再到显示到页面上这个过生中，会执行一个叫做mounted的函数，我们可以在组件选项中定义mounted函数（demo12.html）

``` js
Vue.component("app",{
    template:`<h1>我是一个组件</h1>`,
    mounted:function(){
        alert("加载组件时执行mounted函数")
    }
})
```

接下来我们继续讨论如何实现非父子组件的通信，如果两个组件非父子级，那么我们就需要使用一个空的Vue实例作为中央事件总线来实现组件间的通信，代码如下所示：
``` js
var bus = new Vue();  //创建一个空的vue实例

bus.$emit('myEvent', data)  // 触发自定义事件myEvent,并传递data

bus.$on('myEvent', function (data) { 
  // 自定义事件myEvent被触发的时候执行这个函数，并获取数据。
})
```

若要实现组件A和组件B之间的通信，我们需要在组件A的mounted函数中用$on方法定义事件，并在组件B总调用这个事件，就可以实现组件之间的通信了（demo13.html）。
``` js
var bus = new Vue();

Vue.component("app",{
    template:`
        <div>
            <A></A>
            <B></B>
        </div>
    `,
    
})

Vue.component("A",{
    template:'<h1>组件A{{this.txt}}</h1>',
    mounted:function(){
        var self = this;  //$on方法中的函数中不能使用this获取组件的实例，所以需要先将组件的实例保存到self变量中
        bus.$on("myEvent",function(data){
            self.txt=data;
        })
    },
    data:function(){
        return {
            txt:""
        }
    }
})

Vue.component("B",{
    template:'<h1 v-on:click="send">组件B（点击我可以改变组件A的文本）</h1>',
    methods:{
        send:function(){
            bus.$emit("myEvent","（组件B的数据）")
        }
    }
})
```


下面我们来做两个练习

* 实现一个计数器功能，数字和按钮是同级的组件（demo14.html）
* 实现一个水果列表，表单和列表同级的组件（demo15.html）。


