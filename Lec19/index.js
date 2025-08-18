const express = require('express');
const app = express();
const mongoose=require('mongoose');
app.use(express.urlencoded({extended:true}))
app.use(express.json())
const blogRoute = require("./routes/blogRoutes");
app.use('/api/blogs',blogRoute);
const userRoutes = require("./routes/userRoutes");
app.use('/api/users',userRoutes);


app.listen(4445, function() {
    console.log('Server started on port 4445');
});

mongoose.connect('mongodb://localhost:27017/BED_DB')
    .then(()=> console.log("Connected"));