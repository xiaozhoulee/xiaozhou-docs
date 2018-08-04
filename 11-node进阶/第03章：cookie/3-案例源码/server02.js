const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());
app.get('/', function (req, res) {
    // 如果请求中的 cookie 存在 isVisit, 则输出 cookie
    // 否则，设置 cookie 字段 isVisit, 并设置过期时间为1分钟
    if (req.cookies.isVisit) {
        let count = ++req.cookies.isVisit;
        res.cookie('isVisit', count);
        res.send(`欢迎第${count}次访问！`);
    } else {
        res.cookie('isVisit', 1);
        res.send("欢迎第1次访问！");
    }
});
app.listen(3000, function () {
    console.log("server is running!");
})