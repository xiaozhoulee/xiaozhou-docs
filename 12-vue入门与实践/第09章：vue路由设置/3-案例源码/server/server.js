const express = require("express");

const app = express();

const db = {
    //数据内容
    data : [
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
    ],
    //获取所有标题
    getTitleList() {
        let titleList = [];
        this.data.map(function(val){
            titleList.push(val.title);
        })
        return titleList;
    },
    //通过标题获取文章内容
    getContentByTitle(title) {
        for(let item in this.data){
            if (this.data[item].title === title){
                return this.data[item];
            }
        }
    }
}

app.get("/getlist",(req,res)=>{
    res.send(db.getTitleList());
})

app.get("/getcontent",(req,res)=>{
    let title = req.query.title;
    let data = db.getContentByTitle(title);
    res.send(data);
})

app.listen(3000,()=>{
    console.log("server is running");
})