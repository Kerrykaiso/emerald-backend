const jwt = require("jsonwebtoken");


const signJwt = (tokenData) =>{
    return jwt.sign({email: tokenData.email, name: tokenData.name,id:tokenData.id},
      process.env.ONEOFONE_TOKEN, {expiresIn: "2d"})
  }

 
  module.exports = {signJwt}