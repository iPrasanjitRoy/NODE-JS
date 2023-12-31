const FS = require('fs');
const http = require('http');

let Port = process.env.PORT || 8000;

const Server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html')
    console.log(req.url)
    if (req.url == '/') {
        res.statusCode = 200;
        const Data = FS.readFileSync('index.html');
        res.end(Data.toString());
    }
    else if (req.url == '/CWH') {
        res.statusCode = 200;
        res.end('<h1> This is CodeWithHarry</h1> <p> Hey This IS The Way To Rock The World!</p>');
    }
    else if (req.url == '/About') {
        res.statusCode = 200;
        const Data = FS.readFileSync('About.html');
        res.end(Data.toString());
    }
    else if (req.url == '/AboutReplace') {
        res.statusCode = 200;
        res.end('<h1> About CodeWithHarry</h1> <p> Hey This is About CodeWithHarry!</p>');
    }
    else {

        res.statusCode = 404;
        res.end('<h1> Not Found</h1>');
    }

})

Server.listen(Port, () => {
    console.log(`Server is Listening On Port ${Port}`);

});




