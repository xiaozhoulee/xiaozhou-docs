var express = require('express');
var app = express();

//设置代理跨域
// var proxy = require('http-proxy-middleware');
// app.use('/apis', proxy({ target: 'http://127.0.0.1:8000',  changeOrigin: true,}));

//get不带参数
app.get("/getwithoutparams",(req,res)=>{
    request.get("http://127.0.0.1:8000/getdata", (err, response, body) => {
        if (!err && response.statusCode === 200) {
            res.send(body);
        }
    })
})

//get带参数
app.get("/getwithparams", (req, res) => {
    request.get("http://127.0.0.1:8000/getdatawithparams", { form: { title: "get参数" } }, (err, response, body) => {
        if (!err && response.statusCode === 200) {
            res.send(body);
        }
    })
})

//post带参数
app.get("/postwithparams", (req, res) => {
    request.post("http://127.0.0.1:8000/postdata", { form: { title: "post参数" } }, (err, response, body) => {
        if (!err && response.statusCode === 200) {
            res.send(body);
        }
    })
})


app.listen(3000, () => {
    console.log("server is running on 3000")
});

const request = require("request");



