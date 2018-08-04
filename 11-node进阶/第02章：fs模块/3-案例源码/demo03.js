const fs = require("fs");
fs.appendFile("./test.txt", "这里是追加的内容！", (err) => {
    if (err) {
        console.log(err);
    }
});