import express from "express"


// Middleware — Token check karo
function authMiddleware(req, res, next) {
  let token = req.headers.authorization;

  if(!token) {
    return res.status(401).json({ message: "Token nahi hai! ❌" });
  }

  if(token !== "mySecretToken") {
    return res.status(403).json({ message: "Galat token! ❌" });
  }

  next(); // Token sahi hai — aage jao! ✅
}

// Protected route
app.get("/users", authMiddleware, (req, res) => {
  res.json({ users: ["Ali", "Ahmed"] });
});

// Yeh route open hai — koi bhi access kar sakta!
app.get("/", (req, res) => {
  res.send("Home Page!");
});