// first install express npm i expres then create server...
const express = require("express");

// Step 1 : Create a web server
const app = express();

// Routes
// app.get
// app.post
// app.patch
// app.put
// app.delete

app.get("/",(req,res)=>{
    res.send("<h1>Home page</h1>")
})
app.get("/about",(req,res)=>{
    res.send("<h1>About page</h1>")
})

app.get("/user/profile",(req,res)=>{
    res.status(200).json({
        success:true,
        user:{
            username:"muzaffarali",
            age:20,
            email:"muzafarkl@gmail.com"
        }
    })
})
// products id get using params
app.get('/api/v1/product/:id',(req,res)=>{
    // const id = req.params.productId;
    const {id} = req.params; // destructuring
    console.log("product id ", id);
    let product = {
        id:1,
        tile:"Mack book",
        price:200
    };
    res.status(200).json({
        success:true,
        product
    })
})
app.listen(8000,()=>{
    console.log("Server running on port: 8000");
})