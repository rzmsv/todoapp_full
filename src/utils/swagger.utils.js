const swaggerJSDoc = require("swagger-jsdoc")

class SwaggerDoc{
    static _instanceCache

    static instance (){
        if (this._instanceCache == null){
            this._instanceCache = new SwaggerDoc()
            
        }
        return this._instanceCache
    }
    
    swaggerV1 = ()=>{
        const options ={
            definition:{
                openapi: "3.0.0",
                info: {
                    title: "Library API",
                    version: "1.0.0",
                    description: "App apis."
                },
                servers:[{
                    url: "http://localhost:3001",
                }],
            },
            apis:["../routes/*.js"]
        }
        return swaggerJSDoc(options)
    }

}

module.exports= {SwaggerDoc}