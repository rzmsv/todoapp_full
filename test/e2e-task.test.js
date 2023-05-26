const request = require("supertest")
const app = require("../src/index")
const { Todo } = require("../src/models")


const DUMMY_DATA = {
    task: "new task"
}
const UPDATE_DUMMY_DATA = {
    task: "new update task"
}
const WRONG_DUMMY_DATA = {
    test: "new task"
}

afterAll(async () => {
    await Todo.destroy({
        where: {}
    })
})

describe("Task e2e test", () => {
    describe("Get method", () => {
        it("Should get todo.", async () => {
            await request(app)
                .get('/api/v1/todo/list')
                .expect('Content-Type', /json/)
                .send()
                .expect(200)
        })
    })
    describe("Post method", () => {
        it("Should add new task.", async () => {
            await request(app)
                .post('/api/v1/todo/create')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .send(DUMMY_DATA)
                .expect(200)
        })
    })
    describe("Post method", () => {
        it("Should not add new task.", async () => {
            await request(app)
                .post('/api/v1/todo/create')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .send(WRONG_DUMMY_DATA)
                .expect(400)
        })
    })
    describe("Patch method", () => {
        it("Should update task.", async () => {
            const getTask = await Todo.findAll()
            const { id } = getTask[0].dataValues
            await request(app)
                .patch(`/api/v1/todo/update/${id}`)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .send(UPDATE_DUMMY_DATA)
                .expect(200)
        })
    })
    describe("Patch method", () => {
        it("Should not update task.( not found! )", async () => {
            const id = 1
            await request(app)
                .patch(`/api/v1/todo/update/${id}`)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .send(UPDATE_DUMMY_DATA)
                .expect(404)
        })
    })
    describe("Delete method", () => {
        it("Should delete task.", async () => {
            const getTask = await Todo.findAll()
            const { id } = getTask[0].dataValues
            await request(app)
                .delete(`/api/v1/todo/delete/${id}`)
                .send(UPDATE_DUMMY_DATA)
                .expect(200)
        })
    })
    describe("Delete method", () => {
        it("Should not delete task.( not found! )", async () => {
            const id = 1
            await request(app)
                .delete(`/api/v1/todo/delete/${id}`)
                .send(UPDATE_DUMMY_DATA)
                .expect(404)
        })
    })

})