import jwt from "jsonwebtoken"

const userAuth = async (req, res, next) => {
    const { token } = req.headers

    if(!token){
        return res.json({success:false, message:"Not Authorizied, Login again."})
    }
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        req.body.userId = token_decode.id

        console.log(req.body.userId)
        // This id gets from where I am creating token(like userController file)

        next()
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}


export default userAuth