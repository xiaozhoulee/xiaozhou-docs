var express = require("express");  
var app = express();               
app.use(express.static("public"));

//引入body-parser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));

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

var fruits = ["香蕉","苹果","鸭梨"]; //数据
var fruitlist = new Fruitlist(fruits); //实例化一个水果列表

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

app.listen(3000,function(){           
    console.log("server is running");
})


