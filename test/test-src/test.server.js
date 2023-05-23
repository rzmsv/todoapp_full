require("../../src/configs")
const express = require("express")
const http = require("http")
const app = express()
const server = http.createServer(app)
const port = appConfigs.APP_PORT
console.log(port)
server.listen(port,()=>{
    console.log(`[+] Test server up on port ${port}`)
})

module.exports = server

