import catchAsync from "../Utils/catchAsync.js";
import HandleError from "../Utils/handleError.js";
import jwt from 'jsonwebtoken'
const isLogin=catchAsync(async (req,res,next) => { 
    try{
        const {loginComplete } = jwt.verify(
            req.headers.authorization.split(" ")[1],
            process.env.JWT_SECRET
          );
          if(!loginComplete){
            return next(new HandleError("Your login is not complete",401));
          }
         return next()
    }catch(err){
        return next(new HandleError("you don't have permission login pls",401))

    }
    
    
 })
 export default isLogin