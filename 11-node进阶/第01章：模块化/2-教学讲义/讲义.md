## 第01章：模块化

### 一、模块化概述

在《node基础》的课程中，我们了解了如何使用node搭建一个简易的web服务器，但是在之前的课程内容中，我们编写的程序仅仅存放在一个名为server.js的文件中。我们如果使用node编写一个web项目的后台，不可能只编辑一个server.js文件，我们需要把后台的功能拆分成一个个模块，然后分别完成，最后组合成一个web项目的后台程序。

那么我们如何拆分一个个模块，这些模块又是如何拼接在一起的呢，这就需要用到我们今天学习的node模块化的基本概念。

### 二、模块的分类

我们先来复习一下《node基础》中的概念。在node中，可以将模块分成三大类：

* 核心模块
* 第三方模块
* 自定义模块

**核心模块**

核心模块是node环境自带的模块，我们不需要下载，可以直接引入，示例代码如下所示（server1.js）：

``` js
var http = require("http");  // 引入http模块

//http的createServer方法可以创建一个web服务器
var httpServer = http.createServer(function(req,res){
    res.end("hello node");
});

//web服务器监听3000端口
httpServer.listen(3000);
```

上面的代码我们在《node基础》课程中已经演示过了，它可以开启一个服务器，当访问当前服务器3000端口的时候，会相应一个字符串“hello node”，这里我们引入的http就是一个核心模块。

除了http模块，常用的核心模块还有fs模块，我们会在下一节课重点讲解。


**第三方模块**

在node基础中我们已经掌握了express的使用方法，express就是一个第三方模块，我们可以用require引入第三方模块，示例代码如下所示：

``` js
const express = require("express"); //引入express框架
const bodyParser = require("body-parser");  //引入body-parser库
```

引入第三方模块之后，我们就可以使用这些模块提供的各种接口功能了。需要注意的是，我们引入第三方模块之前一定要确保已经使用npm成功下载了这个第三方模块。

下面我们复习一下使用express启动一个web服务器，当访问这个web服务器的时候，响应一个字符串“hello node”，代码如下所示（server2.js）

``` js
const express = require("express");
const app = express();
app.get("/",(req,res)=>{
    res.send("hello node");
})
app.listen(3000);
```

**自定义模块**

我们还可以单独创建一个js文件作为一个自定义模块，每一个模块都有他特定的功能或是一些列功能，我们通过调用模块暴露出来的接口来使用这个模块的功能，例如我们创建一个可以计算两个数加法和减法的模块，示例代码如下所示（module.js）

``` js
function sum(a,b){
    return a + b;
}

function sub(a,b){
    return a - b;
}

module.exports = {
    sum:sum,
    sub:sub
}
```
在上面的模块中，我们定义了两个函数分别计算数字的加法和减法，然后通过module.exports方法将两个方法暴露出去，这样我们就可以在其他的程序中使用require引入这个模块，并调用模块中的这两个方法了。

我们创建一个文件（app.js），引入module.js，并使用加法和减法两个方法计算两个数字的结果。代码如下所示

``` js 
const count = require("./module.js");
let result1 = count.sum(10,20);
let result2 = count.sub(10,20);

console.log(result1);
console.log(result2);
```

在上面的代码中我们可以看到，使用require方法可以引入module.js模块，但是需要注意的是：引入第三方模块需要确定完整的路径，否则node将无法正确找到模块。


### 三、授课说明

课后练习可以让学员通过提交表单的方式向后台传入数字，然后用自定义模块计算结果。