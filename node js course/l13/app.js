import express from "express";
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import userRoutes from "./routes/user.js"; // .js
dotenv.config()

let PORT = process.env.PORT || 3000;

// Create Server
const app = express();

//middlewere
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use("/api/v1/user",userRoutes) ///api/v1/user/login

app.listen(PORT,()=>{
    console.log(`Server Run at https://localhost:${PORT}`);
});