import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/database.js";
import userRouter from "./routes/user.js";
import bodyParser from "body-parser";
import todoRouter from "./routes/todo.js";

dotenv.config();
const PORT = 5000;
const app = express();

connectDB()
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/api/v1/user',userRouter)
// http://localhost:5000/api/v1/user
app.use('/api/v1/todo',todoRouter)
// http://localhost:5000/api/v1/todo


app.listen(PORT,()=>{
    console.log(`Server Run at Port http://localhost:${PORT}`);  
}) 