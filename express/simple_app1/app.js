import express from 'express';

const PORT = 5000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send('Hello from API');
});

// Post Method
app.post("/api/v1/user",(req,res)=>{
    const {name} = req.body;
    console.log(name);
    res.status(200).json({
        message:`User data recived ${name}`,
    });
    
});





app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
