const { Router } = require("express")
const router = Router()
const controller = require("../../../controllers")
const { asyncHandler } = require("../../../helper/asyncHandler.helper")

/* -------------------------------- Todo Page ------------------------------- */
/* -------------------------- prefix: api/v1/todo -------------------------- */
router.get('/List', asyncHandler(controller.TodoController.todoList_controller))
router.post('/create', asyncHandler(controller.TodoController.createTodo_controler))
router.patch('/update/:id', asyncHandler(controller.TodoController.updateTodo_controler))
router.delete('/delete/:id', asyncHandler(controller.TodoController.deleteTodo_controler))



module.exports = router