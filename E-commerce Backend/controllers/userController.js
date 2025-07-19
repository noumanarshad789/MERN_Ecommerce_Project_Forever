import userModel from "../models/userModel.js"
import validator from "validator"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"



const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

// ---------- Routes for user Login

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body

        const findUser = await userModel.findOne({ email })

        if (!findUser) {
            return res.json({ success: false, message: "User doesn't exist." })
        }

        const isMatch = await bcrypt.compare(password, findUser.password)

        if (isMatch) {
            const token = createToken(findUser._id)
            res.json({ success: true, token })
        } else {
            req.json({ success: false, message: "Invalid credentials" })

        }
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}






// ---------- Routes for user SignUp or Registeration

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body

        //  Checking User already exist or not
        const isUserExist = await userModel.findOne({ email })

        if (isUserExist) {
            return res.json({ success: false, message: "User already Exist." })
        }

        // Validating Email and Strong Password

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email." })
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password." })
        }

        // Hashing user Password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })

        const user = await newUser.save()

        const token = createToken(user._id)
        res.json({ success: true, token })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}






// ---------- Routes for admin Login

const adminLogin = async (req, res) => {

    try {
        const { email, password } = req.body
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email + password, process.env.JWT_SECRET)
            res.json({ success: true, token })
        } else {
            res.json({ success: false, message: "Invalid Crediationals." })

        }
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


export { loginUser, registerUser, adminLogin }