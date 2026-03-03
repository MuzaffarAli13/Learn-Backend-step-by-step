const http = require("http")

// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{"content-type":"text/html"});
//     res.end("<h2>Hello From Muzaffar IT Academy</h2>");
// });

// server.listen(8000,()=>{
//     console.log("Server running at https://localhost:8000");
// });

// users
let users = [
    {
        name:"muzaffar Ali",
        id:1,
        email:"muzaffar@gmail.com"
    },
    {
        name:"muzaffar Ali",
        id:2,
        email:"muzaffar@gmail.com"
    }
];

let server = http.createServer((req,res)=>{
    if(req.url === "/"){
      res.writeHead(200,{"content-type":"text/plan"});
        res.end("Home Page..")
    }
    else if(req.url === "/user"){
        res.writeHead(200,{"content-type":"application/json"});
        res.end(JSON.stringify(users))
    }else{
        res.writeHead(404,{"content-type":"text/plan"});
        res.end("page not found...")
    }
});
server.listen(8000,()=>{
    console.log("Server running at https://localhost:8000");
});