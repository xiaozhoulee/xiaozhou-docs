const fs = require("fs");
fs.mkdir("./newdir",(err)=>{
    if(err){
        console.log(err);
    }
})