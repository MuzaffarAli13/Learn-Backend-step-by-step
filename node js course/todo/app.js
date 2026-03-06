// import express from 'express';
// import bodyParser from 'body-parser';
// import dotenv from 'dotenv'
// import router from './routes/users.js';
// import mongoose from "mongoose"
// dotenv.config();

// const PORT = process.env.PORT || 3000;
// const app = express();

// // Har request pe chalta hai!
// // app.use(globalMiddleware) 

// //Middleware or Json data  convert int json fromat
// app.use(express.json())
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(router)

// app.use((req,res)=>{
//     res.status(404).json({message:"Page Not Found!"})
// })

// // MongoDB connect
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB connected! ✅"))
//   .catch(err => console.log("Error:", err));


// app.listen(8000,()=>{
//     console.log(`Server Run at ${PORT}`);
// })


// New crud with Database
import express from 'express';
import dotenv from 'dotenv'
import mongoose from "mongoose";
import User from "./models/User.js";

dotenv.config();;

const app = express();
app.use(express.json());

// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected! ✅"))
  .catch(err => console.log("Error:", err));

// CREATE — Naya user
app.post("/users", async (req, res) => {
  try {
    let user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch(err) {
    res.status(400).json({ message: err.message });
  }
});

// READ — Sare users
app.get("/users", async (req, res) => {
  try {
    let users = await User.find();
    res.json(users);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

// READ — Ek user
app.get("/users/:id", async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    if(!user) return res.status(404).json({ message: "User nahi mila!" });
    res.json(user);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE — User update karo
app.put("/users/:id", async (req, res) => {
  try {
    let user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Updated user return karo
    );
    if(!user) return res.status(404).json({ message: "User nahi mila!" });
    res.json(user);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE — User hatao
app.delete("/users/:id", async (req, res) => {
  try {
    let user = await User.findByIdAndDelete(req.params.id);
    if(!user) return res.status(404).json({ message: "User nahi mila!" });
    res.json({ message: "User delete ho gaya! ✅" });
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server chal raha hai! ✅`);
});