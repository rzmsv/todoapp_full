const {Router} = require("express")
const router = Router()
const controller = require("../../../controllers")
const { asyncHandler } = require("../../../helper/asyncHandler.helper")

/* -------------------------------- Home Page ------------------------------- */
router.get('/List',controller.TodoController.todoList_controller)
router.post('/create',asyncHandler(controller.TodoController.createTodo_controler))
router.patch('/update/:id',asyncHandler(controller.TodoController.updateTodo_controler))
router.delete('/delete/:id',asyncHandler(controller.TodoController.deleteTodo_controler))



module.exports = router