const express = require('express')      //引入模块
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

app.get('/user',function(req,res){

    //接收url传参   如 ?name=zhangsan&age=11
    let params = req.query
    console.log(params)

    let username = params.name

    let sql = `select * from p_users where user_name='${username}'`
    console.log(sql)
    // 执行 query
    connection.query(sql, function (error, results, fields) {
        //获取查询的结果 results
        console.log(results)
        if(results){        // 有数据
            console.log(results)
        }else{              //无数据
            console.log("没有此用户可注册")
        }
    });

    //向客户端响应数据
    res.send("欢迎访问用户接口")
})

app.get('/list',(req,res)=>{
    //创建连接
    connection.connect();

    // 执行 query
    connection.query('select user_id,user_name,email from p_users limit 10', function (error, results, fields) {
        //console.log(error)
        //获取查询的结果 results
        //console.log(results)
        res.send(JSON.stringify(results))
    });

    connection.end();

})

app.get('/', (req, res) => {

    const list = [
        {
            userid: 1001,
            name: "zhangsan",
            age: 11
        },
        {
            userid: 1002,
            name:"lisi",
            age:22
        },
        {
            userid: 1003,
            name: "wangwu",
            age: 33
        }
    ]

    //将数组转为JSON字符串
    res.send(JSON.stringify(list))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})