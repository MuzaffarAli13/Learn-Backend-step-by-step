import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URL = process.env.MONGO_URL;
const connectDB = async ()=>{
    try{
      await mongoose.connect(MONGO_URL);
      console.log("MongoDB Connected.");
    }catch(err){
        console.log(err.message);
    }
};

export default connectDB