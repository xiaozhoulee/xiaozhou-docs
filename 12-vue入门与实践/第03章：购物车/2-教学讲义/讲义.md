## 第03章：购物车（实训课）

### 一、功能展示
* 页面左侧为商品列表
    * 商品有名称和单价
    * 可以设置购买数量
    * 可以添加到购物车
* 页面右边为购物车
    * 可以修改商品数量
    * 可以删除商品
    * 点击购买，弹出总价

### 二、需求分析
根据功能要求，我们使用vue来构建购物车功能，具体思路如下：
1. 确定商品列表的数据格式
``` json
[
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
```
2. 购物车的数据格式与商品列表相同，但开始是一个空数组。
3. 确定商品列表表格的字段
    * 商品名称
    * 商品单价
    * 数量（可增减）
    * 添加购物车（将指定数量的商品添加到购物车中）
4. 确定购物车表格的字段
    * 商品名称
    * 单价
    * 数量（可增减）
5. 购物车需要一个结算按钮计算商品的总价。


### 三、功能实现
数据格式与功能确定之后，需要编写商品列表的页面（为了界面美观，此案例使用bootstrap样式，demo01.html）。
``` html
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
                <button>-</button>
                <span>{{val.count}}</span>
                <button>+</button>
            </td>
            <td>
                <button class="btn btn-primary">添加购物车</button>
            </td>
        </tr>
    </tbody>
</table>
```

商品数量是一个计数器功能，点击【-】数量减1，但是不能小于零，点击【+】数量加1。我们需要为这两个按钮绑定事件，并编写对应的功能（demo02.html）
``` html
<td>
    <button v-on:click="sub(index)">-</button>
    <span>{{val.count}}</span>
    <button v-on:click="add(index)">+</button>
</td>
```

``` js
methods:{
    add:function(i){
        this.goodsList[i].count++;
    },
    sub:function(i){
        if(this.goodsList[i].count>0){
            this.goodsList[i].count--;
        }
    }
}
```

当用户点击【添加购物车】按钮可以将该行的数据添加到右侧的购物车表格当中（demo03）。

``` html
<!-- 商品列表 -->
<td>
    <button v-on:click="insert(index)" class="btn btn-primary">添加购物车</button>
</td>
```

``` html
<!-- 购物车 -->
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
                <button v-on:click="cartSub(index)">-</button>
                <span>{{val.count}}</span>
                <button v-on:click="cartAdd(index)">+</button>
            </td>
            <td>
                <button class="btn btn-primary">删除</button>
            </td>
        </tr>
    </tbody>
</table>
```

``` js
cartSub:function(i){
    this.shoppingCart[i].count++;
},
cartAdd:function(i){
    if(this.shoppingCart[i].count>1){ //购物车数量了不能为0
        this.shoppingCart[i].count--;
    }
},
insert:function(i){
    this.shoppingCart.push(this.goodsList[i]);
}
```

目前为止，我们已经实现了商品列表的计数器功能和添加购物车功能，但是现在的程序有两个问题：

* 变更数量的时候，商品列表和购物车的商品会同时变。
* 点击【添加至购物车】按钮，不应该重复添加同一个商品，而是应该添加数量。

第一个问题是因为，我们添加的对象是引用类型，购物车数组里的对象与商品列表中的对象指向的是一个对象，所以一个数量变化，另一个也会变化（在“JavaScript进阶”课程中有详细的讲解），所以我们需要克隆一个商品对象，再加入到购物车中（demo04.html）。

``` js
clone:function(obj){
    var newobj = {};
    for(var i in obj){
        newobj[i] = obj[i]
    }
    return newobj;
},
insert:function(i){
    var newgoods = this.clone(this.goodsList[i])
    this.shoppingCart.push(newgoods);
}
```

这里我们编写了一个clone方法实现了对象的浅克隆。并将克隆的对象添加到购物车，这样购物车中的数量变更就不会影响商品列表中的数量了。

然后我们再来处理商品重复的问题，我们需要判断购物车是否由再次添加的商品，如果没有，那么将商品添加至购物车，如果购物车已经有这个商品了，那么应该增加指定商品的数量（demo05.html）。

``` js
insert:function(index){
    if(this.goodsList[index].count === 0){
        alert("请选择数量！");
        return;
    }
    for(var i = 0;i<this.shoppingCart.length;i++){
        if(this.goodsList[index].name === this.shoppingCart[i].name){
            this.shoppingCart[i].count += this.goodsList[index].count;
            return;
        }
    }
    var newgoods = this.clone(this.goodsList[index])
    this.shoppingCart.push(newgoods);
}
```

我们在insert方法中添加了一些判断条件，让购物车的功能更加完善

* 首先，商品数量为0不能添加到购物车。
* 然后，当添加购物车时，若购物车已经有了这个商品，那么值增加数量，不增加种类。
* 最后，若购物车没有这个商品，那么在购物车中正常添加商品。

现在，将商品添加到购物车的功能我们已经完成了，接下来要做的是在购物车中删除商品。这个和之前我们做的任务列表的例子很像（demo06.html）。

``` html
<td>
    <button v-on:click="del(index)" class="btn btn-primary">删除</button>
</td>
```

``` js
del:function(i){
    this.shoppingCart.splice(i,1);
}
```

最后我们要实现点击【结算】按钮，计算出总价（demo07.html）。

``` html
<button v-on:click="count" class="btn btn-success">结账</button>
```

``` js
count:function(){
    var allPrice = 0;  //所有商品的总价
    this.shoppingCart.map(function(val,index){
        var totalPrice = val.price * val.count; //计算单个商品总价；
        console.log(totalPrice);
        allPrice += totalPrice;
    })
    alert(`您总计消费了${allPrice}元`)
}
```

通过count方法，我们可以计算购物车中所有商品的总价，并通过提示框输出，到此购物车的所有需求我们已经完成。