import {User} from "../models/users.js";
import bcrypt from "bcrypt"

export const register = async (req,res)=>{
    try { 
    const {fullname,email,password} = req.body;
    if(!fullname || !email || !password){
        return res.status(403).json({
            success:false,
            message:"all fileds are required!"
        });
    }
    //  finding user in this email id are not register 
    const user = await User.findOne({email});
    if(user){
        return res.status(403).json({
            success:false,
            message:"This email id is already registered!"
        });
    };
    const hashedPassword = await bcrypt.hash(password,10)
    await User.create({
        fullname,
        email,
        password:hashedPassword,
    });
    res.json({message:"data uploaded!"})
    

    } catch (error) {
        console.log(error.message);
    }
}