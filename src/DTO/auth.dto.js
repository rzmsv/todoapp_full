const errorResult = require("../messages/error.messages")


exports.loginDTO = (data) => {
    var errorsList = []
    if (!data.email) {
        errorsList.push("Insert email!")
    }
    if (!data.password) {
        errorsList.push("Insert password!")
    }
    if (errorsList.length > 0) {
        errorResult.badRequest(errorsList)
    }
    return {
        email: data.email,
        password: data.password
    }

}