

const https = require('https');

const fs = require('fs');

console.log('__dirname', __dirname);
const options = {
    // hostname: "localhost",
    // port: 8000,
    // path: '/',
    key: fs.readFileSync(__dirname + '/cert/server.key'),
    cert: fs.readFileSync(__dirname + '/cert/server.crt'),
    // ca: [fs.readFileSync('./keys/ca.crt')]
};

const app = https.createServer(options, (req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/plain'
    });
    res.end('https: hello word')

}).listen(8000);
//https  一般监听443端口