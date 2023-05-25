const { Router } = require("express")
const router = Router()
const controller = require("../../../controllers")
const { asyncHandler } = require("../../../helper/asyncHandler.helper")

/* -------------------------------- Auth Page ------------------------------- */
/* ------------------------ prefix: api/v1/auth ----------------------- */
router.post('/login', asyncHandler(controller.AuthController.login_controller))


module.exports = router