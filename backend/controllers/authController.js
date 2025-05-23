const AppError = require('../utils/appError');
const {registerService,loginService, deleteAllAdminService} = require('../services/authService');

const registerController = async(req,res,next)=>{
    const {email,password,username} = req.body
   try {
      if (!email || !password || !username) {
        const error = new AppError('Please provide all required fields', 'fail', 400);
        throw error;            
      }
      const fields ={email,password,username}
      const data = await registerService(fields,next)
      if (!data) {
         const err = new AppError("Admin not created", "failed", 400)
         throw err
      }
      res.status(201).json(data)
   } catch (error) {
      next(error)
   }
}

const loginController = async(req,res,next)=>{
    const {email,password} = req.body
   try {
      if (!email || !password) {
        const error = new AppError('Please provide all required fields', 'fail', 400);
        throw error;            
      }
      const fields ={email,password}
      const data = await loginService(fields,next)
      if (!data) {
         const err = new AppError("Invalid credentials", "failed", 400)
         throw err
      }
      res.status(201).json(data)
   } catch (error) {
      next(error)
   }
}


const deleteAlladminController = async(req,res,next)=>{
   try {
      const deleteAdmin = await deleteAllAdminService(next)
      if (!deleteAdmin) {
         const err = new AppError("Admin not deleted", "failed", 400)
         throw err
      }
      res.status(200).json(deleteAdmin)
   } catch (error) {
      next(error)
   }
}
module.exports = {registerController,loginController,deleteAlladminController}