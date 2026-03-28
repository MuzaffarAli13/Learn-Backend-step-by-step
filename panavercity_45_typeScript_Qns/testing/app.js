import express from 'express';
import bodyParser from 'body-parser';

const app = express();


app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


let users = [
    {
        name:'Muzaffar Ali',
        id:1,
        email:'muzaffar@gmail.com'
    }
];

app.get("/api/v1/users",(req,res)=>{
    res.status(200).json({
        'succes':true,
         users
    })
});

app.get("/api/v1/users/:id",(req,res)=>{
    let id = req.params.id;
    console.log("params id", id);
    let user = users.find((user)=>user.id === parseInt(id));
    if(!user) return res.status(404).json({"message":"User Not Found!"})
    res.status(200).json({
        'succues':true,
        user
    })
});

app.post("/api/v1/user",(req,res)=>{
    let newUser = {
        id:users.length + 1,
        name:req.body.name,
        email:req.body.email,
    };
    users.push(newUser);
    res.status(200).json({message:"User Created Succesfuly!"})
});

app.put("/api/v1/user/:id",(req,res)=>{
    let user = users.find((u)=> u.id === parseInt(req.params.id));
    if(!user) return res.status(404).json({message:"User Not Found"});
    user.name = req.body.name || user.name,
    user.email = req.body.email || user.email,
    res.status(200).json(user);
});

app.delete("/api/v1/user/:id",(req,res)=>{
    let copyUsers = users.filter((u)=>u.id !== parseInt(req.params.id));
    res.status(200).json({message:"User Deleted",copyUsers}) 
}) 


// listen
app.listen(8000,()=>{
    console.log("Server Run at 8000");
});
