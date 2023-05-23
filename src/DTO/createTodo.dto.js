const errorResult = require("../messages/error.messages")


exports.createTodoDTO = (data)=>{
    var errorsList = []
    if (!data.task){
        errorsList.push("Insert your task")
    }
    if (errorsList.length > 0){
        errorResult.badRequest(errorsList)
    }
    return {
        task: data.task
    }

}