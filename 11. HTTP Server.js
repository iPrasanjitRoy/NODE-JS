// IMPORT THE HTTP MODULE  
const http = require('http');


// Define The Port To Listen On: 
let Port = process.env.PORT || 4000;
// It Checks The Value Of The Port Environment Variable (Process.Env.Port). 
// If The Environment Variable Is Set, It Uses That Value As The Port Number.





// Call BACK Function (Request,Responds) 
const Server = http.createServer((req, res) => {
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1> This is CodeWithHarry</h1> <p> Hey This IS The Way To Rock The World!</p>');
})

Server.listen(Port, () => {
    console.log(`Server is Listening On Port ${Port}`);

});
