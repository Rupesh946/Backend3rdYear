// write in a file using fs
// take input from terminal

//console.log(process.argv);

const fs = require("fs");
const input = process.argv.slice(2).join(" ");

fs.writeFile("../assignment/demo-assign.txt", input, function(err) {
    if(err) return console.log(err);
    console.log("File written successfully!");
});