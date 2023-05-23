const errorResult = {
    badRequest: (message = "") => {
        let error = new Error()
        error.name = "API Error"
        error.statusCode = 400
        error.message = message
        error.code = "bad_request"
        throw error
    },
    unAuthorized: (message = "") => {
        let error = new Error()
        error.name = "API Error"
        error.statusCode = 401
        error.message = message
        error.code = "UNAUTHORIZED"
        throw error
    },
    forbidden: (message = "") => {
        let error = new Error()
        error.name = "API Error"
        error.statusCode = 403
        error.message = message
        error.code = "FORBIDDEN"
        throw error
    },
    notFound: (message = "") => {
        let error = new Error()
        error.name = "API Error"
        error.statusCode = 404
        error.message = message
        error.code = "NOT_FOUND"
        throw error
    },
    /** NOT RECEIVING PROPER ANSWER FROM UPPER SERVER */
    badGateway: (message = "") => {
        let error = new Error()
        error.name = "API Error"
        error.statusCode = 502
        error.message = message
        error.code = "BAD_GATEWAY"
        throw error
    },
    /** ORVERLOADED SERVICE OR UNDER MAINTENANCE */
    unAvailabe: (message = "") => {
        let error = new Error()
        error.name = "API Error"
        error.statusCode = 503
        error.message = message
        error.code = "SERVICE_UNAVAILABLE"
        throw error
    },
    /** LIKE BAD_GATEWAY WICH IS NOT RECIEVING RESPONSE IN ALLOWED TIME */
    gatewayTimeout: (message = "") => {
        let error = new Error()
        error.name = "API Error"
        error.statusCode = 504
        error.message = message
        error.code = "SERVICE_UNAVAILABLE"
        throw error
    },
}


module.exports = errorResult