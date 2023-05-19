const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text({type:'text/html'}))
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})
app.post('/',(req,res)=>{
    res.send(`The sum of given number is ${Number(req.body.num1)+Number(req.body.num2)}`);
});
app.listen(3000,()=>{
    console.log("App is running at http://localhost:3000");
});