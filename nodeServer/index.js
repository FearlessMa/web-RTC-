const Http = require("http");

const app = Http.createServer((req, res) => {
    res.writeHead(200,{
        'Content-type':'text/plain'
    });
    res.end('hello word');
}).listen(8080);

//forever npm 包可以在后台一直启动nodejs服务
// 启动 forever start 
// 停止 forever stop