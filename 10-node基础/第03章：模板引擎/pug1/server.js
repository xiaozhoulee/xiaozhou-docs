var express = require("express");
var app = express();

app.set("view engine","pug");  //将模板引擎设置成pug

app.get("/",function(req,res){
    res.render("index");  //使用render方法渲染pug文件，将模板文件转换成html并发送给客户端。
})

//当访问/data 页面的时候，向pug模板传递数据
app.get('/data',function(req,res){
    res.render("data",{data:"后台的数据hello pug"});
})

//当访问/fruitlist的时候，将水果列表的数据传递给pug文件
var fruits = ["香蕉","苹果","鸭梨","苹果","鸭梨"];
app.get("/fruitlist",function(req,res){
    res.render("fruitlist",{data:fruits});
});

app.listen(3000);