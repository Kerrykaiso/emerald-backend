
const orderRoute = require("express").Router()
const {
    createOrderController,
    getOrderByIdController
    ,getAllOrdersController,
    getOrderByTrackingIdController,
    deleteOrderController,
    updateOrderController
    ,updateByTrackingIdController
} = require("../controllers/orderController")
const { adminAuth } = require("../middlewares/authHandler")

orderRoute.put("/updateOrder/:orderId",adminAuth, updateOrderController )
orderRoute.put("/updateByTrackingId/:trackingId",adminAuth, updateByTrackingIdController )
orderRoute.get("/getOrder/:orderId",adminAuth, getOrderByIdController )
orderRoute.post("/createOrder", adminAuth,createOrderController )
orderRoute.get("/getAllOrders",adminAuth, getAllOrdersController )
orderRoute.delete("/deleteOrder/:orderId", adminAuth,deleteOrderController )
orderRoute.get("/getOrderByTrackingId/:trackingId", getOrderByTrackingIdController )

module.exports = orderRoute