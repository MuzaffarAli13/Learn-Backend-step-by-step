import express from 'express';
import bodyParser from 'body-parser';
const app = express();

app.use(function(req,res,next){
    console.log("Middlewere is Called.");
    next()
});

// get route
app.get('/',(req,res)=>{
    console.log('Home page is Called!');
    res.send('Hello!')
});

// Content-Type: application/json must in headers
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))
app.post("/api/v1/user/login",(req,res)=>{
    const {name,email} = req.body;
    console.log(name,email);

    res.status(200).json({
        success:true,
        message:"account created",
    })
    
})

app.listen(8000,()=>{
    console.log('Serer Running at localhost:8000');
})