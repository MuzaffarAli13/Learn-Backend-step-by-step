import User from "../models/user.model.js";


export const welCome = (req, res) => {
    res.send("Welcome to Backend!");
}


export const userCreate = async (req,res)=>{
  try{
  let {fullName,email} = req.body;
  if(!fullName || !email){
    return res.status(400).json({
        success:false,
        message:"All filed are requird!"
    });
  };

  let user = await User.create({fullName,email})
   console.log("User Created!",user);
   
  return res.status(201).json({
    success:true,
    message:"user Created!",
    data:user
  });

  }catch(error){
    res.status(500).json({
        success:false,
        message:error.message
    })
  }
}

export const getAllUsers = async (req,res)=>{
    let users = await User.find()
    return res.status(200).json({
        success:true,
        data:users
    });
};


// Fetch dynamic User by Id
export const getUserbyId = async (req,res)=>{
    let user = await User.findById(req.params.id)
    
    if(!user){
        return res.status(404).json({
            success:false,
            message:"User Not Found!"
        });
    };
    res.json({
        success:true,
        data:user
    });
};

// Update user 

export const updateUser = async (req,res)=>{
    let user = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    
    if(!user){
        return res.status(404).json({
            success:false,
            message:"User Not Found!"
        });
      };
    
    res.json({
        success:true,
        message:"user updated!",
        data:user
    })
};

export const deleteUser = async (req,res)=>{
    let user = await User.findByIdAndDelete(req.params.id);
   
    if(!user){
        return res.status(404).json({
            success:false,
            message:"User not Found"
        });
    }
    
    res.json({
        success:true,
        message:"User Deleted!",
    })
}