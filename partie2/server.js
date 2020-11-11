const http = require('http');
const url = require('url');
const path = require('path');
const fs  = require('fs');

const hostname ='localhost';
const port = process.env.PORT || 3000;

const server = http.createServer( (req,res )=>{

    let query = url.parse(req.url,true).query;
    let name =query.name;

    if (name === "un"){
        fs.readFile('node-module/public/page1.html',(err,data)=>{
            if(err)
                throw err;
            else{
                res.statusCode = 200;
                data1 = data.toString().replace('{{name}}',name);
                res.end(data1);
            }
        });
    }else if (name === "deux"){
        fs.readFile('node-module/public/page2.html',(err,data)=>{
            if(err)
                throw err;
            else{
                res.statusCode = 200;
                data1 = data.toString().replace('{{name}}',name);
                res.end(data1);
            }
        });
    }else{
        res.statusCode = 200;
        res.end("<h1>tp5 partie2</h1><br/><p>donner un parmetre entre 'un' ou 'deux'</p>");
        
    }

})

server.listen(port, hostname, ()=>{
    console.log(`server run at http://${hostname}:${port}/`);
});