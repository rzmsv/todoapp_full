const { Router } = require("express")
const router = Router()
const todo = require("./todo.routes")
const auth = require("./auth.routes")

/* ----------------------------- prefix: /api/v1 ---------------------------- */
router.use('/auth', auth)
router.use('/todo', todo)

module.exports = router


