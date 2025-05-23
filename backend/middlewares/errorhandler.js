const AppError = require("../utils/appError")


const errorHandler= (err,req,res,next)=>{
    if (err instanceof AppError) {
         return res.status(err.statusCode || 500).json({message: err.message || "something went wrong" , status:err.status|| "server error"})
       
    }
    return res.status(500).json({message: err.message || "something went wrong" , status:err.status|| "server error"})
}

const notfound = (req,res,next)=>{
    return res.status( 404).json({message:  "route not found" , status: "failed"})
}
module.exports = {errorHandler,notfound}