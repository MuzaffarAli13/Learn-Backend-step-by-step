import {User} from "../models/users.js";
import bcrypt from "bcrypt"

export const register = async (req,res)=>{
    try{
      let {fullname,email,password} = req.body;

      if(!fullname || !email || !password){
        return res.status(400).json({
            succuss:false,
            message:"All field Required!"
        });
      };

      let user = await User.findOne({email});
      if(user){
        return res.status(400).json({
            succuss:false,
            message:"User Already Exist!"
        });
      };
      let hashedPassword = await bcrypt.hash(password,10);
        
        await User.create({
            fullname,
            email,
            password:hashedPassword
        });
        res.json({
            succuss:true,
            message:"User Created!"
        });
    }catch(error){
        console.log(error.message);
    }
};

// User Login
export const userLoggedIn = async (req,res)=>{
    try{
      let {email,password} = req.body;
      if(!email || !password){
        return res.status(400).json({
            succuss:false,
            message:"All field Required!"
        });
      };

      let user = await User.findOne({email});
      if(!user){
        return res.status(403).json({
            succuss:false,
            message:"Incorrect Email and Password"
        });
      };
      let isMatchPassword = await bcrypt.compare(password,user.password);
      if(!isMatchPassword){
        return res.status(403).json({
            succuss:false,
            message:"Incorrect Email and Password"
        });
      };
      res.json({
        succuss:true,
        message:`Welcome Back ${user.fullname}`
      });

    }catch(error){
        console.log(error.message);
    }
};

