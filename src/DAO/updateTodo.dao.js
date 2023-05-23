const errorResult = require("../messages/error.messages")


exports.updateTodoDAO = async (data)=>{
    const {id,task,createdAt} = data[1][0].dataValues
    return{
        id,
        task,
        date:createdAt
    }
}