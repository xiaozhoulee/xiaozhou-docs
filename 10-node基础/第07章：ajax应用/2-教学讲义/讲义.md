## 第07章：ajax应用（实训）

### 一、概述
上一节我们讲解了jQuery为我们封装的ajax方法，本节我们使用上节学习的知识做一个水果列表的案例。

**功能描述（案例演示）**

* 在网页中显示一个文本输入框，一个按钮和一个水果列表
* 当点击按钮的时候，将文本框中的内容添加到水果列表中
* 水果列表中有删除按钮，当点击删除按钮的时候，删除当前水果。

### 二、服务器核心代码讲解

**定义水果列表类**

首先定义一个水果列表的类，用来处理水果数据的添加和删除，代码如下：

``` js
//定义一个水果列表的类
class Fruitlist{
    constructor(data){     //this.data是水果列表的数据，类型是一个数组
        this.data = data;
    }
    
    delete(index){       //删除功能
        this.data.splice(index,1);
    }

    insert(fruitName){   //添加功能
        this.data.push(fruitName);
    }

}

```

实例化这个水果列表类，并添加数据,代码如下：

``` js
var fruits = ["香蕉","苹果","鸭梨"]; //数据
var fruitlist = new Fruitlist(fruits); //实例化一个水果列表
```

**设置路由**

编写三个路径来处理前端的请求，功能分别是：显示水果列表，添加水果，删除水果，代码了如下：

``` js
app.post("/delete",function(req,res){    //处理删除请求
    var index = req.body.index;
    fruitlist.delete(index);
    res.send(fruitlist.data);
})

app.post("/insert",function(req,res){    //处理添加请求
    var fruitName = req.body.fruitName;
    fruitlist.insert(fruitName);
    res.send(fruitlist.data);
})

app.get("/fruitlist",function(req,res){    //接收get请求,获取水果列表
    res.send(fruitlist.data);
})
```

这样后台的代码就完成了，接下来我们在编写前端的代码


### 三、前端代码讲解

**初始化数据**
首先我们需要两个函数，一个函数可以将数据显示嵌入到列表中,代码如下所示：

``` js
//将数据显示到水果列表
function showData(data){
    var $ul = $(".list")
    $ul.empty();
    for(var i in data){
        $ul.append(`<li>${data[i]} <span class="del">删除</span></li>`);   
    }
    
}
```

还需要一个函数在页面加载的时候，初始化数据
``` js
//数据初始化
function init(){
    $.get("/fruitlist",function(res){
        showData(res);
    })
}

```


**添加数据**

我们为按钮绑定事件来实现添加数据的功能，添加数据的内容，我们通过post方法的第二个参数传递给后台服务器。
``` js
$("button").click(function(){
    var fruitName = $("input").val();
    $.post("/insert",{fruitName:fruitName},function(res){
        showData(res);
    })
})
```


**删除数据**

删除列表功能需要绑定页面后添加的元素，所以需要事件委托来实现事件的绑定，代码如下：
``` js
$(".list").delegate(".del","click",function(){
    var index = $(this).parent().index();
    $.post("/delete",{index:index},function(res){
        showData(res);
    })
})
```

这样我们就成功地实现了水果列表的添加和删除功能。
