const http = require('http');

const port = process.env.PORT || 3000;
const siteURL = new URL("http://localhost:");

const server = http.createServer((req,res)=>{
    console.log(req.url);
    res.setHeader('Content-Type','text/html');
    if(req.url=='/'){
        res.statusCode = 200;
        res.end('<h1>This is Anish Bhattarai</h1><p>Jhakkas!</p>')
    }else if(req.url=='/about'){
        res.statusCode = 200;
        res.end('<h1>About Anish Bhattarai</h1>');
    }else if(req.url=='/hello'){
        res.statusCode=200;
        
        res.end('hello')   
    }else{
        res.statusCode = 404;
        res.end('<h1>Page not found</h1>')
    }

});

server.listen(port,()=>{
    siteURL.port = port;
    console.log(`Server is listening on port: ${siteURL.href}`);
});