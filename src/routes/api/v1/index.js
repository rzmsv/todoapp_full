const {Router} = require("express")
const router = Router()
const todo = require("./todo.routes")

/* -------------------------------- Home Page ------------------------------- */
router.use('/todo',todo)


module.exports = router


