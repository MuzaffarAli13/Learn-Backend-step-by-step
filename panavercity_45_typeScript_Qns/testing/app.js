// import express from 'express';
// import bodyParser from 'body-parser';

// let app = express();

// app.get("/",(req,res)=>{
//     res.status(200).json({"message":"Hello From Express js"})
// })
// app.use(express.json());
// app.use(bodyParser.urlencoded({extended:true}));

// app.post("/users",(req,res)=>{
//     let {name} = req.body;
//     console.log(name);
//     res.status(200).json(
//         {
//             "succes":true,
//             "message":"data recieved"
//         }
//     )
    
// })


// app.listen(8000,()=>{
//     console.log('Server Run at 8000');
    
// })


// const http = require('http');
// let server = http.createServer((req,res)=>{
//     res.writeHead(200,{"content-type":"text/plan"})
//     res.end("hello from node js")
// })

// server.listen(8000,()=>{
//     console.log("Server Run at 8000");
    
// })