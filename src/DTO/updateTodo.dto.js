const errorResult = require("../messages/error.messages")

exports.updateTodoDTO = (data)=>{
    const {task} = data
    return {task}
}