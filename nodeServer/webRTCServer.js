const http = require('http');
const https = require('https');
const fs = require('fs');
const express = require('express');
const serveIndex = require('serve-index');

const app = express();

//发布目录
app.use(serveIndex('./public'));
app.use(express.static('./public'));

app.get('/', (req, res) => {
    console.log('req')
    // res.writeHead(200, {
    //     'Content-type': 'text/plain'
    // });
    res.send('Hello World!');
})


//http serve

const http_server = http.createServer(app);

http_server.listen(8080);

//https server
const options = {
    key: fs.readFileSync(__dirname + '/cert/server.key'),
    cert: fs.readFileSync(__dirname + '/cert/server.crt'),
}
const https_server = https.createServer(options, app);
https_server.listen(9999);

