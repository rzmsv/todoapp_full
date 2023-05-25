const { Todo } = require('../models')
const errorResult = require("../messages/error.messages")
const dao = require('../DAO')


exports.AuthService = class {
    static async login_service(dto) {
        const user = await Todo.findOne({ where: { email: dto.email } })
        if (!user) {

        }
        return todosList
    }
}