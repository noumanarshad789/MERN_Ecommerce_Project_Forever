import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: { type: Array, default: {} }
},{minimize:false})


const userModel = mongoose.models.Schema || mongoose.model("user",userSchema)

export default userModel