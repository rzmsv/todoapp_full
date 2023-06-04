exports.BaseController = class {

    static ok(res, result = {}, status = 200) {
        var statusCode = res.status(status)
        var json = res.json({
            statusCode: status,
            code: "OK",
            message: result
        })
        return statusCode, json
    }
    static fail(res, err) {
        var statusCode = res.status(err.statusCode)
        var json = res.json({ statusCode: err.statusCode, code: err.code, message: err.message })
        return statusCode, json
    }
}