import express from "express";
import dotenv from "dotenv";
import connectDB from "./confiq/db.js";
import router from "./routes/user.routes.js";

dotenv.config();

const PORT = process.env.PORT || 8000
const app = express();

app.use(express.json());

connectDB() 

app.use("/api/v1/user",router)

app.listen(PORT, () => {
    console.log(`Sever run at http://localhost:${PORT}/`);
})