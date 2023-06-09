const express = require('express')
const app = express();
const port = 8000;
const path = require('path');


// const harryMiddleWare = (req,res,next)=>{
//     console.log(req);
//     next();
// }
app.use(express.static(path.join(__dirname,"public")));
// app.use(harryMiddleWare);

app.get('/hello/:name',(req,res)=>{
    // res.send("Hello World");
    // res.sendFile(path.join(__dirname,'index.html'));
    res.send("Hello "+req.params.name);
});

app.get('/about',(req,res)=>{
    res.status(500);
    res.send("This is about page");
});

app.get('/contact',(req,res)=>{
    // res.send("This is contact page");
    res.json({"harry":"34"});
})

app.listen(port,()=>{
    console.log(`The site is running at http://localhost:${port}`);
})