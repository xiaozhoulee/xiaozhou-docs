var http = require("http");  // 引入http模块

//http的createServer方法可以创建一个web服务器
var httpServer = http.createServer(function(req,res){
    res.end("hello node");
});

//web服务器监听3000端口
httpServer.listen(3000);