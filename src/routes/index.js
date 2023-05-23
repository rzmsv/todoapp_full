const {Router} = require("express")
const router = Router()
const apiRoutes = require("./api")

/* ------------------------------ prefix: /api ------------------------------ */

/* --------------------------------- Routes --------------------------------- */
router.use("/api",apiRoutes)

/* ----------------------------------- 400 ---------------------------------- */
router.use("*",(req,res,next)=>{
    res.status(400).send("400")
})

module.exports = router


