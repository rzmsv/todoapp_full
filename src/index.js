const express = require("express")
const cors = require("cors")
const routes = require("./routes")
const { createAdmin } = require("./helper/createAdmin.helper")


const app = express()
/* ------------------------- Express App Middlewares ------------------------ */
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(createAdmin)

/* --------------------------------- Routes --------------------------------- */
app.use('/',routes)


module.exports = app
