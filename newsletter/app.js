const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',function(req,res){
    res.sendFile(__dirname+'/signup.html');
});
app.post('/',function(req,res){
    const data = {
        members: [
            {
                email_address:req.body.useremail,
                status:"subscribed",
                merge_fields:{
                    FNAME: req.body.firstname,
                    LNAME: req.body.lastname
                }
            }
        ]
    };
    const jsonData = JSON.stringify(data);
    const url ="https://us21.api.mailchimp.com/3.0/lists/28d0c9962b"
    const options = {
        method : "POST",
        auth: 'Nothin:c0def24bb15c579b5244ce8c59280db4-us21'
    }

    const request = https.request(url,options,function(response){
        if(response.statusCode == 200){
            res.sendFile(__dirname+'/success.html');
        }else{
            res.sendFile(__dirname+'/failure.html');
        }
    });
    request.write(jsonData);
    request.end();
});
app.post('/failure',function(req,res){
    res.redirect('/');
});
app.listen(3000,function(){
    console.log('Server is running on http://localhost:3000');
});

// unique id 
// 28d0c9962b

// API Key
// c0def24bb15c579b5244ce8c59280db4-us21