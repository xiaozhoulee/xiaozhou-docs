const express = require("express");
const app = express();
app.get("/",(req,res)=>{
    res.send("hello node");
})
app.listen(3000);