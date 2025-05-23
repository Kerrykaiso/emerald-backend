const bcrypt = require('bcrypt');
const AppError = require('../utils/appError');
const { Admin } = require("../models")
const {signJwt} = require("../utils/jwt")


const registerService =async(data,next)=>{
    try {
        const {email,password,username} = data
        if (!email || !password || !username) {
          const error = new AppError('Please provide all required fields', 'fail', 400);
          throw error;            
        }

        const findAmin = await Admin.findOne({where:{email}})
        if (findAmin) {
            const err = new AppError("Admin already exist", "failed", 400)
            throw err
        }
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        const createAdmin = await Admin.create({
            email,
            password: hashPassword,
            name: username
        })
        if (!createAdmin) {
            const err = new AppError("Admin not created", "failed", 400)
            throw err
        }
        return {
            status: "success",
            message: "Admin created successfully",
            data: createAdmin
        }
    } catch (error) {
        next(error)
    }
}


const loginService = async(data,next)=>{
    try {
        const {email,password} = data
        if (!email || !password) {
            const error = new AppError('Please provide all required fields', 'fail', 400);
            throw error;            
          }
        const findAdmin = await Admin.findOne({where:{email}})
        if (!findAdmin) {
            const err = new AppError("Admin not found", "failed", 400)
            throw err
        }
        const isMatch = await bcrypt.compare(password, findAdmin.password)
        if (!isMatch) {
            const err = new AppError("Invalid credentials", "failed", 400)
            throw err
        }
        const values = findAdmin.toJSON()
        delete values.password
        const token = signJwt({email:values.email, name: values.name,id:values.id})
        return {
            status: "success",
            message: "Admin logged in successfully",
            data: {...values,token}
        }
    } catch (error) {
       return next(error)
    }
}
const deleteAllAdminService = async(next)=>{
    try {
        const deleteAdmin = await Admin.destroy({where:{}})
        if (!deleteAdmin) {
            const err = new AppError("Admin not deleted", "failed", 400)
            throw err
        }
        return {
            status: "success",
            message: "All admin deleted successfully",
            data: deleteAdmin
        }
    } catch (error) {
        next(error)
    }
}
module.exports = {registerService,loginService,deleteAllAdminService}