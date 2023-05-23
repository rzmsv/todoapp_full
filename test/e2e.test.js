const request = require("supertest")
const app = require("./test-src/test.server")
const {Todo} = require("../src/models")

const task = {
    task:"first task",
}

// beforeAll(async()=>{
//     await Todo.destroy({
//         where: {},
//         truncate: true
//       })
// })
afterAll(async()=>{
    await app.close()
})

describe("App e2e test",()=>{
    
    test("Should create todo.",async()=>{
        await request(app).get('/api/v1/todo/list').expect(200)
    })
})