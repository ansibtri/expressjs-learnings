const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const port = 8000;
const path = require('path');

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname,"static")));
app.use('/',require(path.join(__dirname,'routes/blog')));

app.get('/',(req,res)=>{
    res.sendFile('/templates/index.html');
});

app.get('/blog',(req,res)=>{
    res.sendFile('/routes/blog.js');
})

app.listen(port,()=>{
    console.log(`Server is running at https://localhost:${port}`);
})