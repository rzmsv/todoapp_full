const { User } = require("../models")
const errorResult = require("../messages/error.messages")
const { verifyToken } = require("../utils/jwt.utils")

exports.userIsAuth = async (req, res, next) => {
    try {
        const token = req.header("authorization")?.replace("Bearer ", "")
        if (!token) errorResult.badRequest("Login please!")
        const decode = await verifyToken(token)
        if (!decode) errorResult.unAuthorized("UnAuthorized!")
        const user = await User.findByPk(decode.id)
        if (!user) errorResult.unAuthorized("UnAuthorized!")
        req.user = user
        next()
    } catch (error) {
        console.log(error.message)
        throw error
    }
}