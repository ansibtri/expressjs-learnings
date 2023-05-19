const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text({type:'text/html'}));

router.get('/',function(req,res){
    console.log('he')    
})
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});
app.post('/',function(req,res){
    const bmi = (req.body.weight/Math.pow(req.body.height,2))*10000;
    res.send(`Your BMI is ${bmi.toFixed(2)}`);
})

app.use(router);
app.listen('3000',()=>{
    console.log('Server is running at http://localhost:3000');
});