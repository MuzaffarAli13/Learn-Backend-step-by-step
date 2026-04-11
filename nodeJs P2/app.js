import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/database.js";
import userRoute from "./routes/user.js";
import bodyParser from "body-parser";

dotenv.config();
const PORT = 5000;
const app = express();

connectDB()
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/api/v1/user',userRoute)


app.listen(PORT,()=>{
    console.log(`Server Run at Port http://localhost:${PORT}`);  
}) 