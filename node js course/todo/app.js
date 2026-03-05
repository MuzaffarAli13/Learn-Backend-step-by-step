import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

//Middleware or Json data 
app.use(express.json())

// Database
let users = [
    {
        id:1,
        name:"Muzaffar Ali",
        age:20
    },
    {
        id:2,
        name:"Zaffar Ali",
        age:25
    },
    {
        id:3,
        name:"Imran Ali",
        age:30
    },
];

app.get("/users",(req,res)=>{
    res.status(200).json(users)
});

//get by id
app.get("/users/:id",(req,res)=>{
    let user = users.find((u)=> u.id === parseInt(req.params.id));
    if(!user) return res.status(404).json({message:"User Not Found"})
    res.json(user)
});

// add user
app.post("/users",(req,res)=>{
    const newUser = {
       id: users.length + 1,
       name: req.body.name,
       age:req.body.age
    };
    users.push(newUser);
    res.status(200).json({
        success:true,
        message:"User Added Succesfully"
    })
});

// update user using id
app.put("/users/:id",(req,res)=>{
    let user = users.find((u)=>u.id === parseInt(req.params.id));
    if(!user) return res.status(404).json({message:"User Not Found"});
    user.name = req.body.name || user.name;
    user.age = req.body.age || user.age;
    res.status(200).json(user)
});

app.delete("/users/:id",(req,res)=>{
    users = users.filter((u)=> u.id !== parseInt(req.params.id));
    // if(!user) return res.status(404).json({message:"User Not Found"});
    res.status(200).json({message:"User Delete Successfully."})
    
})

app.listen(8000,()=>{
    console.log(`Server Run at ${PORT}`);
})