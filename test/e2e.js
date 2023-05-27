require("../src/configs")
const app = require("../src/index")
const request = require("supertest")(app)
const { Todo, User } = require("../src/models")
const { hashPassword } = require("../src/utils/bcrypt.utils")
const jwt = require("jsonwebtoken")

/* --------------------------------- Configs -------------------------------- */
const USER_DATA = {
    email: "reza@gmail.com",
    password: "password"
}
const DUMMY_DATA = {
    task: "new task"
}
const UPDATE_DUMMY_DATA = {
    task: "new update task"
}
const WRONG_DUMMY_DATA = {
    test: "new task"
}
/* ----------------------------------- --- ---------------------------------- */

beforeAll(async () => {
    const hash = await hashPassword("password")
    await User.create({ email: "reza@gmail.com", password: hash })
})
afterAll(async () => {
    await Todo.destroy({
        where: {}
    })
    await User.destroy({
        where: {}
    })
})

/* ----------------------------- Start E2E Test ----------------------------- */

describe("Todo e2e test", function () {
    describe("Auth", () => {
        it("User should login.", async () => {
            await request
                .post('/api/v1/auth/login')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .send(USER_DATA)
                .expect(200)
        })
    })
    describe("Todo get method", () => {
        it("Should get todo.", async () => {
            const user = await User.findAll()
            const token = `Bearer ${jwt.sign({ id: user[0].id }, appConfigs.JWT_SECRET)}`
            await request
                .get('/api/v1/todo/list')
                .set("authorization", token)
                .expect('Content-Type', /json/)
                .send()
                .expect(200)
        })
    })
    describe("Todo post method", () => {
        it("Should add new task.", async () => {
            const user = await User.findAll()
            const token = `Bearer ${jwt.sign({ id: user[0].id }, appConfigs.JWT_SECRET)}`
            await request
                .post('/api/v1/todo/create')
                .set("authorization", token)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .send(DUMMY_DATA)
                .expect(200)
        })
    })
    describe("Todo post method", () => {
        it("Should not add new task.", async () => {
            const user = await User.findAll()
            const token = `Bearer ${jwt.sign({ id: user[0].id }, appConfigs.JWT_SECRET)}`
            await request
                .post('/api/v1/todo/create')
                .set("authorization", token)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .send(WRONG_DUMMY_DATA)
                .expect(400)
        })
    })
    describe("Todo patch method", () => {
        it("Should update task.", async () => {
            const user = await User.findAll()
            const token = `Bearer ${jwt.sign({ id: user[0].id }, appConfigs.JWT_SECRET)}`
            const getTask = await Todo.findAll()
            const { id } = getTask[0].dataValues
            await request
                .patch(`/api/v1/todo/update/${id}`)
                .set("authorization", token)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .send(UPDATE_DUMMY_DATA)
                .expect(200)
        })
    })
    describe("Todo patch method", () => {
        it("Should not update task.( not found! )", async () => {
            const user = await User.findAll()
            const token = `Bearer ${jwt.sign({ id: user[0].id }, appConfigs.JWT_SECRET)}`
            const id = 1
            await request
                .patch(`/api/v1/todo/update/${id}`)
                .set("authorization", token)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .send(UPDATE_DUMMY_DATA)
                .expect(404)
        })
    })
    describe("Todo delete method", () => {
        it("Should delete task.", async () => {
            const user = await User.findAll()
            const token = `Bearer ${jwt.sign({ id: user[0].id }, appConfigs.JWT_SECRET)}`
            const getTask = await Todo.findAll()
            const { id } = getTask[0].dataValues
            await request
                .delete(`/api/v1/todo/delete/${id}`)
                .set("authorization", token)
                .send(UPDATE_DUMMY_DATA)
                .expect(200)
        })
    })
    describe("Todo delete method", () => {
        it("Should not delete task.( not found! )", async () => {
            const user = await User.findAll()
            const token = `Bearer ${jwt.sign({ id: user[0].id }, appConfigs.JWT_SECRET)}`
            const id = 1
            await request
                .delete(`/api/v1/todo/delete/${id}`)
                .set("authorization", token)
                .send(UPDATE_DUMMY_DATA)
                .expect(404)
        })
    })

})