## 第08章：vue相关库

vue为我们提供了两个核心的插件，vue-router和vuex：

* vue-router为vue提供了页面跳转的功能。
* vuex为我们提供了组件间数据通信的解决方案。

除了vue-router和vuex这两个vue官方提供的库，本章还会讲解axios库，一个封装了ajax的第三方库。

### 一、下载

可以使用下面命令分别下载vue-router、vuex和axios

``` bash
npm install --save-dev vue-router
npm install --save-dev vuex
npm install --save-dev axios
```

也可以在package.json文件中添加依赖关系，然后执行：

``` bash
npm install 
```

与上章相同，我们使用配置好的package.json和webpack.config.js文件，所以我们使用第二种方法一次性下载所有依赖库。


### 二、vue-router
首先，我们创建一个新项目（demo01），目录结构如下所示

```
- dist                     //打包后的文件,目录
- src                      //源文件目录
    - components           //组件存放目录
        - app.vue          //根组件（容器组件）
        - home.vue         //主页面
        - movies.vue       //电影页面
        - images.vue       //图片页面
    - main.js              //入口文件
    - router.js            //路由设置文件
- index.html               //主页面
- package.json             //npm配置文件
- webpack.config.js        //webpack配置文件
```

我们先来看app.vue组件,代码如下：
``` html
<template>
    <div>
        <ul>
            <li><router-link to="/">主页</router-link></li>
            <li><router-link to="/movies">电影</router-link></li>
            <li><router-link to="/images">图片</router-link></li>
        </ul>
        <router-view></router-view>
    </div>
</template>
```

通过router-link标签，我们可以让url跳转到指定位置，这里的router-link标签与a标签效果是一样的。但是a标签使用的是href属性，vue-router使用link属性。

然后再来看router.js文件，代码如下
``` js
import Vue from "vue";
import VueRouter from "vue-router";
import home from "./components/home.vue";
import movies from "./components/movies.vue";
import images from "./components/images.vue";

Vue.use(VueRouter);

export default new VueRouter({
    routes:[                                 //设置url与组件的对应关系
        {path:"/",component:home},        
        {path:"/movies",component:movies},
        {path:"/images",component:images},
    ]
})

```

通过router.js，我们让url和组件有了对应关系，这样就可以让router-view中显示对应的组件了。

最后，在main.js我们还需要注册vue-router,否则不能实现路由的功能。

``` js
import Vue from "vue";
import router from "./router.js";
import app from "./components/app.vue";

new Vue({
    el:"#app",
    router,              //注册router
    components:{app}     //注册组件
})
```

除了使用 <router-link> 创建 a 标签来定义导航链接，我们还可以借助 router 的实例方法来实现页面的跳转（demo02）：

``` html
<!-- app.vue -->
<!-- 删除之前的列表，现在这里只有一个router-view来显示组件 -->
<template>
    <router-view></router-view>
</template>
```

``` html
<!-- home.vue -->
<template>
    <div>
        <h1>主页</h1>
        <button><router-link to="/movies">routerLink跳转到电影页</router-link></button>
        <button v-on:click="toMovies">编程式导航跳转到电影页</button>
    </div>
</template>

<script>
    export default {
        methods:{
            toMovies(){
                this.$router.push("/movies");  //使用编程的方式实现页面跳转
            }
        }
    }
</script>
```



### 三、vuex
在实际开发中，经常会遇到组件之间共享数据的问题，之前我们可以使用"props","自定义事件"和"全局事件总线（bus）"来实现组件间的通信，但是随着组件的增多，数据的传递将越来越难以维护。

vue官方为我们提供了vuex库来解决数据统一管理（状态管理）功能，我们通过一个计数器的小程序讲解vuex的用法：代码如案例所示（demo03）

``` js
/* store.js */
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
    state:{                     //state可以叫做状态，我们将组件间啊共享的数据放在这里
        number:0
    },
    mutations:{                 //组件可以通过提交mutation来实现操作state。
        add(state){
            state.number++;
        },
        sub(state){
            state.number--;
        }
    }
})

```

``` html
<!-- numbuer.vue -->
<template>
    <h1>{{number}}</h1>
</template>

<script>
    export default {
        computed:{               //在组件中，使用computed属性获取共享的状态。
            number(){
                return this.$store.state.number
            }
        }
    }
</script>
```

``` html
<!-- numbuer.vue -->
<template>
    <div>
        <button v-on:click="sub">-</button>
        <button v-on:click="add">+</button>
    </div>
</template>

<script>
    export default {
        methods:{
            add(){
                this.$store.commit("add");     //提交mutation来操作state
            },
            sub(){
                this.$store.commit("sub");     //提交mutation来操作state
            }
        }
    }
</script>
```

下面我们做同一个练习：结合vue-router和vuex实现一个文章评论的web应用程序（demo04）：


### 四、axios
axios库为我们封装了ajax方法，下面我们引入axios并在app组件中显示一个异步获取的水果列表（demo05）

``` html
<template>
	<div>
		<h2>水果列表</h2>
		<ul>
			<li v-for="fruit in fruits">{{fruit}}</li>
		</ul>
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		data(){
			return {
				fruits:null
			}
		},
		mounted(){
			var self = this;
			axios.get("data/fruits.json")
			.then(function(res){
				self.fruits = res.data;
			})
		}
	}
</script>
```






