const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Hello there</title></head>');
        res.write('<body><h1>Hello there!</h1><p>Please enter a username:</p><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form></body>');
        return res.end();
    }
    if (url === '/users') {
        fs.readFile('usernames.txt', 'utf8', (err, data) => {
            const usernames = data.split('\n');
            console.log(usernames);
            res.write('<html>');
            res.write('<head><title>Hello there</title></head>');
            res.write('<body><h1>Usernames:</h1><ul>');
            for (let i = 0; i < usernames.length - 1; i++) {
                res.write('<li>');
                res.write(usernames[i]);
                res.write('</li>');
            }
            res.write('</ul></body>');
            return res.end();
        })
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            console.log(username);
            fs.appendFile('usernames.txt', username + '\n', (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        })
    }
};

module.exports = requestHandler;