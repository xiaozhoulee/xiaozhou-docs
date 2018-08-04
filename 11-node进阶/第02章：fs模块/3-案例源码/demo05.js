const fs = require("fs");
fs.rename("./newdir","./otherdir",(err)=>{
    if(err){
        console.log(err);
    }
})