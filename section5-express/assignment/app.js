const express = require("express");

const app = express();

/*app.use((req,res,next) => {
    console.log('In the middleware I');
    next()
})

app.use((req,res,next) => {
    console.log('In the middleware II');
    res.send('<h1>Hello from II</h1>');
})*/

app.use("/users", (req, res, next) => {
    res.send("<h1>Hello from Users</h1>");
});

app.use("/", (req, res, next) => {
    res.send("<h1>Hello from Main Handler</h1>");
});

app.listen(3001)