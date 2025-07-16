import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRouter.js"
import productRouter from "./routes/productRoutes.js"


// App Config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()


// Middleware

app.use(express.json())
app.use(cors())

// api endpoints
app.use('/api/user',userRouter)
app.use("/api/product",productRouter)

app.get("/", (req,res)=>{
    res.send("API WORKING")
})

app.listen(port, ()=>{
    console.log(`Server Started at the port ${port}` )
})