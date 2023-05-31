exports.BaseController = class {

    static ok(res,result={},status=200){
        
        return res.status(status).json({
            statusCode:status,
            code:"OK",
            message:result
        })
        
    }
    static fail(res,err){
        
         
        return res.status(err.statusCode).json({ statusCode: err.statusCode, code: err.code, message: err.message })
    }
}