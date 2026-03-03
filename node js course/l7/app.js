const http = require("http");

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plan"});
    res.end("Hello i am coming from web server.");
});

server.listen(8000,()=>{
    console.log("Server Listen at 8000 port..");
})