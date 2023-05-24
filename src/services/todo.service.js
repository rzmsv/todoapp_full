const {Todo} = require('../models')
const errorResult = require("../messages/error.messages")
const dao = require('../DAO')


exports.TodoService = class{
    constructor (data){
        this.data = data
    }
    static async todoList_service(){
        const todosList = await Todo.findAll()
        return todosList
    }
    async createTodo_service(){
        const newTodo = await Todo.create(this.data)
        const daoResult = await dao.createTodoDAO(newTodo)
        return daoResult
    }
    async updateTodo_service(id){
        const updateTodo = await Todo.update(this.data,{where:{id},returning: true})
        if (updateTodo[0] === 0){
            errorResult.notFound("Task not found!")
        }   
        const daoResult = await dao.updateTodoDAO(updateTodo)
        return daoResult
    }
    static async deleteTodo_service(id){
        const deleteTodo = await Todo.destroy({where:{id},returning: true})
        if (deleteTodo === 0){
            errorResult.notFound("Task not found!")
        }   
        
        return "Task deleted."
    }
}