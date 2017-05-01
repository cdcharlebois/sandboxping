const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const sbxUrl = 'ghinforecaster100.mxapps.io';

const server = http.createServer(function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
})

server.listen(port, hostname, function() {
    console.log(`Server Running at http:://${hostname}:${port}`);
    setInterval(function() {
        http.get({
            hostname: sbxUrl,
            post: 80,
            path: '/',
            agent: false
        }, function(res) {
            console.log(`pinged ${sbxUrl} -- ${res.statusCode}`);
        });
    }, 5 * 1000);
});