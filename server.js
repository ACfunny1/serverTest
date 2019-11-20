//1.导入http模块
var http = require('http');
//导入文件模块
var fs = require('fs');
//导入路径模块
var path = require('path');
//导入querystring模块（解析post请求数据）
var querystring = require('querystring');

//2.创建服务器
var app = http.createServer();


//3.添加响应事件
var a = {
	name:'dandy',
	age:23
}
app.on('request', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By",' 3.2.1')
    res.setHeader("Content-Type", "application/json;charset=utf-8");
    res.writeHead(200,'ok');
    res.write('Hello Node!!');

	console.log(req.method);
	 if (req.url === '/heroAdd' && req.method === 'POST'){
	 	console.log('成功收到')
	 	var data = ''

	 	req.on('data', function (chunk) {
	 		data += chunk
	 	})

	 	req.on('end', function () {

            data = decodeURI(data);
            console.log(data);

            var dataObject = querystring.parse(data);
            console.log(dataObject);
        });

	 	res.end(JSON.stringify(a))
	 }
})


app.listen(2000,function(){
	console.log('成功创建！')
})