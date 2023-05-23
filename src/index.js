const express = require("express")
const cors = require("cors")
const routes = require("./routes")


/* ---------------------------- Express App Setup --------------------------- */
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

/* --------------------------------- Routes --------------------------------- */
app.use('/',routes)

module.exports = app
