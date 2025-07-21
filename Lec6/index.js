const fs = require("fs");


fs.writeFile("demo.txt","g26 hello","utf-8",function(err,data){
if(err) return console.log(err);
console.log("success!!1");
})