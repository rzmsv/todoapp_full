const app = require("../../../src")
const request = require("supertest")(app)
const {User} = require("../../../src/models")
const { hashPassword } = require("../../../src/utils/bcrypt.utils")

/* ----------------------------------- --- ---------------------------------- */



beforeAll(async()=>{
    const hash = await hashPassword("password")
    await User.create({
        email: "reza@gmail.com",
        password: hash
    })
    
})
afterAll(async()=>{
    await User.destroy({
        where: {}
    })
})


describe("Auth test .", () => {
    it("should login",async () => {
        const data = {
            email: "reza@gmail.com",
            password: "password"
        }

        const response = await request
        .post('/api/v1/auth/login')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .send(data)
       
        expect(response.status).toBe(200)
    })
    
    it("User not found for login",async () => {
        const data = {
            email: "rez@gmail.com", // Email wrong .
            password: "password"
        }

        const response = await request
        .post('/api/v1/auth/login')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .send(data)
       
        expect(response.body.message).toBe("User not found!")
        expect(response.status).toBe(404)
    })

    it("User password wrong",async () => {
        const data = {
            email: "reza@gmail.com", 
            password: "passwordd" // Password wrong .
        }

        const response = await request
        .post('/api/v1/auth/login')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .send(data)
       
        
        expect(response.body.message).toBe("Password wrong!")
        expect(response.status).toBe(400)
    })

    it("Email was empty!",async () => {
        const data = {
            email:'' , 
            password: 'password'
        }

        const response = await request
        .post('/api/v1/auth/login')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .send(data)
       
        
        expect(response.body.message).toEqual(["Insert email!"])
        expect(response.status).toBe(400)
    })
    it("password was empty",async () => {
        const data = {
            email:'reza@gmail.com' , 
            password: ''
        }

        const response = await request
        .post('/api/v1/auth/login')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .send(data)
       
        
        expect(response.body.message).toEqual(["Insert password!"])
        expect(response.status).toBe(400)
    })
})