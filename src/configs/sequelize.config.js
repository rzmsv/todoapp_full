require("./index")

module.exports = {
  "development": {
    "username": appConfigs.DB.username,
    "password": appConfigs.DB.password,
    "database": appConfigs.DB.db,
    "host": appConfigs.DB.host,
    "dialect": appConfigs.DB.dialect,
    "port": appConfigs.DB.port
  },
  "test": {
    "username": appConfigs.DB.username,
    "password": appConfigs.DB.password,
    "database": appConfigs.DB.db,
    "host": "localhost",
    "dialect": appConfigs.DB.dialect,
    "port": appConfigs.DB.port
  }
}
