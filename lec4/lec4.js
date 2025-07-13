const { isPromise } = require("util/types");

function buyProduct(product_Name,cb){
    //do some asynchornous operation
    setTimeout(()=>{
        console.log("all the I/O is completed and order details are written in user data")
        cb();
    },0)
}

// buyProduct("Iphone 9",function(){
//     console.log("product is purchased")
// })

let products = [
  { name: "samsung", amount: 70000 },
  { name: "Iphone 9", amount: 100000 }
];

function buyProduct(product_Name, cb) {
  let productFound = products.filter((p) => p.name === product_Name)[0];

  if (!productFound) {
    return cb("Product is not available", null);
  }

  cb(null, productFound.amount);
  console.log("Product is purchased");
}

buyProduct("Iphone 9", function (err, amount) {
  if (err) return console.log(err);
  console.log("Amount:", amount);
});