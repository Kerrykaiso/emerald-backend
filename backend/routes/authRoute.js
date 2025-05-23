const authRouter = require("express").Router();
const { registerController, loginController,deleteAlladminController } = require("../controllers/authController");



authRouter.post("/register", registerController)
authRouter.post("/login", loginController)
authRouter.delete("/deleteAll", deleteAlladminController)

module.exports = authRouter;