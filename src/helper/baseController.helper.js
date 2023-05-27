exports.BaseController = class {

    static ok(res,result={},status=200){
        const statusCode = res.status(status)
        const response = res.json({
            statusCode:status,
            code:"OK",
            message:result
        })
        return statusCode,response
        
    }
    static fail(res,err){
        const statusCode = res.status(err.statusCode)
        const response = res.json({ statusCode: err.statusCode, code: err.code, message: err.message })
        return statusCode,response
    }
}