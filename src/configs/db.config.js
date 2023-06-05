exports.DbConfig = class {
    static db_env(env) {
        if (env === "test") {
            return {
                db: process.env.DB_NAME_TEST,
                username: process.env.DB_USERNAME_TEST,
                password: process.env.DB_PASSWORD_TEST,
                host: process.env.DB_HOST_TEST,
                port: process.env.DB_PORT_TEST,
                dialect: process.env.DB_DIALECT_TEST,
            }
        } else {
            return {
                db: process.env.DB_NAME,
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                host: process.env.DB_HOST,
                port: process.env.DB_PORT,
                dialect: process.env.DB_DIALECT,
            }
        }
    }
}

