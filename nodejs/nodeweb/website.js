const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    if(req.url == '/'){
        res.end(fs.readFileSync('./index.html'));
    }else if(req.url == '/about'){   
        res.end(fs.readFileSync('./about.html'));
    }else{
        res.statusCode = 404;
        res.end('<h1>Not Found</h1>');
    }
});
const port = 3000;
const url = new URL('http://localhost');
url.port = port;
server.listen(port,()=>{
    console.log(`The site is running at: ${url.href}`)
})