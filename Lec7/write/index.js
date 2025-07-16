let users=[
    {
        name:"nitesh",
        age:"24",
        address:"Delhi",
    },
    {
        name:"Ritik",
        age:"age",
        address:"faridabad",
    }
]
const fs =require("fs");
fs.writeFile("../read/users.txt",JSON.stringify(users),function(err){
    if(err) return console.log(err);
    console.log("users written!");
})