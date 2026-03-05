import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import router from './routes/users.js';
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

//Middleware or Json data 
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(router)

app.listen(8000,()=>{
    console.log(`Server Run at ${PORT}`);
})