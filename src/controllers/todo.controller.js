const { BaseController } = require("../helper/baseController.helper")
const dto = require("../DTO")
const service = require("../services")
exports.TodoController = class{
    static async todoList_controller(req,res,next){
        const result = await service.TodoService.todoList_service()
        BaseController.ok(res,result)
    }
    static async createTodo_controler(req,res,next){
        const data = req.body
        const dtoResult = dto.createTodoDTO(data)
        const newTask = new service.TodoService(dtoResult)
        const result = await newTask.createTodo_service()
        BaseController.ok(res,result)
    }
    static async updateTodo_controler(req,res,next){
        const {id} = req.params
        const data = req.body
        const dtoResult = dto.updateTodoDTO(data)
        const updateTask = new service.TodoService(dtoResult)
        const result = await updateTask.updateTodo_service(id)
        BaseController.ok(res,result)
    }
    static async deleteTodo_controler(req,res,next){
        const {id} = req.params
        const result = await service.TodoService.deleteTodo_service(id)
        BaseController.ok(res,result)
    }
}
