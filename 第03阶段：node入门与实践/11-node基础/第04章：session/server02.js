var express = require("express");
var session = require("express-session");
var app = express();
app.use(session({  
    "secret":"xxx",
    "cookie":{maxAge:10 * 1000}
}))
app.get("/",(req,res)=>{
    if(req.session.isVisit){
        req.session.isVisit++;
        var str = "欢迎第" + req.session.isVisit + "次访问";
        res.send(str);
    }else{
        req.session.isVisit = 1;
        res.send("欢迎第1次访问");
    }
})
app.listen(3000,()=>{
    console.log("ok")
})