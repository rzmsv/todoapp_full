const swaggerJSDoc = require("swagger-jsdoc")

exports.SwaggerDoc = class{
    static swaggerV1 = ()=>{
        const options ={
            definition:{
                openapi: "3.0.0",
                info: {
                    title: "Library API",
                    version: "1.0.0",
                    description: "App v1 apis."
                },
                servers:[{
                    url: "http://localhost:3001"
                }],
            },
            apis:["../routes/*.js"]
        }
        console.log(111111111111111)
        return swaggerJSDoc(options)
    }
}