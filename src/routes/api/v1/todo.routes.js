const { Router } = require("express")
const router = Router()
const controller = require("../../../controllers")
const { asyncHandler } = require("../../../helper/asyncHandler.helper")
const { userIsAuth } = require("../../../middlewares/userAuth.middleware")

/* -------------------------------- Todo Page ------------------------------- */
/* -------------------------- prefix: api/v1/todo -------------------------- */
router.get('/List', asyncHandler(userIsAuth), asyncHandler(controller.TodoController.todoList_controller))
router.post('/create', asyncHandler(userIsAuth), asyncHandler(controller.TodoController.createTodo_controler))
router.patch('/update/:id', asyncHandler(userIsAuth), asyncHandler(controller.TodoController.updateTodo_controler))
router.delete('/delete/:id', asyncHandler(userIsAuth), asyncHandler(controller.TodoController.deleteTodo_controler))



module.exports = router