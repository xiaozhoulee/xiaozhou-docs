const fs = require("fs");
fs.writeFile("./test.txt","这是一个测试写入的文件",(err)=>{
    if(err){
        console.log(err);
    }
});