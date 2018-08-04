## 第07章：组件化开发

### 一、模块化引入vue
在实际的开发工作中，我们不能将所有的组件都写到一个js文件中，更不能将所有的js代码都写到一个script标签中，我们需要模块化和组件化开发我们的应用程序，上一章我们已经简单介绍了ES2015的模块化语法，本章我们利用模块化的语法来实现vue的组件化开发。

首先我们我们需要创建一个项目（demo01）,项目的目录结构与上一章的目录结构相同。在main.js文件中引入vue，并创建vue的实例

``` html
<div id="app">
    <h1>{{message}}</h1>
</div>
```

``` js
import Vue from "vue";
new Vue({
    el:"#app",
    data:{
        message:"hello vue"
    }
})
```
上面的代码与我们之前编写的vue程序的唯一却别就是使用import引入vue框架，而不是script标签。

### 二、单文件组件
在之前的程序中，我们使用Vue.component()方法来创建组件，这种方法虽然很简便，但并不利于维护，vue为我们提供了单文件组件，我们可以将组件写在一个以.vue为后缀的文件中。这里我们在src属性中新建一个components目录，用来存储组件文件（demo02），然后在components目录中创建一个app组件作为所有组件的容器。代码如下：
``` html
<!-- index.html -->
<div id="app">
    <app></app>
</div>
```

``` html
<!-- app.vue -->
<template>
    <h1>单文件组件</h1>
</template>
```

``` js
/*main.js*/

import Vue from "vue";
import app from "./components/app.vue";  //引入app组件

new Vue({
    el:"#app",
    components:{app}    //注册组件，不注册不能使用。
})
```

main.js文件有两点需要注意

* 引入组件文件的时候需要些路径，而不能直接写文件名。
* 在new Vue()的选项中，需要使用components属性来注册引入的组件

我们继续修改demo02，让app组件带有更多的功能。我们在h1标签下方加入一个计数器功能，代码如下：
``` html
<!-- app.vue -->
<template>
    <div>
        <h1>单文件组件</h1>
        <h2>{{title}}</h2>
        <button v-on:click="sub">-</button>
        <span>{{number}}</span>
        <button v-on:click="add">+</button>
    </div>
</template>

<style>
    h1{
        color:red;
    }
</style>

<script>
    export default {
        data(){
            return {
                title:"计数器",
                number:0
            }
        },
        methods:{
            add(){               //es6语法
                this.number++;
            },
            sub(){               //es6语法
                this.number--;
            }
        }
    }
</script>
```

通过上面的代码，我们在app组件中添加了计数器的功能，编写过程需要注意下面几点：

* template标签中只能暴露一个容器，其他标签都应该在这一个容器中。
* 通过style标签可以给组件指定样式
* 通过script标签可以编辑组件的数据和方法等选项，但是需要用export default暴露接口。


### 三、组件化开发
上一节的案例我们仍然只写了一个app组件，在实际开发中，我们需要编写很多组件，甚至可以说vue的应用程序开发就是写组件的过程。我们再来通过这种开发方式实现一个例子（demo03）。

我们来实现一个水果列表添加和删除的功能，这个案例我们已经很熟悉了，通过组件化的方式，我们需要做如下工作：

* 创建main.js作为入口文件
* 创建app.vue作为容器组件
* 创建myform.vue作为表单组件
* 创建list.vue作为水果列表组件
* 创建bus.js，作为全局事件总线，让组件间可以通信。

代码如下所示：

``` js
/*main.js*/
import Vue from "vue";
import app from "./components/app.vue"

new Vue({
    el:"#app",
    components:{app}
})
```

``` html
<!-- app.vue -->
<template>
    <div>
        <myform></myform>
        <list></list>
    </div>
</template>

<script>
    import myform from "./myform.vue";
    import list from "./list.vue";

    export default {
        components:{myform,list}
    }
</script>
```

``` html
<!-- myform.vue -->
 <template>
    <form v-on:submit.prevent="insert">
        <input type="text" v-model="newfruit">
        <input type="submit" value="添加">
    </form>
 </template>

 <script>
    import bus from "../bus.js";
    export default {
        data(){
            return {
                newfruit:""
            }
        },
        methods:{
            insert(){
                bus.$emit("insert",this.newfruit);
            }
        }
    }
 </script>
```

``` html
<!-- list.vue -->
<template>
    <ul>
        <li v-for="(val,index) in fruits">
            {{val}}
            <span v-on:click="del(index)">删除</span>
        </li>
    </ul>
</template>

<script>
    import bus from "../bus.js";
    export default {
        data(){
            return {
                fruits : ["香蕉","苹果","鸭梨"]
            }
        },
        mounted(){
            var self = this;
            bus.$on("insert",function(data){
                self.fruits.push(data);
            })
        },
        methods:{
            del(i){
                this.fruits.splice(i,1);
            }
        }
    }
</script>
```

``` js
/*bus.js*/
import Vue from "vue";

export default new Vue();
```

通过上面的水果列表，我们用模块化的方式实现了vue的组件化开发，接下来我们做一个练习，用组件化的方式实现一个购物车效果（demo04）

