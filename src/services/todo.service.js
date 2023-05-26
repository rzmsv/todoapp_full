const { Todo } = require('../models')
const errorResult = require("../messages/error.messages")
const dao = require('../DAO')


exports.TodoService = class {
    constructor(data) {
        this.data = data
    }
    static async todoList_service(id) {
        const todosList = await Todo.findAll({ where: { id } })
        return todosList
    }
    async createTodo_service() {
        try {
            const newTodo = await Todo.create(this.data)
            const daoResult = await dao.createTodoDAO(newTodo)
            return daoResult
        } catch (error) {
            console.log(error)
        }
    }
    async updateTodo_service(id, userId) {
        const updateTodo = await Todo.update(this.data, { where: { id, userId }, returning: true })
        if (updateTodo[0] === 0) {
            errorResult.notFound("Task not found!")
        }
        const daoResult = await dao.updateTodoDAO(updateTodo)
        return daoResult
    }
    static async deleteTodo_service(id, userId) {
        const deleteTodo = await Todo.destroy({ where: { id, userId }, returning: true })
        if (deleteTodo === 0) {
            errorResult.notFound("Task not found!")
        }

        return "Task deleted."
    }
}