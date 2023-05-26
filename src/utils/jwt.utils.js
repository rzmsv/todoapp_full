const jwt = require("jsonwebtoken")

exports.signToken = async (data) => {
    try {
        return await jwt.sign({ id: data }, appConfigs.JWT_SECRET)
    } catch (error) {
        console.log(error?.message)
    }
}
exports.verifyToken = async (token) => {
    try {
        return await jwt.verify(token, appConfigs.JWT_SECRET)
    } catch (error) {
        console.log(error?.message)
    }
}