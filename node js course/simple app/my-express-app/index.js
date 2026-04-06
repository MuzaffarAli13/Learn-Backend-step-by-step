import express from "express";

const app = express();
let PORT = 3000
app.use(express.json());
// data base
let dataBase = [];

// welcome msg
app.get("/",(req,res)=>{
    res.status(200).json({
        success:true,
        message:"Welcome to Backend!"
    })
});

// Create User
let currentId = 1
app.post("/api/v1/user",(req,res)=>{
  let {fullName,email} = req.body;
  if(!fullName || !email){
    return res.status(400).json({
        success:false,
        message:"All filed are requird!"
    });
  };
  let newUser = {
     id:currentId++,
     fullName:fullName,
     email:email
  };
 
  dataBase.push(newUser);
  return res.status(201).json({
    success:true,
    message:"user Created!",
    data:newUser
  })
  
});

// Fetch All Users
app.get("/api/v1/user",(req,res)=>{
    return res.status(200).json({
        success:true,
        data:dataBase
    });
});

// Fetch dynamic User by Id
app.get("/api/v1/user/:id",(req,res)=>{
    let userId = parseInt(req.params.id);
    if(isNaN(userId)){
        return res.json({
            success:false,
            message:"Invalid Id",
        });
    };
    let user = dataBase.find((u)=>u.id === userId);
    if(!user){
        return res.status(404).json({
            success:false,
            message:"User Not Found!"
        });
    };
    return res.status(200).json({
        success:true,
        data:user
    });
});

// Update user 
app.put("/api/v1/user/:id",(req,res)=>{
    let userId = parseInt(req.params.id);
    let {fullName,email} = req.body;
    if(isNaN(userId)){
        return res.status(400).json({
            success:false,
            message:"Invalid Id"
        });
    };

    let user = dataBase.find((u)=>u.id === userId);
    if(!user){
        return res.status(404).json({
            success:false,
            message:"User Not Found!"
        });
      };
    user.fullName = fullName || user.fullName;
    user.email = email || user.email;
    return res.status(200).json({
        success:true,
        message:"user updated!",
        data:user
    })
});

// Delete User
app.delete("/api/v1/user/:id",(req,res)=>{
    let userId = parseInt(req.params.id);
    if(isNaN(userId)){
        return res.status(400).json({
            success:false,
            message:"Invalid Id"
        });
    };
    let user = dataBase.find((u)=>u.id === userId)
    if(!user){
        return res.status(404).json({
            success:false,
            message:"User not Found"
        });
    }
    dataBase = dataBase.filter((u)=>u.id !== userId);
    return res.status(200).json({
        success:true,
        message:"User Deleted!",
    })
})

app.listen(PORT,()=>{
    console.log(`SERVER RUN AT http://localhost:${PORT}`);
});
