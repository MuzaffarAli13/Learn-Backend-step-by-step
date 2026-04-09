import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/database.js";
import userRoute from "./routes/user.js";
import bodyParser from "body-parser";

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

connectDB()
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/api/v1/user',userRoute)
app.get("/data",(req,res)=>{
    res.status(200).json({"message":"done"})
})



app.listen(PORT,()=>{
    console.log(`Server Run at Port ${PORT}`);  
}) 