const express = require('express');
const app = express();
require("dotenv").config()
const db = require("./models");
const { errorHandler, notfound } = require('./middlewares/errorhandler');
const authRouter = require("./routes/authRoute")
const orderRouter = require("./routes/orderRoute")
//const cors = require("cors")

const PORT = process.env.PORT || 5000;




app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api",authRouter)
app.use("/api",orderRouter)
app.use(errorHandler)
app.use(notfound)



db.sequelize.sync({ alter:true }).then(() => {});
app.listen(PORT, async() => {
  try {
    console.log(`server running on port ${PORT}`);

  } catch (error) {
    console.log(error)
  }
});