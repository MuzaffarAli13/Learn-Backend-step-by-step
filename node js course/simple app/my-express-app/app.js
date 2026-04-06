import express from "express";
import bodyparser from "body-parser"
import router from "./router/user.routes";

const app = express();


app.use(express.json())
app.use(bodyparser.urlencoded({extended:true}))

let users = [
    {
        fullname:"khan",
        id:1
    }
];

// welcome
app.use("/",router)
// start structure well define
// get all users
app.get("/api/v1/user",(req,res)=>{
    return res.status(200).json({
       succues:true,
       data: users || []
    })
})

//  Bhagban flim 

// get one user
app.get("/api/v1/user/:id",(req,res)=>{
    let id = parseInt(req.params.id,10);
     // Validate ID
     if(isNaN(id)){
        return res.status(400).json({
            succuess:false,
            message:"Invalid User ID"
        })
     }
    let user = users.find((u)=> u.id === id);
    if(!user){
        return res.status(404).json({
            succuess:false,
            message:"User Not Found!"
        })
    };

    return res.status(200).json({
        succuess:true,
        user
    })
})
//  Create user
app.post("/api/v1/user",(req,res)=>{
  let {fullname,email,password} = req.body;
 if(!fullname || !email || !password){
    return res.status(404).json({
        succues:false,
        message:"All fileds are requird!"
    })
 }
  res.status(200).json({
    "message":"User Created Succuesfuly"
  })
});

// Update user
app.put("/api/v1/user/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);

    // Validate ID
    if (isNaN(id)) {
        return res.status(400).json({
            success: false,
            message: "Invalid ID"
        });
    }

    const user = users.find((u) => u.id === id);

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    // Update fields (partial update)
    user.fullname = req.body.fullname || user.fullname;
    // user.id = req.body.id || user.id;

    return res.status(200).json({
        success: true,
        message: "User updated successfully",
        data: user
    });
});

// Delete user
app.delete("/api/v1/user/:id",(req,res)=>{
    let id = parseInt(req.params.id);
    if(isNaN(id)){
        return res.status(400).json({
            success:false,
            message:"Invalid Id"
        })
    }
    let user = users.find((u)=>u.id === id);
    if(!user){
        return res.status(404).json({
            success:false,
            message:"User not Found"
        });
    }
    users = users.filter((u)=>u.id !== id)
    return res.status(200).json({
        success:true,
        message:"user Deleted ",
        
    })
})


app.listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});