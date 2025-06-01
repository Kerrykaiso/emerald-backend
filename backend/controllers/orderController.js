const AppError = require('../utils/appError');
const { createOrderService,
    getOrderByIdService,
    updateOrderService,
    getAllOrdersService,
    deleteOrderService,
     getOrderByTrackingIdService, 
     updateByTrackingIdService} = require('../services/orderService');

const createOrderController = async (req, res,next) => {

    const  orderData  = req.body;
    try {
        if (!orderData) {
            const error = new AppError('Please provide all required fields', 'fail', 400);
            return next(error);
        }
        const data = await createOrderService(orderData, next);
        if (!data) {
            const err = new AppError("Order not created", "failed", 400);
            return next(err);
        }
        res.status(201).json(data);
    } catch (error) {
        next(error);
    }
}

const getOrderByIdController = async (req, res,next) => {
    const { orderId } = req.params;
    try {
        if (!orderId) {
            const error = new AppError('Please provide all required fields', 'fail', 400);
            return next(error);
        }
        const data = await getOrderByIdService(orderId, next);
        if (!data) {
            const err = new AppError("Order not found", "failed", 400);
            return next(err);
        }
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}



const getAllOrdersController = async (req, res,next) => {
    try {
        const data = await getAllOrdersService(next);
        if (!data) {
            const err = new AppError("No orders found", "failed", 400);
            return next(err);
        }
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}



const getOrderByTrackingIdController = async (req, res,next) => {
    const { trackingId } = req.params;
    try {
        if (!trackingId) {
            const error = new AppError('Please provide all required fields', 'fail', 400);
            return next(error);
        }
        const data = await getOrderByTrackingIdService(trackingId, next);
        if (!data) {
            const err = new AppError("Order not found", "failed", 400);
            return next(err);
        }
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

const updateOrderController = async (req, res,next) => {
    const { orderId } = req.params;
    const orderData = req.body;
    try {
        if (!orderId || !orderData) {
            const error = new AppError('Please provide all required fields', 'fail', 400);
            return next(error);
        }
        const data = await updateOrderService(orderId, orderData, next);
        if (!data) {
            const err = new AppError("Order not found", "failed", 400);
            return next(err);
        }
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

const deleteOrderController = async (req, res,next) => {
    const { orderId } = req.params;
    try {
        if (!orderId) {
            const error = new AppError('Please provide all required fields', 'fail', 400);
            return next(error);
        }
        const data = await deleteOrderService(orderId, next);
        if (!data) {
            const err = new AppError("Order not found", "failed", 400);
            return next(err);
        }
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

const updateByTrackingIdController = async (req, res,next) => {
    const orderData = req.body;
    const { trackingId } = req.params;
    if (!trackingId) {
        const error = new AppError('Please provide all required fields', 'fail', 400);
        return next(error);
    }
    try {
        if ( !orderData) {
            const error = new AppError('Please provide all required fields', 'fail', 400);
            return next(error);
        }
        const data = await updateByTrackingIdService( orderData, trackingId, next);
        if (!data) {
            const err = new AppError("Order not found", "failed", 400);
            return next(err);
        }
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}


module.exports = { createOrderController ,
    updateByTrackingIdController
    ,
    updateOrderController
    ,getOrderByIdController,
    getAllOrdersController,
    getOrderByTrackingIdController,
    deleteOrderController}