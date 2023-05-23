const request = require("supertest")
const server = require("./test-src/test.server")

afterAll(async()=>{
   await server.close()
})

describe("App e2e test",()=>{
    describe("Todo should pass",()=>{
        it.todo("todo pass")
    })
})