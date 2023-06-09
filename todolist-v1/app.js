const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const date = require(__dirname+'/date.js');


var items = ["Buy Food", "Cook Food","Eat Food"];
var workItems = [];

app.set('view engine','ejs');

app.use(express.static("public")); 
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',function(req,res){
    
    res.render('list',{listTitle:date(),newListItem:items});
});

app.post('/',function (req,res){
    let item=req.body.newItem;
    console.log(req.body)
    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect('/work');
    }else{
        items.push(item);
        res.redirect("/");
    }
    // res.render("list",{newListItem:req.body.newItem})
});

app.get('/work',function(req,res){
    res.render("list",{listTitle:"Work List", newListItem:workItems});
});
app.post('/work',function(req,res){
    workItems.push(req.body.newItem);
    res.redirect("/work");
});

app.get('/about',function(req,res){
    res.render("about");
})
app.listen(3000,function(){
    console.log("Server started on port 3000 : http://localhost:3000");
});

