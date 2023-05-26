const bcrypt = require("bcrypt")

exports.hashPassword = async (password) => {
    try {
        const hash = await bcrypt.hash(password, parseInt(appConfigs.BCRYPT_SALT))
        return hash
    } catch (err) {
        console.log(err)
    }
}
exports.comparePassword = async (inputPassword, dbPassword) => {
    try {
        const compare = await bcrypt.compare(inputPassword, dbPassword)
        return compare
    } catch (err) {
        console.log(err)
    }
}