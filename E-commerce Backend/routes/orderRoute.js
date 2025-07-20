import express from "express"
import { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStaus } from "../controllers/orderController.js"
import adminAuth from "../middleware/adminAuth.js"
import userAuth from "../middleware/userAuth.js"


const orderRouter = express.Router()


// Admin Feactures(Admin authentication)
orderRouter.post("/list", adminAuth, allOrders)
orderRouter.post("/status", adminAuth, updateStaus)

// Payment Feactures(User authentication)
orderRouter.post("/place", userAuth, placeOrder)
orderRouter.post("/stripe", userAuth, placeOrderStripe)
orderRouter.post("/razorpay", userAuth, placeOrderRazorpay)


// User Feacture(User Authentication)
orderRouter.post("/userorder", userAuth, userOrders)


export default orderRouter