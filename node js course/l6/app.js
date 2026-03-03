// const fs = require("fs")

// console.log("Before Reading...");
// fs.readFile("hello.txt","utf-8",(err,data)=>{ // Asynconoures
//     if(err) throw err;
//     console.log(data);
// })
// console.log("After Reading...");

// console.log("Before Reading...");
// let data = fs.readFileSync("hello.txt","utf-8") // Asynnochrnoues
// console.log(data);

// console.log("After Reading...");

// fs.writeFile("input.txt","hello khan",(err)=>{
//     if(err) throw err
// });
// fs.appendFile("input.txt","\nwelcome back",(err)=>{
//      if(err) throw err
// })

// large files reading..
// let readStream = fs.createReadStream("input.txt","utf-8");
// readStream.on("data",(chunk)=>{
//     console.log(chunk);
// });

// let writestream = fs.createWriteStream("input.txt","utf-8")
// writestream.write("hello waelcom back to code");

// pipe 
// let readStream = fs.createReadStream("input.txt","utf-8");
// let writestream = fs.createWriteStream("output.txt","utf-8")
// readStream.pipe(writestream)

