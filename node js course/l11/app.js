// const express = require("express") //old way common js
import express from "express";
import dotenv from "dotenv";
import bodyParser from 'body-parser';
dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;
//imiddlewere
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.post("/api/v1/user/regster",(req,res)=>{
    const obj = req.body;
    console.log(obj);
    res.status(200).json({
        success:true,
        message:"account created",
        obj
    })
    
})

app.listen(PORT,()=>{
    console.log(`Server run at ${PORT}`);
})

