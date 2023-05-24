const request = require("supertest")
const app = require("../src/index")
const {Todo} = require("../src/models")


const DUMMY_DATA = {
    task: "new task"
}
const WRONG_DUMMY_DATA = {
    test: "new task"
}

beforAll(async()=>{

})

describe("App unit test",()=>{
    describe("Get method",()=>{
        it("Should get todo.",async()=>{
            await request(app)
            .get('/api/v1/todo/list')
            .expect('Content-Type', /json/)
            .send()
            .expect(200)
        })
    })
    describe("Post method",()=>{
        it("Should add new task.",async()=>{
            await request(app)
            .post('/api/v1/todo/create')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .send(DUMMY_DATA)
            .expect(200)
        })
    })
    describe("Post method",()=>{
        it("Should not add new task.",async()=>{
            await request(app)
            .post('/api/v1/todo/create')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .send(WRONG_DUMMY_DATA)
            .expect(400)
        })
    })
    describe("Patch method",()=>{
        it("Should update task.",async()=>{
            await request(app)
            .patch('/api/v1/todo/update/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .send(DUMMY_DATA)
            .expect(200)
        })
    })

})