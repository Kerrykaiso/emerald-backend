const {Order} = require("../models")
const { generateAccountCopy,generateTrackingId } = require("../utils/genTrackingId")
const AppError = require("../utils/appError")

const createOrderService = async (orderData,next) => {   
     
      try {
        const trackingId = generateTrackingId(8)
        const accountCopy = generateAccountCopy("EESC", 6)
        const order = {
          ...orderData,
          trackingId,
          accountCopy
        }
        const createOrder = await Order.create(order)
        if (!createOrder) {
          const err = new AppError("Order not created", "failed", 400)
          throw err
        }
        return {
          status: "success",
          message: "Order created successfully",
          data: trackingId
        }
      } catch (error) {
        next(error)
      }
  }


  const getOrderByIdService = async (orderId,next) => {   
     
    try {
      const order = await Order.findOne({ where: { id: orderId } })
      if (!order) {
        const err = new AppError("Order not found", "failed", 400)
        throw err
      }
      return {
        status: "success",
        message: "Order retrieved successfully",
        data: order
      }
    } catch (error) {
      next(error)
    }
  }


  const getAllOrdersService = async (next) => {   
     
    try {
      const orders = await Order.findAll({order: [["createdAt", "DESC"]]})
      if (!orders) {
        const err = new AppError("No orders found", "failed", 400)
        throw err
      }
      return {
        status: "success",
        message: "Orders retrieved successfully",
        data: orders
      }
    } catch (error) {
      next(error)
    }
  }



  const getOrderByTrackingIdService = async (trackingId,next) => {   
     
    try {
      const order = await Order.findAll({ where: { trackingId },})
      if (!order) {
        const err = new AppError("Order not found", "failed", 400)
        throw err
      }
      return {
        status: "success",
        message: "Order retrieved successfully",
        data: order
      }
    } catch (error) {
      next(error)
    }
  }


  const updateOrderService = async (orderId, orderData,next) => {   
     
    try {
      const order = await Order.findOne({ where: { id: orderId } })
      if (!order) {
        const err = new AppError("Order not found", "failed", 400)
        throw err
      }
      const updatedOrder = await Order.update(orderData, { where: { id: orderId } })
      if (!updatedOrder) {
        const err = new AppError("Order not updated", "failed", 400)
        throw err
      }
      return {
        status: "success",
        message: "Order updated successfully",
        data: updatedOrder
      }
    } catch (error) {
      next(error)
    }
  }
  const deleteOrderService =async(orderId,next)=>{
     try {
       const foundOrder = await Order.findOne({ where: { id: orderId } })
       if (!foundOrder) {
         const err = new AppError("Order not found", "failed", 400)
         throw err
       }
        const deletedOrder = await Order.destroy({ where: { id: orderId } })
        if (!deletedOrder) {
          const err = new AppError("Order not deleted", "failed", 400)
          throw err
        }
        return {
          status: "success",
          message: "Order deleted successfully",
          data: true
        }
     } catch (error) {
      next(error)
     }
  }

  const updateByTrackingIdService = async ( orderData,trackingId,next) => {   
     
    try {
      if (!trackingId) {
        const err = new AppError("Tracking ID is required", "failed", 400)
        throw err
      }

  
      const updatedOrder = await Order.create({
        ...orderData,
        trackingId
      })
      if (!updatedOrder) {
        const err = new AppError("Order not updated", "failed", 400)
        throw err
      }
      return {
        status: "success",
        message: "Order updated successfully",
        data: updatedOrder
      }
    } catch (error) {
      next(error)
    }
  }

  module.exports = {
    updateOrderService,
    createOrderService,
    getOrderByIdService,
    getAllOrdersService,
    generateTrackingId,
    updateByTrackingIdService,
    deleteOrderService,
    getOrderByTrackingIdService
  }