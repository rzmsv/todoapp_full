const errorResult = require("../messages/error.messages")

exports.createTodoDAO =async (data)=>{
    const {id,task,createdAt} = data
    return {
        id,
        task,
        date: createdAt
    }
}