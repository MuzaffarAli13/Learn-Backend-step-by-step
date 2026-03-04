export const isAuthenticated = (req,res,next)=>{
   console.log("middleware is called");
   next()
}