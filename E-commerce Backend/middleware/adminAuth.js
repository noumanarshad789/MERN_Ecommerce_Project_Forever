import jwt from "jsonwebtoken"

const adminAuth = async (req, res, next) => {
    try {
        const { token } = req.headers
        if (!token) {
            return res.json({ success: false, message: "Not Authorized Login again." })
        }

        const token_decode = jwt.verify(token, process.env.JWT_SECRET)

        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({ success: false, message: "Not Authorized Login again." })
        }
        

        // Calling the Callback function

        next()

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })    
    }
}

export default adminAuth

// ✅ File: backend/middleware/adminAuth.js
// ✅ Description: Middleware for admin route protection using JWT

// import jwt from "jsonwebtoken"

// const adminAuth = async (req, res, next) => {
//     try {
//         // ✅ Modified: Use standard Authorization header
//         const authHeader = req.headers.authorization;

//         if (!authHeader || !authHeader.startsWith('Bearer ')) {
//             return res.json({ success: false, message: "Not Authorized. Login again." });
//         }

//         // ✅ Extract the token
//         const token = authHeader.split(" ")[1];

//         // ✅ Verify token
//         const token_decode = jwt.verify(token, process.env.JWT_SECRET);

//         // ✅ Validate decoded token contents
//         if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
//             return res.json({ success: false, message: "Not Authorized. Login again." });
//         }

//         // ✅ Proceed to next middleware
//         next();

//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// }

// export default adminAuth;
