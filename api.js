const express = require('express')      //引入模块
const bodyParser = require('body-parser')       //引入 body-parse 用来解析 接收到的post数据
const mysql = require('mysql')
const app = express()                   // 调用 express
const port = 8080                       // 服务运行的端口


//设置连接参数
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456abc',
    database : 'api2008'
});


//设置跨域访问
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-type",);
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


app.use(bodyParser.json())

// 登录接口
app.post('/user/login',function(req,res){
    console.log(req.body)
    let user_name = req.body.user_name      //接收的用户名
    let user_pass = req.body.user_pass      // 接收的密码

    // TODO 查询数据库

    res.send("ok")
})

//个人中心
ap.get("/user/center",function(req,res){

})

//用户列表
app.get('/user/list',(req,res)=>{

})

app.get('/', (req, res) => {
    res.send()
})

// 用户注册
app.post('/user/reg',function(req,res){
    // 接收post数据
    const body = req.body
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})