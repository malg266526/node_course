const http = require('http');

function requestListener(req, res) {
    console.log('req', req.url, req.method, req.headers);

    res.setHeader(
        'Content-Type', 'text/html'
    );

    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from Node server</h1></body>');
    res.write('</html>');

    res.end();

}

const server = http.createServer(requestListener);

server.listen(3000);