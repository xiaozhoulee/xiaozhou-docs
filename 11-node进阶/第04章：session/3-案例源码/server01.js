var express = require("express");
var session = require("express-session");
var app = express();
//设置session
app.use(session({  
    "secret":"xxx",
    "cookie":{maxAge:10 * 1000}
}))
app.get("/",(req,res)=>{
    if(req.session.isVisit){
        res.send("欢迎再次光临！");
    }else{
        req.session.isVisit = 1;
        res.send("欢迎光临！");
    }
})
app.listen(3000,()=>{
    console.log("ok")
})