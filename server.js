const http = require('http');
const url = require('url');
const fs = require('fs');

const myServer = http.createServer((req, res) => {
    const date = new Date().toLocaleDateString();
    const logtext = date + ': request recieved\n';
    fs.appendFile('log.txt', logtext, (err) => { });
   
    const parsedUrl = url.parse(req.url, true);
    console.log(req);

    if (req.url === '/favicon.ico') {
        res.end();
    }
    else if (req.url === '/') {
        res.end("Welcome to home page")
    }
    else if (req.url === '/about') {
        res.end("this is viren here")
    } else {
        res.end("Darshan69 not found - 404");
    }
})

myServer.listen(8000, () => {
    console.log("server started");
})