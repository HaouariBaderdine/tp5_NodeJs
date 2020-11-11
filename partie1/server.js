const http = require('http');
const url = require('url');
const path = require('path');

const hostname ='localhost';
const port = process.env.PORT || 3000;

const server = http.createServer( (req,res )=>{

    let query = url.parse(req.url,true).query;
    let name =query.name;

    if (name === undefined)
        name = "foulen";


    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain; charset=UTF-8");
    console.log(name);
    res.end("Bonjour"+" "+name);

})

server.listen(port, hostname, ()=>{
    console.log(`server run at http://${hostname}:${port}/`);
});