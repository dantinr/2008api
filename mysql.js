var mysql      = require('mysql');          // 引入模块


//设置连接参数
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456abc',
    database : 'api2008'
});
//创建连接
connection.connect();

// 执行 query
connection.query('select user_id,user_name,email from p_users limit 10', function (error, results, fields) {
    //console.log(error)
   //获取查询的结果 results
    console.log(results[0].user_name)
});

connection.end();