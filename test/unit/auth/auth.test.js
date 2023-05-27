const { JsonWebTokenError } = require("jsonwebtoken")
const {AuthController} = require("../../../src/controllers/auth.controller")
const {User} = require("../../../src/models")
const { hashPassword } = require("../../../src/utils/bcrypt.utils")
const {asyncHandler} = require("../../../src/helper/asyncHandler.helper")

/* ----------------------------------- --- ---------------------------------- */

const response = {
    status: jest.fn(x => x),
    json: jest.fn(x => x)
}

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
        const request = {
            body:{
                email: "reza@gmail.com",
                password: "password"
            }
        }
        await AuthController.login_controller(request,response)
        expect(response.status).toHaveBeenCalledWith(200)
        expect(response.status).toHaveBeenCalledTimes(1)
    })
    
    it("User not found for login",async () => {
        const request = {
            body:{
                email: "rezaa@gmail.com", // Email wrong .
                password: "password"
            }
        }
        const res =AuthController.login_controller(request,response)
        
        console.log(res)
        // console.log("----------")
        // console.log(res)
        // console.log("-----------")
        // expect(response.status).toHaveBeenCalledWith(200)
        // expect(response.status).toHaveBeenCalledTimes(1)
    
    })
})