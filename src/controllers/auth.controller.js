const { BaseController } = require("../helper/baseController.helper")
const dto = require("../DTO")
const service = require("../services")
exports.AuthController = class {
    static async login_controller(req, res, next) {
        console.log(req.body)
        const body = req.body
        const dtoResult = dto.loginDTO(body)
        const result = await service.AuthService.login_service(dtoResult)
        BaseController.ok(res, result)
    }
}