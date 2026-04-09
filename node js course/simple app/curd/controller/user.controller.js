import User from "../models/user.models.js"

export const welCome = (req,res)=>{
    res.json({
        success:true,
        message:"Welcome to backend!"
    });
};

// Create user

export const createUser = async (req,res)=>{
    try{
        let {fullName,email,password} = req.body;
        if(!fullName || !email || !password){
             return res.status(400).json({
                success:false,
                message:"All fields Required!"
            });
        };
        let user = await User.create({fullName,email,password});
        return res.json({
            success:true,
            message:"User Created!..",
            data:user
        });
    }catch(error){
        console.log(`Create User Error ${error.message}`);
    };
};


export const getAllUsers = async (req,res)=>{
    let users = await User.find()
    return res.status(200).json({
        success:true,
        data:users
    });
};

export const getUserById = async (req,res)=>{
    let user = await User.findById(req.params.id);
    if(!user){
        return res.status(404).json({
            success:false,
            message:"user Not Found!"
        });
    };
    return res.json({
        success:true,
        data:user
    });
};

// Update
export const updateUser = async(req,res)=>{
    let user = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    if(!user){
        return res.status(404).json({
            success:false,
            message:"user Not Found!"
        });
    };

    return res.json({
        success:true,
        message:"user Updated!",
        data: user
    })
};

export const deleteUser = async (req,res)=>{
     let user = await User.findByIdAndDelete(req.params.id);
     if(!user){
        return res.status(404).json({
            success:false,
            message:"user Not Found!"
        });
    };
    return res.json({
        success:true,
        message:"User Deleted!",
        data:user
    });
};


