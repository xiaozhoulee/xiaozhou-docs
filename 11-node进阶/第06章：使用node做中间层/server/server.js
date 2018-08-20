const express = require("express");

const app = express();

const data = [
        {
            title: "html概述",
            content: "html是超文本标记语言，表示网页的内容。"
        },
        {
            title: "javascript概述",
            content: "javascript是一个在前端用处广泛的脚本语言。"
        },
        {
            title: "css概述",
            content: "css是层叠样式表，用来表示元素的样式。"
        }
    ]

app.get("/getdata", (req, res) => {
    res.send(data);
})

app.listen(8000, () => {
    console.log("server is running on 8000");
})