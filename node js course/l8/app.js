const http = require("http");

const server = http.createServer((req,res)=>{
    
    // Headling a post Method 
    // GET, POST,DELETE,PUT,PATCH
    if(req.method === "POST" && req.url === "/submit"){
         const body = '';
         req.on('data',(chunk)=>{
         body += chunk.toString() // convert buffur to string..   // bufur like H => 102
       })
       //    end event trigger when all data recieved
       req.on('end',()=>{
        console.log(JSON.parse(body));
        res.writeHead(200,{"content-type":"application/json"})
        res.end(JSON.stringify({succes:true,message:"Account Created Successfuly.."}))
       })
    }else if(req.url === "/user"){
        res.writeHead(200,{"content-type":"application/json"});
        res.end(JSON.stringify({succes:true,message:"user 1"}))
    } 
    else{
        res.writeHead(404,{"content-type":"application/json"});
        res.end(JSON.stringify({succes:false,message:"Not Found.."}))
    }

});

server.listen(8000,()=>{
    console.log("Server lsten at port 8000.");
})