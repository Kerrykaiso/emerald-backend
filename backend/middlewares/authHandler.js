  const jwt = require("jsonwebtoken")
 const AppError = require("../utils/appError")
const {Admin} = require("../models")
  
  const checkToken=(req,res,next)=>{

    const authHeader = req.headers.authorization
  
    if (authHeader) {
        const token=authHeader.split(" ")[1]
  
        jwt.verify(token, process.env.ONEOFONE_TOKEN, (err,user)=>{
            if(err){
               return  res.status(400).json(err.message)
            }
            req.data=user
           next()
  
        })
    }else {
        res.status(400).json("invalid or missing token")
    }
  } 

  
const adminAuth=(req, res, next)=>{
  
  try {
    checkToken(req, res,async()=>{
      const findCustomer = await Admin.findOne({where:{email:req.data.email}})
  
      if (findCustomer) {
          next()
      }
      else{
        throw new AppError("You are not authorized for this","failed",403)
      }
    })
  } catch (error) {
     next(error)
  }
}

module.exports = {adminAuth}