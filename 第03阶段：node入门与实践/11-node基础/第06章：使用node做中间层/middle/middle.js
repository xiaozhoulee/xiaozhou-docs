var express = require('express');
var app = express();
const request = require("request");

function getAllData(url){
    return new Promise(function(resolve){
        request.get(`http://127.0.0.1:8000${url}`, (err, response, body) => {
            if (!err && response.statusCode === 200) {
                let json = JSON.parse(body);
                resolve(json);
            }
        })
    })
}

app.get("/gettitlelist", (req, res) => {
    getAllData("/getdata").then(function(data){
        let titlelist = [];
        data.map((val)=>{
            titlelist.push(val.title);
        })
        res.send(titlelist);
    })
})

app.get("/getcontentbytitle", (req, res) => {
    let title = req.query.title;
    console.log(title);
    getAllData("/getdata").then(function (data) {
        for(var i in data){
            if(data[i].title === title){
                res.send(data[i]);
            }
        }
    })
})


app.listen(3000, () => {
    console.log("server is running on 3000")
});





