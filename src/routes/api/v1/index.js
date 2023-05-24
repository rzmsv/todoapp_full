const {Router} = require("express")
const router = Router()
const todo = require("./todo.routes")
const auth = require("./auth.routes")

/* -------------------------------- Home Page ------------------------------- */
router.use('/auth',auth)
router.use('/todo',todo)

module.exports = router


