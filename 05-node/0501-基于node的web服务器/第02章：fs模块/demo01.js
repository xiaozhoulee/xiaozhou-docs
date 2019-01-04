const fs = require("fs");
fs.readFile("./file.txt","utf-8",(err,data)=>{
    if(err){  //判断是否成功读取
        console.log(err);
    }else{
        console.log(data);
    }
})