import { users } from "../lib/data.js"


export const home = (req,res)=>{
      res.send("Home Page!")
}
export const getAllUsers = (req,res)=>{
    res.status(200).json(users)
};

export const getUser = (req,res)=>{
    let user = users.find((u)=> u.id === parseInt(req.params.id))
    if(!user) return res.status(404).json({message:"User Not Found!"});
    res.status(200).json(user)
}

export const createUser = (req,res)=>{
    let newUser = {
        id:users.length + 1,
        name: req.body.name,
        age: req.body.age,
    };
    users.push(newUser);
    res.status(200).json({message:"User Created Succesfuly!"});
}

export const userUpdate = (req,res)=>{
    let user = users.find((u)=> u.id === parseInt(req.params.id));
    if(!user) return res.status(404).json({message:"user Not Found!"});
    user.name = req.body.name || user.name;
    user.age = req.body.age || user.age;
    res.status(200).json(user)
};

export const deleteUser = (req,res)=>{
     let copyUsers = users.filter((u)=> u.id !== parseInt(req.params.id));
    // if(req.params.id ) return res.status(404).json({message:"User Not Found"});
    res.status(200).json({message:"User Deleted",copyUsers})
    // res.status(200).json(copyUsers)
}