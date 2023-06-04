const app = require("../../../src")
const request = require("supertest")(app)
const { User } = require('../../../src/models')
const { hashPassword, comparePassword } = require("../../../src/utils/bcrypt.utils")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { signToken } = require("../../../src/utils/jwt.utils")
var hash;
var userId;

beforeAll(async () => {
    hash = await hashPassword("password")
    const create = await User.create({ email: "reza@gmail.com", password: hash })
    userId = create.id
})
afterAll(async () => {
    await User.destroy({
        where: {}
    })
})
afterEach(() => {
    jest.restoreAllMocks();
})

describe("Unit test for Auth!", () => {
    it("Email not found!", async () => {
        const USER_DATA = {
            password: "password"
        }
        const res = await request
            .post("/api/v1/auth/login")
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .send(USER_DATA)

        expect(res.status).toBe(400)

    })
    it("Password not found!", async () => {
        const USER_DATA = {
            email: "reza@gmail.com"
        }
        const res = await request
            .post('/api/v1/auth/login')
            .set("Accept", "application/json")
            .expect('Content-Type', /json/)
            .send(USER_DATA)
        expect(res.status).toBe(400)
    })
    it("User not Found!", async () => {
        const USER_DATA = {
            email: "rez@gmail.com",
            password: "password"
        }
        const MockData = jest.fn(() => {
            USER_DATA
        })
        jest
            .spyOn(User, "findOne").mockImplementation(() => MockData())

        const res = await request
            .post('/api/v1/auth/login')
            .set("accept", "application/json")
            .expect("Content-type", /json/)
            .send(USER_DATA)
        expect(MockData).toHaveBeenCalledTimes(1)
        expect(res.status).toBe(404)
    })

    it("Password not match!", async () => {

        const dto = {
            email: "reza@gmail.com",
            password: "passwor"
        }
        const compare = await comparePassword(dto.password, hash)
        expect(compare).toBe(false)
    })
    it("Password  match!", async () => {

        const dto = {
            email: "reza@gmail.com",
            password: "password"
        }
        const compare = await comparePassword(dto.password, hash)
        expect(compare).toBe(true)
    })
    it("user Id should be token", async () => {
        const signJwt = await signToken(userId)
        expect(signJwt).toBe(signJwt)
    })

})

