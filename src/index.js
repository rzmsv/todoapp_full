const express = require("express")
const swaggerUI = require("swagger-ui-express")
const cors = require("cors")
const routes = require("./routes")
const { SwaggerDoc } = require("./utils/swagger.utils")


const app = express()
/* ------------------------- Express App Middlewares ------------------------ */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


/* --------------------------------- Swagger -------------------------------- */
app.use("/api/v1/doc",swaggerUI.serve,swaggerUI.setup(SwaggerDoc.swaggerV1()))
/* --------------------------------- Routes --------------------------------- */
app.use('/', routes)


module.exports = app
