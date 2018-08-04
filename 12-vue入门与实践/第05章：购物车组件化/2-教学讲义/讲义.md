## 第05章：购物车组件化（实训课）

### 一、组件拆分
我们已经用vue实现过这个购物车的效果，现在我们要用组件化的开发模式来实现购物车效果，我们将购物车分成以下四个组件。

* app（容器组件）
* counter（计数器组件）
* goods（商品列表组件）
* cart（购物车列表组件）

counter是计数器组件，在商品列表和购物车中都有计数器，所以这个组件可以复用。

### 二、组件的编写

**容器组件**

购物车的html代码非常简单，只添加了一个app组件，我们购物车的所有程序都将嵌套再容器组件（app组件）当中。
``` html
<div id="app">
    <app></app>
</div>
```

容器组件的代码如下所示：
``` js
Vue.component("app",{
    template:`
        <div>
            <goods></goods>
            <cart></cart>
        </div>
    `,
})
```

容器组件并没有任何功能，它作为一个容器，里面包含了商品列表组件和购物车组件。而商品列表组件和购物车组件里面都包含了计数器组件。

**计数器组件**

计数器组件的代码如下所示：
``` js
Vue.component("counter",{
    props:["fruit","index"],
    template:`<div>
        <button v-on:click="sub">-</button>
        <span>{{fruit.count}}</span>
        <button v-on:click="add">+</button>
    </div>`,
    methods:{
        add:function(){
            this.$emit("add",this.index);
        },
        sub:function(){
            this.$emit("sub",this.index);
        }
    }
})
```

计数器组件包含如下内容：

* props属性，用来接收父级组件的数据和索引。
* template属性：定义了计数器的模板。
* methods属性：定义了增加和减少两个按钮的功能。因为数据是存储在计数器父级组件中，所以需要出发父级的事件来实现组件间的通信。

**商品列表组件**

商品列表组件的代码，如下所示：
``` js
Vue.component("goods",{
    template:`
        <div class="col-md-6">
            <h1>商品列表</h1>
            <table class="table table-bordered">
                <thead>
                    <th>商品名称</th>
                    <th>商品单价</th>
                    <th>商品数量</th>
                    <th>添加至购物车</th>
                </thead>
                <tbody>
                    <tr v-for="(val,index) in goodsList">
                        <td>{{val.name}}</td>
                        <td>{{val.price}}</td>
                        <td>
                            <counter 
                                v-bind:fruit="val" 
                                v-bind:index="index"
                                v-on:add="add"
                                v-on:sub="sub"
                            >
                            </counter>
                        </td>
                        <td>
                            <button v-on:click="insert(index)" class="btn btn-primary">添加购物车</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    data:function(){
        return {
            goodsList:[
                {
                    name:"香蕉",
                    price:10.5,
                    count:0
                },
                {
                    name:"苹果",
                    price:5.7,
                    count:0
                },
                {
                    name:"鸭梨",
                    price:2.1,
                    count:0
                }
            ]
        }
    },
    methods:{
        add:function(i){
            this.goodsList[i].count++;
        },
        sub:function(i){
            if(this.goodsList[i].count>0){
                this.goodsList[i].count--;
            }
        },
        clone:function(obj){    //浅克隆方法
            var newobj = {};
            for(var i in obj){
                newobj[i] = obj[i]
            }
            return newobj;
        },
        insert:function(i){
            if(this.goodsList[i].count === 0){
                alert("请选择数量！");
                return;
            }
            var newgoods = this.clone(this.goodsList[i]); //克隆一个商品对象
            bus.$emit("insert",newgoods);
        }
    }
})
```


**购物车组件**

购物车组件的代码如下所示：
``` js
Vue.component("cart",{
    template:`
        <div class="col-md-6">
            <h1>商品列表</h1>
            <table class="table table-bordered">
                <thead>
                    <th>商品名称</th>
                    <th>商品单价</th>
                    <th>商品数量</th>
                    <th>删除</th>
                </thead>
                <tbody>
                    <tr v-for="(val,index) in shoppingCart">
                        <td>{{val.name}}</td>
                        <td>{{val.price}}</td>
                        <td>
                            <counter 
                                v-bind:fruit="val" 
                                v-bind:index="index"
                                v-on:add="add"
                                v-on:sub="sub"
                            >
                            </counter>
                        </td>
                        <td>
                            <button v-on:click="del(index)" class="btn btn-primary">删除</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button v-on:click="count" class="btn btn-success">结账</button>
        </div>
    `,
    data:function(){
        return {
            shoppingCart:[
            
            ]
        }
    },
    mounted:function(){
        var self = this;
        bus.$on('insert',function(data){
            for(var i = 0;i<self.shoppingCart.length;i++){
                if(data.name === self.shoppingCart[i].name){
                    self.shoppingCart[i].count += data.count;
                    return;
                }
            }
            self.shoppingCart.push(data);
        })
    },
    methods:{
        add:function(i){
            this.shoppingCart[i].count++;
        },
        sub:function(i){
            if(this.shoppingCart[i].count>1){ //购物车数量了不能为0
                this.shoppingCart[i].count--;
            }
        },
        del:function(i){
            this.shoppingCart.splice(i,1);
        },
        count:function(){
            var allPrice = 0;  //所有商品的总价
            this.shoppingCart.map(function(val,index){
                var totalPrice = val.price * val.count; //计算单个商品总价；
                console.log(totalPrice);
                allPrice += totalPrice;
            })
            alert(`您总计消费了${allPrice}元`)
        }
    }
})
```

### 三、总结
我们先来比较组件化的购物车与之前我们做的非组件化的购物车的区别，然后说说组件化开发的优势和劣势。

**组件化劣势**

* 代码量更多
* 数据传递增加了复杂度

**组件化优势**

* 随着系统功能的增加，组件化的开发可以提高工作效率（虽然代码量增加，但是更容易调试）。 
* 程序功能按组件划分，更容易维护。
* 协同工作，任务更容易分配。

### 四、授课说明
* 本节为实训课，占用8课时。
* 课程需要帮助学员拆分组件，然后让学生按照自己的思路来编写组件。
* 学员一般没有能力独立完成这个案例，所以需要在学员独立思考之后再讲解组件的编写过程。



