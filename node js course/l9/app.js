const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req,res)=>{
    // const htmlContent  = fs.readFileSync(__dirname+"/index.html")
    const dirPath = path.join(__dirname,"index.html")
    const htmlContent  = fs.readFileSync(dirPath)
    res.writeHead(200,{"content-type":"text/html"});
    res.end(htmlContent);
});
server.listen(8000,()=>{
    console.log("Server Running at http://localhost:8000 ");
});
