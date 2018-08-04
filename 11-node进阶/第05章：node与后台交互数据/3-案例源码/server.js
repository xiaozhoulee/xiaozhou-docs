const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:false}))


//
app.get("/getdata", (req, res) => {
    res.send("通过get方法获取到的数据")
})

app.get("/getdatawithparams", (req, res) => {
    console.log("get:" + req.body.title)
    res.send("使用get方法成功向后台传递数据")
})

//
app.post("/postdata", (req, res) => {
    console.log("post:"+req.body.title)
    res.send("使用post方法成功向后台发送数据")
})


app.listen(8000,()=>{
    console.log("server is running on 8000")
})