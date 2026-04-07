import express from "express";
import router from "./router/user.routes.js";
import  dotenv  from "dotenv";
import connectDB from "./config/db.js";
dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

connectDB()
app.use("/api/v1/user",router);



app.listen(PORT,()=>{
    console.log(`SERVER RUN AT http://localhost:${PORT}`);
});
