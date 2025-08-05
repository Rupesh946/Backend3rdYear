const express = require('express');
const app = express();
const fs = require('fs');
app.use(express.static(__dirname+ '/public'));
app.use(express.urlencoded({ extended: true }));
app.get('/users', (req, res) => {
    fs.readFile('users.json', 'utf8', function(err, data){
        if (err) res.send(err);
        let allusers = JSON.parse(data);
        res.json(allusers);
    });
})
app.post('/adduser', (req, res) => {
    try{
        let name = req.body.name;
        let username = req.body.username;
        let newUser = {
         id:Math.floor(Math.random()*1000000),
         name: name,
         username: username,
         role: "user"
      };
        let alluser = [];
        let data=fs.readFileSync("./users.json", 'utf-8');
        if(data){
            alluser = JSON.parse(data);
        }
        alluser.push(newUser);
        fs.writeFileSync("./users.json", JSON.stringify(alluser));
        res.send("User added successfully");
     }catch(error){
        return res.send(error);
     }
})

app.listen(4400, function() {
    console.log('Server started on port 4400');
}); 