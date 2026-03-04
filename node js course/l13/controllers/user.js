// Busniess Logic
export const register = (req,res)=>{
    let {name,email} = req.body;
    console.log(name + " "+ email);
    res.status(200).json({
        succues:true,
        message:"Account Created Succesfully!"
    })
}

export const login = (req,res)=>{
    let {name,email} = req.body;
    console.log(name + " "+ email);
    res.status(200).json({
        succues:true,
        message:"User Loggin Succesfully!"
    })
}