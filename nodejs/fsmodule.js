// Using CommonJS syntax:
const fs = require('fs');

// non-blocking i/o model of reading file 
// fs.readFile('file.txt','utf8',(err, data)=>{
//     console.log(err,data);
// })
// console.log("Finished reading file");

// blocking i/o model 
// const a = fs.readFileSync('file.txt')
// console.log(a.toString());
// console.log("Finished reading file");

// program to write data 
// const data = "Hello World";
// fs.writeFile('file.txt', data, function(err){
//     if(err) throw err;
//     console.log("Data Written to file");
// });
// console.log("Finished reading file");

// blocking i/o model 
const data = "Hello World ss";
fs.writeFileSync('file.txt', data);
console.log("Finished reading file");


// program to add data 
// const data = "\nHello World";
// fs.appendFile('file.txt',data,function(err){
//     if (err) throw err;
//     console.log("Data added successfully");
// })
