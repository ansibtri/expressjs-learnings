const express = require('express');
const bodyParser = require('body-parser');

const app = express();
var items = ["Buy Food", "Cook Food","Eat Food"];
var workItems = [];
app.set('view engine','ejs');
app.use(express.static("public")); 
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',function(req,res){
    const date = new Date();
    const today = date.getDay();
    // const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var options = {
        weekday: "long",
        day:"numeric",
        month:"long"
    };
    var day = date.toLocaleDateString("en-US",options);
    res.render('list',{listTitle:day,newListItem:items});
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

