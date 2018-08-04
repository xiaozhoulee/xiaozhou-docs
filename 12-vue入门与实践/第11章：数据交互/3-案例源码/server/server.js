const express = require("express");

const app = express();

app.get("/getdata",(req,res)=>{
    res.send("hello world");
})

app.listen(3000,()=>{
    console.log("server is running");
})