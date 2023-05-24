const {Router} = require("express")
const router = Router()
const controller = require("../../../controllers")
const { asyncHandler } = require("../../../helper/asyncHandler.helper")

/* -------------------------------- Auth Page ------------------------------- */
router.post('/login',controller.TodoController.todoList_controller)


module.exports = router