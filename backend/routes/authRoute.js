const authRouter = require("express").Router();
const { registerController, loginController,deleteAlladminController } = require("../controllers/authController");


authRouter.get("/health", (req,res)=>{
    res.status(200).json("Server is up and running!!!!")
})
authRouter.post("/register", registerController)
authRouter.post("/login", loginController)
authRouter.delete("/deleteAll", deleteAlladminController)

module.exports = authRouter;