const handleStartPage = (res) => {
    res.write('<html>');
    res.write('<head><title>Assignment</title></head>');
    res.write('<body><h1>Welcome</h1>');

    res.write('<form action="/create-user" method="POST" > ' +
        '<input name="username" type="text">  ' +
        '<button type="submit">Send</button>' +
        '</form>'
    )

    res.write('</body></html>');

    return res.end();
}

const handleCreateUser = (req, res) => {
    const body = [];

    req.on('data', (chunk) => {
        body.push(chunk);
    })

    req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const username = parsedBody.split("=")[1];
        console.log('username ', username);
    })

    return res.end();
}

const handleUsers = (res) => {
    res.write('<html>');
    res.write('<head><title>Users</title></head>');
    res.write('<body><ul>' +
        '<li>Kasia</li>' +
        '<li>Basia</li>' +
        '<li>Zosia</li>' +
        '</ul></body>');
    res.write('</html>');

    return res.end();
}

module.exports = {
    users: handleUsers,
    startPage: handleStartPage,
    createUser: handleCreateUser,
}