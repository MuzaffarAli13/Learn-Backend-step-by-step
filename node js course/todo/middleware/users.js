// Har request pe chalta hai!
// export const globalMiddleware = (req,res,next)=>{
//     console.log(`${req.method} ${req.url}`);
//     next()
// }

// Sirf /users pe chalta hai!
export const myMiddleware = (req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next()
}

// morgan — request logger
// npm install morgan

// const morgan = require("morgan");
// app.use(morgan("dev"));
// // GET /users 200 5ms ✅



// Middleware — Token check karo
export function authMiddleware(req, res, next) {
  let token = req.headers.authorization;

  if(!token) {
    return res.status(401).json({ message: "Token nahi hai! ❌" });
  }

  if(token !== "1111") {
    return res.status(403).json({ message: "Galat token! ❌" });
  }

  next(); // Token sahi hai — aage jao! ✅
}

