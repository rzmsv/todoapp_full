const { User } = require('../models')
const errorResult = require("../messages/error.messages")
const { comparePassword } = require('../utils/bcrypt.utils')
const { signToken } = require("../utils/jwt.utils")


exports.AuthService = class {
    static async login_service(dto) {
        const user = await User.findOne({ where: { email: dto.email } })
        
        if (!user) {
            errorResult.notFound("User not found!")
        }
        const compare = await comparePassword(dto.password, user.password)
        if (!compare) throw errorResult.badRequest("Password wrong!")
        const sign = await signToken(user.id)
        return sign
    }
}