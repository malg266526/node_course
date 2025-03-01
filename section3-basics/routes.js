const fs = require('fs');

const requestHandler = (req, res) => {
    const {url, method, headers} = req;
    console.log('req url' , url);

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message" /> <button type="submit">Send</button> </form></body>');
        res.write('</html>');

        return res.end();
    }

    if (method === 'POST' && url === '/message') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        })

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        })
    }

    res.setHeader(
        'Content-Type', 'text/html'
    );

    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from Node server</h1></body>');
    res.write('</html>');

    res.end();
}

module.exports = requestHandler;