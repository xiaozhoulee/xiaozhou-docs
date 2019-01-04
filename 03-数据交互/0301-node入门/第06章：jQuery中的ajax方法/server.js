var express = require("express");  
var app = express();               
app.use(express.static("public"));

app.get("/data",function(req,res){    //接收get请求,url为：/data,响应"helolo get ajax"
    res.send(" hello get ajax");
})

app.post("/data",function(req,res){   //接收post请求，url为：/data,响应"helolo post ajax"
    res.send("hello post ajax")
})

app.get("/books",function(req,res){    //接收get请求，url为：/data,响应一个数组
    var books = ["JavaScript高级程序设计","JavaScript权威指南"];
    res.send(books);
})

app.listen(3000,function(){            //监听3000端口
    console.log("server is running");
})

