var express = require("express"); //引入express
var app = express();   //创建一个应用的实例
app.use(express.static("public")); //将public目录设置为静态文件目录
app.listen(3000);   //监听3000端口