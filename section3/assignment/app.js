const http = require('http');
const handleRoute = require('./routes');


const server = http.createServer((req, res) => {
    const {url, method} = req

    if (url === "/" || url === "") {
        handleRoute.startPage(res);
    }

    if (url === "/users") {
        handleRoute.users(res);
    }

    if (url === "/create-user" && method === "POST") {
        console.log('/create-user');

        handleRoute.createUser(req, res);
    }
});

server.listen(3000);