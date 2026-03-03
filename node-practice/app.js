// const { add, subtract } = require("./math");

// console.log(add(5, 3));      // 8
// console.log(subtract(5, 3)); // 2

// const path = require("path");

// console.log(path.join(__dirname, "app.js"));
// console.log(path.extname("app.js"));
// console.log(path.basename("app.js"));

// const fs = require("fs");

// fs.writeFile("hello.txt", "Hello Node.js! 🚀", (err) => {
//   if(err) {
//     console.log("Error:", err);
//   } else {
//     console.log("File ban gayi! ✅");
//   }
// });

const fs = require("fs");
const { escape } = require("querystring");

// fs.writeFile("tem.txt","Hello data",(err)=>{
//   if(err){
//     console.log(err.message);
//   }
//   else{
//     console.log("Succues..");
//   } 
// })


// fs.writeFile("khan.py","print(20)",(err)=>{
//   if(err){
//     console.log(err.message);
//   }else{
//     console.log("200");
//   }
// })

// const fs = require("fs");

fs.readFile("khan.py", "utf8", (err, data) => {
  if(err) {
    console.log("Error:", err);
  } else {
    console.log(data);
  }
});

